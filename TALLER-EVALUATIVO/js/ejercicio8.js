/*8. Dado el siguiente arreglo [1, 2, 3, 4, 500, 420, -100] elimine el elemento de índice 4 usando splice,
elimine el último elemento usando pop, agregue el elemento 520 usando push. Finalmente, haga una
copia “independiente del arreglo” usando slice*/

let arreglo = [1, 2, 3, 4, 500, 420, -100];

arreglo.splice(4, 1); // Elimina el elemento en la posición 4 (posicion-Eliminar, cantidad-Eliminar)

arreglo.pop(); // Elimina el último elemento (-100) y no hay que piner algun parametro

arreglo.push(520); // Agrega 520 al final del arreglo

let nuevoArreglo = arreglo.slice(); // Copia independiente del arreglo

console.log("Arreglo modificado:", arreglo);
console.log("Copia independiente:", nuevoArreglo);


