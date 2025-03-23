/*13. Escriba una función que reciba un número entero y dicha función pueda determinar
si el número enviado es positivo o negativo.*/

function esNumero(numero){
    if(numero > 0){
        console.log(`El numero ${numero} es positivo.`);
    }else if(numero < 0){
        console.log(`El numero ${numero} es negativo.`);
    }else{
        console.log(`El numero ${numero} es neutro.`);
    };
};

let prueba1 = 0;
let prueba2 = 8;
let prueba3 = -6;

esNumero(prueba1);
esNumero(prueba2);
esNumero(prueba3);
