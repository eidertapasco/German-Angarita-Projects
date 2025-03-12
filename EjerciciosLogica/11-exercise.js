//11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados

let dado1 = Math.floor(Math.random() * 6) + 1 //
let dado2 = Math.floor(Math.random() * 6) + 1
let resultado = dado1 +dado2

console.log(`El dado uno arrojo: ${dado1}`)
console.log(`El dado dos arrojo: ${dado2}`)
console.log(`La suma de los dados es: ${resultado}`)

//Math.random() genera numeros aleatorios entre 0 y 1 pero excluye el 1 ej: 0.15 , 0.99, 0.234 etc
//Math.floor() redonde los numeros decimales hacia abajo

/*Explicacion:
1. dado1 y dado2 son variables que van almacenar numeros entre 1 y 6
2. Math.random(vacia) es generar numeros entre o y 1 excluyendo siempre al 1
3. ese numero aleatorio generado por Math.random() lo multiplicamos por 6 arrojando un valor decimal eje: 2.5, 3.4, 2.9
4. con Math.floor redondeamos hacia abajo ese numero decimal para obtener un entero eje: 2, 3, 2
5. sumamos el numero 1*/ 