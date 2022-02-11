//TEST DE FONCTIONNEMENT JQUERY

$(document).ready(() => {

    // verification fonctionnement jquery
    //alert("jquery est prêt à l'utilisation")
    console.log("jquery go");
})


$('#content p').click(function(){
    alert('Clique sur le paragraphe')
})

//visualiser un element dans la console avec une fonction auto invoqué

$(function () {
    let element = $('#content')
    // $('#content')  === document.getElementById('content')
    console.log(`Affichage Id Content :  ${element}`);
    console.log(element);
})

$(function () {
    let monContacte = $('#contact > .username')//> = l'enfant direct
    // $('#contact > .username') === document.querySelector('#contact > .username')
    console.log(`Affichage Id Content :  ${monContacte}`);
    console.log(monContacte);
})

//recuperer
$(function () {
    let title_h1 = $('#title-h1').text()
    console.log('--------------------');
    console.log('↓ ↓ AFFICHAGE DU TEXTE DU TITRE H1 ↓ ↓');
    console.log(title_h1)
    
    $('#title-h1').css('color', 'red')
    $('#title-h1').css('color', 'blue').text('Nouveau Titre').css('text-shadow', 'black 2px 5px 12px')
})
