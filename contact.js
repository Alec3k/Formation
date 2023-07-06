const myFormulaire = document.getElementById('my-form');

// REQUIRED FIRST NAME
const inputFirst = document.getElementById('first-name');
const errorMessageFirst = document.getElementById('error-first');

myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (inputFirst.value === '') {
        messages.push('Le premier prénom est requis');
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
    if (messages.length > 0) {
        e.preventDefault();
        errorMessageMessage.innerText = messages.join(', ');
    }
    errorMessageMessage.classList.add('error-message-active');
});