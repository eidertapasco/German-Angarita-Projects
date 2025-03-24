/*1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.*/

let productos = {
    arroz: 1500, aceite: 9800, queso: 7050,
    gaseosa: 2000, detodito: 7200, papitas: 2500,
    lentejas: 2800, alverjas: 4900, cebolla: 3100,
    salsabbq: 3650, salchichon: 12500, frutino: 800
};

console.log('--------------- Bienvenido a la tienda de ADSO ------------------------');
console.log(`Lista de Productos:
    1. Arroz
    2. Aceite
    3. Queso
    4. Gaseosa
    5. DeTodito
    6. Papitas
    7. Lentejas
    8. Alverjas
    9. Cebolla
    10. Salsa BBQ
    11. Salchichón
    12. Frutiño`);

let producto = prompt('Ingrese el nombre del producto de su interes: ').toLowerCase().trim(); // Convierte a minúsculas y elimina espacios extra

if(productos[producto] !== undefined){
    console.log(`El precio del ${producto} es: $${productos[producto]}`);
}else{
    console.log('El producto ingresado no está en la lista. Inténtelo nuevamente.');
}
