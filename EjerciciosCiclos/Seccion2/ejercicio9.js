//9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
//S el programa se detendrá, de lo contrario continuará ejecutándose.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar() {
    rl.question('¿Desea salir del programa? (S/N): ', (respuesta) => {
        if (respuesta === 's' || respuesta === 'S') {
            console.log('Saliendo del programa...');
            rl.close(); // Cierra la interfaz readline
        } else {
            console.log('Continuando...');
            preguntar(); // Vuelve a preguntar
        }
    });
}

// Inicia el programa
preguntar();