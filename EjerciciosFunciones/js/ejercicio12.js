/*12. Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
informando si el estudiante aprobó o no la materia, para que la materia se de como
aprobada el promedio del estudiante debe ser mayor o igual a 3,0.*/

function aproboEstudiante(calificaciones){
    let aprobo = 0;
    let acumulado = 0;
    let acumuladoNotas = 0;
    for(let i = 0; i < calificaciones.length; i++){
        acumulado += calificaciones[i];
        acumuladoNotas += 1;
    };
    aprobo = (acumulado/acumuladoNotas);
    if(aprobo >= 3.0){
        return (`APROBO CON: ${aprobo}`);
    }
    return (`NO APROBO CON: ${aprobo}`);
};

let notas = [];
let notaEstudiante;
let numNota = 1;

do {
    notaEstudiante = parseFloat(prompt(`Ingrese la nota ${numNota} del estudiante: `));
    notas.push(notaEstudiante);
    numNota += 1;
} while (numNota <= 5);

alert(aproboEstudiante(notas))