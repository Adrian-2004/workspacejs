const nombres_alumnos = ['Ana','Juana','Laura','Rosario']
const index = nombres_alumnos.indexOf ('Laura')
console.log(index)

//join
const cadenaUnida = nombres_alumnos.join(';')
console.log(cadenaUnida)

//key, values, entries
const notas_globales = ['suspenso','aprobado','suspenso']
for(let key of notas_globales.keys()){
    console.log(key)
}
for(let key of notas_globales.values()){
    console.log(key)
}
for(let key of notas_globales.entries()){
    console.log(key)
}