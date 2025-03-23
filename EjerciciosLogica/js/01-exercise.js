/*1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let userName = prompt("¿Cual es tu nombre?: ")
let userAge = parseInt(prompt("¿Cual es tu edad actual?: ")) //20
let ageFuture = parseInt(prompt("Ingresa los años que quieres calcular: ")) //15
let totalAge = userAge+ageFuture

alert(`Señor (a) ${userName} su edad dentro de ${ageFuture} años sera de ${totalAge} años`) //alt + 96

//parseInt 20
//parseFloat 25.2
//prompt: solo para pedir datos al usuario por teclado
//parseInt: convierte un string o un flotante a un numero entero