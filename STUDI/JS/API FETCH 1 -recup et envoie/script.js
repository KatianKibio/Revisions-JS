// API FETCH sert a requéter une URl pour récupérer des données
// C'est un type d'outil qu'on appel un client HTTP
// Cette URL sera le plus souvent exposé par une API qu'on utilisera pour récupérer ses données

// JSON placeholder est un service héberger qui propose de fausses données qu'il est possible de  
// requéter via Fetch API (entre autre) pour des besoin de test
// aller en section ressources


// VOICI UNE UTILISATION TRES BASIQUE DE FETCH - recuperation de données
// - - - - - - - - - - - - - - - - - - - - - -
// Pour récupere ses données via mon code javascript on utilisera la méthode Fetch
// qui prendra en paramètre une URL
const request = fetch('https://jsonplaceholder.typicode.com/users')// GET RÉCUPÉRATION DES DONÉES

request
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {//Presicer un catch dans le cas ou la requete ne passe pas
        console.error(error);
    })

// VOICI UNE UTILISATION PLUS POUSSÉ DE FETCH post de données
// - - - - - - - - - - - - - - - - - - - - - -
// Selon le type de requete ou selon les exigences particulière de l'API
// on ne pourras pas s'en sortir comme ça?
// Il sera nécessaire de joindre à la requete plus d'info par le biais de l'objet
// de configuration de l'API fetch.
// Cette objet de configuration sera passé à la fonction fetch dans son 2eme parametre


// PAR DEFAUT LE VERBE HHTP EST GET
// MAIS SI JE SOUHAITES ENVOYE DU CONTENU DEPUIS L'APPLICATION JS VERS L'API
// LE VERBE HTTP POST SERA PLUS ADAPTÉ

const newPost = {
    title: 'Titre',
    body: 'Phrase de la body',
    userId: 1//id user (auteur du post)
}
// API de JSON placeholder n'accepte pas de texte brut mais que du JSON
// Donc je dois trasformer mon objet newPost en chaine JSON
// > body: JSON.stringify(newPost)

// Joindre un header specifique à ma requete pour prevenir à l'API que je vais l'envoyer des données
// en JSON et qui seront encodée en UTF8
// >  headers: {"content-type": "application/json; charset-UTF-8"}

//https://jsonplaceholder.typicode.com/users DEVIENT https://jsonplaceholder.typicode.com/posts
const autreRequete = fetch('https://jsonplaceholder.typicode.com/posts',/** 2eme param ici */ {
    method: 'POST',//entre accolade
    //Je dois fournir un contenu à ce nouveau post avec la propriété body
    body: JSON.stringify(newPost),// creer une constante > const newPost avant ce bloc de code
    headers: {
        "content-type": "application/json; charset-UTF-8"
    }
})

autreRequete
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {//Presicer un catch dans le cas ou la requete ne passe pas
        console.error(error);
    })


// AU PROPRE
const courrier = {
    title: 'Mon Nouveau Post',
    body: 'Une histoire sur la bible',
    userId: 3
}

const envoiDirecte = fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(courrier),
    headers: {
        "content-type": "application/json; charset-UTF-8"
    }
})

envoiDirecte
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.error(error);
    })