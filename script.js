async function loadData() {
  const res = await fetch('./data/stats.json');
  return res.json();
}

function calculateStats(playerData) {
  const totalGames = playerData.length;
  const totalKills = playerData.reduce((sum, game) => sum + game.kill, 0);
  const totalDeaths = playerData.reduce((sum, game) => sum + game.death, 0);
  const totalWins = playerData.filter(game => game.win === 1).length;

  const avgKills = (totalKills / totalGames).toFixed(2);
  const avgDeaths = (totalDeaths / totalGames).toFixed(2);
  const winRate = ((totalWins / totalGames) * 100).toFixed(2);

  return {
    totalGames,
    totalKills,
    avgKills,
    totalDeaths,
    avgDeaths,
    totalWins,
    winRate
  };
}

function render(player, stats) {
  return `
    <h2>${player}의 전적</h2>
    <div>
      <p><strong>총 게임 수:</strong> ${stats.totalGames}</p>
      <p><strong>총 킬:</strong> ${stats.totalKills} (평균 킬: ${stats.avgKills})</p>
      <p><strong>총 데스:</strong> ${stats.totalDeaths} (평균 데스: ${stats.avgDeaths})</p>
      <p><strong>총 승리:</strong> ${stats.totalWins} (승률: ${stats.winRate}%)</p>
    </div>
    <h3>전적 상세</h3>
    ${player.map(game => `
      <div>
        <p><strong>킬:</strong> ${game.kill} | <strong>데스:</strong> ${game.death} | <strong>승리:</strong> ${game.win ? '승리' : '패배'}</p>
      </div>
    `).join('')}
  `;
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  const data = await loadData();
  
  // 같은 닉네임으로 게임 데이터를 그룹화
  const playerGames = data.filter(p => p.nickname.toLowerCase() === query);
  const stats = calculateStats(playerGames);
  
  const resultDiv = document.getElementById('result');
  if (playerGames.length > 0) {
    resultDiv.innerHTML = render(playerGames, stats);
  } else {
    resultDiv.innerHTML = `<p>“${query}” 닉네임을 찾을 수 없습니다.</p>`;
  }
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('searchBtn').click();
});
