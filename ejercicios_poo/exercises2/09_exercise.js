// 9. Crear una clase Empleado y una subclase Gerente que sobrescriba un
// método trabajar()

class Empleado {
    trabajar() {
      console.log("El empleado está trabajando.");
    }
  }
  
  class Gerente extends Empleado {
    trabajar() {
      console.log("El gerente está supervisando el trabajo.");
    }
  }
  