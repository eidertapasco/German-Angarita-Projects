/*7. Dada la siguiente cadena “Programar es algo genial, todos deberían intentarlo, atrévete!” genere el
siguiente arreglo [“Programar es algo genial”, “todos deberían intentarlo”, “atrévete!”] usando el método
split.*/

let cadena = 'Programar es algo genial, todos deberían intentarlo, atrévete!';
const arreglo = cadena.split(", ");
console.log(arreglo);