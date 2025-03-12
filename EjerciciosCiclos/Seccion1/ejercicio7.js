/*7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero entre 1 y 15: ', (valorNumero) => {
    console.log("---------Condicionales----------");
    let esPrimo = true;
    if (valorNumero > 15){
        console.log('Error, el numero ingresado no esta en el rango de 1 a 15.');
    }else{
        valorNumero = parseInt(valorNumero);
        if(valorNumero <= 1){
            console.log(`El numero ${valorNumero} No es un numero primo porque es menor o igual a 1.`);
        }else{
            for(i = 2; i < valorNumero; i++){
                if(valorNumero%i === 0){
                    esPrimo = false; //si es divisible por otro numero no es primo
                    break;
                };
            };
        };

        if (esPrimo){//true
            console.log(`El numero ${valorNumero} Si es un numero primo`); 
        }else{
            console.log(`El numero ${valorNumero} No es un numero primo`);
        }
    }
    

    console.log("---------Switch Case----------");

    if (valorNumero > 15){
        console.log('Error, el numero ingresado no esta en el rango de 1 a 15.');
    }else{
        switch (true) {
            case valorNumero <= 1:
                console.log(`El numero ${valorNumero} No es un numero primo porque es menor o igual a 1.`);
                break;
            default:
                for(i = 2; i < valorNumero; i++){
                    if(valorNumero%i === 0){
                        esPrimo = false;
                        break;
                    };
                };
            if (esPrimo){//true
                console.log(`El numero ${valorNumero} Si es un numero primo`); 
            }else{
                console.log(`El numero ${valorNumero} No es un numero primo`);
            }
            break;
        }
    }
    rl.close();
});