let saludo = "hola"
let saludo2 = 'hola'
let saludo3 =`hola`

console.log(saludo3)

let entero = 73
let decimal = 3.141592
let negativo = -10

console.log(decimal)

let casada = false
casada = true

console.log(casada)

let nulo = null

console.log(nulo)

let noDefinido = undefined
console.log(noDefinido)

let cosa //undefined

console.log(cosa)


//JSON => JavaScript Object Notation
//objeto
let estudiante_manolo = {
    nombre:'manolo',
    edad :22,
    aprobado:false
}
/**
 * {
 * "nombre":"manolo",
 * "edad":22,
 * "aprobado":false
 * }
 */

//array
let enteros = [1,4,7,9]
//al js no ser tipado, se pueden hacer los arrays asi de mezclados, entre Stirngs, booleanos, enteros
//y objetos
let cosas = ['hola', false, 1,7,9,4,{nombre:'Jose', edad: 25}]

console.log(cosas[2])

//funciones

function saludo(){
    return 'Hola, que tal'
}

let saludob = ()=>{
    return 'Hola, que tal'
}

//biging
//symbol

let valor = 6
let valor_textual = String(valor)//"6"

let texto = '22'
let text_numero = Number(texto) //22