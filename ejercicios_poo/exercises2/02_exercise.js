// 2. Crear una clase Contador con un atributo estático cuenta y un método
// estático incrementar() que aumente el valor de cuenta

class Contador{
    static cuenta = 0; //Atributo estático
    static incrementar(){
        Contador.cuenta++;
    }
}

//Llamamos al método estatico incrementar() sin crear una instancia
Contador.incrementar();

// Imprimimos el valor de 'cuenta' después de incrementarlo
console.log(Contador.cuenta);  // Esto imprimirá: 1

// Llamamos nuevamente al método para incrementar el valor
Contador.incrementar();

// Imprimimos el valor de 'cuenta' después de incrementarlo nuevamente
console.log(Contador.cuenta);  // Esto imprimirá: 2