//CIBLE DES ELEMENTS DU DOM VIA LE SELECTEUR

$(() => { // CETTE FONCTION EST EQUIVALENT A LA FONCTION READY
    //Selectionner la balise body
    $('body').css('width', '600px').css('background-color', 'yellow')
    //Selectionner l'Id contact-form'
    $('#contact-form').css('margin', '50px').css('border', 'solid 2px red')
    //Selectionner les classes nommer input-row
    $('.input-row').css('background-color', 'white').css('margin', '25px')
    //Selectionner tout les input qui ont le type text dans les div ayant la classe input-row se situant dans la balise form ayant l'Id contact-form
    $('#contact-form .input-row input[type="text"]').css('color', 'blue').css('font-weight', 'bold')
    //Cibler tout les element input type et tout les bouttons 
    $('input[type="text"], button')
    //ciblage avec pseudo-classe
    $('#contact-form .input-row button:hover').css('font-size', '5em')

    //Le selecteur this
    $('#click-me').click(function () {
        console.log('Boom');

        console.log($("#click-me"));//idem ↓↓↓↓↓↓↓↓↓↓↓
        console.log($(this));//idem ↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    })
})
