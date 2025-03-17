/*9. Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena.*/

function contarVocales(cadena) {
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < vocales.length; i++){
        for(let j = 0; j < cadena.length; j++){
            if(cadena[j] === vocales[i]){
                contador += 1;
            };
        };
    };
    return contador;
}

let cadena = 'Hola mi nombre es Eider Tapasco';
let cadena2 = 'abcde'
console.log(contarVocales(cadena));
console.log(contarVocales(cadena2));

