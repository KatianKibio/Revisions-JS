// La désérialisation = JSON.parse()

const monJson = '{"stadium":{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null},{}]}}'

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

//RECUPERATION DES ERREURS
// -> voir le fichier tryCatch.js

