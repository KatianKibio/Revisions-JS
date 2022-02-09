window.onload = () =>{
    /*var nav = document.getElementById('menu')
    var nav = document.getElementsByClassName('header-left')[0]*/ //2 autres manière de faire
    var nav = document.querySelector('nav.header-left')
    nav.style.display = "none"
    setupListeners()
    initSlider()
}