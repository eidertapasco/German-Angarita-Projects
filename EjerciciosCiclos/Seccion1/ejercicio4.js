/*4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.*/

//Un traingulo se determina porque la suma de sus 3 sus angulos dan 180° si alguno de los angulos es 0 o negativo no es de un triangulo valido.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer angulo del triangulo: ', (angulo1) => {
    rl.question('Ingrese el segundo angulo del triangulo: ', (angulo2) => {
        rl.question('Ingrese el tercer angulo del triangulo: ', (angulo3) => {
            console.log('------------ Condicionales ---------------');
            angulo1 = parseInt(angulo1);
            angulo2 = parseInt(angulo2);
            angulo3 = parseInt(angulo3);
            let sumaAngulos = (angulo1+angulo2+angulo3)
            if(sumaAngulos === 180){
                console.log(`La suma de los angulos es ${sumaAngulos}. Es un triangulo valido.`);
            }else{
                console.log(`La suma de los angulos es ${sumaAngulos}. No es un triangulo valido.`);
            }

            console.log('------------ Condicionales ---------------');

            switch (true) { //true para validar condiciones logicas en el switch
                case angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0:
                    console.log(`Error, no pueden haber angulos menores o iguales a cero`)
                    break;
                case sumaAngulos === 180:
                    console.log(`La suma de los ángulos es ${sumaAngulos}. Es un triángulo válido.`);
                    break;
                default:
                    console.log(`La suma de los angulos es ${sumaAngulos}. No es un triangulo valido.`);
                    break;
            }
            rl.close();
        });
    });
});