
//append / prepend / remove


$(() => {

    $('#contact-form').submit(function (e) {
        e.preventDefault()
    })

    $('#send-data').click(function () {
        $('#contact-form').prepend('<p>Je suis un prepend!</p>')
        $('#contact-form').append('<p>Merci pour votre saisie!</p>')
    })

    $("#reset-data").click(function () {
        $('#contact-form p').remove()
    })
}) 