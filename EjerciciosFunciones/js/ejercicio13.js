/*13. Escriba una función que reciba un número entero y dicha función pueda determinar
si el número enviado es positivo o negativo.*/


function esNumero(numero){
    if (numero > 0){
        return(`El numero ${numero} es Positivo.`);
    }else if(numero < 0){
        return(`El numero ${numero} es Negativo.`);
    }else{
        return(`El numero es cero ${numero}.`);
    };
};

let numPrueba = 23;
let numPrueba2 = -23;
let numPrueba3 = 0;

console.log(esNumero(numPrueba));
console.log(esNumero(numPrueba2));
console.log(esNumero(numPrueba3));