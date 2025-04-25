/*
Ejercicio 4:
Enunciado: Se requiere un sistema para una fábrica de escobas que permita seleccionar modelos, materiales y
opciones para cotizar el producto según las especificaciones del cliente.

Requisitos:
• El usuario debe poder seleccionar el modelo de escoba entre:
• Escoba dura
• Escoba suave
• cepillo
• Para la fabricación se utilizan dos tipos de materiales:
• Cerdas sintéticas
• Cerdas naturales
• El usuario puede escoger opciones adicionales como mango largo o gancho en la punta
• El sistema debe calcular el precio de cada configuración según las siguientes tarifas:
• Escoba dura sintética: $8.000
• Escoba dura natural: $10.000
• Escoba suave sintética: $6.000.
• Escoba suave natural: $8.000.
• cepillo sintético: $12.000
• cepillo natural: $15.000
• Mango largo: $2.000 adicionales
• Gancho en punta: $500 adicionales
• El usuario indica la cantidad de escobas a cotizar.

Reglas de negocio:
• Solo se permite un tipo de material por producto
• No se pueden combinar mango largo y gancho en punta
• La cantidad mínima de fabricación es 3 escobas, la máxima 30
• En caso de selección inválida mostrar mensaje de error.

Analisis:
• Modelos de escobas: 3- dura, suave, cepillo
• materiales: 2- sintetico, natural
• opciones adicionales: 2- mango largo o gancho (no se pueden combinar)
• Los precios varian segun el tipo de modelo y material escogido
• El usuario indica la cantidad a cotizar segun el tipo de modelo, material escogido y adicionales
• cantidad minima 3 y maxima 30
• mostrar error en caso de opcion invalida
*/

//Declaramos las variables
const escobaDuraSintetica = 8000;
const escobaDuraNatural = 10000;
const escobaSuaveSintetica = 6000;
const escobaSuaveNatural = 8000;
const cepilloSintetico = 12000;
const cepilloNatural = 15000;
const mangoLargo = 2000;
const gancho = 500;
let opcionEscoba;
let cantidadEscobas;
let cotizacion;

alert("¡Bienvenido a la tienda de escobas 'LA BRUJA'!");

//Validamos que el usuario seleccione una opcion valida del modelo de escoba.
opcionEscoba = parseInt(prompt("Actualmente contamos con 3 modelos de escobas: \n•1-Escoba de cerdas duras\n•2-Escoba de cerdas suaves\n•3-cepillos\nPor favor, ingrese la opcion de su interes: "));
while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3 || isNaN(opcionEscoba)){
    opcionEscoba = parseInt(prompt("La opcion ingresada es invalida\nPor favor, ingrese una opcion valida:\n•1-Escoba de cerdas duras\n•2-Escoba de cerdas suaves\n•3-cepillos\n"));
}
//Segun las 3 opciones posibles, creamos un switch para cada modelo de escoba
switch (opcionEscoba) {
    case 1:
        alert("Ha seleccionado: Escoba de cerdas duras");
        //reutilizamos la variable opcionEscoba para el material de la escoba: sintetico o natural
        opcionEscoba = parseInt(prompt("Contamos con 2 tipos de materiales: \n•1-Sintetíco\n•2-Natural\nPor favor, Ingrese una opcion: "));
        while (opcionEscoba != 1 && opcionEscoba != 2 || isNaN(opcionEscoba)){
            opcionEscoba = parseInt(prompt("La opcion ingresada es invalida\nIngrese una opcion valida para el tipo de escoba:\n•1-Sintetíco\n•2-Natural\n"));
        }
        break;
    case 2:
        alert("Ha seleccionado: Escoba de cerdas suaves");
        //reutilizamos la variable opcionEscoba para el material de la escoba: sintetico o natural
        opcionEscoba = parseInt(prompt("Contamos con 2 tipos de materiales: \n•1-Sintetíco\n•2-Natural\nPor favor, Ingrese una opcion: "));
        while (opcionEscoba != 1 && opcionEscoba != 2 || isNaN(opcionEscoba)){
            opcionEscoba = parseInt(prompt("La opcion ingresada es invalida\nIngrese una opcion valida para el tipo de escoba:\n•1-Sintetíco\n•2-Natural\n"));
        }
        break;
    case 3:
        alert("Ha seleccionado: Cepillos");
        //reutilizamos la variable opcionEscoba para el material de la escoba: sintetico o natural
        opcionEscoba = parseInt(prompt("Contamos con 2 tipos de materiales: \n•1-Sintetíco\n•2-Natural\nPor favor, Ingrese una opcion: "));
        while (opcionEscoba != 1 && opcionEscoba != 2 || isNaN(opcionEscoba)){
            opcionEscoba = parseInt(prompt("La opcion ingresada es invalida\nIngrese una opcion valida para el tipo de escoba:\n•1-Sintetíco\n•2-Natural\n"));
        }
        break;
    default:
        break;
}

//Reutilizamos opcionEscoba para los 3 tipos de escoba (dura,suave,cepillo) de cada modelo: sintetico o natural
if (opcionEscoba == 1){
    opcionEscoba = parseInt(prompt(`Tipo de escoba: Sintetíco\nPrecios:\n•1-Escoba dura sintetica: ($${escobaDuraSintetica})\n•2-Escoba suave sintetica: $(${escobaSuaveSintetica})\n•3-Cepillo sintetico: $(${cepilloSintetico})\nIngrese su preferencia: `));
    //Validamos con el ciclo que el usuario ingrese una opcion valida 
    while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
        opcionEscoba = parseInt(prompt(`La opcion ingresada es invalida. Por favor ingrese una opcion valida:\n•1-Escoba dura sintetica:$(${escobaDuraSintetica})\n•2-Escoba suave sintetica: $(${escobaSuaveSintetica})\n•3-Cepillo sintetico: $(${cepilloSintetico})`));
    }
    //Switch para validar las opciones y precios del tipo sintetico
    switch (opcionEscoba) {
        case 1: //escoba dura sintetica
            //Pedimos la cantidad de escobas a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Escoba dura sintetíca.\nValor unitario: $${escobaDuraSintetica}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas duras sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de escobas duras sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*escobaDuraSintetica) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*escobaDuraSintetica) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*escobaDuraSintetica;
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        case 2: //escoba suave sintetica
            //Pedimos la cantidad de escobas a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Escoba suave sintetíca.\nValor unitario: $${escobaSuaveSintetica}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas suaves sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de las escobas suaves sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*escobaSuaveSintetica) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*escobaSuaveSintetica) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*escobaSuaveSintetica;
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        
        case 3: //cepillo sintetico
            //Pedimos la cantidad de escobas tipo cepillo a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Cepillos.\nValor unitario: $${cepilloSintetico}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas suaves sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de las escobas suaves sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*cepilloSintetico) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*cepilloSintetico) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*cepilloSintetico;
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        default:
            break;
    } 
//Tipo: Naturales   
}else if (opcionEscoba == 2){
    opcionEscoba = parseInt(prompt(`Tipo de escoba: Natural\nPrecios:\n•1-Escoba dura natural: ($${escobaDuraNatural})\n•2-Escoba suave natural: $(${escobaSuaveNatural})\n•3-Cepillo natural: $(${cepilloNatural})\nIngrese su preferencia: `));
    //Validamos con el ciclo que el usuario ingrese una opcion valida 
    while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
        opcionEscoba = parseInt(prompt(`La opcion ingresada es invalida. Por favor ingrese una opcion valida:\n•1-Escoba dura natural: ($${escobaDuraNatural})\n•2-Escoba suave natural: $(${escobaSuaveNatural})\n•3-Cepillo natural: $(${cepilloNatural})`));
    }
    //Switch para validar las opciones y precios del tipo sintetico
    switch (opcionEscoba) {
        case 1: //escoba dura natural
            //Pedimos la cantidad de escobas a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Escoba dura natural.\nValor unitario: $${escobaDuraNatural}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida //aqui voy
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas duras sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de escobas duras sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*escobaDuraSintetica) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*escobaDuraSintetica) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*escobaDuraSintetica;
                alert(`El precio total de (${cantidadEscobas}) escobas duras sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        case 2: //escoba suave sintetica
            //Pedimos la cantidad de escobas a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Escoba suave sintetíca.\nValor unitario: $${escobaSuaveSintetica}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas suaves sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de las escobas suaves sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*escobaSuaveSintetica) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*escobaSuaveSintetica) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*escobaSuaveSintetica;
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        
        case 3: //cepillo sintetico
            //Pedimos la cantidad de escobas tipo cepillo a cotizar
            cantidadEscobas = parseInt(prompt(`Tipo de escoba elegido: Cepillos.\nValor unitario: $${cepilloSintetico}\nCantidad minima (3)\nCantidad maxima(30)\nIngrese la cantidad a cotizar: `));
            //Validamos que ingrese una cantidad valida
            while (cantidadEscobas < 3 || cantidadEscobas > 30 || isNaN(cantidadEscobas)){
                cantidadEscobas = parseInt(prompt("La cantidad ingresada es incorrecta.\nCantidad minima (3)\nCantidad maxima(30)\nPor favor ingrese una cantidad valida: "));
            }
            //reutilizamos opcionEscoba para almacenar las opciones adicionales de escobas suaves sinteticas
            opcionEscoba = parseInt(prompt(`Tenemos opciones adicionales que puede agregar a las escobas:\n•Mango largo: $${mangoLargo} x unidad.\n•Gancho: $${gancho} x unidad.\nPuede agregar una opcion adicional por pedido ¿Le gustaria agregar opciones adicionales?\n•1-Mango largo\n•2-Gancho\n•3-Ninguna`));
            while (opcionEscoba != 1 && opcionEscoba != 2 && opcionEscoba != 3){
                opcionEscoba = parseInt(prompt = (`Opcion invalida\n•1-Mango largo: $${mangoLargo}\n•2-Gancho: $${gancho}\n•3-Ninguna\nIngrese una opcion valida: `));
            }
            //validamos la opcion elegida para determinar el precio de la cotizacion de las escobas suaves sinteticas
            if (opcionEscoba == 1){
                cotizacion = (cantidadEscobas*cepilloSintetico) + (cantidadEscobas*mangoLargo);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con mango largo es de: $${cotizacion} pesos.`);
            }else if (opcionEscoba == 2){
                cotizacion = (cantidadEscobas*cepilloSintetico) + (cantidadEscobas*gancho);
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas con Gancho en punta es de: $${cotizacion} pesos.`);
            }else{
                cotizacion = cantidadEscobas*cepilloSintetico;
                alert(`El precio total de (${cantidadEscobas}) escobas suaves sinteticas es de: $${cotizacion} pesos.`);
            }
            break;
        default:
            break;
    }

}
alert("Gracias por utilizar nuestros servicios. ¡Vuelva pronto!")