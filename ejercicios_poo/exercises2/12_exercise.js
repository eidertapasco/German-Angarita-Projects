//12. Crear una clase Escuela con un atributo estático numEstudiantes que se
//incremente cada vez que se cree un nuevo objeto Estudiante

class Escuela {
    static numEstudiantes = 0;
  }
  
  class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      Escuela.numEstudiantes++;
    }
  }
  