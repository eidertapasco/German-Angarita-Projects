//12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
//La suma de los cuadrados de los primeros n números naturales se calcula con la fórmula [n(n+1)(2n+1)] / 6. 

let sumaN = 0;

let numeros = parseInt(prompt('Ingrese un numero: ')); //8
if(numeros < 1){
    console.log('Error');
}else{
    sumaN = (numeros*(numeros+1)*(2*numeros+1))/6;
};
alert(`la suma de n numeros cuadrados es: ${sumaN}`);