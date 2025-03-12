//16. Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación cuadrática correspondiente.
//formula de la ecuacion cuadratica: ax**2 + bx + c = 0



let a = parseFloat(prompt("Ingrese valor de a: ")) //4
let b = parseFloat(prompt("Ingrese valor de b: ")) // -12
let c = parseFloat(prompt("Ingrese valor de c: ")) // 9

let discriminante = ((b**2)-(4*(a)*(c)))
/*if (discriminante === 0){
    solucion = (-(-b)+(discriminante))/2*(a)
    alert(`${solucion}`)
}else if(discriminante > 0){

}else{
    alert("No hay soluciones reales, porque no se puede sacar la raiz a numeros negativos")
}
*/

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Las soluciones son x1 = ${x1} y x2 = ${x2}`);
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    alert(`La única solución es x = ${x}`);
} else {
    alert("No hay soluciones reales, el discriminante es negativo.");
}