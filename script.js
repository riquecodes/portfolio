const container = document.getElementById('container');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');
const backBtn = document.getElementById('back-btn');

const years = [2000, 2010, 2020];

years.forEach(year => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.innerText = year;
  circle.addEventListener('click', () => showInfo(year));
  container.appendChild(circle);
});

function showInfo(year) {
  // Simule informações diferentes para cada ano
  const info = `Mais informações sobre o ano ${year}.`;

  // Exibir informações na caixa de texto com animação
  infoText.textContent = info;
  infoBox.style.display = 'block';
  setTimeout(() => {
    infoBox.classList.add('active');
  }, 0);

  // Adicionar evento de voltar
  backBtn.addEventListener('click', hideInfo);
}

function hideInfo() {
  // Esconder a caixa de texto com animação
  infoBox.classList.remove('active');
  backBtn.removeEventListener('click', hideInfo);

  // Adiar o ocultamento da caixa de texto para coincidir com a animação
  setTimeout(() => {
    infoBox.style.display = 'none';
  }, 500); // Tempo correspondente à duração da animação (0.5s)
}
