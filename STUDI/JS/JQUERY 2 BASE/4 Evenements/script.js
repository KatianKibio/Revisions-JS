$(() => {

    $('#contact-form').submit(function (event) {
        event.preventDefault()// block le rechargement de ma page
        console.log('Formulaire envoyé');
    });

    $('input').blur(function (e) {
        $('#contact-form').trigger('submit')
        console.log(e);
    })
})

/// Declencher MANUELLEMENT des évenements SANS BOUTTON avec trigger