Dans le cas où le canevas ne serait pas supporté par le navigateur,
ce code JavaScript retournerait une erreur.
Si l'on souhaite disposer de rétrocompatibilité,
il vaut mieux utiliser ce code pour initialiser le canevas.


 ----------------------------------------------------------
const canvas = document.getElementById('myFirstCanvas');

let ctx;

if (canvas.getContext) {

  ctx = canvas.getContext('2d') ;

} else {

  // code pour les anciens navigateurs

}
----------------------------------------------------------