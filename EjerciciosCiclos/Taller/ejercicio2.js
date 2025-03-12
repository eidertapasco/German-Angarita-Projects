// 2.Dada la cadena “Somos Sena”:
// c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “S”
// d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
// variable contadora para contar el número de veces que se encuentra la letra “o”.

let cadena = "Somos Sena";
let contadorO = 0;

for (i = 0; i < cadena.length; i++){
    if(cadena[i] == "s" || cadena[i] == "S"){
        console.log("La cadena contiene la letra s");
        break;
    }else{
        console.log("La cadena no contiene la letra s");
        break;
    }; 
};

for(i = 0; i < cadena.length; i++){
    if (cadena[i] == "o" || cadena[i] == "O"){
        contadorO += 1;
    };
};

if (contadorO != 0){
    console.log(`La letra o se encuentra en la cadena ${contadorO} veces`);
}else{
    console.log("La letra o no se encontro en la cadena.");
};






