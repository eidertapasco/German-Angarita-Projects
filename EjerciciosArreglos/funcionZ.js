function letraZ(cadena){
    for(i = 0; i <= cadena.length; i++){
        if(cadena[i] === 'z' || cadena[i] === 'Z'){
            return true;
        };
    };
    return false;
};

let nombre1 = 'Michael Jackson';
let nombre2 = 'Michael Jackzon';
let nombre3 = 'Juana PereZ';

console.log(letraZ(nombre1));
console.log(letraZ(nombre2)); 
console.log(letraZ(nombre3));