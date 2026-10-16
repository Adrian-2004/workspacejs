//some(si alguno de los elementos cumple) y every (todos los elementos (MUST)) --->BOOLEANS

const notas= [2, 5, 8, 9]
const aprobado = notas.some(nota => nota >=5)
console.log(aprobado)
const suspenso = notas.every(nota => nota >=5)
console.log(suspenso)
