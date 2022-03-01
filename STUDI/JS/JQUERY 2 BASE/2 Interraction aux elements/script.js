$(() => {
       let title = $('h1').html()
        //afficher le titre
       console.log(title);
        //changer le titre
       $('h1').html('Le nouveau titre')

        //modifier ou ajouter un style

        //affiche la valeur css
        let fontstack = $('h1').css('font-family')
        console.log(fontstack)
        //Changer valeur css
        $("h1").css('color', '#ff4799')


})

$(() => {
    $('.menu li').click(function () {

        $('.menu li').each(function() {//renvoie une liste de tout les éléments li de la page
            $(this).removeClass('active')//ce this fait ref à l'iteration en cours dee la boucle
        })
        $(this).addClass('active')//ce this fait ref au li sur lequel on a cliqué
    })
})


$(() => {//VOICI LA MEILLEUR MANIERE DE FAIRE
    $('.menu2 li').click(function () {

        $('li').removeClass('active2')
        $(this).addClass('active2')//ce this fait ref au li sur lequel on a cliqué
    })
})


//methode data
//pour associer des données à un selecteur
$(() => {

    $('#dontClick').data('timer', 5000)

    $('#dontClick').click(function () {
        setTimeout(() => {
            console.log('Boom!')
        }, $('#dontClick').data('timer'))
    })
})