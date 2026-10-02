function saludar(nombre="Anónimo"){

    console.log (`Hola ${nombre}, que tal estás?`)

}
saludar()
saludar("Juan")


function miFuncion(dato){}
miFuncion(5)
miFuncion(true)
miFuncion(5.2)
miFuncion("Antonio")
miFuncion({
    nombre:"Antonio",
    edad: 36,
    altura:1.9
})
miFuncion(function(a){return a*2})