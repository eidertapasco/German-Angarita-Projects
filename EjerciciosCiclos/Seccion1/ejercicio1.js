// 1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
// edad o no.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su edad: ', (edad) =>{
    edad = parseInt(edad);
    if (edad >= 18){
        console.log('Usted es mayor de edad.');
    }else if (edad >=  1 && edad < 18){
        console.log('Usted es menor de edad.');
    }else{
        console.log('Usted ingreso una edad invalida.');
    }
    rl.close();
});