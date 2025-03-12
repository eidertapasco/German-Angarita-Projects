/*5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero para mirar si es par o impar: ', (numero) => {
    console.log('--------Condicionales---------');
    numero = parseInt(numero);
    if(numero%2 === 0){
        console.log(`El numero ${numero} es par.`);
    }else if (numero%2 != 0){
        console.log(`El numero ${numero} es impar.`);
    }else{
        console.log("Error, ingreso un valor invalido.");
    }

    console.log('--------Switch Case---------');

    switch (true){
        case numero%2 === 0:
            console.log(`El numero ${numero} es par.`);
            break;
        case numero%2 != 0:
            console.log(`El numero es ${numero} es impar`);
            break;
        default:
            console.log("Error, ingreso un valor invalido.");
            break;
    }
    rl.close();
});