/*12. Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
informando si el estudiante aprobó o no la materia, para que la materia se de como
aprobada el promedio del estudiante debe ser mayor o igual a 3,0.*/

function aproboEstudiante(calificaciones){
    let aprobo = 0;
    let acumulado = 0;
    for(let i = 0; i < calificaciones.length; i++){
        acumulado += i;
    };
    aprobo = (acumulado/calificaciones.length);
    if(aprobo >= 3.0){
        return ('APROBO');
    }else{
        return ('NO APROBO');
    };
};

let notas = [];
let notaEstudiante;
let numNota = 1;

do {
    notaEstudiante = parseFloat(prompt(`Ingrese la nota ${numNota} del estudiante: `));
    notas.push(notaEstudiante);
    numNota += 1;
} while (numNota <= 5);

console.log(aproboEstudiante(notas))