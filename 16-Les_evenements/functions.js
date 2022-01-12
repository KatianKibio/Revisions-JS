/**
 * Objet dans lequel on regroupe nos fonctions
 */

//Objet contenant les fonctions listener
var listenerFunction = {
	h2Click: function(event)/*()=>*/{
	//la fonction defini ainsi ()=>{}ne permet pas de recuperer le bon this mais le this global
	//remplcer par une fonction anonyme comme ceci -> function(){}
		
		this.style.fontSize = "2.1rem"
		/* click change color ------------------------------------- */ 
		if (this.style.color && this.style.color == "red") {
			this.style.color = "green"
		}else{
			this.style.color = "red"
		}
		/* click change color FIN --------------------------------- */
		console.log("click détecté sur la balise H2")

		console.log("Affichage -------");
		console.log(event);
			var element = event.target //stockage
			console.log("var element = " , element);
		console.log(this); // idem qu'event.target
	}
	
}

//Mise en place des abonnementq
var	setupListeners = ()=>{
	var h2 = document.querySelector('section#html h2')
		h2.addEventListener('click', listenerFunction.h2Click)
}
