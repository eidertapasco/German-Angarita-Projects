/*5. Escriba una función que reciba un número n como parámetro y genere su factorial.

factorial 5 = 5x4x3x2
factorial 0 y 1 = 1*/

function factorial(numero){//5
    if (numero === 0 || numero === 1){
        return 1;
    }else if(numero < 0){
        return false;
    }else{
        let inicio = 2;
        let factorial = 1;
        while(inicio <= numero){//3 <= 5
            factorial *= inicio; //
            inicio += 1; //3
        };
        return factorial;
    };
    
};

let a = 5;
let b = -5;
let c = 0;
console.log(factorial(a)) //1*2*3*4*5 = 120
console.log(factorial(b)) //false
console.log(factorial(c)) // 1