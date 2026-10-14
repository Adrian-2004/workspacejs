//Funciones de orden superior
//Dado un array de numeros queremos quedarnos solo con los positivos.

//programacion imperativa
const numeros = [2, -5, 3, 6, -1]
for(numero of numeros){
    if(numero > 0){
        console.log(numero)
    }
}
//programacion declarativa QUE
const resultado = numeros.filter( (numero) => numero>=0 )
console.log(resultado)

