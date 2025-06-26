
// Evita que el navegador restaure scroll automáticamente
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});



document.addEventListener('DOMContentLoaded', () => {



  const logoFly = document.getElementById('logo-fly');
  const preloaderBg = document.getElementById('preloader-bg');

  setTimeout(() => {
  if (logoFly) {
    logoFly.classList.add('to-hero');

    // 👉 Después de la animación, cambia de fixed a absolute (así no se mueve con scroll)
    setTimeout(() => {
      logoFly.style.position = 'absolute';
    }, 800); // espera 1s para que termine la animación
  }

  // Luego se desvanece el preloader
  setTimeout(() => {
    if (preloaderBg) {
      preloaderBg.style.transition = 'opacity 1s';
      preloaderBg.style.opacity = '0';
      setTimeout(() => preloaderBg.remove(), 800);
    }
  }, 800); // también 1s después
}, 1000);


setTimeout(() => {
  heroAnchor.appendChild(logoFly);
  logoFly.classList.remove('fixed', 'to-hero');
  logoFly.classList.add('relative', 'transform-none', 'scale-[1.2]');
  logoFly.style.transform = '';
}, 1400);



});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('track');
  const cards = Array.from(track.children);

  // Calcula el ancho total de las tarjetas originales (no duplicadas)
  const cardStyle = window.getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight);
  const originalCardsCount = cards.length;

  // Clona las tarjetas originales para el loop infinito
  for (let i = 0; i < originalCardsCount; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }

  // Ancho total del grupo original de tarjetas
  const totalWidth = cardWidth * originalCardsCount;

  let pos = 0;
  const speed = 0.5; // píxeles por frame, ajusta la velocidad aquí

  function animate() {
    pos += speed;
    if (pos >= totalWidth) {
      // Resetea la posición cuando se completa un ciclo (sin salto)
      pos = 0;
    }
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
