// 5. Dado el siguiente diccionario:
// let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};
// Usando for in itere sobre las claves del objeto imprimiendo sus respectivos valores.
// Cambie el valor de la clave peso por 77 usando forma 1 (arreglo.clave)
// Cambie el valor de la clave edad por 21 usando forma 2 (diccionario[clave])
// Elimine la clave apellidos

console.log('------- Imprimir los valores del diccionario ------');

let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"}; //clave: valor
for(const propiedad in persona){
    console.log(`${propiedad} : ${persona[propiedad]}`);
};

console.log('------- Cambiar los valores de peso ------');

let persona1 = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};
for(const propiedad in persona1){
    persona1.peso = 77; //nombreDelObjeto.nombreDeLaClave = valor
    console.log(`${propiedad} : ${persona1[propiedad]}`);
};

console.log('------- Cambiar los valores de edad ------');

let persona2 = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};
for(const propiedad in persona2){
    persona2["edad"] = 21; //nombreDelObjeto[“nombreDeLaClave”] = valor - debe de ir entre comillas la clave
    console.log(`${propiedad} : ${persona2[propiedad]}`); 
};

console.log('------- Eliminar la clave apellidos ------');
let persona3 = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};
for(const propiedad in persona3){
    delete persona3.apellidos; //delete nombreDelObjeto.nombreDeLaClave
    console.log(`${propiedad} : ${persona3[propiedad]}`); 
};
