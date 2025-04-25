// 1. Crear una clase Persona con un atributo nombre y un método caminar() que
// imprima un mensaje con el nombre.

class Persona{
    constructor(nombre){
        this.nombre = nombre //el nombre se le pasa al constructor
    }
    caminar(){
        this.nombre = `${this.nombre} esta caminando` //modificamos el nombre al caminar
    }
}

//creamos una instancia de la clase Persona
const persona1 = new Persona('Eider');
//Llamamos al método caminar() de esa instancia
persona1.caminar();

// Imprimimos el nombre de la persona después de caminar
console.log(persona1.nombre);




  


  

  

  


