
// Premièrement ciblé le formulaire
let form = document.querySelector('form')

// Puis attaché l'évenements submit sur cette nouvelle variable
form.addEventListener('submit', function (event) {
    event.preventDefault() // l'objet event (ici) il est mis à disposition dans notre fonction de callback
    // Je peux donc directement récupérer cette objet event depuis la fonction de callback de l'eventListener
    console.log('Formulaire envoyé !');
})
// Par défaut le comportement d'un formulaire est de charger la page désigné par son attribut action
// Si je n'est pas d'attribut action défini, il va recharger la page courante (Ici il va recharger le fichier index.html)
// Ce comportement peu être génant dansl le cas d'une gestion de formulaire par Javascript
// Pour éviter ce comportement il faut utiliser la méthode preventDefault() sur l'objet de l'événement

//Dans ce cas ont peu écrire (dans le code ci-dessus) event.preventDefault()
//Ci dessous le code avant event.preventDefault()
    /*

        form.addEventListener('submit', function (event) {
            console.log('Formulaire envoyé !');
        })

    */

// ::::::::::::::::::IMPORTANT:::::
// De cette manière si je click sur envoyer je vais bien déclenché l'événement
// (je vois que mon message s'affiche dans la console f12) sans que la page ne se recharger

// ########################################################################
// DECLENCHER MANUELEMENT LE SUBMIT D'UN FORMULAIRE
        // dans cette exemple, au bout de 2 secondes

//CODE A EVITER #H1
/*
setTimeout(() => {
    form.submit()
}, 2000)
*/

// cette fonction submit n'a pas lemême comportement que le fait de clicker sur le bouton (code du haut)
    // commenter ce code pour essayer celui plus haut
// 1- l'événement submit n'est pas déclenché quand ont appele cette fonction submit
// 2- les contrraintes de validation html5 ne sont pas vérifier
    // Pour ses 2 raisons il est préférable de se passer de cette fonction submit
    // Et si vous avez besoin de soumettre manuellement le formulaire depuis js, il est possible
    // d'utiliser une autre approche -> CODE H2

//CODE A preferer #H2  ---> form devient submitButton ----> .submit devient .click
let submitButton = document.querySelector('button')

setTimeout(() => {
    submitButton.click() //génération d'un faux click au bout de 2s(simulation d'un click)
}, 2000)
// ::::::::::::::::::IMPORTANT:::::
// mon événement submit à bien été déclenché
// ma page ne s'est pas recharger
// je vois bien mon message console