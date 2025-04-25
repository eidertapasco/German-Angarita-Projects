// 3. Crear una clase CuentaBancaria que tenga un saldo privado y métodos
// públicos para depositar y retirar dinero.

class CuentaBancaria {
    #saldo = 0;
  
    depositar(cantidad) {
      if (cantidad > 0) this.#saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.#saldo) this.#saldo -= cantidad;
    }
  
    obtenerSaldo() {
      return this.#saldo;
    }
  }