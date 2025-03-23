//7. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.


const iva = (19/100)
let producto = prompt("Ingrese el nombre del producto: ")
let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let precioFinal = (precio*iva) + precio //50.000

alert(`El precio del producto '${producto}' es de ${precio} y con el iva del 19% quedaria en ${precioFinal}`)