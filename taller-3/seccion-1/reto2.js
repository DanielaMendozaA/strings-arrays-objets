const includeNum = function includeNumber (password){
    let valNum = false    
    let numbers = []
    for(let i = 0; i < 10; i++){
        numbers.push(i)
    }
    numbers.forEach(function(num){
         if(password.includes(num)){
            valNum = true
            return valNum
         }
    })
    return valNum
}

const includeAlpha = function includeAlphas (password){  
    let valAlpha = false
    let alpha = []
    for(let j = 65; j <= 90; j++){
        alpha.push(String.fromCharCode(j))
    } 
    for (let y = 97; y <= 122; y++){
        alpha.push(String.fromCharCode(y))
    }
    alpha.forEach(function(alpha){
        if(password.includes(alpha)){
            valAlpha = true
            return valAlpha
        }
    })
    return valAlpha
}

const includeCharacter = function includeCharac(password){ 
    let regex = /[!@#$%^&*()+=_\-{}\[\]:;"'?<>,.|\/\\~`]/;
    return regex.test(password)
}


while(confirm("Do you want to validate your password")){
    let passw = prompt("Insert your password here") 
    if(passw === null){
        alert("You shoul insert characters")
        break
    }
    const arrayError = []
    const errorSize = "Your password should have at least 8 characters"
    const errorNum = "Your password should have at least one number"
    const errorAlpha = "Your password should have at least one letter"
    const errorEChar = "Your password should have al least one special character"
    const message = "¡Secure Password!"
    let valiSize = (passw.length < 8) ? arrayError.push(errorSize) : null
    let valiNum = (includeNum(passw) === false) ? arrayError.push(errorNum) : null
    let valiAlpha = (includeAlpha(passw) === false) ? arrayError.push(errorAlpha) : null
    let valiEChar = (!includeCharacter(passw)) ? arrayError.push(errorEChar) : null

    if(valiSize === null && valiNum === null && valiAlpha === null && valiEChar === null){
        alert(message)
    }else{
        let str = ""
        arrayError.forEach(array => {str += array + "\n"})
        alert(str)
    }   
}




