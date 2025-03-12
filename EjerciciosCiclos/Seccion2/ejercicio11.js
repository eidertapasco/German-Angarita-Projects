/*11. Cree un programa que muestre el promedio de n números, dejándose de solicitar números
cuando se introduzca el cero.*/

let numero = 0;
let promedio = 0;
let contador = 0;

do {
    numero = parseFloat(prompt('Ingrese numeros para sacar su promedio y 0 para salir: '));
    promedio += numero;
    if (numero != 0){
        contador += 1;
    }
} while (numero != 0);

promedio = (promedio/contador);
alert(`El promedio de los numeros es de: ${promedio}`);