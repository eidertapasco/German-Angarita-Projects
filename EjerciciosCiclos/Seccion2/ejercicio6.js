//6. Cree un programa que calcula la suma de los primeros n números naturales.

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
        let acumulador = 0;
        while (inicio <= naturales){ // 1 hasta 5
            acumulador = acumulador + inicio;
            inicio += 1;
        };
        console.log(`Suma de los numeros naturales: ${acumulador}`);
    };
    rl.close();
});
