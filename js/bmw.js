const topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", topBtnHandler)

function topBtnHandler(){
    window.scrollTo({ top:0, behavior:"smooth" })
}