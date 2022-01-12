/**
 * Objet dans lequel on regroupe nos fonctions
 */

//Objet contenant les fonctions listener
var listenerFunction = {
	h2DblClick: ()=>{
		window.alert("click détecté sur la balise H2")
		console.log("click détecté sur la balise H2")
	}
}
//Mise en place des abonnement
var	setupListeners = ()=>{
	var h2 = document.querySelector('section#html h2')
		h2.addEventListener('dblclick', listenerFunction.h2DblClick)
}
