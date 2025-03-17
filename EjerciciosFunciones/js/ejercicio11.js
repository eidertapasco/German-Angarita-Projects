/*11. Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20*/

//utilizamos math.random para generar un numero entre 0 y 1 excluyendo el 1
// utilizamos math.floor para generar el numero sin decimales

function numeroAleatorio(){
    let min = 1;
    let max = 20;
    let numero = Math.floor(Math.random()*(max - min + 1)) + min //para que vaya desde 1 hasta 20
    return numero;
};

console.log(numeroAleatorio());