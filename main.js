// import "css/style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import FontAwesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import FontAwesome JS
import "@fortawesome/fontawesome-free/js/all.min.js";
import "animate.css";
import "./src/css/style.scss";

import { carousel } from "./src/js/carousel";
carousel();

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

let loader = document.getElementById("load");
window.onload = () => {
  setTimeout(()=> {
    loader.style.display = "none";
  },2000)
};
