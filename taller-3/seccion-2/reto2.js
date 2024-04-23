const numberComma = function(notas){
    let regex = /^([0-5],)*[0-5]$/
    return regex.test(notas)
}

while(confirm("Do you want to validate your notes?")){

let notes = prompt("Enter notes separated by commas")

let valNumCom = numberComma(notes)

if(notes === null || !valNumCom){
    alert("You should insert at least one note, they should be only numbers from 0 to 5 separated by commas ")
}

let notesArray = notes.split(",")
notesArray = notesArray.map(num => parseInt(num))
while(notesArray.length === 1){
    alert("You should enter at least two notes separated by commas")
    notes = prompt("Enter notes separated by commas")

    notesArray = notes.split(",")
}

promNotes = notesArray.reduce((acum,num) => acum + num / notesArray.length, 0)


alert("The grade average is " + promNotes)

}

