// 10. Crear una clase base InstrumentoMusical con un método tocar() que debe
// ser implementado por las clases hijas.

class InstrumentoMusical {
    tocar() {
      throw new Error("El método 'tocar()' debe ser implementado por la subclase.");
    }
  }
  
  class Guitarra extends InstrumentoMusical {
    tocar() {
      console.log("La guitarra está sonando.");
    }
  }
  
  class Bateria extends InstrumentoMusical {
    tocar() {
      console.log("La batería está sonando.");
    }
  }
  
