// COMMENT INTERROGER UNE API GRACE A JS
// RECUPERER UN RETOUR JSON
// ET LE DESERIALISER AUTOMATIQUEMENT


// POUR CELA ON UTILSERA L'API FETCH
// Ressource -> site : doc.data.gouv.fr/api/reference/#/site/activity
// Qui offre une api ouverte sur les données du gouvernement et je vais par exemple
// Y récupérer la liste des activités (on est dans une documentation d'api)
// récupérer l'url avec le boutton "try it out" et éxecute -> permetant de tester l'api dans le navigateur
// récupérer la request url pour faire l'appel nous même

fetch('https://www.data.gouv.fr/api/1/activity?page=1&page_size=20')// <- coller la request url ici
// option ajouter => page=1&page_size=20 => recup la 1er page et les 20 premiers résultats
// A partir de la si je lance mon script la requête ce fait
// Problème : il n'y a rien qui s'affiche
// Réslution : Utilisation des promises

.then(response => {
    return response.json() //recuperation du resultat et la retourné en la desérialisation
    // ici au final on retourne l'objet desérialisé
})
.then(response => {
    console.log(response);//affichage
    // peu prendre un certain temps car cette appel est asynchrone
})


//############### CATCH ######################