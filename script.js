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
  <div class="result-card">
    <p><strong>캐릭터:</strong> ${game.character}</p>
    <p>
      <strong>킬:</strong> ${game.kill} |
      <strong>데스:</strong> ${game.death} |
      <span style="color: ${game.win ? '#66FF66' : '#FF4444'}; font-weight: bold;">
        ${game.win ? '승리' : '패배'}
      </span> |
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

function renderCharacterStats(data, characterName) {
  const characterGames = data.filter(game => game.character === characterName);
  const totalGames = characterGames.length;
  const totalWins = characterGames.filter(g => g.win === 1).length;
  const totalKills = characterGames.reduce((sum, g) => sum + g.kill, 0);
  const totalDeaths = characterGames.reduce((sum, g) => sum + g.death, 0);
  const avgKD = totalDeaths === 0 ? '∞' : (totalKills / totalDeaths).toFixed(2);
  const winRate = ((totalWins / totalGames) * 100).toFixed(2);

  const playerStats = {};
  for (const game of characterGames) {
    const name = game.nickname;
    if (!playerStats[name]) playerStats[name] = { games: 0, wins: 0, kills: 0, deaths: 0 };
    playerStats[name].games++;
    playerStats[name].kills += game.kill;
    playerStats[name].deaths += game.death;
    if (game.win === 1) playerStats[name].wins++;
  }

  const ranking = Object.entries(playerStats)
    .map(([nickname, stat]) => ({
      nickname,
      games: stat.games,
      winRate: ((stat.wins / stat.games) * 100).toFixed(2),
      kdRatio: stat.deaths === 0 ? '∞' : (stat.kills / stat.deaths).toFixed(2)
    }))
    .sort((a, b) => b.games - a.games);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${characterName} 통계</h2>
    <p><strong>플레이 횟수:</strong> ${totalGames} | <strong>승률:</strong> ${winRate}% | <strong>평균 K/D:</strong> ${avgKD}</p>
    <h3>🏆 ${characterName} 장인 랭킹</h3>
    ${ranking.map(p => `
      <div class="result-card">
        <p><strong>닉네임:</strong> ${p.nickname}</p>
        <p><strong>플레이 수:</strong> ${p.games} | <strong>승률:</strong> ${p.winRate}% | <strong>K/D:</strong> ${p.kdRatio}</p>
      </div>
    `).join('')}
  `;
}

// 검색 이벤트
document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;

  const data = await loadData();
  const queryLower = query.toLowerCase();

  const playerGames = data.filter(p => p.nickname.toLowerCase() === queryLower);
  const characterMatch = data.some(p => p.character === query);
  const resultDiv = document.getElementById('result');

  if (playerGames.length > 0) {
    const stats = calculateStats(playerGames);
    resultDiv.innerHTML = render(playerGames, stats, query);
  } else if (characterMatch) {
    renderCharacterStats(data, query);
  } else {
    resultDiv.innerHTML = `<p>“${query}” 닉네임 또는 캐릭터를 찾을 수 없습니다.</p>`;
  }
});

// 승률 랭킹
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
    return {
      nickname,
      winRate: parseFloat(stats.winRate),
      kdRatio: stats.kdRatio,
      totalGames: stats.totalGames
    };
  });

  statsArray.sort((a, b) => b.winRate - a.winRate);

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

// 캐릭터 설명 로드
async function loadCharExplain(name) {
  const res = await fetch(`./data/char/${name}.json`);
  if (!res.ok) return null;
  return res.json();
}

// 캐릭터 설명 목록 로드
async function listCharExplain() {
  // 서버에서 목록을 따로 관리하거나 미리 characters.json을 생성해서 거기서 불러오기
  const res = await fetch('./data/char/characters.json');
  return res.json();
}

function renderCharExplain(char) {
  return `
    <h2>${char.name} (${char.difficulty})</h2>
    ${char.skills.map(s => `
      <div class="result-card">
        <p><strong>${s.name}</strong>
          <button onclick="alert('${s.desc}')">간단 설명</button>
          <button onclick="alert('${s.detail}')">자세히</button>
        </p>
      </div>
    `).join('')}
  `;
}

document.getElementById('charExplainBtn').addEventListener('click', async () => {
  const list = await listCharExplain();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>📖 캐릭터 목록</h2>
    ${list.map(c => `<button onclick="showCharExplain('${c}')">${c}</button>`).join(' ')}
  `;
});

async function showCharExplain(name) {
  const data = await loadCharExplain(name);
  if (!data) {
    document.getElementById('result').innerHTML = `<p>${name} 설명이 없습니다.</p>`;
    return;
  }
  document.getElementById('result').innerHTML = renderCharExplain(data);
}


// 엔터 키로 검색
document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('searchBtn').click();
});

async function showCharacterExplain(name) {
  try {
    const res = await fetch(`data/char/${name}.json`);
    const data = await res.json();

    document.getElementById("charName").textContent = data.name;
    document.getElementById("charDifficulty").textContent = "난이도: " + data.difficulty;

    // 스킬 렌더링
    const skillsDiv = document.getElementById("skills");
    skillsDiv.innerHTML = "";
    data.skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "skillBox";
      div.innerHTML = `
        <h3>[${skill.type}] ${skill.name}</h3>
        <p>${skill.desc}</p>
        ${skill.detail ? `<p class="detail">- ${skill.detail}</p>` : ""}
      `;
      skillsDiv.appendChild(div);
    });

    // 가젯
    const gadgetDiv = document.getElementById("gadget");
    gadgetDiv.innerHTML = data.gadget ? `<h3>[가젯]</h3><p>${data.gadget}</p>` : "";

    // 표시
    document.getElementById("charExplain").classList.remove("hidden");
  } catch (err) {
    alert("캐릭터 설명을 불러올 수 없습니다: " + err);
  }
}

function closeExplain() {
  document.getElementById("charExplain").classList.add("hidden");
}
