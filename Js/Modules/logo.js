/*
  Inicializa la interacción del logo en el header.
  Asigna comportamiento de navegación hacia la sección específica
  del index mediante ancla interna.
  Implementado como función exportada para integrarse en la capa de inicialización.
*/
export function initLogo() {

  // Selección del elemento logo dentro del header
  const escudo2 = document.querySelector(".header__logo");

  /*
    Validación defensiva.
    Se garantiza que el elemento exista en el DOM antes
    de registrar el listener para evitar errores en runtime.
  */
  if (escudo2) {

    // Navegación programática al hacer click en el logo
    escudo2.addEventListener("click", () => {
      window.location.href = "index.html#portafile";
    });

  }

}
