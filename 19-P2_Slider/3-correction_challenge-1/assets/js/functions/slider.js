var slideIndex = 0
var slides = document.querySelectorAll('.slide');
const TIME = 4000;



var hideSlide = () => {
    displayDot(slides)
    for (let index = 1; index < slides.length; index++) {
        const slide = slides[index];
        slide.style.display = "none"
    }
}

var initSlider = () => {
    hideSlide()
}

var displayDot = (sliders) => {
    for (let index = 0; index < sliders.length; index++) {
        const slide = sliders[index];
        var span = document.createElement("span")
        span.onclick = ()=> showSlide(index)
        //span.className = "dot"
        span.setAttribute('class', 'dot')
        document.getElementById('dots').appendChild(span)
    }
}


var showSlide = (index) =>{
    
    let lastSlideIndex = slideIndex
    slideIndex = Math.abs(index) % slides.length

    // Cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"

    // Affichage du slide correspondant à l'indice reçu en paramètre
    slides[slideIndex].style.display = "block"
}
var changeSlide = () =>{
    var index = slideIndex +1
    showSlide(index)
}
var intervalID = setInterval(changeSlide,TIME)













