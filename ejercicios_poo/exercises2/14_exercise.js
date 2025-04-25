// 14. Crear una clase Producto con un atributo privado precio y métodos públicos
// setPrecio() y getPrecio() para acceder y modificar el precio.

class Producto {
    #precio;
  
    constructor(precio) {
      this.#precio = precio;
    }
  
    setPrecio(nuevoPrecio) {
      if (nuevoPrecio > 0) this.#precio = nuevoPrecio;
    }
  
    getPrecio() {
      return this.#precio;
    }
  }
  