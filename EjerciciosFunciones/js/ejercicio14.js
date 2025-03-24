/*14. Escriba una función la cual permita o no la entrada a un parque de atracciones,
dicha función recibe la edad, estatura y permiso parental como parámetros. Para
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
en caso de ser menor de edad debe contar con un permiso parental para que sea
concedido el acceso.*/

function entradaParque(edad,estatura,permiso){
    if(edad >= 18 && estatura > 150){
        console.log(`Edad: ${edad}, Estatura: ${estatura} PERMISO CONCEDIDO`);
    }else if(edad < 18){ //si es menor de edad puede medir menos de 150cm 
        if(permiso != 's' && permiso != 'S'){
            console.log('Permiso denegado, es menor de edad y NO tiene permiso parental o ingreso un campo invalido.');
        }else{
            console.log(`Edad: ${edad}, Estatura: ${estatura} PERMISO CONCEDIDO POR PERMISO PARENTAL`);
        };
    }else{
        console.log(`Lo sentimos no cumple con los requisitos minimos de entrada edad: ${edad}, estatura: ${estatura}.`);
    };
};

let permiso;
let edad = parseInt(prompt('Ingrese su edad: '));
if(edad < 18){
    permiso = prompt('Usted es menor de edad, ¿Tiene permiso parental? (S/N): ');
}
let estatura = parseFloat(prompt('Ingrese su estatura: '));


entradaParque(edad, estatura, permiso);