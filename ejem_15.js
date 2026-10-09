//Clases usando funciones
/*
class Persona{
String nombre;
int edad;

public Persona(String nombre, int e){
this.nombre = nombre;
edad = e;
}
}
*/

function Persona(nombre, edad){
this.nombre = nombre
this.edad = edad

this.saludar = function (){
    console.log('hola, soy ' + this.nombre)
}

}

let manolo = new Persona("Manolito", 22)
manolo.edad = 20
manolo.saludar()

Persona.prototype.gritar = function (){
    console.log("HOLA, SOY "+this.nombre)
}

manolo.gritar()