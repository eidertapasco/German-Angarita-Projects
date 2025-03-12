/*3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.*/

const readline = require('readline');
const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer numero: ', (numero1) =>{
    rl.question('Ingrese el segundo numero: ', (numero2) =>{
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        if (numero1 > numero2){
            console.log(`El número #1 (${numero1}) es mayor que el numero #2 (${numero2})`);
        }else if (numero2 >numero1){
            console.log(`El número #2 (${numero2}) es mayor que el numero #1 (${numero1})`);
        }else{
            console.log(`El número #1 (${numero1}) es igual que el numero #2 (${numero2})`);
        }
        rl.close();
    });
});

