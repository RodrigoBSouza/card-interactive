// Função para espelhar o que é digitado nos inputs do formulário ---------------------------

for (const input of document.querySelectorAll('.input')) { 
    input.addEventListener('keyup', () => {
        const nameCard = document.querySelector('#name-card');
        const numberCard = document.querySelector('#number-card');
        const mmCard = document.querySelector('#mm-card');
        const yyCard = document.querySelector('#yy-card');
        const cvcCard = document.querySelector('#cvc-card');

        if(input.id === 'input-name-card') {
            nameCard.innerHTML = input.value;
        } else if(input.id === 'input-number-card') {
            numberCard.innerHTML = input.value;
        } else if(input.id === 'input-mm-card') {
            mmCard.innerHTML = input.value;
        } else if(input.id === 'input-yy-card') {
            yyCard.innerHTML = input.value;
        } else if(input.id === 'cvc-card-input') {
            cvcCard.innerHTML = input.value;
        }  

        $("input#input-number-card").mask("0000 0000 0000 0000");

        const inputNameCard = document.querySelector('input#input-name-card');
        const inputNumberCard = document.querySelector('input#input-number-card');
        const inputMmCard = document.querySelector('input#input-mm-card');
        const inputYyCard = document.querySelector('input#input-yy-card');
        const inputCvcCard = document.querySelector('input#cvc-card-input');

        if(inputNameCard.value === '') {
            nameCard.innerHTML = 'Name Surname';
        } 
        
        if(inputNumberCard.value === '') {
            numberCard.innerHTML = '0000 0000 0000 0000';
        }
  
        if(inputMmCard.value === '') {
            mmCard.innerHTML = '00';
        }

        if(inputYyCard.value === '') {
            yyCard.innerHTML = '00';
        }
        
        if(inputCvcCard.value === '') {
            cvcCard.innerHTML = '000';
        }
    });
}

// Função para permitir apenas letras no input de nome do cartão ---------------------------

function onlyLetters(input) {
    let regName =/[a-zA-Z]+/g;
    return regName.test(input);
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("input#input-name-card").oninput = function(){
        const inputNameValue = document.querySelector('input#input-name-card');
        const inputNameCard = document.getElementById('input-name-card');
        const msgInputNameCard = document.getElementById('message-error-name-card');
        
        if(!onlyLetters(inputNameCard.value)){
            inputNameCard.style.borderColor = '#ff5252';
            msgInputNameCard.innerHTML = 'Wrong format, letters only!';
        } else {
            inputNameCard.style.borderColor = '#6448fe';
            msgInputNameCard.innerHTML = '';
        }
            
        if(inputNameValue.value === '') {
            inputNameCard.style.borderColor = '#b9b9b9';
            msgInputNameCard.innerHTML = '';
        }
    }
});

// Função para permitir apenas números no input de números do cartão ---------------------------

function onlyNumbers(input){
    let regNumber = /^[0-9\b ]+$/;
    return regNumber.test(input);   
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("input#input-number-card").oninput = function(){
        const inputNumberValue = document.querySelector('input#input-number-card');
        const inputNumberCard = document.getElementById('input-number-card');
        const msgInputErrorNumberCard = document.getElementById('message-error-number-card');
        
        if(!onlyNumbers(inputNumberCard.value)){
            inputNumberCard.style.borderColor = '#ff5252';
            msgInputErrorNumberCard.innerHTML = 'Wrong format, numbers only!';
        } else {
            inputNumberCard.style.borderColor = '#6448fe';
            msgInputErrorNumberCard.innerHTML = '';
        }
    
        if(inputNumberValue.value === '') {
            inputNumberCard.style.borderColor = '#b9b9b9';
            msgInputErrorNumberCard.innerHTML = '';
        } 
    }
});

// Função para permitir apenas números no input CVC do cartão ---------------------------

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("input#cvc-card-input").oninput = function(){
        const inputCvcValue = document.querySelector('input#cvc-card-input');
        const inputCvcCard = document.getElementById('cvc-card-input');
        const msgErrorCvcCard = document.getElementById('message-error-cvc-card');

        if (!onlyNumbers(inputCvcValue.value) && inputCvcValue.value !== '') {
            inputCvcValue.style.borderColor = '#ff5252';
            msgErrorCvcCard.innerHTML = 'Wrong format, numbers only!';
        } else if(inputCvcValue.value === '') {
            inputCvcCard.style.borderColor = '#b9b9b9';
            msgErrorCvcCard.innerHTML = '';
        } else {
            inputCvcCard.style.borderColor = '#6448fe';
            msgErrorCvcCard.innerHTML = '';
        }
    
    }
});

// Função para permitir apenas números no input de data do cartão ---------------------------

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("input#input-mm-card").oninput = function(){
        const inputMMValue = document.querySelector('input#input-mm-card');
        const inputMMCard = document.getElementById('input-mm-card');
        const msgErrorMMCard = document.getElementById('message-error-date-card');

        if(!onlyNumbers(inputMMValue.value) && (inputMMValue.value !== '')){
            inputMMValue.style.borderColor = '#ff5252';
            msgErrorMMCard.innerHTML = 'Wrong format, numbers only!';
        } else if(inputMMValue.value === '') {
            inputMMValue.style.borderColor = '#b9b9b9';
            msgErrorMMCard.innerHTML = '';
        } else {
            inputMMValue.style.borderColor = '#6448fe';
            msgErrorMMCard.innerHTML = '';
        }
    }
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("input#input-yy-card").oninput = function(){
        const inputYYValue = document.querySelector('input#input-yy-card');
        const inputYYCard = document.getElementById('input-yy-card');
        const msgErrorYYCard = document.getElementById('message-error-date-card');

        if(!onlyNumbers(inputYYValue.value) && (inputYYValue.value !== '')){
            inputYYCard.style.borderColor = '#ff5252';
            msgErrorYYCard.innerHTML = 'Wrong format, numbers only!';
        } else if (inputYYValue.value === '') {
            inputYYCard.style.borderColor = '#b9b9b9';
            msgErrorYYCard.innerHTML = '';
        } else {
            inputYYCard.style.borderColor = '#6448fe';
            msgErrorYYCard.innerHTML = '';
        }
    }
});

document.getElementById("btn-confirm").addEventListener("click", function(event){
    event.preventDefault();
});

// Função para concluir e enviar o formulário preenchido caso tudo esteja certo ---------------------------

function btnConfirm() {
    const inputCvcValue = document.querySelector('input#cvc-card-input').value;
    const inputMMValue = document.querySelector('#input-mm-card').value;
    const inputYYValue = document.querySelector('#input-yy-card').value;
    const inputNameCardValue = document.querySelector('#input-name-card').value;
    const inputNumberCardValue = document.querySelector('#input-number-card').value;

    const inputNameCard = document.querySelector('#input-name-card');
    const inputNumberCard = document.querySelector('#input-number-card');
    const inputCvcCard = document.getElementById('cvc-card-input');
    const inputMMCard = document.getElementById('input-mm-card');
    const inputYYCard = document.getElementById('input-yy-card');

    const msgErrorNameCard = document.getElementById('message-error-name-card');
    const msgErrorNumberCard = document.getElementById('message-error-number-card');
    const msgErrorCvcCard = document.getElementById('message-error-cvc-card');
    const msgErrorYYMMCard = document.getElementById('message-error-date-card');
    const hiddenForm = document.querySelector('.content-right');
    const statusCompleted = document.getElementById('content-complete-status');
    
    if(inputNameCardValue === '') {
        inputNameCard.style.borderColor = '#ff5252';
        msgErrorNameCard.innerHTML = "Can't be blank!";
    } 

    if(inputNumberCardValue === '') {
        inputNumberCard.style.borderColor = '#ff5252';
        msgErrorNumberCard.innerHTML = "Can't be blank!";
    }

    if(inputCvcValue === ''){
        inputCvcCard.style.borderColor = '#ff5252';
        msgErrorCvcCard.innerHTML = "Can't be blank!";
    } else if(inputCvcValue.length < 3 && inputCvcValue.length > 0) {
        inputCvcCard.style.borderColor = '#ff5252';
        msgErrorCvcCard.innerHTML = "Need 3 numbers, please!";
    } else {
        statusCompleted.style.display = 'block';
        hiddenForm.style.display = 'none';
    }

    if(inputMMValue === '' || inputYYValue === '') {
        inputMMCard.style.borderColor = '#ff5252';
        inputYYCard.style.borderColor = '#ff5252';  
        msgErrorYYMMCard.innerHTML = "Can't be blank!";
    }
}

// Função para retornar ao formulário e preenchê-lo novamente ---------------------------

document.getElementById('content-complete-status').addEventListener('click', function() {
    const showForm = document.querySelector('.content-right'); 
    const hiddenStatusCompleted = document.getElementById('content-complete-status');

    hiddenStatusCompleted.style.display = 'none';
    showForm.style.display = 'flex';
    document.location.reload(true);
});
