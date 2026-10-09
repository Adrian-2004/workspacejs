//herencia

class Persona{

constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

}

class Alumno extends Persona{
    static maxNumAlumnos = 7
    static {
        //inicializacion estatica
        console.log('inicio estatico')
    }
    #notaPorDefecto =4
constructor(nombre, edad, nota){
    super(nombre, edad)
    this.nota= nota + this.#notaPorDefecto
}
}

let estudiante1 = new Alumno("Pedrito", 25, 7)
estudiante1.nota
//estudiante1.#notaPorDefecto

console.log(estudiante1 instanceof Alumno)
console.log(estudiante1 instanceof Persona)
console.log(estudiante1 instanceof Object)
console.log(estudiante1 instanceof Array)