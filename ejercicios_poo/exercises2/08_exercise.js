// 8. Crear una clase Empleado con atributos nombre y salario. Que implemente
// un método trabajar(). Implemente encapsulación.

class Empleado {
    #nombre;
    #salario;
  
    constructor(nombre, salario) {
      this.#nombre = nombre;
      this.#salario = salario;
    }
  
    trabajar() {
      console.log(`${this.#nombre} está trabajando.`);
    }
  
    get salario() {
      return this.#salario;
    }
  
    set salario(nuevoSalario) {
      if (nuevoSalario > 0) this.#salario = nuevoSalario;
    }
  }
  