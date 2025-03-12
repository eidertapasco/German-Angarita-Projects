//unidimensionales
console.log('--------- arrays Unidimensionales-----------');
let arregloUnidimensional = [2, 5, 7, true, false, 'Eider'];
console.log(arregloUnidimensional[3]); // imprime true

console.log('--------- arrays Bidimensionales-----------');

//arreglo bidimensional: es un arreglo que contiene otros arreglos, utiliza dos indices.
let arregloBidimensional = [['manzana', 'pera', 'Fresa'], [1, 2, 3, 4], [true, false, true]];
console.log(arregloBidimensional[2][1]); //accede a la posicion 2 del arreglo 1 y a la posicion 1 del arreglo 2 imprime false
console.log(arregloBidimensional[0][2]); //Fresa

console.log('--------- arrays Multidimensionales-----------');
//arreglos de dimension superior (3 o mas) se usan los indices como tenga la dimension
let arregloMultidimensional = [ [['a','b','c','d'], [true, false, true]], [[1, 2, 3, 4, 5], [true]] ];
console.log(arregloMultidimensional[1][0][1]);
console.log(arregloMultidimensional[0][0][1]);