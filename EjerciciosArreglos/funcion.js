// 10.Cree un programa que calcule el promedio de 10 números.Utilizando funciones

function promedioNumeros(valor){
    let suma;
    let promedio;
    for(let i = 1; i <= valor.length; i++){
        suma += valor[i];
        promedio = suma/10;
        return promedio;
    }
}

let numeros;
let cantNumeros = 10;
let inicio = 1;
let arrayNumeros = [];

do {
    numeros = parseFloat(prompt(`Ingrese el numero ${inicio}: `)); 
    arrayNumeros.push(numeros); //[1,2,3,..5.]
    inicio ++;

} while (inicio <= cantNumeros);

console.log(promedioNumeros(arrayNumeros));