let persona1 = {
    nombre: "Pepe",
    edad:30,
    esCasado:false
}

console.log(persona1.edad)
console.log(persona1['edad'])

persona1.esCasado = true

console.table(persona1)
persona.altura = 1.8


console.table(persona1)
delete persona.altura

let coche1 = {
    marca : 'Citroen',
    estado :'parado',
    caracteristicas: {
        elevalunas :true,
        pinturaMetalizada : true,
        num_puertas : 4
    },
    arrancar: function (){
        this.estado = 'en movimiento'
    }
}

console.log(coche1.estado)
coche1.arrancar()
console.log(coche1.estado)

let producto = {
    nombre: 'Peras',
    info: {
        caducidad: '01/07/2027',
        peso: 1
    }
}
let producto2 = producto