//4. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.

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