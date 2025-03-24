/*23. Escriba un programa que genere una contraseña segura a partir de una palabra
base y una serie de reglas. Usa dos funciones:
● generarContraseña(palabraBase): genera una contraseña agregando números y
caracteres especiales.
● imprimirContraseña(contraseña): muestra la contraseña generada*/

function generarContraseña(palabraBase) {
    let caracteres = '0123456789*$&!-.?#%/,';
    contraseña = '';

    for(let i = 0; i < palabraBase.length; i++){
        contraseña += palabraBase[i]; //Esto agrega una a una la letra de la palabra base.
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); //agrega un caracter aleatorio
    };
    return contraseña;
};

function imprimirContraseña(palabraBase){
    let contraseña = generarContraseña(palabraBase)
    console.log(`La contraseña generada apartir de la palabra base '${palabraBase}' es: ${contraseña}`);
};

imprimirContraseña('Eider');
imprimirContraseña('Tapasco');
imprimirContraseña('softwareADSO');