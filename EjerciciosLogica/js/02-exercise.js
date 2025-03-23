/*2. Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/

let number1 = parseInt(prompt("Ingrese el primer numero: ")) //8
let number2 = parseInt(prompt("Ingrese el segundo numero: ")) //3

let producto = (number1*number2)
alert(`El producto de los numeros ${number1} y ${number2} es: ${producto}`)
let modulo = (number1%number2)
alert(`El modulo de los numeros ${number1} y ${number2} es: ${modulo}`)
let cociente = (number1/number2)
alert(`El cociente de los numeros ${number1} y ${number2} es: ${cociente}`)
let suma = (number1+number2)
alert(`La suma de los numeros ${number1} y ${number2} es: ${suma}`)
let resta = (number1-number2)
alert(`La resta de los numeros ${number1} y ${number2} es: ${resta}`)

//parseInt 20
//parseFloat 25.2
//prompt: solo para pedir datos al usuario por teclado
//parseInt: convierte un string o un flotante a un numero entero
//alt + 96