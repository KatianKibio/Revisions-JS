le Javascript est un langage faiblement typé.
Ce qui veut dire que le langage déterminera automatiquement le type d'une variable, on n'a donc pas besoin de spécifier le type d'une variable à sa création.

<!-- /////////////////////////// -->
<!-- /////////// NULL ///////// -->
<!-- /////////// & /////////// -->
<!-- /////// UNDEFINED ////// -->

<!-- NULL VS UNDEFINED -->

<!-- NULL -->
Null

Null est une valeur qui ne représente rien. C'est nous même qui l'attribuons à une variable, c'est donc en quelque sorte une absence intentionnelle de valeur pour une variable.

<!-- CODE --> let name = null

Nous décidons par exemple d'initialiser notre variable name à la valeur null, qui veut dire rien.

<!-- UNDEFINED -->
undefined

undefined veut dire qu'une variable à été défini, mais cette variable n'a aucune valeur.

Alors c'est différent de null, quand on déclare une variable, Javascript lui affecte automatiquement undefined si on n'associe pas à cette variable une valeur.

<!-- CODE --> let age // undefined

Nous avons défini une variable age et nous ne lui avons attribué aucune valeur, par défaut donc la variable age est de type undefined. Il ne faut pas oublier que Javascript défini le type d'une variable par la valeur de celui ci.

<!-- NULL VS UNDEFINED -- RESUME -->
La différence entre null et undefined est plutôt subtile . Mais il faut savoir que:

    null est une valeur que l'on attribue manuellement, ça ne se fait pas automatiquement et ça veut dire ne contient rien
    undefined est un type automatiquement attribué à une variable par Javascript, si la variable n'est pas encore associée à une valeur
    null est un objet
    undefined est de type undefined

<!-- NUMBER -->
Une autre chose, le type Number ne peut pas prendre plus de 15 chiffres

<!-- SYMBOL -->

Un Symbol est un type de données unique et immuable.

Un symbol est un nouveau type de données primitif apparu avec ES6. Sa caractéristique principale est que chaque symbole est totalement unique, contrairement aux autres types de données qui peuvent être écrasés, donc modifiés.

<!-- CODE --> var name = Symbol()

Pour en découvrir plus sur ce type de données, vous pouvez donc vous rendre ici.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol


<!-- /////////////////////////// -->
<!-- /////////// ARRAY ///////// -->
<!-- ///////////COPY/////////// -->
<!-- /////// MODIFICATION ////// -->

var fruit = []
fruit.push(undefined, 'banane', 'pomme', 'fraise' 'cailloux')
fruit.shift()  ---> //'banane', 'pomme', 'fraise' 'cailloux'
fruit.pop()  --->  //'banane', 'pomme', 'fraise'
fruit.unshift('poire') //'poire', 'banane', 'pomme', 'fraise'
<!-- ajoute ou supprime entre le tableau -->
<!-- fruit.splice(Indice de départ, nombre à supprimer, 'nouvelle_entrée') -->
fruit.splice(1,0,'raisin') // 'poire', 'raisin', 'banane', 'pomme', 'fraise'
fruit.splice(2,1,'grenade') // 'poire', 'raisin', 'grenade', 'pomme', 'fraise'
fruit.splice(2,2,'coco') // [ 'poire', 'raisin', 'coco', 'fraise' ]
<!-- Taille du tableau -->
fruit.length ---> 4 
<!-- Creer un tableau à partit d'un autre tableau-->
var names = ['Alice', 'Florent', 'Jeane', 'Mathieu']
=> [ 'Alice', 'Florent', 'Jeane', 'Mathieu' ]
<!-- AVEC [...tableauCiblé -->
var firstnames = [...names, 'Nicolas', 'Marlènes']
=> [ 'Alice', 'Florent', 'Jeane', 'Mathieu', 'Nicolas', 'Marlènes' ]
<!-- inversé un tableau -->
firstnames.reverse()
=> [ 'Marlènes', 'Nicolas', 'Mathieu', 'Jeane', 'Florent', 'Alice' ]
<!-- methode join /// faire une chaine de caractère-->
firstnames.join() => 'Marlènes,Nicolas,Mathieu,Jeane,Florent,Alice' <!-- defaut la virgule -->
firstnames.join('-') --> entre parenthése ont met le choix du séparateur
=> 'Marlènes - Nicolas - Mathieu - Jeane - Florent - Alice'
<!-- CREER UN TABLEAU A PARTIR D'UN STRING -->
var chaine = 'ballon - raquette - kimono'
chaine => 'ballon - raquette - kimono'

chaine.split(' - ')
=> [ 'ballon', 'raquette', 'kimono' ]


<!-- /////////////////////////// -->
<!-- /////////// OBJECT ///////// -->
<!-- /////////////////////////// -->
<!-- /////// //////////// ////// -->

<!-- DECLARATION d'un Object-->
var plane = new Object() --------> il y a plus simple <!--var plane = {} -->
var plane = {}
<!-- AJOUT de propriéte à l'objet -->
    plane.name = "Boing 777"
    plane.company = "Air France"
    plane.nbPlace = 352
<!-- MIEUX -> declarer et ajouter les propriétés en même temps -->
<!-- 2 manière pour récupérer --> 👍
var plane = {
    name: "Boing 777",
    company: "Air France",
    nbPlace: 352,
} 👍👍👍
<!-- Ajouter un élément à mon objet -->
plane.model = "e25"
<!-- /////////////////////////// -->
<!-- /////////// OBJECT ///////// -->
<!-- /////////////////////////// -->
<!-- /////// //////////// ////// -->
var plane2 = {...plane, _id: 45646546, name: "XPS"} --> spread
→ fait une copie de plane et ajoute l'élément _id et change la valeur de name

var person = {
    firstname: "katian",
		lastname: "kibio",
    email: "kat@mail.com",
    phone: "4477889966",
    adress: {
        street: "32 rue fausse",
        code: 48966,
        country: "Canada",
    },
    fullname: function() { 👈 UNE METHODE
      return  this.firstname+" "+this.lastname
    },
    hello: function() { 👈 UNE METHODE
        return "Hello, Welcome "+this.fullname()
    },
}
<!-- récupérer les valeurs -->
person.street → {street: "32 rue fausse", code: 48966, country: "Canada"}
person.street.code → 48966 <!-- objet dans l'objet -->
<!-- appeller les fonctions -->
person.fullname() ← parenthèse
person.hello() ← parenthèse

<!-- /////////////////////////// -->
<!-- /////////// OBJECT ///////// -->
<!-- /////////////////////////// -->
<!-- /////// //////////// ////// -->

<!-- fonction avec l'objet -->
var say_hello = ({firstname}) => { 
    console.log(`Hello ${firstname}`)
}
<!-- J'appel la fonction avec le parametre firstname de l'object person -->
say_hello(person)
    → "Hello Katian"

say_hello({firstname:'marna'})
    → "Hello marna"

🚫 ERROR ← say_hello(firstname) ou say_hello({firstname}) → ERROR 🚫

<!-- Supprimer une propriété -->
delete person.firstname
→ true
person
→ { lastname: 'kibio', ❌ firstname n'est plus
  email: 'kat@mail.com',
  phone: '4477889966',
  adress: { street: '32 rue fausse', code: 48966, country: 'Canada' },
  fullname: [Function],
  hello: [Function] }

  <!-- ASSIGNATION d'un objet à une variable -->
  <!-- Creation d'une reference -->

    🔴 var newPerson = person ---> les deux variables seront liés
    ---> toute mmdif sur l'un des deux se répercutera sur l'autre
    -----> c'est personne qui est l'objet noyau
<!-- Creation d'un clone -->
    🟢 var newPerson = {...person} ---> Ce n'est plus une référence mais bien un objet
    🟢 OPERATEUR SPREAD ... (CLONAGE)
