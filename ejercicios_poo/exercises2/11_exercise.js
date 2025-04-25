//11. Crear una clase Vehiculo con un atributo privado modelo, un atributo público
//marca, y un método privado encenderMotor() que sea usado en el método
//público arrancar().

class Vehiculo {
    #modelo;
  
    constructor(marca, modelo) {
      this.marca = marca;
      this.#modelo = modelo;
    }
  
    #encenderMotor() {
      console.log(`El motor del ${this.#modelo} está encendido.`);
    }
  
    arrancar() {
      this.#encenderMotor();
      console.log(`${this.marca} ${this.#modelo} ha arrancado.`);
    }
  }
  