/*22. Escriba un programa que calcule si un estudiante aprueba o reprueba con base en
tres notas. Usa tres funciones:
● calcularPromedio(notas): calcula el promedio de las tres notas.
● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.*/

function calcularPromedio(notas) {
    let sumaNotas = 0;
    let promedio = 0;
    let contador = 0;
    for(let i = 0; i < notas.length; i++){
        sumaNotas += notas[i];
        contador += 1;
    };
    promedio = (sumaNotas/contador);
    esAprobado(promedio);
};

function esAprobado(promedio) {
    if(promedio >= 6){
        mostrarResultado(true);
    }else{
        mostrarResultado(false);
    };
};

function mostrarResultado(aprobado) {
    if(aprobado){ //true
        console.log('El estudiante fue APROBADO.')
    }else{
        console.log('El estudiante NO FUE APROBADO.');
        
    };
};

let notas = [];
let cont = 1;

do {
    nota = parseFloat(prompt(`Ingrese la nota #${cont}`));
    notas.push(nota);
    cont += 1;
} while (cont <= 3);

calcularPromedio(notas);