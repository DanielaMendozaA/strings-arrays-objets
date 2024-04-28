// const numberComma = function(notas){
//     let regex = /^([0-5],)*[0-5]$/
//     return regex.test(notas)
// }

const numberComma = function(notas){
    let regex = /^(100|[1-9]?\d)(,(100|[1-9]?\d))*$/
    return regex.test(notas)
}

while(confirm("Do you want to validate your notes?")){

let notes = prompt("Enter notes separated by commas")

let valNumCom = numberComma(notes)

while(notes === null || !valNumCom){
    alert("You should insert at least two notes, they should be only numbers from 0 to 100 separated by commas ")
    notes = prompt("Enter notes separated by commas again")
    valNumCom = numberComma(notes)
}

let notesArray = notes.split(",")

while(notesArray.length === 1){
    alert("You should enter at least two notes separated by commas")
    notes = prompt("Enter notes separated by commas")
    valNumCom = numberComma(notes)
    notesArray = notes.split(",")
}

notesArray = notesArray.map(num => parseInt(num,10))
const promNotes = notesArray.reduce((acum,num) => acum + num / notesArray.length, 0)


alert("The grade average is " + promNotes)

}

