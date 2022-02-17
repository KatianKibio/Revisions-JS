// AJOUT DE TRY
try {
    //je creer une erreur dans la valeur de la variable monJson pour le test
    // j'ai enlevé le : devant :{"id":18,
const monJson = '{"stadium":{"id"18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null},{}]}}'

const maDonnee = JSON.parse(monJson)//désérialisation --> fait l'opération inverse de JSON.stringify
console.log('------------------- Affichage de mon json.parse-------------------');
console.log(monJson)


//Manipulation de n'importe quel objet js
console.log('------------------- Affichage en details-------------------');
console.log(maDonnee.stadium.fields[0].id)
console.log(maDonnee.stadium.fields[0].label)
console.log(maDonnee.stadium.fields[0].area)
console.log('Mon Stade :');
console.log('id : ' +  maDonnee.stadium.id);
console.log('label : ' +  maDonnee.stadium.label);

} catch (error) { //AJOUT DE CATCH()
    console.log(error)
}
// Permet d'afficher avec plus de details le message d'erreur
