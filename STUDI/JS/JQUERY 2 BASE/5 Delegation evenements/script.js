$(() => {

    $('#contact-form').submit(function (event) {
        event.preventDefault()// block le rechargement de ma page
    });

    $('#send-data').click(function () {
        $('#contact-form').append('<p class="confirmation">Merci pour votre saisie!</p>')
    })

    $('#contact-form').on('click', '.confirmation', function () {// DELEGATION 
        console.log('Paragraphe supprimé');
        $(this).remove()
    })
})
