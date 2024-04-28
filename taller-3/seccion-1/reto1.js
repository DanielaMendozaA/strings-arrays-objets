const validateNames = function validateName(names){
   let regex = /^[a-z]+ [a-z]+$/
   return regex.test(names)
} 


const mydomain = "@myDomain.com"
const users = []
const keys = []

while(confirm("Do you want to insert an user?")){
    let input = prompt("Insert your full name (only two words)");
    if(input === null) {
        console.log("User cancelled the prompt.");
        break;
    }
    let fullnames = input.toLowerCase();
    if(!validateNames(fullnames)){
        alert("You should insert only two words and these shouldn't include special characters or numbers")
    }else{
        let namesSplit = fullnames.split(" ")
        
        let nameSlices = namesSplit.map(element => element.slice(0,3))
        
        let nameConcat = nameSlices.join("")
        
        let email = nameConcat + mydomain

        const user = {
            [nameConcat]: email
        }
        
        if(users.length > 0){
            let j = 0;
            users.forEach((userDB)=>{
                while(Object.keys(userDB).includes(nameConcat)){
                    j++;
                    nameConcat = nameConcat + j;
                    email = nameConcat + mydomain;
                }
                
            })
            const newUser = {
                [nameConcat]: email
            }
            users.push(newUser)
        }
        else{
            users.push(user)
        }
            
    }
    
    }

console.log(users);

 


