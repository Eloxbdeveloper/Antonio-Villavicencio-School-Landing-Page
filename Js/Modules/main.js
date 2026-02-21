/*
  Punto de entrada principal del módulo.
  Centraliza la inicialización de las funcionalidades globales
  del sitio una vez cargados los módulos correspondientes.
*/


/*
  Inicialización del sistema de temas dinámicos.
  Gestiona cambio de variables CSS y persistencia si aplica.
*/
import { initTheme } from "./theme.js";


/*
  Inicialización de la lógica del portafolio.
  Controla navegación interna, interacción o render dinámico.
*/
import { initPortfolio } from "./portfolio.js";


/*
  Inicialización del comportamiento del logo.
  Permite redirección hacia sección específica del index.
*/
import { initLogo } from "./logo.js";


/*
  Ejecución inmediata de los inicializadores.
  Se asume que este archivo actúa como entry point del bundle.
*/
initTheme();
initPortfolio();
initLogo();
