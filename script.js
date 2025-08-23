async function loadData() {
  const response = await fetch('data.json');
  return await response.json();
}

function calculateStats(games) {
  const totalKills = games.reduce((sum, g) => sum + g.kills, 0);
  const totalDeaths = games.reduce((sum, g) => sum + g.deaths, 0);
  const totalWins = games.reduce((sum, g) => sum + g.win, 0);

  const totalGames = games.length;
  const avgKills = (totalKills / totalGames).toFixed(2);
  const avgDeaths = (totalDeaths / totalGames).toFixed(2);
  const winRate = ((totalWins / totalGames) * 100).toFixed(2);
  const kdRatio = (totalDeaths === 0 ? totalKills : (totalKills / totalDeaths)).toFixed(2);

  // 가장 최근 티어 (마지막 게임 기준)
  const currentTier = games[games.length - 1].tier;

  return {
    totalKills,
    avgKills,
    totalDeaths,
    avgDeaths,
    totalWins,
    winRate,
    kdRatio,
    totalGames,
    currentTier
  };
}

function renderTier(tier) {
  if (!tier) return '';
  // 이미 json에서 변환된 티어코드와 등급이 들어옴
  const [tierCode, grade] = tier.split(' ');
  let color = '';
  switch (tierCode) {
    case 'STAR': color = '#FFFFFF'; break;
    case 'NETH': color = '#8B0000'; break;
    case 'DIA': color = '#00BFFF'; break;
    case 'AME': color = '#9370DB'; break;
    case 'GOLD': color = '#FFD700'; break;
    case 'SILV': color = '#C0C0C0'; break;
    case 'BRON': color = '#A0522D'; break;
  }
  return `<span style="color:${color}; font-weight:bold;">${tierCode} ${grade || ''}</span>`;
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const input = document.getElementById('searchInput').value.trim();
  const data = await loadData();

  if (!input) return;

  // 영어면 플레이어 검색, 그 외엔 캐릭터 검색
  if (/^[a-zA-Z0-9_]+$/.test(input)) {
    // 플레이어 전적
    const playerGames = data.filter(g => g.nickname.toLowerCase() === input.toLowerCase());
    if (playerGames.length === 0) {
      document.getElementById('result').innerHTML = `<p>플레이어 ${input}의 전적이 없습니다.</p>`;
      return;
    }

    const stats = calculateStats(playerGames);

    let resultHTML = `
      <h2>${input}의 전적</h2>
      <p>총 게임 수: ${stats.totalGames}</p>
      <p>총 킬: ${stats.totalKills} (평균 ${stats.avgKills})</p>
      <p>총 데스: ${stats.totalDeaths} (평균 ${stats.avgDeaths})</p>
      <p>총 승리: ${stats.totalWins} (승률 ${stats.winRate}%)</p>
      <p>K/D 비율: ${stats.kdRatio}</p>
      <p>현재 티어: ${renderTier(stats.currentTier)}</p>
      <h3>세부 전적</h3>
      <table>
        <tr>
          <th>킬</th>
          <th>데스</th>
          <th>승리</th>
          <th>캐릭터</th>
          <th>티어</th>
        </tr>
        ${playerGames.slice().reverse().map(g => `
          <tr>
            <td>${g.kills}</td>
            <td>${g.deaths}</td>
            <td style="color:${g.win === 1 ? '#66FF66' : '#FF6666'};">
              ${g.win === 1 ? '승리' : '패배'}
            </td>
            <td>${g.character}</td>
            <td>${renderTier(g.tier)}</td>
          </tr>
        `).join('')}
      </table>
    `;

    document.getElementById('result').innerHTML = resultHTML;

  } else {
    // 캐릭터 검색
    const charGames = data.filter(g => g.character === input);
    if (charGames.length === 0) {
      document.getElementById('result').innerHTML = `<p>캐릭터 ${input}의 전적이 없습니다.</p>`;
      return;
    }

    const totalGames = charGames.length;
    const wins = charGames.filter(g => g.win === 1).length;
    const winRate = ((wins / totalGames) * 100).toFixed(2);

    // 플레이어별 사용 횟수 및 승률 계산
    const playerMap = {};
    charGames.forEach(g => {
      if (!playerMap[g.nickname]) playerMap[g.nickname] = { games: 0, wins: 0, kills: 0, deaths: 0 };
      playerMap[g.nickname].games++;
      playerMap[g.nickname].wins += g.win;
      playerMap[g.nickname].kills += g.kills;
      playerMap[g.nickname].deaths += g.deaths;
    });

    const playerStats = Object.entries(playerMap).map(([nickname, stats]) => {
      return {
        nickname,
        games: stats.games,
        winRate: ((stats.wins / stats.games) * 100).toFixed(2),
        kdRatio: (stats.deaths === 0 ? stats.kills : (stats.kills / stats.deaths)).toFixed(2)
      };
    }).sort((a, b) => b.games - a.games);

    let resultHTML = `
      <h2>${input} 캐릭터 통계</h2>
      <p>총 게임 수: ${totalGames}</p>
      <p>승률: ${winRate}%</p>
      <h3>장인 랭킹</h3>
      <table>
        <tr>
          <th>순위</th>
          <th>닉네임</th>
          <th>게임 수</th>
          <th>승률</th>
          <th>K/D</th>
        </tr>
        ${playerStats.map((s, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${s.nickname}</td>
            <td>${s.games}</td>
            <td>${s.winRate}%</td>
            <td>${s.kdRatio}</td>
          </tr>
        `).join('')}
      </table>
    `;

    document.getElementById('result').innerHTML = resultHTML;
  }
});

//랭크 수정//

// 티어 우선순위
const tierOrder = {
  STAR: 0,
  NETH: 1,
  DIA: 2,
  AME: 3,
  GOLD: 4,
  SILV: 5,
  BRON: 6
};

document.getElementById('rankingBtn').addEventListener('click', async () => {
  const data = await loadData();

  const playerMap = {};
  for (const game of data) {
    const name = game.nickname;
    if (!playerMap[name]) playerMap[name] = [];
    playerMap[name].push(game);
  }

  const statsArray = Object.entries(playerMap).map(([nickname, games]) => {
    const stats = calculateStats(games);
    const [tierCode, grade] = stats.currentTier.split(' ');
    return {
      nickname,
      winRate: parseFloat(stats.winRate),
      kdRatio: stats.kdRatio,
      totalGames: stats.totalGames,
      tierCode: tierCode,
      grade: parseInt(grade?.replace(/[^0-9]/g, '') || 999) // 숫자 없으면 큰 값으로
    };
  });

  statsArray.sort((a, b) => {
    const tierDiff = tierOrder[a.tierCode] - tierOrder[b.tierCode];
    if (tierDiff !== 0) return tierDiff;
    const gradeDiff = a.grade - b.grade;
    if (gradeDiff !== 0) return gradeDiff;
    return b.winRate - a.winRate;
  });

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>🏆 활카스 랭킹</h2>
    <table>
      <tr>
        <th>순위</th>
        <th>닉네임</th>
        <th>티어</th>
        <th>승률</th>
        <th>K/D</th>
        <th>게임 수</th>
      </tr>
      ${statsArray.map((s, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${s.nickname}</td>
          <td>${renderTier(s.tierCode + " " + (s.grade === 999 ? "" : s.grade))}</td>
          <td>${s.winRate}%</td>
          <td>${s.kdRatio}</td>
          <td>${s.totalGames}</td>
        </tr>
      `).join('')}
    </table>
  `;
});
