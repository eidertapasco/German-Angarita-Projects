//4. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.

// const readline = require('readline');

// // Crear la interfaz readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Función para calcular el promedio de tres notas
// function promedioEstudiante(nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3) / 3;
// }

// // Función principal
// function main() {
//     rl.question('Ingrese la cantidad de estudiantes a evaluar: ', (cantEstudiantes) => {
//         cantEstudiantes = parseInt(cantEstudiantes);

//         if (cantEstudiantes < 1) {
//             console.log('La cantidad de estudiantes no es válida. Ingrese al menos uno.');
//             rl.close();
//             return;
//         }

//         // Array para almacenar los promedios de los estudiantes
//         let promedios = [];

//         // Función recursiva para ingresar las notas de cada estudiante
//         const ingresarNotas = (index) => {
//             if (index > cantEstudiantes) {
//                 // Si ya se ingresaron todos los estudiantes, mostrar los promedios
//                 console.log('\nPromedios de los estudiantes:');
//                 promedios.forEach((promedio, i) => {
//                     console.log(`El promedio del estudiante ${i + 1} es: ${promedio.toFixed(2)}`);
//                 });
//                 rl.close();
//                 return;
//             }

//             console.log(`\nIngresando notas para el estudiante ${index}:`);

//             // Array para almacenar las notas del estudiante actual
//             let notas = [];

//             // Función recursiva para ingresar las tres notas
//             const ingresarNota = (j) => {
//                 if (j > 3) {
//                     // Si ya se ingresaron las tres notas, calcular el promedio
//                     let promedio = promedioEstudiante(notas[0], notas[1], notas[2]);
//                     promedios.push(promedio);
//                     console.log(`Promedio del estudiante ${index}: ${promedio.toFixed(2)}`);
//                     // Pasar al siguiente estudiante
//                     ingresarNotas(index + 1);
//                     return;
//                 }

//                 rl.question(`Ingrese la nota #${j}: `, (nota) => {
//                     nota = parseFloat(nota);
//                     if (isNaN(nota)) {
//                         console.log('Por favor, ingrese un número válido.');
//                         ingresarNota(j); // Volver a solicitar la misma nota
//                     } else {
//                         notas.push(nota); // Almacenar la nota
//                         ingresarNota(j + 1); // Pasar a la siguiente nota
//                     }
//                 });
//             };

//             // Comenzar a ingresar las notas para el estudiante actual
//             ingresarNota(1);
//         };

//         // Comenzar el proceso con el primer estudiante
//         ingresarNotas(1);
//     });
// }

// // Ejecutar la función principal
// main();


function promedioEstudiante(totalNota) {
    return (totalNota) / 3; //4.233333
}
let nota;
let promEstudiante = 0;
let promTotal = 0;

let cantEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: "));//3
if (cantEstudiantes >= 1){ 
    for(let i = 1; i <= cantEstudiantes; i++){
        nota = 0;
        for(let j = 1; j <= 3; j++){
            nota += parseFloat(prompt(`Ingrese la nota #${j} para el estudiante ${i}.`)); // 5.3 3.2 4.2 
        };
        promEstudiante = promedioEstudiante(nota); //12.7
        alert(`El promedio del estudiante #${i} es de: ${promEstudiante}`);
        promTotal += promEstudiante;
    };
    promTotal = promTotal/cantEstudiantes;
    alert(`El promedio de todos los estudiantes es: ${promTotal}`);
}else{
    alert('La cantidad de estudiantes es invalida.');  
}