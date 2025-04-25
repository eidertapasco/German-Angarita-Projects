/*Ejercicio 8:
Enunciado: Se requiere un sistema para que los usuarios puedan apostar en carreras de carros, seleccionando
pilotos, montos y tipos de apuestas.
Requisitos:
• El usuario debe poder seleccionar carreras disponibles con sus respectivos pilotos y cuotas. Por ejemplo:
• Carrera 1: (Piloto A (1.5), Piloto B (2.3), Piloto C(1.8))
• El usuario puede hacer dos tipos de apuestas:
• Ganador de la carrera
• Posiciones exactas (seleccionar 1ro y 2do puesto)
• El sistema debe permitir ingresar el monto a apostar y registrar la apuesta.
• Una vez terminada la carrera, el sistema determina si el usuario ganó y calcula las ganancias según las
cuotas.
Reglas de negocio:
• El usuario solo puede apostar en carreras habilitadas por el sistema.
• El monto mínimo por apuesta es $10000
• El monto máximo por evento es $1000.000
• Solo mayores de edad pueden apostar según su número de identificación.*/

class Carrera {
    constructor(nombre, pilotos) {
        this.nombre = nombre;
        this.pilotos = pilotos; // { nombre: cuota }
    }
}

class Apuesta {
    constructor(carrera, tipo, monto, seleccion) {
        if (monto < 10000 || monto > 1000000) {
            throw new Error("El monto debe estar entre $10000 y $1000000.");
        }
        this.carrera = carrera;
        this.tipo = tipo;
        this.monto = monto;
        this.seleccion = seleccion;
    }

    calcularGanancia(resultado) {
        if (this.tipo === "Ganador de la carrera" && resultado === this.seleccion) {
            return this.monto * this.carrera.pilotos[this.seleccion];
        }
        return "Perdiste la apuesta.";
    }
}

// Ejemplo de uso
const carrera = new Carrera("Carrera 1", { "Piloto A": 1.5, "Piloto B": 2.3, "Piloto C": 1.8 });
const apuesta = new Apuesta(carrera, "Ganador de la carrera", 50000, "Piloto A");

console.log(apuesta.calcularGanancia("Piloto A"));
