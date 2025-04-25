/*
Ejercicio 3:
Enunciado: Se requiere un sistema que permita gestionar la venta de zapatos deportivos en una tienda,
seleccionando modelos, tallas y calculando precios.

Requisitos:
• El sistema debe permitir seleccionar entre los siguientes modelos de tenis:
• Clásicos
• Running
• Basketball
• Para cada modelo hay tallas desde 35 a 44
• Los precios base por modelo son:
• Clásicos: $500.000
• Running: $800.000
• Basketball: $1.000.000
• El usuario debe seleccionar: modelo de tenis, talla y cantidad a comprar
• El sistema debe calcular el total a pagar incluyendo descuentos

Reglas de negocio:
• Existe un 10% de descuento para compras de 3 pares o más
• No se puede seleccionar una talla fuera del rango permitido
• La cantidad mínima que se puede comprar es de 1 par
• La cantidad máxima es de 5 pares por transacción
• Si se ingresa una opción inválida se debe mostrar un mensaje al usuario

Analisis:
• Programa para una tienda de zapatos deportivos
• variables tipo const para los modelos de tenis: clasicos, running, basketBall con sus precios
• variable tipo const para el descuento
• variable para contener numero de talla
• variable para la cantidad de tenis que requiera el cliente
• variable para el total a pagar
•-------------------
• 10% off si la compra es > 3 pares
• cantminima 1 cant maxima 3
*/

const descuento = (10/100);
const valorClasicos = 500000;
const valorRunning = 800000;
const valorBasketBall = 1000000;
let talla; //[35,36,37,38,39,40,41,42,43,44];
let cantidad;
let totalPago;
let opcionTenis;


alert("¡Bienvenido a la tienda de zapatos deportivos RUNOW!");
alert("Actualmente contamos con 3 modelos diferentes de zapatos deportivos: \n• Clasicos\n• Running\n• BasketBall");

opcionTenis = prompt("Para empezar ¿en cual modelo esta interesado?: \n1• Clasicos\n2• Running\n3• BasketBall");
opcionTenis = parseInt(opcionTenis);

while (opcionTenis != 1 && opcionTenis != 2 && opcionTenis != 3 || isNaN(opcionTenis)){
    opcionTenis = prompt(`Opcion (${opcionTenis}) invalida, Ingrese una opcion de calzado valida: \n1• Clasicos\n2• Running\n3• BasketBall`);
    opcionTenis = parseInt(opcionTenis);
}

switch (opcionTenis){
    case 1:
        alert(`Usted ha seleccionado el modelo de tenis 'CLASICO' su valor por par es de: $${valorClasicos} pesos.`);

        //Pedimos la talla al usuario
        talla = parseInt(prompt("Las tallas disponibles de calzado estan entre la talla 35 y 44. Ingrese su talla de calzado: "));

        //Validamos que el usuario ingrese una talla correcta
        while (talla < 35 || talla > 44 || isNaN(talla)){
            talla = parseInt(prompt(`La talla ingresada (${talla}) NO se encuentra disponible. Ingrese una talla de calzado valida: `));
        }
        //pedimos la cantidad de pares
        cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));

        //Validacion de que se ingrese un dato numerico para la cantidad
        while (isNaN(cantidad)){
            cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));
        }
        //validamos si se encuentra en el rango minimo y maximo de compra
        while(cantidad < 1 || cantidad > 5 || isNaN(cantidad)){
            cantidad = parseInt(prompt("Por favor ingrese una cantidad entre 1 y 5 pares de tenis para continuar con su compra: "));
        }
        //Aplicamos descuento si la compra es > 3 pares
        if (cantidad >= 3){
            totalPago = ((valorClasicos*cantidad)-((descuento*valorClasicos)*cantidad));
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }else if (cantidad >= 1){
            totalPago = valorClasicos * cantidad;
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }
        break;

    case 2:
        alert(`Usted ha seleccionado el modelo de tenis 'RUNNING' su valor por par es de: $${valorRunning} pesos.`);

        //Pedimos la talla al usuario
        talla = parseInt(prompt("Las tallas disponibles de calzado estan entre la talla 35 y 44. Ingrese su talla de calzado: "));

        //Validamos que el usuario ingrese una talla correcta
        while (talla < 35 || talla > 44 || isNaN(talla)){
            talla = parseInt(prompt(`La talla ingresada (${talla}) NO se encuentra disponible. Ingrese una talla de calzado valida: `));
        }

        //pedimos la cantidad de pares
        cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));

        //Validacion de que se ingrese un dato numerico para la cantidad
        while (isNaN(cantidad)){
            cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));
        }

        //validamos si se encuentra en el rango minimo y maximo de compra
        while(cantidad < 1 || cantidad > 5 || isNaN(cantidad)){
            cantidad = parseInt(prompt("Por favor ingrese una cantidad entre 1 y 5 pares de tenis para continuar con su compra: "));
        }

        //Aplicamos descuento si la compra es > 3 pares
        if (cantidad >= 3){
            totalPago = ((valorRunning*cantidad)-((descuento*valorRunning)*cantidad));
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }else if (cantidad >= 1){
            totalPago = valorRunning * cantidad;
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }
        break;
    case 3:
        alert(`Usted ha seleccionado el modelo de tenis 'BASKETBALL' su valor por par es de: $${valorBasketBall} pesos.`);

        //Pedimos la talla al usuario
        talla = parseInt(prompt("Las tallas disponibles de calzado estan entre la talla 35 y 44. Ingrese su talla de calzado: "));

        //Validamos que el usuario ingrese una talla correcta.
        while (talla < 35 || talla > 44 || isNaN(talla)){
            talla = parseInt(prompt(`La talla ingresada (${talla}) NO se encuentra disponible. Ingrese una talla de calzado valida: `));
        }

        //pedimos la cantidad de pares
        cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));

        //Validacion de que se ingrese un dato numerico para la cantidad
        while (isNaN(cantidad)){
            cantidad = parseInt(prompt("Ingrese la cantidad de tenis a comprar: "));
        }

        //validamos si se encuentra en el rango minimo y maximo de compra
        while(cantidad < 1 || cantidad > 5 || isNaN(cantidad)){
            cantidad = parseInt(prompt("Por favor ingrese una cantidad entre 1 y 5 pares de tenis para continuar con su compra: "));
        }
        
        //Aplicamos descuento si la compra es > 3 pares
        if (cantidad >= 3){
            totalPago = ((valorBasketBall*cantidad)-((descuento*valorBasketBall)*cantidad));
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }else if (cantidad >= 1){
            totalPago = valorBasketBall * cantidad;
            alert(`El total a pagar es de: $${totalPago} pesos.`);
        }
        break;
}

alert("Gracias por utilizar nuestros servicios, lo esperamos pronto.");