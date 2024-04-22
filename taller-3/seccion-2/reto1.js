const validateName = function(names){
    let wordRegex = /^[a-zA-Z]+$/;
    return wordRegex.test(names)
}

const validateDate = function(date){
    let dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    return dateRegex.test(date)
}


let keyDescription
let keyName
const addEvents = function(id,names, date, description){
    keyName = "Event " +  id
    keyDescription = "Description " + id
    const objEvent = {
        id : id,
        [keyName] : names,
        date: date,
        [keyDescription] : description
    }
    arrayEvents.push(objEvent)
}

const searchEvent = function(name){
    let found = false;
    arrayEvents.forEach(function(objNames){
        let arrayObj = Object.values(objNames)
        if(arrayObj[1].includes(name)){
            alert(JSON.stringify(objNames));
            found = true;
        }
    })
    if (!found) {
        alert("Event not found");
    }
}

const searchUpdateEvents = function(idUpdate){
    let objUpdate = arrayEvents.find(obj => obj.id === idUpdate)
    if(objUpdate){
        let keyToUp = Number(prompt("What value of the event do you want to update\n1.Name\n2.Date\n3.Description"))
        switch(keyToUp){
            case 1:
                let newName = prompt("Insert the new name for the event")
                while(!validateName(newName)){
                    newName = prompt("Insert a valid name for the event")
                }
                objUpdate[keyName] = newName
                break
            case 2:
                let newDate = prompt("Insert the new date for the event")
                while(!validateDate(newDate)){
                    newDate = prompt("Insert a valid date of the event in the format dd/mm/yyyy")
                }
                objUpdate.date = newDate
                break
            case 3:
                let newDescription = prompt("Insert the new description for the event")
                while(descriptionEvent === null || descriptionEvent.trim() === ""){
                    descriptionEvent = prompt("Insert a valid description for the event")
                }
                objUpdate[keyDescription] = newDescription
                break
            default:
                alert("Insert a valid number")

        }
    } else {
        alert("Invalid Id")
    }

}

const deleteEvent = function(idToDelet){
    let objDelet = arrayEvents.find(obj => obj.id === idToDelet)
    if(objDelet){
         arrayEvents = arrayEvents.filter(event => event.id !== idToDelet)
         alert("You delet the event")
    }else{
        alert("Invalid Id")
    }
}

let arrayEvents = []

let confirmar = true
do{
    alert("Welcome to the events system")
    let menu = Number(prompt("Enter the number that corresponds to the option you are going to make \n1.Add events \n2.Search events \n3.All events \n4.Update events \n5.Delete events \n6.Exit"))

    switch (menu) {

        case 1:
            alert("Add events")
            let id = 0
            while(confirm("Do you want to insert an event?")){
                let nameEvent = prompt("Insert a name for the event").toLowerCase()
                while(!validateName(nameEvent)){
                    nameEvent = prompt("Insert a valid name for the event")
                }
                let dateEvent = prompt("Insert the date of the event in the format dd/mm/yyyy")
                while(!validateDate(dateEvent)){
                    dateEvent = prompt("Insert a valid date of the event in the format dd/mm/yyyy")
                }
                let descriptionEvent = prompt("Insert a description for the event")
                while(descriptionEvent === null || descriptionEvent.trim() === ""){
                    descriptionEvent = prompt("Insert a valid description for the event")
                }
                id++
                addEvents(id,nameEvent,dateEvent,descriptionEvent)
            }
            break
        case 2:
            alert("Search events")
            while(confirm("Do you want to search an event?")){
                let nameSearch = prompt("Insert the name of the event you want to search")
                searchEvent(nameSearch)
            }
            break
        case 3:
            alert("All events")
            let str = ""
                arrayEvents.forEach(events => {str += JSON.stringify(events) + "\n"})
                alert(str)
            break
        case 4:
            alert("Update events")
            let idUpdate = Number(prompt("Insert the id of the event that you want to update"))
            searchUpdateEvents(idUpdate)

            break
        case 5:
            alert("Delete events")
            let idDelete = Number(prompt("Insert the id of the event that you want to delete"))
            deleteEvent(idDelete)
            break
        case 6:
            alert("Thanks for using our events system")
            confirmar = false
            break
        default:
            alert("Insert a valid number")

    }


}while(confirmar)


console.log(arrayEvents)