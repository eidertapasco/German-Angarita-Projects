/*
Ejercicio 1:
Enunciado: Se requiere desarrollar un sistema que permita a los clientes de
una lavandería seleccionar y cotizar diferentes servicios de lavado de ropa.

Requisitos:
• El sistema debe presentar al usuario las siguientes opciones de servicios:
• Lavado básico
• Lavado premium (incluye secado y planchado)
• Cada tipo de servicio tiene un precio diferente por pieza de ropa:
• Lavado básico: $2000
• Lavado premium: $4000
• El usuario debe seleccionar el tipo de servicio deseado.
• Basado en la selección del usuario, el sistema debe calcular un estimado del costo total del servicio.
• El usuario ingresa la cantidad de piezas de ropa para lavar.
• El sistema presenta el costo total como resultado.

Reglas de negocio:
• Solo se permite seleccionar una opción de servicio por transacción
• La cantidad mínima de piezas por transacción es de 1
• La cantidad máxima de piezas por transacción es 20
• Si el usuario selecciona una opción inválida, se debe mostrar un mensaje de error

Analisis:

• Programa para un servicio de lavanderia
• Seleccionar y cotizar diferentes tipos de lavado
• lavado basico y lavado premium (secado y planchado)
• basico: 2000 por pieza y premium 4000
• el usuario debe seleccionar una opcion
• Calcular el costo del servicio
• entradas: opcion deseada y cantidad de piezas de ropa a lavar
• salidas: costo total del servicio
• cant minima: 1
• cant maxima: 20
• error para opcion invalidas

*/ 

const lavadoBasico = 2000;
const lavadoPremium = 4000;
let opcionLavado = 0;
let cantPiezas = 0;
let totalServicio = 0;


alert("Bienvenido a Lavadoras SenaLav");

alert("Hay 2 opciones de lavado disponibles: ");
alert("Lavado Basico: $2000 x Pieza de ropa ");
alert("Lavado Premium: $4000 x Pieza de ropa ");

opcionLavado = prompt("Ingrese una opcion de lavado: 1-Basico 2-Premium: ");

// Validar que la opción sea 1 o 2
while (opcionLavado != 1 && opcionLavado != 2){
    opcionLavado = prompt(`Opcion (${opcionLavado}) invalida, Ingrese una opcion de lavado: 1-Basico 2-Premium: `);
}
if (opcionLavado == "1"){
    alert("¡Ha seleccionado el lavado Basico!");
}else if(opcionLavado == "2"){
    alert("¡Ha seleccionado el lavado Premium! (Incluye secado y planchado)");
}
//Pedimos la cantidad de Piezas de ropa a lavar
cantPiezas = prompt("Ingrese la cantidad de piezas de ropa a lavar: ");
cantPiezas = parseInt(cantPiezas);//convertimos a Int el valor ingresado, devuelve NaN sino es asi.

// Validamos que la cantidad de piezas de ropa este entre 1 y 20
while (cantPiezas < 1 || cantPiezas > 20 || isNaN(cantPiezas)) {
    alert("Debe ingresar mínimo una (1) pieza de ropa y máximo veinte (20) para utilizar el servicio.");
    cantPiezas = prompt("Ingrese una cantidad válida de piezas de ropa a lavar: ");
    cantPiezas = parseInt(cantPiezas); // Nos aseguramos de que la entrada sea un número
}

// Calculamos el costo total según el tipo de lavado seleccionado
if (opcionLavado == 1){
    totalServicio = cantPiezas * lavadoBasico;
    alert(`El costo total del servicio de lavado Basico es de: $${totalServicio}.`);
}else if (opcionLavado == 2){
    totalServicio = cantPiezas * lavadoPremium;
    alert(`El costo total del servicio de lavado Premium es de: $${totalServicio}.`);
}
alert("¡Gracias por utilizar nuestros servicios!");