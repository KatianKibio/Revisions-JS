const button = document.getElementById('button')

// H1 deviendra H2 plus bas
//    button.addEventListener('click', () => {
//        alert('click')
//    })

// Il faut externaliser le callback afin de pouvoir l'utiliser dans removeEventListener() deuxième paramètres
const callback = () => {
    alert('click')
}
// H2-------------------------------------
button.addEventListener('click', callback)
// ---------------------------------------

// button.removeEventListener('click', () => {
// })
button.removeEventListener('click', callback /*, true */ ) //3eme parametre optionnel
// ---------------------------------------

let button2 = document.getElementById('button2')
button2.addEventListener('click', callback,  {
    capture: true,
    once: true,
    passive: true
})

button2.removeEventListener('click', callback)