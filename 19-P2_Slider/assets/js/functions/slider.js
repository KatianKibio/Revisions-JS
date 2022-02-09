var slideIndex = 0
var slides = document.querySelectorAll('.slide')


//cacher les elements
var hideSlide =() => {
    displayDot(slides)
    for (let index = 1; index < slides.length; index++) {//let index 1 car on garde la premiere image
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
        var span = document.createElement('span')
        span.onclick = ()=> showSlide(index)
        span.className = "dot" // = à span.setAttribute('class', 'dot')
        document.getElementById('dots').appendChild(span)

    }
}

var showSlide = (index) => {

    if(typeof(index) !== "number") {
        return
    }
    let lastSlideIndex = slideIndex
    index %= slides.length // correction // protection code source et f12
    index < 0 ? index += 5 : null //(opérateur ternaire)
    slideIndex = index // à la place de → slideIndex = index % slides.length 
    
    //cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"

    //Affichage du slide correspondant à l'indice reçu en paramètre
    slides[slideIndex].style.display = "block"
}