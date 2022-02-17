// ____________________________________________________________
// BLUR : QUITTER LE CHAMPS DE FORMULAIRE
let inputElements = document.querySelectorAll('input, textarea')

inputElements.forEach((inputElement) => {
    inputElement.addEventListener('focus', function (event) { // focus = click dans champs de texte
        console.log(`L'utilisateur est entré dans l'input ${event.target.name}`);
    })
    inputElement.addEventListener('blur', function (event) { // le code
        console.log(`L'utilisateur à quitté le champ ${event.target.name}`);
    })
})

let username = document.getElementById('username')
username.focus()//focus auto sur username

// ____________________________________________________________
// BLUR pour forcer le navigateur à sortir d'un champs de texte (cas d'utilisation rare)
// BLUR : QUITTER LE CHAMPS DE FORMULAIRE ex : apres avoir saisi 4 caractere

username.addEventListener('input', function(event) {
    if(event.target.value.length >= 4) {
        username.blur()
    }
})

