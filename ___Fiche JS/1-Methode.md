 
JS - Methodologie

Methodologie

fichier -> main.js	---------------------------------------------------------------------------------------------------------------------------------------------------
	
‣ window.onload = () => {
‣ 	myFunction_A();
‣ 	myFunction_B();
‣ 	myFunction_C();
‣ } 

fichier -> liste_de_fonctions.js	---------------------------------------------------------------------------------------------------------------------------------

OBJET CONTENANT LES FONCTIONS D'ECOUTE

		var listenerFunction = {
			jeClick: function(event){
				// la fonction ici
			}
		}

MISES EN PLACE DES ABONNEMENTS

	var myFunction_A = () = > {
		var h1 = document.querySelector('h1')
		h1.addEventListener('click', list_object_functions.jeClick) 
	}