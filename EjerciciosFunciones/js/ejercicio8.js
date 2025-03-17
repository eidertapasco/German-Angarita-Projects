/*8. Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
la primera letra del nombre.*/


function primeraLetra(letra) {
    for(let i = 0; i < letra.length; i++){
        return letra[i];
    }
}
let nombre = prompt("Ingrese un nombre: ");//Eider
console.log(`La primera letra del nombre es: ${primeraLetra(nombre)}`); //E