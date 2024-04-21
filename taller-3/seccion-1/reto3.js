const validateArroa = function(array){
    let valEmail = true
    if(array.length !== 2){
        return valEmail = false
    }      
    return valEmail   
    
}

const validaWhiteSpaces = function(email){
    let valWhite = true
    if(email.includes(" ")){
        return valWhite = false
    }
    return valWhite
}


const validateOrder = function(array){
    let valOrder = true
    if(array.length === 2) {
        if(array[1].startsWith(".") || !array[1].includes(".")){
            return valOrder = false
        } 
    }
    return valOrder
}

while(confirm("Do you want to validate an email?")){
    let errorArray = []
    const errorArroa = "Your email should contain only one @ or it doesn't contain @"
    const errorWhite = "Your email contains white spaces"
    const errorOder = "Your domain shouldn't start with dot or it doesn't contain a dot"
    let email = prompt("Insert your email here")
    let splitArroa = email.split("@")
    if(email === null){
        alert("You should insert an email")
        break
    }
    let valArroa = (validateArroa(splitArroa) === false) ? errorArray.push(errorArroa) : null
    let valWhite = (validaWhiteSpaces(email) === false) ? errorArray.push(errorWhite) : null
    let valOrder = (validateOrder(splitArroa) === false) ? errorArray.push(errorOder) : null
    if(valArroa === null && valWhite === null && valOrder === null){
        alert("Your email is right")
    }else{
        let str = ""
        errorArray.forEach(array => {str += array + "\n"})
        alert(str)
    }
}