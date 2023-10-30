const home = document.querySelector(".gnb li:nth-of-type(1) a")
const about = document.querySelector(".gnb li:nth-of-type(2) a")
const work = document.querySelector(".gnb li:nth-of-type(3) a")
const contact = document.querySelector(".gnb li:nth-of-type(4) a")


const aboutSection = document.querySelector(".about-container")
const workSection = document.querySelector(".work-container")
const contactSection = document.querySelector(".contact-container")

const menus = [
    { elem:home, y: 0 },
    { elem:about, y: aboutSection.offsetTop },
    { elem:work, y: workSection.offsetTop },
    { elem:contact, y: contactSection.offsetTop },
]

menus.forEach(menu => menu.elem.addEventListener("click", () => window.scrollTo({ top:menu.y, behavior:"smooth" })))