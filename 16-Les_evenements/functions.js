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
	},
	bgSectionManage: function(){
		if (this && this.style.backgroundColor == "red") {
			this.style.backgroundColor = "green"
			this.style.color = "white"
		}else{
			this.style.backgroundColor = "red"
			this.style.color = "white"
		}
	}
	
}

//Mise en place des abonnements
var	setupListeners = ()=>{
// N°1 ------------------------------------------------------------------
	var h2 = document.querySelector('section#html h2')
		h2.addEventListener('click', listenerFunction.h2Click)
		//h2.onclick = listenerFunction.h2Click

// N°2 ------------------------------------------------------------------
	var sections = document.getElementsByClassName('section')
	for (let index = 0; index < sections.length; index++) { //parcourrir les sections de la page
		const section = sections[index];
		
		section.onclick = listenerFunction.bgSectionManage
	}
}
