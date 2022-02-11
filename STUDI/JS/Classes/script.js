// la classe commence par une majuscule
// ont cree une classe voiture pour pouvoir creer des objets à partir de cette classes

class Car {
    constructor(color, manufacturer, seats) {
        this.color = color
        this.manufacturer = manufacturer
        this.seats = seats
        this.volant = "sport" //valeur identique à chaque objets
    }
}

class Plane {
    constructor(passengers, model, manufacturer, wingspan) {
        this.passengers = passengers
        this.model = model
        this.manufacturer = manufacturer
        this.wingspan = wingspan
    }
}
//FORME ES5

function Voiture(moteur, couleur) {
    this.moteur = moteur
    this.couleur = couleur
    this.volant = "sport"
}


// Creer un nouvelle objet a partir de notre classe (instancier un objet)

let c3 = new Car('Blanche', 'Citroën', 5)

//display et verification de l'instance
console.log(c3)
console.log(c3.manufacturer);
console.log('-----------------------');
console.log('c3 est une voiture ? : ')
console.log(c3 instanceof Car);
console.log('-----------------------');
console.log('c3 est un avion ? : ')
console.log(c3 instanceof Plane);

// un objet
console.log('-----------------------');
let person = {
    name: "Tom",
    firstname: "Black",
    age: 37
}
console.log(person)
console.log("Le type de la variable person est => " + typeof person);
console.log('-----------------------');
console.log('-----------------------');

//FORME ES 5 INSTANCIER
let coccinelle = new Voiture('v10', 'green')
console.log(coccinelle)

// ~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//TYPAGE DES PROPRIÉTÉS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
    En JavaScript les propriétés ne sont pas typées,
    contrairement à d'autres langages de programmation orientée objet.
*/


// ~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//LA PROPRIÉTÉ PROTOTYPE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Appart {
    constructor(taille, nbPieces, etage) {
        this.taille = taille + "m2"
        this.nbPieces = nbPieces + " pieces"
        this.etage = "étage : " + etage
        this.affichage = function() {
            console.log(this.taille, '|', this.nbPieces, '|', this.etage, '|', this.ville)
        }
    }
}
// La propriété VILLE est partagée entre tous les objets APPART.

Appart.prototype.ville = 'Ville : Fontenay'

let appartUn = new Appart(102, 5, '3eme')
let appartDeux = new Appart(44, 2, 'rdc')
appartUn.affichage()
appartDeux.affichage()
console.log(appartUn.taille);
console.log('-----------------------------------------');
// ~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//LES METHODES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// comme les propriétés les méthodes sont stockées dans les objets
// les méthodes sont aussi les variables des objets
// Une méthode est encapsulée dans une classe et stockée dans une variable.
// On peut y accéder dans la définition de la classe avec le mo-clé this.
/*
    En dehors de la classe, l'utilisation d'une méthode se fait en appelant
    la variable dans laquelle est stockée notre instance, suivie de "." et du nom de la méthode souhaitée, suivi des parenthèses().
    Il s'agit ici de la syntaxe d'appel d'une fonction classique.
*/

/**
 * Pour synthétiser, les méthodes sont des fonctions qui permettent à un objet de réaliser une action.
 * Elles peuvent utiliser les propriétés de l'objet en lecture ou en écriture.
 */


//DEFINIR UNE METHODE
class Heroes {
    constructor(name, clan, weapon) {
        this.name = name
        this.clan = clan
        this.weapon = weapon
    }
    //DEFINITION D'UNE METHODE ATTAQUE -> avec sa variable force encapsulé dans la classe
    attaqueFronde(force) {
        this.force = 10000
        console.log(`${this.name} à causé ${this.force} dégats !`);
    }
}

let david = new Heroes('David', 'Juda', 'Fronde')
console.log('David instance de la classe Heroes ?');
console.log(david instanceof Heroes);
console.log(david)

//Syntaxe d'appel d'une fonction classique
//Pour appellé une méthode en dehors de la classe
david.attaqueFronde()
console.log('-----------------------------------------')



//DEFINIR SES METHODES DANS UN PROTOTYPE
class HeroesSecond {
    constructor(name, clan, weapon) {
        this.name = name
        this.clan = clan
        this.weapon = weapon
    }
    attaqueArc(force) {
        this.force = 7000
        console.log(`${this.name} à causé ${this.force} dégats !`);
    }
    attaqueEpee(force) {
        this.force = 3500
        console.log(`${this.name} à causé ${this.force} dégats !`);
    }
}

//METHODE EN PROTOTYPE DEFINI 
HeroesSecond.prototype.course = function(vitesse) {
    this.vitesse = vitesse
    console.log(`${this.name} courre à ${this.vitesse} Km/h.`);
}


let jonathan = new HeroesSecond('Jonathan', 'Benjamin', 'Arc')
let huri = new HeroesSecond('Huri', 'Héthien', 'Épée')

console.log(jonathan)
jonathan.attaqueArc()
console.log(huri)
huri.attaqueEpee()

huri.course(105)

