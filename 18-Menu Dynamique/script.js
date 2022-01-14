
// 
var dashboard = document.querySelector('nav.header-left')
dashboard.style.display = 'none'

var toolMenu = document.querySelector('.header-top-left .header-icon')


// je créer la fonction d'abonnemnent par mouseover
toolMenu.addEventListener('mouseover', auDessus = (event) => {
    dashboard.style.display = "block"
})

toolMenu.addEventListener('click', closeNav = (event) => {
    dashboard.style.display = "none"
})

var liste = document.querySelectorAll('.header-left ul li')
for(let i = 0; i < liste.length; i ++) {
    const li = liste[i]
    li.addEventListener('click', closeUl = (event) => {
        dashboard.style.display = "none"
    })
}
