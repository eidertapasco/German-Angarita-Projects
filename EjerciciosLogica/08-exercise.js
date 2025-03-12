//8. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.

const descuento = (10/100) //0.10
let producto = prompt("Ingrese el nombre del producto: ") //camisa
let precio = parseFloat(prompt("Ingrese el precio del producto: ")) //53.500
let precioFinal = precio-(precio*descuento) // 53.500-(5350) = 48.150 

alert(`El precio del producto '${producto}' es de ${precio} y con el descuento quedaria en ${precioFinal}`)