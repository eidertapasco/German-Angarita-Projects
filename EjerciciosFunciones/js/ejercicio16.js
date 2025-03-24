/*16. Escriba una función que se llame facturacion() La función tiene que recibir como
parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E(efectivo) y D (tarjeta de débito). 
Si el monto del producto es menor a $200 no se aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
sin importar el medio de pago La función deberá retornar el monto final a pagar.*/

function facturacion(monto, medioPago){
    const credito = (10/100);
    const debito = (20/100);
    const efectivo = (30/100);
    const descEspecial = (40/100);
    let total;

    switch (true) {
        case (monto < 200):
            console.log(`Pagara $${monto} con ${medioPago}. No tiene descuento.`);
            break;
        case (monto >= 200 && monto <= 400):
            if(medioPago == 'CREDITO'){
                total = (monto - (credito*monto));
                console.log(`Pagara $${monto} con Tarjeta ${medioPago}. Tiene descuento del 10%. TOTAL A PAGAR $${total}.`); 
            }else if(medioPago == 'DEBITO'){
                total = (monto - (debito*monto));
                console.log(`Pagara $${monto} con Tarjeta ${medioPago}. Tiene descuento del 20%. TOTAL A PAGAR $${total}.`); 
            }else if(medioPago == 'EFECTIVO'){
                total = (monto - (efectivo*monto));
                console.log(`Pagara $${monto} con ${medioPago}. Tiene descuento del 30%. TOTAL A PAGAR $${total}.`); 
            }else{
                console.log('Medio de pago invalido.');
            }
            break;
        case (monto > 400):
            total = (monto - (descEspecial*monto));
            console.log(`Pagara $${monto} con ${medioPago} Tiene descuento del 40%. TOTAL A PAGAR $${total}.`); 
            break;
        default:
            break;
    };
};

let precioProducto = parseFloat(prompt('Ingrese el valor del producto: '));
let tipoPago = prompt('Medios de pago: credito, debito, efectivo. Ingrese su medio de pago: ');
tipoPago = tipoPago.toUpperCase();

facturacion(precioProducto,tipoPago);