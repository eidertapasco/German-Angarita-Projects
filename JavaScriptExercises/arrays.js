let frutas = []; //array vacio

frutas.push("pera");
frutas.push("Mango", "Manzana");

let frutas2 = [];
frutas2.push("Papaya", "Piña");

let todoFrutas = [...frutas, "sandia", ...frutas2, "kiwi"]; // los ... sirven para unir arrays
console.log(todoFrutas);

for (let e of todoFrutas){
    console.log(`Eta es la fruta: ${e}`);
}

todoFrutas.shift(); //Elimina el primer elemento del array
console.log(todoFrutas);

todoFrutas.pop(); //Elimina el ultimo elemento del array
console.log(todoFrutas);

todoFrutas.splice(1,2); //Despues del elemento 1 elimina 2 elementos


let numbers = [1,2,3,4,5];
let copyNumbers = numbers.map(x => x**2); //funcion tipo flecha
console.log(copyNumbers);