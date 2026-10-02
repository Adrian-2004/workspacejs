let datos = [ 'Pepe', 'Angel', 'Antonio', 'Daniel', 'Marta'
]
console.log(datos[1])
console.log(datos[datos.length-1])
console.log(datos.at(1))
console.log(datos.at(-1))
datos.push('Miguel')

for(let profe of datos){
    console.log(profe)
}

datos.forEach(trabaja )
function trabaja(P){
    console.log(P)
}

let valores =[4,6,2,7, -8, 2]
console.log( valores.filter(function param(p){
    return p >= 0
} ))

let nombre = ['Juan', 'Maria', 'Luz', 'Ana Belen', 'Rosario', 'Pio']

console.log(nombre.filter(moreThan4Chan))

function moreThan4Chan(l){
    return nombre.length > 4

}

console.log(nombre.filter(nombre=>nombre.length>4))
