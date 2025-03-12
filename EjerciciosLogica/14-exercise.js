//14. Cree un programa que genere un número aleatorio dentro de un rango específico.

let numero = parseInt(prompt("Ingrese un numero para generar un rango: ")) //8

if (isNaN(numero) || (numero <= 0)){
    alert(`Debe ingresar un numero valido mayor que 0.`)
}else{
    let rango = Math.floor(Math.random() * numero)+1; //0.54 * 8 = 4
    alert(`Numero aleatorio dentro del rango ${rango}`) //5
}