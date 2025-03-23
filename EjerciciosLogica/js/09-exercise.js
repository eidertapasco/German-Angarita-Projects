//9. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.

let cantidad = parseFloat(prompt("Ingrese una cantidad: ")) //35
let porcentaje = parseFloat(prompt("Ingrese el procentaje a calcular: ")) //8

let resultado = cantidad * (porcentaje/100) //8/100 = 0.08 = 2.8

alert(`La cantidad ${cantidad} aplicandole un porcentaje del ${porcentaje} da como resultado ${resultado}`)