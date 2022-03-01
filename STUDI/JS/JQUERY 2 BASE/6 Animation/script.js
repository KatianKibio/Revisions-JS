

// METHODE NATIVE : show() & hide()
$(() => {
    $('#hide-box').click(function () {
        $('.box').hide(1000, function () {
            console.log('La boîte est maintenant cachée');
        })
    });

    $('#show-box').click(function () {
        $('.box').show(400)
    });
})

// METHODE NATIVE : fadeOut() & fadeIn()
$(() => {
    $('#fadeOut-box').click(function () {
        $('.box2').fadeOut(1000, function () {
            console.log('La boîte est maintenant cachée');
        })
    });

    $('#fadeIn-box').click(function () {
        $('.box2').fadeIn(400)
    });
})

// ANIMATION PERSONNALISÉE : animate()
$(() => {
    $('#trigger-animation').click(function () {
        //1:propriétés css à animé, 2: durée d'aimation en ms, 3: function de callback
        //JQ anime que les propriétés css de valeur numérique
        $('.box3').animate({//1er param sera un objet qui contient les news valeur
            width: '80%',
            borderRadius: '20px'
        }, 1000, function () {
            console.log('Animation terminée');
        })    
    })
})

//revenir en arrière
$(() => {
    $('#reset-animation').click(function () {
        //1:propriétés css à animé, 2: durée d'aimation en ms, 3: function de callback
        //JQ anime que les propriétés css de valeur numérique
        $('.box3').animate({//1er param sera un objet qui contient les news valeur
            width: '20%',
            borderRadius: '2px'
        }, 1000, function () {
            console.log('Animation terminée');
        })    
    })
})
