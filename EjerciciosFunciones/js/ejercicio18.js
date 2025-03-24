/*18. Escriba una función que tenga una cadena de ADN como parámetro y retorne un
string con el número de bases en ella, por ejemplo, si la cadena es “AACAGT”
entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1,
Cantidad de T: 1”*/

function cadenaADN(adn){
    let A = 0;
    let C = 0;
    let G = 0;
    let T = 0;
    let error = false; //Variable bandera para detectar errores en las cadenas

    for(let i = 0; i < adn.length; i++){
        switch (adn[i]) {
            case 'A':
                A++; break;
            case 'C':
                C++;
                break;
            case 'G':
                G++;
                break;
            case 'T':
                T++;
                break;
            default:
                error = true;
        };
    };

    if(error){//si se encontro un error error ahora vale true
        return('Hay un error en los caracteres de la cadena de ADN.')
    }

    return(`Cantidad de A: ${A}, Cantidad de C: ${C} Cantidad de G: ${G} Cantidad de T: ${T}`);
};

let cadena = 'AACAGT';
let cadena2 = 'ATTGCACTT';
let cadena3 = 'ATTSAA'
console.log(cadenaADN(cadena));
console.log(cadenaADN(cadena2));
console.log(cadenaADN(cadena3));