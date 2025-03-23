//15. Cree un programa que calcule horas y minutos a partir de segundos.

// 3600 segundos equivalen a una hora
// 60 segundos equivalen a un minuto 

let segundos = parseInt(prompt("Ingrese la cantidad de segundos a calcular: "))
let hora = parseInt(segundos/3600) //obtenemos las horas 7500/3600 = 2 horas + residuo
let minutos = parseInt((segundos%3600)/60) //obtenemos los minutos //5 minutos
let segundosRestantes = parseInt(segundos%60)

alert(`Los ${segundos} segundos equivalen a: ${hora} horas ${minutos} minutos ${segundosRestantes} segundos`)

/*Ejemplo con: 3661 segundos
Horas: 3661 ÷ 3600 = 1 hora (sobran 61 segundos).
Minutos: 61 ÷ 60 = 1 minuto (sobran 1 segundo).
Segundos restantes: 61 % 60 = 1 segundo.*/