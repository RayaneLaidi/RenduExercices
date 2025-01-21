  // Classe Personnage
  class Personnage {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    // Méthode pour attaquer l'adversaire
    attaquer(adversaire) {
        const chanceDeToucher = Math.random(); // Nombre aléatoire entre 0 et 1
        ajouterMessage(`${this.nom} tente d'attaquer...`, true);

        if (chanceDeToucher < this.precision) {
            // Si la précision est suffisante, l'attaque touche
            adversaire.pointsDeVie -= this.attaque;
            ajouterMessage(`${this.nom} attaque avec succès ! ${adversaire.nom} perd ${this.attaque} points de vie.`, true);
        } else {
            // Sinon l'attaque échoue
            ajouterMessage(`${this.nom} rate son attaque.`, true);
        }
    }

    // Vérification de l'état du personnage
    estVivant() {
        return this.pointsDeVie > 0;
    }
}

// Initialisation des personnages
let joueur1 = new Personnage("Guerrier", 100, 20, 0.8); // 80% de précision
let joueur2 = new Personnage("Mage", 80, 25, 0.7); // 70% de précision

// Fonction pour ajouter un message dans le log
function ajouterMessage(message, afficherDansConsole) {
    const combatLog = document.getElementById("combatLog");
    combatLog.textContent += message + "\n";
    combatLog.scrollTop = combatLog.scrollHeight; // Pour faire défiler vers le bas

    if (afficherDansConsole) {
        console.log(message); // Afficher aussi dans la console
    }
}

// Fonction pour démarrer le combat
function demarrerCombat() {
    // Effacer le message initial dans le combatLog
    document.getElementById("combatLog").textContent = ""; // Vider le log initial

    // Réinitialiser les points de vie des joueurs
    joueur1.pointsDeVie = 100;
    joueur2.pointsDeVie = 80;

    // Utiliser un délai pour afficher les messages progressivement
    let index = 0;

    function afficherTour() {
        if (joueur1.estVivant() && joueur2.estVivant()) {
            // Afficher le début du tour
            ajouterMessage("\n--- Tour du combat ---", true);

            // Joueur 1 attaque
            joueur1.attaquer(joueur2);
            ajouterMessage(`${joueur2.nom} a ${joueur2.pointsDeVie} points de vie restants.`, true);

            // Si joueur 2 est toujours vivant, il attaque à son tour
            if (joueur2.estVivant()) {
                joueur2.attaquer(joueur1);
                ajouterMessage(`${joueur1.nom} a ${joueur1.pointsDeVie} points de vie restants.`, true);
            }

            // Attendre un peu entre les tours pour voir les résultats
            setTimeout(afficherTour, 1000); // Délai de 1 seconde entre chaque tour
        } else {
            // Déclaration du vainqueur
            if (joueur1.estVivant()) {
                ajouterMessage(`${joueur1.nom} a gagné le combat !`, true);
            } else {
                ajouterMessage(`${joueur2.nom} a gagné le combat !`, true);
            }
        }
    }

    // Lancer le combat avec le délai entre chaque tour
    afficherTour();
}