/*10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la
misma cadena pero sin sus vocales.*/

function sinVocales(cadena){
    cadena = cadena.toLowerCase();
    let vocales = ["a", "e", "i", "o", "u"];
    let nuevaCadena = [];

    for(let i = 0; i < cadena.length; i++){ //0 hasta 6
        for(let j = 0; j < vocales.length; j++){ //0 hasta 5
            if(cadena[i] == vocales[j]){ //if t != a
            }else{
                nuevaCadena.push(cadena[i]); //nuevaCadena = [t]
            }
        };
    };
    return nuevaCadena;
};

let cadenaPrueba = 'hola'
console.log(sinVocales(cadenaPrueba));
