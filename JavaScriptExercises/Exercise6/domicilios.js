/*Ejercicio 6:
Enunciado: Se requiere un sistema para un servicio de entrega a domicilio que permita a los clientes pedir comida
de diferentes restaurantes, seleccionar opciones y calcular el valor total del pedido.
Requisitos:
• El usuario puede elegir restaurantes asociados como:
• Hamburguesas
• Pizzería
• Comida China
• Cada restaurante tiene varias opciones de menú con precios establecidos. Por ejemplo:
• Hamburguesa simple ($25000)
• Pizza familia ($85000)
• Fideos con pollo ($18000)
• El usuario selecciona el restaurante, el menú deseado y la cantidad para cada opción.

• El sistema calcula el subtotal por ítems y el total del pedido incluyendo:
• Costo de los artículos
• Costo de envío ($5000)
• Se muestra al usuario el resumen del pedido y valor total a pagar.
Reglas de negocio:
• Solo se puede pedir de un restaurant a la vez.
• Mínimo de compra $23000 por pedido.
• Tiempo de delivery 45 minutos a 1 hora.
• El pago solo puede ser en efectivo o con tarjeta débito/crédito.*/

class Restaurante {
    constructor(nombre, menu) {
        this.nombre = nombre;
        this.menu = menu;
    }
}

class Pedido {
    constructor(restaurante) {
        this.restaurante = restaurante;
        this.items = [];
        this.costoEnvio = 5000;
    }

    agregarItem(nombre, cantidad) {
        const plato = this.restaurante.menu.find(item => item.nombre === nombre);
        if (!plato) return "Plato no disponible en el menú.";
        this.items.push({ ...plato, cantidad });
        return `${cantidad} x ${nombre} agregado al pedido.`;
    }

    calcularTotal() {
        const subtotal = this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
        if (subtotal < 23000) return "El pedido mínimo es de $23000.";
        return `Total a pagar: $${subtotal + this.costoEnvio}`;
    }
}

// Menú y ejemplo de uso
const menuHamburguesas = [
    { nombre: "Hamburguesa simple", precio: 25000 },
    { nombre: "Hamburguesa doble", precio: 30000 }
];

const restaurante = new Restaurante("Hamburguesas", menuHamburguesas);
const pedido = new Pedido(restaurante);

console.log(pedido.agregarItem("Hamburguesa simple", 2));
console.log(pedido.calcularTotal());
