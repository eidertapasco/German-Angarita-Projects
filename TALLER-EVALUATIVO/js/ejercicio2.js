/*2. Cree una función que reciba como argumentos dos números y retorne el mayor de estos números,
luego haga el llamado a la función y guarde su valor de retorno en una variable e imprima ese valor por
consola.*/


function numeroMayor(number1, number2){
    if (number1 > number2){
        return number1;
    }else if(number2 < number1){
        return number2;
    }else{
        return 'iguales';
    }
}

let num1 = parseInt(prompt('Ingrese un numero: '));
let num2 = parseInt(prompt('ingrese un numero: '));

let mayorNum = numeroMayor(num1,num2);
console.log(`El mayor es: ${mayorNum}`);