class Partie {
    constructor(tour, joueurs) {
        this.tour = tour
        this.joueurs = joueurs
        this.joueursVainqueur = null
    }

    vainqueur() {

        var pts = 0

        this.joueurs.forEach(joueur => {
            this.joueurVainqueur = joueur.points > pts ? joueur : this.joueurVainqueur
            pts = joueur.points > pts ? joueur.points : pts
        })

        if (this.joueurVainqueur === null) {
            console.log('Oups personne n\'a gagné !')
            return;
        }

        console.log(`${this.joueurVainqueur.displayIdentity()} gagne la partie avec ${this.joueurVainqueur.points} points`)
    }
}

class Joueur {
    constructor(name, surname, points, tour) {
        this.name = name
        this.surname = surname
        this.points = 100
        this.tour = 0
    }

    rand(nb) {
        return Math.floor(Math.random() * Math.floor(nb));
    }

    attack(adversaire, bonus = 0) {
        if (this.tour < 3) {
            adversaire.points -= this.rand(51) + bonus
            if (adversaire.points < 0) {
                adversaire.points = 0
            }
            adversaire.displayPoints()
            ++this.tour
        }
    }

    displayIdentity() {
        return `${this.name} ${this.surname}`
    }

    displayPoints() {
        console.log(`${this.displayIdentity()} possède ${this.points} points`);
    }


}


Joueur.prototype.superAttaque = function (adversaire) {
    this.attack(adversaire, 10)
}

let joueur1 = new Joueur('Joueur', '1', 100, 0)
let joueur2 = new Joueur('Joueur', '2', 100, 0)
let joueur3 = new Joueur('Joueur', '3', 100, 0)

let partie = new Partie(3, [joueur1, joueur2, joueur3])


//deroulement

//Déroulement de la partie
for (let tour = 0; tour < partie.tour; tour++) {
    joueur1.attack(joueur3)
    joueur1.superAttaque(joueur2)

    joueur2.attack(joueur1)
    joueur2.superAttaque(joueur3)

    joueur3.attack(joueur2)
    joueur3.superAttaque(joueur1)
}

joueur1.displayPoints()
joueur2.displayPoints()
joueur3.displayPoints()

partie.vainqueur()