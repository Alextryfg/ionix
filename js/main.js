document.addEventListener('DOMContentLoaded', () => {
  const logoFly = document.getElementById('logo-fly');
  const preloaderBg = document.getElementById('preloader-bg');

  // Esperamos 2.5s y movemos el logo hacia arriba
  setTimeout(() => {
    if (logoFly) {
      logoFly.classList.add('to-hero'); // esto lo sube arriba
    }

    // ⏳ Esperamos a que termine la animación del logo (1s)
    setTimeout(() => {
      if (preloaderBg) {
        preloaderBg.style.transition = 'opacity 1s';
        preloaderBg.style.opacity = '0';
        setTimeout(() => preloaderBg.remove(), 1000);
      }
    }, 1000); // Espera a que termine la animación de logo
  }, 2500);
});






setTimeout(() => {
  heroAnchor.appendChild(logoFly);
  logoFly.classList.remove('fixed', 'to-hero');
  logoFly.classList.add('relative', 'transform-none', 'scale-[1.2]');
  logoFly.style.transform = '';
}, 3500);





