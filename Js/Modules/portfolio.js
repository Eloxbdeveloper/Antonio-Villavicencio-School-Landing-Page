/*
  Inicializa la lógica interactiva del portafolio.
  Asocia acciones específicas a cada ítem según su posición
  dentro del NodeList obtenido del DOM.
  Se implementa validación por índice para evitar errores
  cuando el número de elementos renderizados varía.
*/
export function initPortfolio() {

  // Selección de todos los ítems del portafolio
  const boxs = document.querySelectorAll(".portfolio__item");


  /*
    Ítem 0.
    Abre un recurso PDF en una nueva pestaña del navegador.
    Se utiliza window.open para mantener la página actual activa.
  */
  if (boxs.length > 0) {
    boxs[0].addEventListener("click", () => {
      window.open("Multimedia/periodico.pdf", "_blank");
    });
  }


  /*
    Ítem 1.
    Redirección interna hacia la sección ecoAprendizaje.
  */
  if (boxs.length > 1) {
    boxs[1].addEventListener("click", () => {
      window.location.href = "ecoAprendizaje.html";
    });
  }


  /*
    Ítem 2.
    Redirección interna hacia la sección ecoBotellas.
  */
  if (boxs.length > 2) {
    boxs[2].addEventListener("click", () => {
      window.location.href = "ecoBotellas.html";
    });
  }

}
