//creamos el objeto cuenta

const cuenta = {
    num_cuenta: '1234567',
    tipo_cuenta: 'Ahorros',
    propietario: 'Jhon E. Tapasco',
    banco: 'Bancolombia',
    saldo: 15000, //USD
    deposito(cantidad){
        this.saldo = this.saldo + cantidad
    },
    retiro(cantidad){
        this.saldo = this.saldo - cantidad
    }
    
}


//cuenta original
console.log(cuenta);
//cuenta despues de un deposito
cuenta.deposito(125)
console.log(cuenta);
//cuenta despues de un retiro
cuenta.retiro(2000);
console.log(cuenta);
