/*4. Dado el siguiente arreglo:
let arreglo = [ [1,2,3], [4,5,6,7,8,9], [10] ];
a) Use ciclos for para recorrer cada elemento interno del arreglo e imprimirlo*/

let arreglo = [ [1,2,3], [4,5,6,7,8,9], [10] ]; //0,1,2

for(i = 0; i < arreglo.length; i++){
    
    for(j = 0; j < arreglo[i].length; j++){
        console.log(arreglo[i][j]);
        
    };
    console.log('------');
};

