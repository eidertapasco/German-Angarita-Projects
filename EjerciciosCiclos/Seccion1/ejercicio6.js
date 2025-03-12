/*6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero para saber si es divisible entre 5: ', (num) => {
    console.log("---------Condicionales----------");
    num = parseInt(num);
    if (num%10 == 0 || num%10 == 5){
        console.log(`El numero ${num} Si es divisible entre 5.`);
    }else{
        console.log(`El numero ${num} No es divisible entre 5.`);
    }

    console.log("---------Switch Case----------");
    switch (true) {
        case num%10 == 0 || num%10 == 5:
            console.log(`El numero ${num} Si es divisible entre 5.`);
            break;
        default:
            console.log(`El numero ${num} No es divisible entre 5.`);
            break;
    }
    rl.close();
});