// Sélectionner tous les onglets et leur ajouter un événement de clic
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Retirer la classe 'tab-active' de tous les onglets
        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
        });

        // Retirer la classe 'active' de tous les contenus
        contents.forEach(content => {
            content.classList.remove('active');
        });

        // Ajouter la classe 'tab-active' à l'onglet cliqué
        this.classList.add('tab-active');

        // Vérifier la classe de l'onglet cliqué et afficher le contenu correspondant
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        }
    });
});
