export default function isMajor(age){
    const dateOfBirth = new Date(age.value);
    if(!verifyAge(dateOfBirth)){
        age.setCustomValidity('O usuário é menor de idade.');
    }

}

function verifyAge(date){
    const todayDate = new Date();
    const isMajorThan18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return todayDate >= isMajorThan18;
}