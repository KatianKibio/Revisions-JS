JS - LES BASES
---------------------------------------------
camelBake
----------------------------------------------

click
dblclick
mouseover
mouseleave
----------------------------------------------
TYPE DE DONNEES ----> typeof(variable) ---> donne le type

1/ 6 Types de données primitifs
String
Number  
Boolean
Null
undefined
Symbol
2/ 1 type de données Object
    ------> Objet, peut contenir plusieurs variables de type différents
----------------------------------------------
OPERATEUR DE CONCATENATION

var hello = "Hello"
var firstname = "Katian"
var lastname = "Kibio"
var age = 37

var concat = hello + firstname ---> "HelloKatian"
var concat = hello + "" + firstname ---> "Hello Katian"
var concat = hello + " " + firstname + " vous avez " + age + " ans" ---> hello katian vous avez 37 ans

CONCATENATION AVEC »»» back-tick
console.log(`Bonjour, je suis ${name}, j'ai ${age} ans et je suis à ${address}.`)
----------------------------------------------
TEMPLATE Literals

console.log(`Bonjour, je vais à l'école et je suis "COOL".`)

Et si ma chaîne contient des back-tick? Beh tu les précèdes d'un antislash.
console.log(`Cette chaine est \`vraiment bizarre\`.`)
----------------------------------------------
STRUCTURES CONDITIONNELLES
<!-- Nous avons pour variable 'age' -->
var age = parseInt(prompt())
 - - - - ou - - - -
 <!-- autre manière de faire cette variable -->
var age = prompt()
age = parseInt(age) 


<!-- condition if -->
if(){
    else if(){
        //CODE
    }else {
        //CODE
    }
}
<!-- condition switch case -->
switch (age) {
    case:25:
        console.log("25 ans")
        break;
    case:18:
        console.log("18 ans")
        break;
    case:15:
        console.log("15 ans")
        break;
    default:
        console.log("default non obligatoire")
        break;
}

----------------------------------------------
BOUCLES

<!-- for -->
for (var i = 1; i < 11; i++) {
    console.log("tour de boucle N°" +i)
}
<!-- while -->
while(i < 11) {
    console.log("tour de boucle N°" +i)
    ++i
}
<!--do while -->
var a = 0 <!-- on entrera au moins une fois -->
do{
	console.log("tour de boucle N°" +a)
    a++
}while(i < 10) <!-- tant que c'est infèrieur à 10 je rentre dans la boucle -->