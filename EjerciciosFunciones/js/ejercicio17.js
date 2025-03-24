/*17. Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
La idea es que los números recibidos se puedan operar según la operación que
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).*/

function numOperacion(num1, num2, cadena) {
    let resultado;
    switch (cadena) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num1 / num2;
            break;
        default:
            console.log('Operacion invalida para: ', cadena);
            break;
    };
    console.log(`${cadena}: ${resultado}`);
}

/*Pruebas*/

numOperacion(3,5,'suma');
numOperacion(3,5,'resta');
numOperacion(3,5,'multiplicacion');
numOperacion(3,5,'division');