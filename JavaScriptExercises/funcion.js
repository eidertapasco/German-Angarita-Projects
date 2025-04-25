/*
1. Calcular el factorial de un número: Crea una función que reciba un número entero positivo y devuelva su
factorial. Utiliza un ciclo para calcular el resultado.

n! = n.(n-1)
*/

let numero = 5;

function factor(num) {
    let resultado = 1; // El factorial empieza en 1
    while (num > 1) { // Mientras el número sea mayor que 1
        resultado *= num; // Multiplica el resultado por el número actual
        num -= 1; // Reduce el número
    }
    return resultado;
}

console.log(factor(numero)); // Salida esperada: 120