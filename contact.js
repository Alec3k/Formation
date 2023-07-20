const myFormulaire = document.getElementById('my-form');

// REQUIRED FIRST NAME
const inputFirst = document.getElementById('first-name');
const errorMessageFirst = document.getElementById('error-first');

myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (inputFirst.value === '') {
        messages.push('Le premier prénom est requis');
    }
    if (inputFirst.value.trim().length < 3) { // Vérifie si le prénom a moins de 3 caractères (ignorant les espaces)
        messages.push('Le premier prénom doit contenir au moins 3 caractères');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessageFirst.innerText = messages.join(', ');
    }
    errorMessageFirst.classList.add('error-message-active');
});

// REQUIRED LAST NAME
const inputLast = document.getElementById('last-name');
const errorMessageLast= document.getElementById('error-last');

myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (inputLast.value === '') {
        messages.push('Le deuxième prénom est requis');
    }
    if (inputLast.value.trim().length < 3) { // Vérifie si le prénom a moins de 3 caractères (ignorant les espaces)
        messages.push('Le deuxième prénom doit contenir au moins 3 caractères');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessageLast.innerText = messages.join(', ');
    }
    errorMessageLast.classList.add('error-message-active');
});

// REQUIRED EMAIL
const inputMail = document.getElementById('email');
const errorMessageMail= document.getElementById('error-mail');
       
myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (inputMail.value === '') {
        messages.push('Le mail est requis');
    }
    if (!inputMail.value.includes('@.')) {
        messages.push('L\'adresse e-mail doit contenir un @ et un .');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessageMail.innerText = messages.join(', ');
    }
    errorMessageMail.classList.add('error-message-active');
});

// REQUIRED MESSAGE
const inputMessage = document.getElementById('message');
const errorMessageMessage= document.getElementById('error-message');

myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (inputMessage.value === '') {
        messages.push('Le message est requis');
    }
    if (inputMessage.value.trim().length < 10) { // Vérifie si le prénom a moins de 3 caractères (ignorant les espaces)
        messages.push('Le message doit contenir au moins 10 caractères');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessageMessage.innerText = messages.join(', ');
    }
    errorMessageMessage.classList.add('error-message-active');
});