/*Ejercicio 7:
Enunciado: Se requiere un sistema de venta de boletas para un concierto que permita seleccionar la ubicación en
el escenario y calcular los costos de acuerdo con la localidad.
Requisitos:
• El escenario tiene las siguientes localidades:
• General
• Preferencial
• VIP
• Los precios para cada localidad son:
• General: $50000
• Preferencial: $150000
• VIP: $300000
• El usuario selecciona:
• Cantidad de boletas
• Localidad deseada
• El sistema calcula el total a pagar incluyendo adicionales:
• Impuestos del 10% sobre el precio
• Cargo por servicio por boleta de $5000
• El usuario visualiza el desglose de cobros y total a pagar.
Reglas de negocio:
• Las localidades tienen capacidad limitada de entradas disponibles
• Los descuentos y promociones no aplican para la localidad VIP

• Solo se vende un máximo de 5 boletas por transacción
• La compra puede ser pagada en efectivo o con tarjeta de crédito*/

class Localidad {
    constructor(nombre, precio, capacidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.capacidad = capacidad;
    }
}

class VentaBoletas {
    constructor() {
        this.localidades = [
            new Localidad("General", 50000, 100),
            new Localidad("Preferencial", 150000, 50),
            new Localidad("VIP", 300000, 20)
        ];
    }

    venderBoletas(localidad, cantidad) {
        const loc = this.localidades.find(l => l.nombre === localidad);
        if (!loc) return "Localidad no válida.";
        if (cantidad > 5) return "Máximo 5 boletas por transacción.";
        if (loc.capacidad < cantidad) return "Boletas no disponibles.";

        loc.capacidad -= cantidad;
        const subtotal = loc.precio * cantidad;
        const impuestos = subtotal * 0.1;
        const cargoServicio = 5000 * cantidad;
        const total = subtotal + impuestos + cargoServicio;

        return `Desglose:\nSubtotal: $${subtotal}\nImpuestos: $${impuestos}\nCargo servicio: $${cargoServicio}\nTotal: $${total}`;
    }
}

// Ejemplo de uso
const venta = new VentaBoletas();
console.log(venta.venderBoletas("General", 3));
