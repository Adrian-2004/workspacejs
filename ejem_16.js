class Persona{

constructor (nombre, edad){
    this.nombre = nombre
    this.edad = edad

}
    saludar(){
        console.log("hola , soy "+this.nombre)
    }


}

let rosario = new Persona('rosarito', 30)
rosario.edad = 31
rosario.saludar()