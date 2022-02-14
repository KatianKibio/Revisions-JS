/*
Inclure la fonction principale de jQuery

Pour utiliser les objets, propriétés et méthodes proposés par jQuery, il est nécessaire d'inclure la fonction principale.

Le code devra obligatoirement être placé à l'intérieur de cette fonction.
*/



// APPEL DE JQUERY

jQuery(document).ready(() => {

    // Notre code utilisant jQuery

})
//-----------------------------------------END


// APPEL PLUS SIMPLIFIER AVEC $
// !!! La manière la plus fréquente pour initialiser jQuery est la suivante : 
$(document).ready(() => {

    // Notre code utilisant jQuery

});
//-----------------------------------------END


// APPEL SANS LE READY
// !!!! Si nous intégrons d'autres librairies utilisant l'alias $ : uiliser cette forme
// pour éviter les conflits
$(function() {

    // Notre code utilisant jQuery

});
//-----------------------------------------END
