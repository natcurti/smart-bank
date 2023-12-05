export default function verifyCPF(input){
    const regex = /\.|-/g;
    const cpf = input.value.replace(regex, "");
    console.log(cpf);

    if(repeatedNumbers(cpf) || !validateFirstDigit(cpf) || !validateSecondDigit(cpf)){
        input.setCustomValidity('Esse CPF não é válido');
    } else {
       return;
    }

}

function repeatedNumbers(cpf){
    const numbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numbers.includes(cpf);
}

function validateFirstDigit(cpf){
    let sum = 0;
    let multiplier = 10;
    let remainder;
    let digit; 

    for(let i = 0; i < 9; i++){
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    remainder = sum % 11;

    if(remainder < 2){
        digit = 0;
    } else {
        digit = 11 - remainder;
    }

    return digit === parseInt(cpf[9]);
}

function validateSecondDigit(cpf){
    let sum = 0;
    let multiplier = 11;
    let remainder;
    let digit; 

    for(let i = 0; i < 10; i++){
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    remainder = sum % 11;

    if(remainder < 2){
        digit = 0;
    } else {
        digit = 11 - remainder;
    }

    return digit === parseInt(cpf[10]);
}