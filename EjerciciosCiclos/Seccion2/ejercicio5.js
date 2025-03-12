//5. Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.
//contol + ñ
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', (naturales) => {
    naturales = parseInt(naturales);
    if(naturales < 1){
        console.log('Los numeros negativos no son numeros naturales, y el cero es un numero neutro.');
    }else{
        let inicio = 1;
        while (inicio <= naturales){
            console.log(`Numero: ${inicio}`);
            inicio += 1;
        };
    };
    rl.close();
});