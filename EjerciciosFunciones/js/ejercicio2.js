/*2. Escriba una función que reciba el lado de un cubo y retorne su volumen.
formula: V = L**3*/

function volumenCubo (lado){
    let volumen = lado**3;
    return volumen
};

alert("Programa para calcular el volumen de un cubo");

let ladoCubo = parseFloat(prompt("Ingrese el tamaño de un lado del cubo: "));
alert(`El volumen del cubo es: ${volumenCubo(ladoCubo)}`);

