/*3. Dado el siguiente arreglo:
let arreglo = [1,2,3,4,5,6,7,8,9,10];
a) Usando ciclo for recorra el arreglo imprimiendo cada uno de sus elementos.
b) Usando forEach recorra el arreglo imprimiendo cada uno de sus elementos.*/

let arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log('-------Aplicando For tradicional---------');
for(i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
};

console.log('-------Aplicando ForEach con funcion flecha---------');

arreglo.forEach(numero => { //Debe tomar al menos un parámetro que represente los elementos del arreglo
    console.log(numero);
});

/*Otra forma de aplicar el forEach es con una funcion normal: */
console.log('-------Aplicando ForEach con funcion---------');
arreglo.forEach(function(numero){
    console.log(numero);
});