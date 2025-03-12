/*1. Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y
retorne su área.*/

function areaRectangulo (base, altura){ //parametros
    let area = (base*altura);
    return area
};

alert("Programa para calcular la base de un rectangulo");

let baseRectangulo = parseFloat(prompt("Ingrese la base del rectangulo: ")); //argumeto 1
let alturaRectangulo= parseFloat(prompt("Ingrese la altura del rectangulo: ")); //argumento 2
alert(`El area del rectangulo es: ${areaRectangulo(baseRectangulo, alturaRectangulo)}`);