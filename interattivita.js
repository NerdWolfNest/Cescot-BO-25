document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');

  // crea 20 div con classe 'content'
  for (let i = 1; i <= 20; i++) {
    const d = document.createElement('div');
    d.className = 'content';
    d.textContent = 'Box ' + i;
    container.appendChild(d);
  }

  const btnRosso = document.getElementById('rosso');
  const btnGiallo = document.getElementById('giallo');

  function setColor(color) {
    const items = document.querySelectorAll('.content');
    items.forEach(el => el.style.backgroundColor = color);
  }

  btnRosso.addEventListener('click', function () { setColor('red'); });
  btnGiallo.addEventListener('click', function () { setColor('yellow'); });
});
