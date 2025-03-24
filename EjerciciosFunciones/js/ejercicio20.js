/*20. Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos
funciones:
● calcularArea(largo, ancho): calcula el área del rectángulo.
● calcularPerimetro(largo, ancho): calcula el perímetro.*/

function calcularArea(largo, ancho){
    let area = largo * ancho;
    return area;
};

function calcularPerimetro(largo, ancho){
    let perimetro = (2*(largo+ancho));
    return perimetro;
};


console.log(calcularArea(6,4));
console.log(calcularPerimetro(6,4));

console.log(calcularArea(8,3));
console.log(calcularPerimetro(8,3));
