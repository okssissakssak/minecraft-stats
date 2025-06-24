// JSON 데이터 로드
async function loadData() {
  const res = await fetch('./data/stats.json');
  return res.json();
}

// 통계 계산 함수
function calculateStats(playerData) {
  const totalGames = playerData.length;
  const totalKills = playerData.reduce((sum, game) => sum + game.kill, 0);
  const totalDeaths = playerData.reduce((sum, game) => sum + game.death, 0);
  const totalWins = playerData.filter(game => game.win === 1).length;

  const avgKills = (totalKills / totalGames).toFixed(2);
  const avgDeaths = (totalDeaths / totalGames).toFixed(2);
  const winRate = ((totalWins / totalGames) * 100).toFixed(2);
  const kdRatio = totalDeaths === 0 ? '∞' : (totalKills / totalDeaths).toFixed(2);

  const charCount = {};
  playerData.forEach(g => {
    const char = g.character;
    if (!charCount[char]) charCount[char] = 0;
    charCount[char]++;
  });
  const mostPlayedCharacter = Object.entries(charCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  const currentTier = playerData[playerData.length - 1]?.tier || 'N/A';

  return {
    totalGames,
    totalKills,
    avgKills,
    totalDeaths,
    avgDeaths,
    totalWins,
    winRate,
    kdRatio,
    mostPlayedCharacter,
    currentTier
  };
}


// 렌더링 함수 (닉네임 추가됨)
function render(playerGames, stats, nickname) {
  return `
    <h2>${nickname}의 전적</h2>
    <div>
      <p><strong>현재 티어:</strong> ${renderTier(stats.currentTier)}</p>
      <p><strong>총 게임 수:</strong> ${stats.totalGames}</p>
      <p><strong>총 킬:</strong> ${stats.totalKills} (평균 킬: ${stats.avgKills})</p>
      <p><strong>총 데스:</strong> ${stats.totalDeaths} (평균 데스: ${stats.avgDeaths})</p>
      <p><strong>K/D 비율:</strong> ${stats.kdRatio}</p>
      <p><strong>총 승리:</strong> ${stats.totalWins} (승률: ${stats.winRate}%)</p>
      <p><strong>가장 많이 사용한 캐릭터:</strong> ${stats.mostPlayedCharacter}</p>
    </div>
    <h3>전적 상세</h3>
${playerGames.slice().reverse().map(game => `
  <div>
    <p>
      <strong>캐릭터:</strong> ${game.character} |
      <strong>킬:</strong> ${game.kill} |
      <strong>데스:</strong> ${game.death} |
      <strong></strong> ${game.win ? '승리' : '패배'} |
      <strong>티어:</strong> ${renderTier(game.tier)}
    </p>
  </div>
`).join('')}
  `;
}

function renderTier(tierText) {
  const [tierCode, grade] = tierText.split(' ');

  const tierInfo = {
    BRON: { icon: '🟫', color: '#A0522D' },
    SILV: { icon: '⬜', color: '#C0C0C0' },
    GOLD: { icon: '🟨', color: '#FFD700' },
    AME:  { icon: '🟪', color: '#9966CC' },
    DIA:  { icon: '🔷', color: '#00BFFF' },
    NETH: { icon: '⬛', color: '#414141' },
    STAR: { icon: '⭐', color: '#FFFFFF' }
  };

  const info = tierInfo[tierCode];
  if (!info) return tierText;

  return `<span style="color: ${info.color}; font-weight: bold;">${info.icon} ${tierCode} ${grade}</span>`;
}



// 검색 버튼 클릭 이벤트
document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  const data = await loadData();
  
  // 같은 닉네임의 전적들만 필터링
  const playerGames = data.filter(p => p.nickname.toLowerCase() === query);

  const resultDiv = document.getElementById('result');

  if (playerGames.length > 0) {
    const stats = calculateStats(playerGames);
    resultDiv.innerHTML = render(playerGames, stats, query);
  } else {
    resultDiv.innerHTML = `<p>“${query}” 닉네임을 찾을 수 없습니다.</p>`;
  }
});
//랭킹
document.getElementById('rankingBtn').addEventListener('click', async () => {
  const data = await loadData();

  // 닉네임별로 묶기
  const playerMap = {};
  for (const game of data) {
    const name = game.nickname;
    if (!playerMap[name]) playerMap[name] = [];
    playerMap[name].push(game);
  }

  // 각 플레이어별 통계 계산
  const statsArray = Object.entries(playerMap).map(([nickname, games]) => {
    const stats = calculateStats(games);
    return {
      nickname,
      winRate: parseFloat(stats.winRate),
      kdRatio: stats.kdRatio,
      totalGames: stats.totalGames
    };
  });

  // 승률 내림차순 정렬
  statsArray.sort((a, b) => b.winRate - a.winRate);

  // 결과 렌더링
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>🏆 승률 랭킹</h2>
    <table border="1" cellspacing="0" cellpadding="6">
      <tr>
        <th>순위</th>
        <th>닉네임</th>
        <th>승률</th>
        <th>K/D</th>
        <th>게임 수</th>
      </tr>
      ${statsArray.map((s, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${s.nickname}</td>
          <td>${s.winRate}%</td>
          <td>${s.kdRatio}</td>
          <td>${s.totalGames}</td>
        </tr>
      `).join('')}
    </table>
  `;
});

// 엔터 키 눌러도 검색되게
document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('searchBtn').click();
});
