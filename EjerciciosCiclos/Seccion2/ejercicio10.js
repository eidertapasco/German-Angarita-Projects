//10.Cree un programa que calcule el promedio de 10 números.

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
rl.question('', () => {})
});*/

let numeros;
let inicio = 1;
let promedio;

do {
    numeros += parseInt(prompt(`Ingrese el numero #${inicio}: `));
    inicio += 1;
} while (inicio <= 10);
document.write(`El promedio total de los 10 numeros es: ${numeros/10}`)