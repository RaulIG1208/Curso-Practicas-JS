import cuentaRegresiva from "./module/cuenta-regresiva.js";
import detecConexion from "./module/detec-conexion.js";
import scrollSpy from "./module/detec-scroll.js";
import webCam from "./module/detec-webCam.js";
import filterSearch from "./module/filter-search.js";
import Geolocalizacion from "./module/geolocalizacion.js";
import menuHamburguesa from "./module/menu-hamburguesa.js";
import modeDom from "./module/mode.js";
import responsiveSlider from "./module/responsive-slider.js";
import responsiveTester from "./module/responsive-testr.js";
import responsiveAdd from "./module/responsive.js";
import returnUp from "./module/return-up.js";
import sorteo from "./module/sorteo.js";
import coliciones from "./module/teclado.js";
import { startReloj, startAlarm} from "./module/tempo.js";
import userDeviceInfo from "./module/user-Devide-info.js";
import contactFormValidation from "./module/validaciones_formulario.js";
import smartVideo from "./module/video-inteligente.js";


const d = document,
w = window;

d.addEventListener("DOMContentLoaded",(e)=>{
  menuHamburguesa(".panel-btn",".panel");
  startReloj(".reloj",".start-reloj",".stop-reloj");
  startAlarm(".reloj",".start-alarm",".stop-alarm");
  cuentaRegresiva("counterdown",
  "August 12, 2021 13:31:00",
  "Feliz Cumpleaños");
  returnUp(".scroll");
  responsiveAdd("youtube",
  "(min-width: 1024px)",
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  "https://youtu.be/6IwUl-4pAzc");
  responsiveAdd("maps",
  "(min-width: 1024px)",
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54458.93538335416!2d-64.1763640142334!3d-31.450380177919076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2e234b6d23f%3A0xb9f17de401ae729b!2sPaseo%20del%20Jockey!5e0!3m2!1ses-419!2sar!4v1623097850090!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
  "https://g.page/paseodeljockey?share");
  responsiveTester("responsive-tester");
  userDeviceInfo(".user-agent");
  webCam("webcam");
  Geolocalizacion("geolocalizacion");
  filterSearch(".card-filter",".card");
  sorteo(".player",".btn-winner");
  responsiveSlider(".previus",".next",".slider-slide");
  scrollSpy();
  smartVideo();
  contactFormValidation();
})

d.addEventListener("keydown",(e)=>{
  coliciones(e,".container",".item");  
})
modeDom(".mode");
detecConexion();