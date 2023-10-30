const home = document.querySelector(".gnb li:nth-of-type(1) a")
const about = document.querySelector(".gnb li:nth-of-type(2) a")
const work = document.querySelector(".gnb li:nth-of-type(3) a")
const contact = document.querySelector(".gnb li:nth-of-type(4) a")


const aboutSection = document.querySelector(".about-container")
const workSection = document.querySelector(".work-container")
const contactSection = document.querySelector(".contact-container")

home.addEventListener("click", function(){
    window.scrollTo({ top:0, behavior:"smooth" })
})
about.addEventListener("click", function(){
    // offsetTop = 위치값 측정
    // aboutSection.offsetTop
    // console.log(aboutSection.offsetTop)
    // behavior = smooth 부드럽게 이동
    window.scrollTo({ top:aboutSection.offsetTop, behavior:"smooth" })
})

work.addEventListener("click", function(){
    window.scrollTo({ top:workSection.offsetTop, behavior:"smooth" })
})
contact.addEventListener("click", function(){
    window.scrollTo({ top:contactSection.offsetTop, behavior:"smooth" })
})