// main.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simula envío y muestra mensaje
      alert('¡Gracias por tu interés! Te contactaremos por WhatsApp en breve.');

      // Limpia el formulario
      form.reset();
    });
  }

  // Otras funciones que podrías querer:
  // - Validar campos
  // - Scroll al formulario
  // - Detectar clics en CTA para tracking (GA, etc.)
});




  // Elimina el preloader tras la animación
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.remove(); // o preloader.style.display = "none";
  }, 3200); // tiempo igual al de la animación





