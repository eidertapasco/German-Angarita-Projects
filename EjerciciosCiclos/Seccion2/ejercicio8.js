//8. Cree un programa que muestre los números impares entre 1 y n.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero cualquiera: ', (numero) => {
    numero = parseInt(numero);
    if(numero < 1){
        console.log(`Lo sentimos pero el numero ingresado ${numero} es menor a 1.`);
    }else{
        let inicio = 1
        while (inicio <= numero){
            if(inicio%2 != 0){
                console.log(`Numero Impar: ${inicio}`);
            }
            inicio += 1;
        };
    };
    rl.close();
});