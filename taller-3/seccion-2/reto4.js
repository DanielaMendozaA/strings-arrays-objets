import {validateName} from './externalFuncion.js'
import {validateNumber} from './externalFuncion.js'
import {validateNumberInt} from './externalFuncion.js'

const whileName = function(value){
    while(!validateName(value) || value == 0){
        alert("You should insert only a word with only letters")
        value = prompt("Insert the name product again")
    }
    return value
}

const whileNumber = function(value){
    while(!validateNumber(value) || value == 0){
        alert("You should insert a positives number that they are only numbers")
        value = Number(prompt("Insert the value again"))
    }
    return value
}

const whileNumerInt = function(value){
    while(!validateNumberInt(value) || value == 0){
        alert("You should insert a positive integer")
        value = Number(prompt("Insert the product quantity again"))
    }
    return value
}

const whileDescription = function(value){
    while(value === null || value.trim() === ""){
        value = prompt("Insert a valid description for the product")
    }
    return value
}

const addProduct = function(id,name,price,quianty,description){
    const product = Object.assign({},{
        id,
        name,
        price,
        quianty,
        description
    })
    arrayDB.push(product)
}

const duplicateProduct = function(idSearch){
    let idDuplicate = arrayDB.find(obj => obj.id === idSearch)
    
    if(idDuplicate){
        let contCopy = 1
        let newDuplicate = structuredClone(idDuplicate)
        newDuplicate.id = ++id
        newDuplicate.name += " copy" 
        arrayDB.forEach(function(product){
            if(product.name == `${newDuplicate.name} ${contCopy}`){
                contCopy++
            }
        })
        newDuplicate.name += ` ${contCopy}`
        arrayDB.push(newDuplicate)

    }else{
        alert("Id not found")
    }
}

const searchProduct = function(searchName){
    let nameFound = arrayDB.find(names => names.name === searchName)
    if(nameFound){
        alert(JSON.stringify(nameFound))
    }else{
        alert("Name not found")
    }
}

const searchProductRange = function(min,max){
    if(min < max){
        let arrayRange = arrayDB.filter(obj => obj.price >= min && obj.price <= max)
        if(arrayRange.length === 0){
            alert("There aren't products in that price range")
        }else{
            let str = ""
            arrayRange.forEach(range => str += JSON.stringify(range) + "\n" )
            alert(str)
        }
    }else{
        alert("The minimum value must be less than the maximum")
    }
}

const updateProduct = function(idUpdate){
    let objUpdate = arrayDB.find(obj => obj.id === idUpdate)
    if(objUpdate){
        let update = Number(prompt("What value of the product do you want to update?\n1.Name\n2.Price\n3.Quianty\n4.Description"))
        switch(update){
            case 1:
                let newName = prompt("Insert the new name for the product")
                whileName(newName)
                objUpdate.name = newName
                break
            case 2:
                let newPrice = Number(prompt("Insert the new price for the product"))
                whileNumber(newPrice)
                objUpdate.price = newPrice
                break
            case 3:
                let newQuianty = Number(prompt("Insert the new quianty for the product"))
                whileNumerInt(newQuianty)
                objUpdate.quianty = newQuianty
                break
            case 4:
                let newDescription = prompt("Insert the new description for the product")
                whileDescription(newDescription)
                objUpdate.description = newDescription
                break
            default:
                ("Invalid number")

        }

    }else{
        alert("Invalid id")
    }
}

const deleteProduct = function(idDelete){
    let idFound = arrayDB.find(obj => obj.id === idDelete)
    if(idFound){
        arrayDB = arrayDB.filter(obj => obj.id !== idDelete)
    }else{
        alert("Id not found")
    }

}

const producExistence = function(nameSearch){
    let nameFound = arrayDB.find(obj => obj.name === nameSearch)
    if (nameFound){
       if(nameFound.quianty === 0){
            alert("There is not enough quantity to sell this product")
       }else{
            alert(JSON.stringify(nameFound))
       }
    }else{
        alert("the name of the product not found")
    }
}

const sellProduct = function(idSell){
    let idFound = arrayDB.find(obj => obj.id === idSell)
    if(idFound){
        let cantSell = Number(prompt("Insert the quantity that you want to sell"))
        whileNumber(cantSell)
        if(idFound.quianty < cantSell){
            alert("There is not enough quantity to sell this product")
        }else{
            idFound.quianty -= cantSell
            alert(`The total price is ${idFound.price * cantSell}`)
        }
    }else{
        alert("Invalid id")
    }

}

const buyProduct = function(idBuy){
    let idFound = arrayDB.find(obj => obj.id === idBuy)
    if(idFound){
        let cantBuy = Number(prompt("Insert the quantity that you want to buy"))
        whileNumber(cantBuy)
        idFound.quianty += cantBuy
        alert(`The total price is ${idFound.price * cantBuy}`)
        
    }else{
        alert("Invalid id")
    }

}

const totalInvetory = function (){
    let totInv = arrayDB.reduce((acum,obj) => acum + obj.price * obj.quianty,0)
    alert(totInv)
}

const orderProductsAsce = function(){
    const opSort = Number(prompt("Insert the opcion wich you want to order\n1.Name\n2.Price\n.3.quantity"))
            switch(opSort){
                case 1:
                    arrayDB.sort((a,b) => {
                        return a.name.localeCompare(b.name)
                    })
                    let str = ""
                    arrayDB.forEach(function (obj) { str += JSON.stringify(obj) + "\n"} )
                    alert(str)
                    break
                case 2:
                    arrayDB.sort((a,b) => {
                        return a.price - b.price
                    })
                    let str1 = ""
                    arrayDB.forEach(function (obj) { str1 += JSON.stringify(obj) + "\n"} )
                    alert(str1)
                    break
                case 3:
                    arrayDB.sort((a,b) => {
                        return a.quianty - b.quianty
                    })
                    let str2 = ""
                    arrayDB.forEach(function (obj) { str2 += JSON.stringify(obj) + "\n"} )
                    alert(str2)

            }

}

const orderProductsDesc= function(){
    const opSort = Number(prompt("Insert the opcion wich you want to order\n1.Name\n2.Price\n3.quantity"))
            switch(opSort){
                case 1:
                    arrayDB.sort((a,b) => {
                        return b.name.localeCompare(a.name)
                    })
                    let str = ""
                    arrayDB.forEach(function (obj) { str += JSON.stringify(obj) + "\n"} )
                    alert(str)
                    break
                case 2:
                    arrayDB.sort((a,b) => {
                        return b.price - a.price
                    })
                    let str1 = ""
                    arrayDB.forEach(function (obj) { str1 += JSON.stringify(obj) + "\n"} )
                    alert(str1)
                    break
                case 3:
                    arrayDB.sort((a,b) => {
                        return b.quianty - a.quianty
                    })
                    let str2 = ""
                    arrayDB.forEach(function (obj) { str2 += JSON.stringify(obj) + "\n"} )
                    alert(str2)

            }

}

const findBlackList = function (){
    const blacklist = ["engaño", "frustracion", "horrible", "idiota", "estupido","mentira", "feo","frustrado", "incomodo", "insulto", "odio"]
    arrayDB.forEach(function(obj){
        let isObjBlack = false
        let newDescriptionarray = []
        let charDesc = obj.description
        let cadChar = charDesc.split(" ")
        cadChar.forEach(function(word){
            if(blacklist.includes(word)){
                word = "*"
                newDescriptionarray.push(word)
                isObjBlack = true
            }else{
                newDescriptionarray.push(word)
            }
        })
        let newDescription = newDescriptionarray.join(" ")
        obj.description = newDescription
        if(isObjBlack == true){
            let newObj = Object.assign({},obj)
            objBlackList.push(newObj)
        }
    })
}

const showBlackList = function(){
    let str = ""
    objBlackList.forEach(obj => str += JSON.stringify(obj) + "\n")
    alert(str)
}

const inventory = function(){
    let totalQuanty = arrayDB.reduce((totalQ, productQ) =>{
        return totalQ + productQ.quianty
    },0)
    let totalInventory = arrayDB.reduce((total,product) =>{
        return total + (product.price * product.quianty)
    },0)
    let averagePrice = arrayDB.reduce((acum, productP) => {
        return acum + productP.price  / arrayDB.length

    },0)   
    let moreExpen = arrayDB.filter(obj => {
        return obj.price > averagePrice
    })
    let cheaper = arrayDB.filter(obj => {
        return obj.price < averagePrice
    })
    let averageQuan = arrayDB.reduce((acum, productQ) => {
        return acum + productQ.quianty / arrayDB.length

    },0)   
    let moreQuanty = arrayDB.filter(obj => {
        return obj.quianty > averageQuan
    })
    let lessQuanty = arrayDB.filter(obj => {
        return obj.quianty < averageQuan
    })

    alert(`Total quantity of the products ${totalQuanty}`)
    alert(`Total inventory: ${totalInventory}`)

    alert(`The average price is: ${averagePrice}`)
    let str = ""
    moreExpen.forEach(obj => str += JSON.stringify(obj) + "\n")
    alert(`Above average products are: ${str}`)
    let str1 = ""
    cheaper.forEach(obj => str1 += JSON.stringify(obj) + "\n")
    alert(`Below average products are: ${str1}`)

    alert(`The average quantity is: ${averageQuan}`)
    let str2 = ""
    moreQuanty.forEach(obj => str2 += JSON.stringify(obj) + "\n")
    alert(`Above average quantity are: ${str2}`)
    let str3 = ""
    lessQuanty.forEach(obj => str3 += JSON.stringify(obj) + "\n")
    alert(`Below average quantity are: ${str3}`)

    alert(`The quantity of the products with bad words are: ${objBlackList.length}`)
    showBlackList()

    

}

let objBlackList = []
let arrayDB = []
let continuar = true
let id = 0
do{
    let menu = Number(prompt("Please write the number corresponding to the option you want to make\n1.Add product\n2.Duplicate product \n3.All products\n4.Search product by name\n5.Search product by range\n6.Update product\n7.Delete products\n8.Existence of the product\n9.Sell product\n10.Buy products\n11.Total inventory\n12.Order products ascending\n13.Order products descending\n14.General product report\n15.Show Black List\n16.Exit "))
    switch(menu){
        case 1:
            alert("Add product")
            while(confirm("Do you want to add a product?")){
                let namProd = prompt("Insert the name of the product")
                namProd = whileName(namProd)
                namProd = namProd.toLowerCase()
                let pricProd = Number(prompt("Insert the price of the product"))
                pricProd = whileNumber(pricProd)
                let cantProd = parseInt(prompt("Insert the product quantity"))
                cantProd = whileNumerInt(cantProd)
                let descProd = prompt("Insert a description for the product")
                descProd = whileDescription(descProd)
                descProd = descProd.toLowerCase().trim()
                id ++
                addProduct(id, namProd, pricProd, cantProd, descProd)
                findBlackList()

                alert("good job")
            }
            break
        case 2:
            alert("Duplicate products")
            let idSearch = Number(prompt("Insert the id of the product that you want to duplicate"))
            duplicateProduct(idSearch)
            break
            
        case 3:
            alert("All products")
            let str = ""
            arrayDB.forEach(function(obj) {str += JSON.stringify(obj) + "\n"} )
            alert(str)
            break

        case 4:
            alert("Search product by name")
            while(confirm("Do you want to search a product")){
                let nameSearch = prompt("Inser the name of the product that you want to search")
                nameSearch = nameSearch.toLowerCase().trim()
                searchProduct(nameSearch)
            }
            break

        case 5:
            alert("Search product by range")
            let rangeMin = Number(prompt("Enter the minimum value searched"))
            whileNumber(rangeMin)
            let rangeMax = Number(prompt("enter the maximum value searched"))
            whileNumber(rangeMax)
            searchProductRange(rangeMin,rangeMax)
            break

        case 6:
            alert("Update product")
            let idUpdate = Number(prompt("Inser the id of the product that you want to update"))
            updateProduct(idUpdate)
            break
        
        case 7:
            alert("Delete products")
            let idDelete = Number(prompt("Insert the id of the product that you want to delete"))
            deleteProduct(idDelete)
            break

        case 8:
            alert("existence of a product")
            let nameToSearch = prompt("Insert the name of the product that you want to see")
            nameToSearch = nameToSearch.toLowerCase().trim()
            producExistence(nameToSearch)
            break
        
        case 9:
            alert("Sell product")
            let idSell = Number(prompt("Insert the id of the product that you want to sell"))
            sellProduct(idSell)
            break

        case 10:
            alert("Buy product")
            let idBuy = Number(prompt("Insert the id of the profuct that you want to buy"))
            buyProduct(idBuy)
            break
        
        case 11:
            alert("Total inventory")
            totalInvetory()
            break

        case 12:
            alert("Order products ascending")
            orderProductsAsce()
            break

        case 13:
            alert("Order products descending")
            orderProductsDesc()
            break

        case 14:
            alert("General product report")
            inventory()
            break

        case 15:
            showBlackList()
            break

        case 16:
            alert("Thanks for using our system")
            continuar = false
            break
        
        default:
            alert("Invalid number")
    }

}while(continuar)