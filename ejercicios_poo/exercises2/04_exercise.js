// 4. Crear una clase base Animal con un método hacerSonido(), y dos subclases
// Perro y Gato que sobrescriban el método.

class Animal {
    hacerSonido() {
      console.log("El animal hace un sonido.");
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      console.log("¡Guau!");
    }
  }
  
  class Gato extends Animal {
    hacerSonido() {
      console.log("¡Miau!");
    }
  }
  