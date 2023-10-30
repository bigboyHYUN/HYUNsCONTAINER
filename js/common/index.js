export function loadHandler(){
    setTimeout(() => {
    window.scrollTo(0, 0)
    }, 10)
}

// 불러오기


export function menuHandler(){   
    const body = document.body;
    body.classList.toggle("menu-open")
}
// 함수선언


export function topBtnHandler(){
    window.scrollTo({ top:0, behavior:"smooth" })
}


const aboutSection = document.querySelector(".about-container")
const workSection = document.querySelector(".work-container")
const contactSection = document.querySelector(".contact-container")

const menus = [
    { text:"Home", y: 0 },
    { text:"About", y: aboutSection.offsetTop },
    { text:"Work(3)", y: workSection.offsetTop },
    { text:"Contact", y: contactSection.offsetTop },
]

export function menuoffsetHandler(event){
    // 내가 클릭한 요소가 ul이라면 함수종료
    // if(event.target.nodeName === "UL")return
    // 태그의 기본동작 막기
    event.preventDefault();

    if(event.target.classList.contains("menu-common")){
        const offsetTop = menus[menus.findIndex(menu => menu.text === event.target.textContent)].y
        window.scrollTo({ top:offsetTop, behavior:"smooth" })
    }
    
}   