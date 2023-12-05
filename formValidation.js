import verifyCPF from "./cpfValidation.js";
import isMajor from "./ageValidation.js";

const form = document.getElementById('form');
const formFields = document.querySelectorAll('[required]');

const typesOfErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const messages = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        tooShort: "Por favor, preencha um RG válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "Por favor, preencha um CPF válido."
    },
    date: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    checkbox: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = {
        "name": e.target["name"].value,
        "email": e.target["email"].value,
        "rg": e.target["rg"].value,
        "cpf": e.target["cpf"].value,
        "dateOfBirth": e.target["date"].value,
    }

    localStorage.setItem('cadastro', JSON.stringify(fields));
    window.location.href = "./accountCreated.html";
})

formFields.forEach(element => {
    element.addEventListener('blur', () => verifyField(element));
    element.addEventListener('invalid', (e) => e.preventDefault());
})

function verifyField(field){
    console.log(field.validity)

    let message = '';
    field.setCustomValidity('');

    if(field.name === 'cpf' && field.value.length >= 11){
        verifyCPF(field);
    }

    if(field.name === 'date' && field.value.length != ''){
        isMajor(field);
    }

    typesOfErrors.forEach(error => {
        if(field.validity[error]){
            message = messages[field.name][error];
        }
    })

    const validateInput = field.checkValidity();
    if(!validateInput){
        field.parentNode.innerHTML += `
            <span class="font-roboto font-bold text-purple-dark text-xs">${message}</span>        
        `
    } else {
        return;
    }
}


