//Metodos: Son las 'acciones' que ejecuta el objeto
/*
Ejemplo

objeto >> carro
Metodo >> encender, acelerar, apagar

En codigo se les llama funciones en POO se les llama Metodos

Las propiedades son los datos del objeto y los metodos nos permiten hacer algo con el objeto
*/

function showFullName() {
    return 'Eider Tapasco';
}

//cuando tenemos clave:valor son propiedades y cuanto tenemos funciones son metodos
const user = {
    name: 'Eider',
    lastName: 'Tapasco',
    age: 26,
    showFullName: showFullName //Esta propiedad tiene como valor una funcion, pasa a conocerse como un metodo
}
 console.log(user.showFullName());


const usuario = {
    nombre: 'Eider',
    apellido: 'Tapasco',
    edad: 26,
    soltero: false,
    correo: 'taepaskoev@gmail.com',
    telefonos: ['3007735171','3146262855'],
    direccion: {
        pais: 'Colombia',
        departamento: 'Quindío',
        ciudad: 'Armenia',
        municipio: 'Montenegro'
    }
}

console.log(usuario)