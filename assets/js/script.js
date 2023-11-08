// Affiche un message dans la console lorsque le script est chargé
console.log("Script chargé !");

document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton de validation
    const boutonCalculer = document.getElementById('boutonCalculer');
    boutonCalculer.textContent = "Calculer";

    // Ajouter l'événement onclick
    boutonCalculer.addEventListener('click', calculerJoursRestants);
    const boutonReset = document.getElementById('resetChamps');
    boutonReset.addEventListener('click', resetChamps);
});
function resetChamps() {
    document.getElementById('jour').value = '';
    document.getElementById('mois').value = '';
    // Arrêter le son
    let sonAnniversaire = document.getElementById('sonAnniversaire');
    sonAnniversaire.pause();
    sonAnniversaire.currentTime = 0;

    // Cacher l'image
    let imageAnniversaire = document.getElementById('imageAnniversaire');
    imageAnniversaire.style.display = 'none';

    // Effacer le texte du résultat
       let resultatElement = document.getElementById('resultat');
       resultatElement.textContent = '';
}

function calculerJoursRestants() {
    const jour = document.getElementById('jour').value;
    const mois = document.getElementById('mois').value;

    // Obtenez la date actuelle
    let aujourdHui = new Date();
    
    // Obtenez la date de l'anniversaire de cette année
    const anniversaireCetteAnnee = new Date(aujourdHui.getFullYear(), mois - 1, jour);

    // Si l'anniversaire est déjà passé cette année, ajoutez une année
    if (aujourdHui > anniversaireCetteAnnee) {
        anniversaireCetteAnnee.setFullYear(aujourdHui.getFullYear() + 1);
    }

    // Calculez le nombre de jours restants
    let difference = anniversaireCetteAnnee - aujourdHui;
    let joursRestants = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Affichez le résultat
    let resultatElement = document.getElementById('resultat');
    resultatElement.textContent = "Il reste " + joursRestants + " jours avant votre anniversaire.";

    let sonAnniversaire = document.getElementById('sonAnniversaire');
    sonAnniversaire.play();

    // Afficher l'image
    let imageAnniversaire = document.getElementById('imageAnniversaire');
    imageAnniversaire.style.display = 'block';
}
