// 6. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
// True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
// contrario.

//let vocal = prompt('Ingrese un caracter o una vocal mayuscula o minuscula: ');

/*function esVocal(caracter){
    if(caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u'){
        return true;
    }else if(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U'){
        return true;
    }else{
        return false;
    };  
};
alert(esVocal(vocal));*/

function esVocal(caracter){
    let vocales = [['a','e','i','o','u'],['A','E','I','O','U']]; //Arreglo de vocales
    for(let i = 0; i < vocales.length; i++){ //ciclo que itera desde 0 hasta la longitud del arreglo mayor
        for(let j = 0; j < vocales[i].length; j++){ //ciclo que itera desde 0 hasta la longitud del arreglo interno de la posicion i
            if(caracter == vocales[i][j]){ //si el caracter es igual al elemento del arreglo interno de la posicion i del indice j
                return true;
            };
        };
    };
    return false; //si ningun caracter es una vocal retornara falso
};

let character1 = 'j';
let character2 = 'e';
console.log(esVocal(character1));
console.log(esVocal(character2));