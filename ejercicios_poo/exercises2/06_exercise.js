// 6. Crear una clase Universidad con un atributo estático numEstudiantes y un
// método estático registrarEstudiante()

class Universidad {
    static numEstudiantes = 0;
  
    static registrarEstudiante() {
      Universidad.numEstudiantes++;
      console.log(`Estudiante registrado. Total: ${Universidad.numEstudiantes}`);
    }
  }