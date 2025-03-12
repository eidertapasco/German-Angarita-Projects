/*2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del producto: ', (producto) => {
    console.log('-------------- Condicionales --------------------');

    if(producto.toLowerCase() === 'lentejas'){
        console.log(`El producto ${producto} No paga impuesto IVA.`);
    }else if(producto.toLowerCase() === 'crema'){
        console.log(`El producto ${producto} Si paga impuesto IVA.`);
    }else if(producto.toLowerCase() === 'arroz'){
        console.log(`El producto ${producto} No paga impuesto IVA.`);
    }else if(producto.toLowerCase() === 'vino'){
        console.log(`El producto ${producto} Si paga impuesto IVA.`);
    }else{
        console.log(`¡Ingreso un producto invalido!`);
    }

    console.log('-------------- Switch Case --------------------');

    switch (producto.toLowerCase()) {
        case 'lentejas':
            console.log(`El producto ${producto} No paga impuesto IVA.`);
            break;
        case 'crema':
            console.log(`El producto ${producto} Si paga impuesto IVA.`);
            break;
        case 'arroz':
            console.log(`El producto ${producto} No paga impuesto IVA.`);
            break;
        case 'vino':
            console.log(`El producto ${producto} Si paga impuesto IVA.`);
            break;
        default:
            console.log(`¡Ingreso un producto invalido!`);
            break;
    }
    rl.close();
});