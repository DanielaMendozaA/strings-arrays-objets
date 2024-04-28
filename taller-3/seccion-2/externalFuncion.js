//Permite validar que solo sea una palabra compuesta solo letras
export const validateName = function(names){
    let wordRegex = /^[a-zA-Z]+$/;
    return wordRegex.test(names)
}

//Permite validar que solo sean numeros positivos, pueden ser float
export const validateNumber = function(number){
    let numberRegex = /^\d*\.?\d+$/;
    return numberRegex.test(number)
}

//Permite validar que solo sean numeros enteros positivos
export const validateNumberInt = function(number){
    let numRegex = /^[0-9][0-9]*$/;
    return numRegex.test(number)
}
