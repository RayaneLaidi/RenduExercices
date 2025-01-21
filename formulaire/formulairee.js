const form = document.getElementById('form');
const pseudo = document.getElementById('pseudo');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const notRobot = document.getElementById('notRobot');
const messages = document.getElementById('messages');

document.getElementById('submit').addEventListener('click', () => {
  let isValid = true;
  let errors = [];
  messages.innerHTML = ''; // Clear previous messages

  const updateFieldState = (field, valid) => {
    if (valid) {
      field.style.backgroundColor = "#d4edda"; // Vert clair
      field.style.borderColor = "#c3e6cb";
    } else {
      field.style.backgroundColor = "#f8d7da"; // Rouge clair
      field.style.borderColor = "#f5c6cb";
    }
  };

  // Validation du pseudo
  if (pseudo.value.length >= 6) {
    updateFieldState(pseudo, true);
  } else {
    updateFieldState(pseudo, false);
    isValid = false;
    errors.push(" Le pseudo doit comporter au moins 6 caractères.");
  }

  // Validation de l'email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (emailRegex.test(email.value)) {
    updateFieldState(email, true);
  } else {
    updateFieldState(email, false);
    isValid = false;
    errors.push(" L'email doit être au format : chaine@gmail.com.");
  }

  // Validation du mot de passe
  if (password.value.length >= 8) {
    updateFieldState(password, true);
  } else {
    updateFieldState(password, false);
    isValid = false;
    errors.push(" Le mot de passe doit comporter au moins 8 caractères.");
  }

  // Validation de la confirmation du mot de passe
  if (password.value === confirmPassword.value && confirmPassword.value !== '') {
    updateFieldState(confirmPassword, true);
  } else {
    updateFieldState(confirmPassword, false);
    isValid = false;
    errors.push(" Les mots de passe ne correspondent pas.");
  }

  // Validation de la checkbox
  if (notRobot.checked) {
    notRobot.style.outline = "2px solid #28a745"; // Outline verte
  } else {
    notRobot.style.outline = "2px solid #dc3545"; // Outline rouge
    isValid = false;
    errors.push(" Vous devez cocher 'I am not a robot'.");
  }

  // Affichage des messages
  const messageBox = document.createElement('div');
  messageBox.classList.add('message-box');

  if (isValid) {
    messageBox.classList.add('success');
    messageBox.innerHTML = "<p>Formulaire validé avec succès !</p>";
  } else {
    messageBox.classList.add('error');
    const errorList = document.createElement('ul');
    errors.forEach(error => {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });
    messageBox.appendChild(errorList);
  }

  messages.appendChild(messageBox);
});
