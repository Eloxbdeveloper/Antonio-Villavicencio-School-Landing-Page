/*
  Inicializa el sistema de alternancia de temas.
  Gestiona el intercambio de clases en el <body> para activar
  diferentes configuraciones de variables CSS.
  El comportamiento depende de la clase actualmente activa.
*/
export function initTheme() {

  // Botón encargado de disparar el cambio de tema
  const tema = document.querySelector(".header__button--theme");

  // Referencia directa al elemento raíz visual
  const body = document.body;


  /*
    Registro del evento click.
    Se evalúa la clase actual del body y se intercambia
    por su contraparte (light/dark) dentro de la misma gama.
  */
  tema.addEventListener("click", () => {

    // Alternancia tema base claro / oscuro
    if (body.classList.contains("theme__dark")) {
      body.classList.remove("theme__dark");
      body.classList.add("theme__light");

    } else if (body.classList.contains("theme__light")) {
      body.classList.remove("theme__light");
      body.classList.add("theme__dark");


    // Alternancia gama azul
    } else if (body.classList.contains("theme__darkblue")) {
      body.classList.remove("theme__darkblue");
      body.classList.add("theme__lightblue");

    } else if (body.classList.contains("theme__lightblue")) {
      body.classList.remove("theme__lightblue");
      body.classList.add("theme__darkblue");


    // Alternancia gama púrpura
    } else if (body.classList.contains("theme__darkpurple")) {
      body.classList.remove("theme__darkpurple");
      body.classList.add("theme__lightpurple");

    } else if (body.classList.contains("theme__lightpurple")) {
      body.classList.remove("theme__lightpurple");
      body.classList.add("theme__darkpurple");
    }

  });

}
