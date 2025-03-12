/*require('readline') carga un módulo llamado readline en Node.js.
readline es una herramienta que nos permite leer y escribir en la consola.*/
const readline = require('readline'); 

//readline.createInterface({ input: process.stdin, output: process.stdout }) crea un canal de comunicación con la consola.
const rl = readline.createInterface({
    input: process.stdin, //lee lo que el usuario escriba
    output: process.stdout //muestra en pantalla los resultados
});

//rl.question() es una función que hace una pregunta al usuario.
//Cuando el usuario responde, su respuesta se guarda en la variable.
//Luego, ejecuta la función de flecha (variable) => {...} para procesar la respuesta.
rl.question('pregunta', (variable) => {
    rl.question('pregunta', (variable) =>{
        logica = intruccionesLogicas //procesamos datos
        console.log(`${resultados}`); //los imprimimos usando backticks
        rl.close(); //rl.close(); cierra la conexión con la consola y finaliza el programa.
        // Es necesario porque readline sigue esperando más datos si no lo cerramos.
    });
});