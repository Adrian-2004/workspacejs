const datos = [6, -2, 7, -7, 5]

const numsDuplicados = datos
    .filter((num) => num>0)
    .map((num) => num*2)
console.log(numsDuplicados)