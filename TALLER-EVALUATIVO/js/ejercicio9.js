/*9. En una empresa 
se requiere un sistema de información que registre sus nuevos usuarios. Cada vez
que un usuario se registra debe introducir los siguientes datos: documento, nombres, apellidos, edad,
peso, estatura. Cree un sistema de información que reciba los datos de registro de cada cliente por
teclado, luego de realizado el registro el sistema debe mostrar al usuario el mensaje “Registro exitoso”. Si
el usuario desea consultar su registro debe poder hacerlo a través de su documento. Use funciones.*/

console.log('----------------- Sistema de registro de clientes --------------------------');

let usuarios = []; // Arreglo para almacenar los registros de los usuarios

// Función para registrar un nuevo usuario
function registrarUsuario() {
    let documento = prompt('Ingrese su documento de identificación: ');
    let nombres = prompt('Ingrese su nombre: ');
    let apellidos = prompt('Ingrese sus apellidos: ');
    let edad = parseInt(prompt('Ingrese su edad: '));
    let peso = parseFloat(prompt('Ingrese su peso: '));
    let estatura = parseFloat(prompt('Ingrese su estatura: '));

    //este objeto guarda toda la informacion que ingreso el usuario
    let usuario = {
        documento: documento,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        peso: peso,
        estatura: estatura
    };

    usuarios.push(usuario); // Guarda el usuario(objeto) en el arreglo usuarios
    console.log('Registro exitoso');
};

// Función para consultar un usuario por su documento
function consultarUsuario() {
    let doc = prompt('Ingrese el documento a consultar: ');
    let usuarioEncontrado = usuarios.find(user => user.documento === doc); //El método .find() recorre el arreglo usuarios uno por uno y ejecuta la función dentro de los paréntesis:
    //Aquí cada objeto del arreglo se representa con la variable user.
    //user.documento es el documento del usuario actual que se está evaluando.
    if (usuarioEncontrado) {
        console.log('Datos del usuario: ', usuarioEncontrado);
    } else {
        console.log('Usuario no encontrado.');
    };
};

// Menú de opciones
while (true) {
    let opcion = prompt('Seleccione una opción:\n1. Registrar usuario\n2. Consultar usuario\n3. Salir');

    if (opcion === '1') {
        registrarUsuario();
    } else if (opcion === '2') {
        consultarUsuario();
    } else if (opcion === '3') {
        console.log('Saliendo del sistema...');
        break; // Sale del bucle
    } else {
        console.log('Opción no válida. Intente de nuevo.');
    };
};


