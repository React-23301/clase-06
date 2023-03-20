import Video from './components/video.js';
import Datos from './datos.js';

/** crear un objeto Video este se debera mostrar en pantalla.  */

let video = new Video("app", Datos.video.url);
video.render();

//** click in iframe to run youtube video*/
let iframe = document.querySelector('video');
iframe.addEventListener('click', function () {
    iframe.classList.add('playing-mode');
});


/** exejute click on iframe */









