let persons = ["Lina", "Antonio", "Jose", "Maria Jose"];
let buscar = persons.filter(x => x.length > 4); //filter solo traera los nombres con mas de 4 caracteres
console.log(buscar);

let numbers = [3,5,7,23,12];
let numerosBuscar = numbers.filter(x => x > 20); //flecha: solo traera los numero mayores a 20
console.log(numerosBuscar);

let numbers2 = [3,5,7,23,12,18,2];
let numerosBuscar2 = numbers2.every(x => x > 2); //flecha: solo traera los numero mayores a 20
console.log(numerosBuscar2);