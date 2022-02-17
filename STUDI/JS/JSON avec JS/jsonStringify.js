// const qui stoque un tableau de terrain
// Comme ont est dans js ont peu se permettre de ne pas mettre de double quote au clés
const fields = [
    {
        id: 2,
        label: "Terrain de foot",
        area: 200
    },
    {
        id: 5,
        label: "Terrain de rugby",
        area: null
    },
    {

    }
]

// Construction d'un objet data avec notre stade à l'intérieur

const data = {
    stadium: {
        id: 18,
        label: "Stade de France",
        fields: fields // ils comportera les terrains
    }
}

//Nous sérialisons (transformation du tableau js en json)

const json = JSON.stringify(data)//parametre = objet data plus haut

console.log('------------------- Affichage de mon json.stringify-------------------');
console.log(json);

// RECAP -> La commande JSON.stringify() nous permet de convertir des types javascsript
// tableau, objet, entier ou autre, directement en représentation json qui sera stoqué dans une chaîne de caractère
