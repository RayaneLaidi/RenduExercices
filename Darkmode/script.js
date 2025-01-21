// Fonction pour basculer entre le mode sombre et clair
function toggleMode() {
  const body = document.body;
  const button = document.getElementById("modeButton");

  // Basculer la classe 'dark-mode' sur le body
  body.classList.toggle("dark-mode");

  // Modifier le texte du bouton en fonction du mode
  if (body.classList.contains("dark-mode")) {
      button.textContent = "Activer le Light Mode"; // Texte pour passer en mode clair
  } else {
      button.textContent = "Activer le Dark Mode"; // Texte pour passer en mode sombre
  }
}
