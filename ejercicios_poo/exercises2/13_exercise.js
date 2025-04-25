// 13. Crear una clase Cliente con un atributo privado saldo y un método privado
// calcularDescuento() que se utilice dentro de un método público
// aplicarDescuento()

class Cliente {
    #saldo;
  
    constructor(saldo) {
      this.#saldo = saldo;
    }
  
    #calcularDescuento() {
      return this.#saldo > 1000 ? 0.1 : 0.05;
    }
  
    aplicarDescuento() {
      const descuento = this.#calcularDescuento();
      this.#saldo -= this.#saldo * descuento;
      console.log(`Descuento aplicado. Nuevo saldo: ${this.#saldo}`);
    }
  }
  