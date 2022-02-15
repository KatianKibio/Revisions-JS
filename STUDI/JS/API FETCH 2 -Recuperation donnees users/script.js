

const request = fetch('https://jsonplaceholder.typicode.com/users')

// COMMMENT RECUPERER LES DONNEES UTILISATEUR qui sont aux format JSON
// utiliser une nouvelle méthode sur l'objet response
// définir une nouvelle constance qui correspondra à responce.json (ex : data = response.json)
// cette méthode JSON renvoie également une promesse,
// je vais stocké ici une promesse dans ma constance data

request
    .then((response) => {
        console.log(response)
    /** */  const data = response.json()
    /** */  data.then((jsonData) => { // Une promesse imbriqué (un.then à l'int d'un .then)
    /** */      console.log(jsonData);
        })
    })
    .catch((error) => {
        console.error(error);
    })


// ------------------ SDB     

const album = fetch("https://jsonplaceholder.typicode.com/albums")

album
    .then((response)=>{
        console.log(response);
        const dataAlbum = response.json()
        dataAlbum.then((monJson)=>{
            console.log(monJson);
        })
    })
    .catch((error)=>{
        console.error(error);
    })