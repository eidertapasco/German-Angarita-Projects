/*21. Escriba un programa que verifique si un número es primo utilizando dos funciones:
● esPrimo(numero): determina si un número es primo.
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la
función esPrimo.*/

function esPrimo(numero) {
    if(numero < 2){ //0 y 1 no son primos
        return false;
    }
    for(let i = 2; i < numero; i++){ //recorre desde 2 hasta numero-1
        if(numero%i === 0){
            return false; //porque no seria primo
        };
    };
    return true; //si no hay divisores es que si es primo
    
};

function imprimirResultado(num) {
    if(esPrimo(num)){
        console.log(`El numero ${num} es primo.`);
    }else{
        console.log(`El numero ${num} NO es primo`);
    }
};


imprimirResultado(1);
imprimirResultado(2);
imprimirResultado(3);
imprimirResultado(4);
imprimirResultado(5);
imprimirResultado(6);
imprimirResultado(7);
imprimirResultado(8);
imprimirResultado(9);
imprimirResultado(10);
