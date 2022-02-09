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

    let lastSlideIndex = slideIndex

    //RESOLUTION DU PROBLEME DU PREV DANS LISTENERS.JS
    /*  if(index < 0){
            // *1** faire une multiplication à -1 pour rendre le nombre positif
            //index = -1 * index // enlever le -1*index pour rrégler le bug du prev
            //rempacer par
            index += 5 //il y a 5 imagess
        }
    */
    //FIN RESOLUTION
    /* MIEUX EN UNE LIGNE ----->  */index < 0 ? index += 5 : null //(opérateur ternaire)
    // on enlève ainsi le if ↑↑↑↑↑

    //RESOLUTION DU PROBLEME DU PREV DANS LISTENERS.JS 2eme Methode ↓↓↓↓↓↓↓↓ et enlever le if ↑↑↑↑↑↑↑
    // aporte un bug dans le prev (refenir à la condition if pour regler)
    slideIndex = index % slides.length
    /*slideIndex = Math.abs(index) % slides.length*/
    
    //cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"

    //Affichage du slide correspondant à l'indice reçu en paramètre
    slides[slideIndex].style.display = "block"
}