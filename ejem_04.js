let producto1 = {
    nombre: "peras",
    info:{
        caduciudad: "01/10/2027",
        peso:1
    }
}

let producto2 = producto1

producto1.nombre= "jose"

console.log(producto1.nombre)
console.log(producto2.nombre)

let producto3 = {...producto1}

producto3.nombre = "fresa"

console.log(producto1.nombre)
console.log(producto2.nombre)