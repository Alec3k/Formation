const input = document.getElementById('last-name');
const myFormulaire = document.getElementById('my-form');
const errorMessage = document.getElementById('error');

myFormulaire.addEventListener('submit', (e) => {
    let messages = [];
    if (input.value === '') {
        messages.push('Le deuxieme prenom est requis');
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorMessage.innerText = messages.join(', ');
    }

});