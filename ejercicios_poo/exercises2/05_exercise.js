// 5. Crear una clase base Vehiculo que tenga un constructor con parámetros de
// peso y velocidad máxima, e implemente un método mover() que imprima un
// mensaje genérico. Luego, crear dos subclases Carro y Bicicleta

class Vehiculo {
    constructor(peso, velocidadMaxima) {
      this.peso = peso;
      this.velocidadMaxima = velocidadMaxima;
    }
  
    mover() {
      console.log("El vehículo se está moviendo.");
    }
  }
  
  class Carro extends Vehiculo {
    mover() {
      console.log("El carro está conduciendo por la carretera.");
    }
  }
  
  class Bicicleta extends Vehiculo {
    mover() {
      console.log("La bicicleta está pedaleando por el carril bici.");
    }
  }