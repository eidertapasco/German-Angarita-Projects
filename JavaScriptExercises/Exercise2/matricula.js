/*
Ejercicio 2:
Enunciado: Se requiere un sistema que permita a los estudiantes pagar su matrícula en la universidad,
seleccionando formas de pago y visualizando el valor total.

Requisitos:
• El sistema debe presentar las siguientes opciones de pago:
• Pago completo (5% de descuento)
• Pago en 2 cuotas
• Pago en 3 cuotas
• El valor base de la matrícula es de $7.000.000
• El estudiante debe seleccionar la opción de pago deseada.
• Según la opción elegida, el sistema debe:
• Si es pago completo, aplicar 5% de descuento
• Si es en 2 cuotas, dividir el pago en partes iguales
• Si es en 3 cuotas, dividir el pago en partes iguales
• Mostrar al estudiante el valor total a pagar según la opción elegida.
 
Reglas de negocio:
• Solo permite seleccionar una opción de pago por transacción
• El número máximo de cuotas es 3
• Si se elige una opción inválida, mostrar un mensaje de error
• Los pagos en cuotas tienen un interés del 2% mensual sobre el saldo.

Analisis:
• El programa es para pagar una matricula de un estudiante en la universidad
• Tienes 3 opciones de pago: necesitaremos 3 variabes pagoCompleto, dosCuotas, tresCuotas
• valor de la matricula: $7.000.000 necesitaremos una constante para valorMatricula
• Necesitaremos 2 constantes intereses del 2% y descuento del 5%
• el estudiante debe seleccionar el tipo de pago y con base a su eleccion 
haremos un descuento solo para el pago completo o un interes del 2% para las otras 2 opciones de pago.
• dividir el valor de la matricula segun el tipo de pago a cuotas escogido y aplicar el interes si aplica.
• Mostrar al estudiante el valor total de su matricula segun la opcion deseada.
• numero maximo de cuotas permitido 3
*/ 

const valorMatricula = 7000000;
const intereses = valorMatricula*(2/100);
const descuento = valorMatricula*(5/100);
let pagoCompleto;
let pagoDosCuotas;
let pagoTresCuotas;
let opcionPago;


alert("¡Bienvenido a la universidad SenaU!");

alert("Aqui podra pagar su matricula universitaria\n\nEl valor de la matricula para cualquier carrera es de $7'000.000 Millones de pesos.");
alert("Usted cuenta con 3 opciones de pago disponibles: \n• Pago completo (5% Descuento)\n• Pago en 2 cuotas\n• Pago en 3 cuotas");

opcionPago = parseInt(prompt("Ingrese una opcion de pago: \n1-Pago Completo (5% Descuento) \n2-Pago en 2 cuotas \n3-Pago en 3 cuotas")); //2

//abc is NaN, opcionPago > or < 3 is Invalid, opcionPago is 1,2,3 True
//Validamos que la opcion sea 1,2 o 3
while (opcionPago != 1 && opcionPago != 2 && opcionPago != 3 || isNaN(opcionPago)){
    opcionPago = prompt(`Opcion (${opcionPago}) invalida, Ingrese una opcion de pago valida: 1-Pago Completo 2-Pago en 2 cuotas 3-Pago en 3 cuotas `);
    opcionPago = parseInt(opcionPago);
}

switch (opcionPago){
    case 1:
        alert("¡Has seleccionado la opcion de pago completo! Tienes un descuento del 5%");
        pagoCompleto = valorMatricula - descuento; 
        alert(`El valor de tu matricula con descuento del 5% es de: $${pagoCompleto} pesos.`);
        break;
    case 2:
        alert("Has seleccionado la opcion de pago en 2 cuotas.");
        pagoDosCuotas = valorMatricula/2; //cuotas
        pagoDosCuotas = pagoDosCuotas + intereses;
        alert(`El valor de tu matricula con pago en 2 cuotas e intereses del 2% mensual es de: $${pagoDosCuotas} pesos.`);
        break;
    case 3:
        alert("Has seleccionado la opcion de pago en 3 cuotas.");
        pagoTresCuotas = valorMatricula/3; //cuotas
        pagoTresCuotas = pagoTresCuotas + intereses;
        alert(`El valor de tu matricula con pago en 3 cuotas e intereses del 2% mensual es de: $${Math.round(pagoTresCuotas)} pesos.`); //Redondeo de decimales con round
        break;
}

alert("Gracias por utilizar nuestros servicios, lo esperamos pronto.");