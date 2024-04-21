const arrayEventos = []

while(confirm("Desea ingresar un evento?")){

    let evento = prompt("Ingresa el nombre del evento")
    let fecha = prompt("Ingresa la fecha del evento")
    const eventos = {
        nombreEvento : evento,
        fechaEvento : fecha
    }
    arrayEventos.push(eventos)
}


flag = true
while(flag){

    let opcion = Number(prompt("desea buscar un usario ingrese 1 si no desea ingresar mas eventos"))
    if(opcion === 1){
        alert("Gracias por usarlo")
        flag = false
    }


    let buscar = prompt("Ingresa el nombre del evento que deseas buscar")
    arrayEventos.forEach(function(nombre){
        if(buscar === nombre.nombreEvento){
            alert("Nombre del evento: " + nombre.nombreEvento + ", Fecha del evento: " + nombre.fechaEvento)
        }
    })

}
console.log(arrayEventos)
