// AUTO INVOQUER (au chargement de la page)
// pas besoin d'écrire ddans un fichier css
// voir dans le html (j'i mis une couleur bleu sans padding et H/L differentes)

//AINSI cela devient comme un fichier css
$(function(){//fonction anonyne dit fonction de callback
    $('#box').css({
        'background': 'lightpink',
        'height': '200px',
        'width': '400px',
        'padding': '30px',
        'border': 'black solid 2px',
        'border-radius': '25px'
    })

    $('#box').click(function(event) {
        $('#box').css('background', 'yellow')
        alert('La div a été cliquée')
        console.log(event)
    })
})