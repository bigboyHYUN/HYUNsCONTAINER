ScrollReveal({
    reset:false,
    distance:'60px',
    duration:2500,
});

ScrollReveal().reveal('.opacity-a', { 
    delay:100, 
    origin:'top'
})

ScrollReveal().reveal('.opacity-b', { 
    delay:500, 
    origin:'bottom'
})

ScrollReveal().reveal('.contact-bottom', { 
    delay:600, 
    origin:'bottom'
})

ScrollReveal().reveal('.color-container, .about-right', { 
    delay: 500, 
    origin: 'right'
})
ScrollReveal().reveal('.main-visual__left, .about-left, .contact-js', { 
    delay: 100, 
    origin: 'left'
})

ScrollReveal().reveal('.line-left', { 
    delay:100, 
    origin:'left'
})

ScrollReveal().reveal('.line-right, .contact-js__right', { 
    delay:100, 
    origin:'right'
})

ScrollReveal().reveal('.work-img', { 
    delay:10, 
    origin:'bottom'
})

ScrollReveal().reveal('.work-text', { 
    delay:10, 
    origin:'right'
})

ScrollReveal().reveal('.main-visual__cross', { 
    delay:900, 
    origin:'bottom'
})

const observer = new IntersectionObserver((e)=>{
    e.forEach((que)=>{
        if(que.isIntersecting){
        que.target.style.opacity = 1;}
    })
})

const opacityElem = document.querySelectorAll('.opacity')
opacityElem.forEach(elem => observer.observe(elem))