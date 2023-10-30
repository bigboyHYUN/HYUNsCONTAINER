import "./common/index.js"
import "./animation/index.js"
import { loadHandler, menuHandler, menuoffsetHandler, topBtnHandler } from "./common/index.js"


const mobileMenu = document.querySelector(".menu");
const topBtn = document.querySelector(".top-btn");


window.addEventListener("load", loadHandler)
mobileMenu.addEventListener("click", menuHandler)
topBtn.addEventListener("click", topBtnHandler)
document.body.addEventListener("click", menuoffsetHandler)