/*15. Escriba una función generarContraseña la cual reciba n como parámetro y esta cree
una contraseña de n caracteres aleatorios. (Los caracteres pueden ser números,
letras o signos).*/

function generarContraseña(n){
    const caracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789abcdefghijklmnñopqrstuvwxyz';
    const longitudCaracteres = caracteres.length; //obtengo la longitud de la constante caracteres
    let contraseña = "";
    for(let i = 0; i < n; i++){
        contraseña += caracteres.charAt(Math.floor(Math.random() *  longitudCaracteres));
    };
    return contraseña;
};

console.log(generarContraseña(8));
console.log(generarContraseña(12));
console.log(generarContraseña(6));
console.log(generarContraseña(7));

/*explicacion de la logica principal en el for

Math.random() → Genera un número aleatorio entre 0 y 0.9999.
Math.random() * longitudCaracteres → Lo multiplica por 63, generando un número entre 0 y 62.9999.
Math.floor(...) → Redondea hacia abajo, obteniendo un número entero entre 0 y 62.
caracteres.charAt(...) → Obtiene el carácter en la posición generada.
contraseña += ... → Lo añade a la variable contraseña.*/