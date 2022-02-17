// TRAVAIL SUR LES FORMULAIRES

// comment lire une valeur dans le html
let username = document.getElementById('username')
let description = document.getElementById('description')
console.dir(username); // console.dir() non realculer si on change la valeur
console.dir(description);

// Observer la saisie en temps réel
username.addEventListener('input', function () {
    console.log(username.value);
})

// Comment assigner directement une valeur depuis javascript
description.value = "Je suis un enfant de Dieu..."

// ____________________________________________________________
// ECOUTER UNE INTERACTION

let inputElements = document.querySelectorAll('input, textarea')

inputElements.forEach((inputElement) => {
    inputElement.addEventListener('focus', function (event) { // focus = click dans champs de texte
        console.log(`L'utilisateur est entré dans l'input ${event.target.name}`);
    })
})

// ____________________________________________________________
// MANUELEMENT FORCER LE FOCUS SUR UN CHAMPS UN PARTICULIER
// POUR CELA UTILISER LA METHODE FOCUS SUR UN ELEMENT DE FORMULAIRE

let usernameFocused = document.getElementById('username')
usernameFocused.focus()
    //declenche auto sur le champs selectionner 'username'
// il est bien de focus le premier champs de la page (exemple le champs de conexion)
// permettant de faire gagner du temps à l'utilisateur


