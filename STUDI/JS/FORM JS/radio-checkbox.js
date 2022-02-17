// #################### ###### ###########################
let entertainment = document.querySelector('select')
let animalRadioButtons = document.querySelectorAll('input[type="radio"]')
let tos = document.querySelector('input[type="checkbox"]')

// #################### SELECT ###########################
entertainment.addEventListener('change', function (event) {
    console.log(`${event.target.name}: ${event.target.value}`);
})
/*  // Selectioné depuis le js la valeur par défaut

    entertainment.value = 'test' ne fonctionnera pas car le therme "test" n'est pas
    entertainment.value = '' ne fonctionnera pas 
    une value defini dans le select -> cela affichera rien (sans texte )
    */
entertainment.value = 'games'

// #################### RADIO ###########################

/**
 * Pour détecter la valeur sur un bouton radio il est nécessaire d'ataché un eventListener
 * sur chaque bouton radio.
 * pour cela on utiilisera une boucle.
 */
animalRadioButtons.forEach((animalRadioButtons) => {
    animalRadioButtons.addEventListener('change', function(event){
        console.log((`${event.target.id}: ${event.target.checked}`));
        // .id car tout nos boutons radio aurons le meme attribut name (elles sont liées entre elle)
        // .checked. Ont ne récupère pas la prpriété value comme ont peu le faire pour les autres types de champs
        // .checked Va renvoyer un booléen, true ou false pour nous indi<ué si un élément est coché ou pas
    })
})

// Selectionné depuis le js la valeur par défaut
animalRadioButtons[0].checked = true

// #################### CHECKBOX ###########################

tos.addEventListener('change', function (event) {
    console.log(`${event.target.name}: ${event.target.checked}`);
})

// Selectionné depuis le js la valeur par défaut
tos.checked = false