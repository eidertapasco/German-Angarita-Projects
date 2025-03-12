/*3. Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola
Juan”, por ejemplo si el nombre pasado es Juan.*/

function saludo(nombre = "Juan"){
    return(`Hola ${nombre}`);
};

let nameUser = prompt("Ingrese su nombre: ");
alert(saludo(nameUser));