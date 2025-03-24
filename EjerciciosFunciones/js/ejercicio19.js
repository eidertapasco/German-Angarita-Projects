/*19. Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos
funciones:
● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit.
● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius.*/

function celsiusToFahrenheit(celsius){
    let conversion = (celsius * 9/5) + 32;
    return (`Los ${celsius}°C convertidos a grados Fahrenheit: ${conversion}°F`);
}


function fahrenheitToCelsius(fahrenheit){
    let conversion = (fahrenheit - 32) * 5/9;
    return (`Los ${fahrenheit}°F convertidos a grados Celsius: ${conversion}°C`);
}

let grados = 32;
let grados2 = 94;

console.log(celsiusToFahrenheit(grados));
console.log(fahrenheitToCelsius(grados));

console.log(celsiusToFahrenheit(grados2));
console.log(fahrenheitToCelsius(grados2));