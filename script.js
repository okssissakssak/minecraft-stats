async function loadData() {
  const res = await fetch('./data/stats.json');
  return res.json();
}

function render(player) {
  return `
    <h2>${player.nickname}</h2>
    <p>💀 킬: ${player.kill}</p>
    <p>☠️ 데스: ${player.death}</p>
    <p>🏆 ${player.win ? '승리' : '패배'}</p>
  `;
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  const data = await loadData();
  const player = data.find(p => p.nickname.toLowerCase() === query);
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = player ? render(player) : `<p>“${query}” 닉네임을 찾을 수 없습니다.</p>`;
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('searchBtn').click();
});
