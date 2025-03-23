/*1. Dado el siguiente algoritmo:
let edad = 21;
if (edad == 15){
 console.log("Tiene 15");
}
if (edad == 20){
 console.log("Tiene 20");
}
if (edad == 30){
 console.log("Tiene 30");
}
if (edad != 15 && edad != 20 && edad != 30){
 console.log("Introduzca una edad válida");
}
realice el mismo algoritmo usando otra estructura de control más conveniente*/

let edad = 21;
if(edad != 15 && edad != 20 && edad != 30){
    console.log('Introduzca una edad valida')
}else{
    console.log(`Tiene ${edad}`);
}