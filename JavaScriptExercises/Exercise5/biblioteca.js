/*Ejercicio 5:
Enunciado: Se requiere un sistema que permita gestionar los préstamos de libros en una biblioteca pública. Los
usuarios podrán seleccionar libros a solicitar y el sistema calculará las fechas y condiciones de préstamo.
Requisitos:

• El sistema clasifica los libros en tres categorías:
• Bestsellers (novedades)
• Literatura
• Académicos
• Cada categoría tiene una tarifa de préstamo por día diferente:
• Bestsellers: $500 por día
• Literatura: $100 por día
• Académicos: préstamo gratuito
• El usuario selecciona los libros a solicitar, ingresando título y categoría
• El usuario indica la cantidad de días que necesita el préstamo
• El sistema calcula el costo del préstamo basado en:
• Categoría del libro
• Número de días solicitado
• Para préstamos mayores a 10 días se aplica 10% de descuento
Reglas de negocio:
• El préstamo puede ser de 1 a 30 días
• Se pueden solicitar máximo 5 libros por préstamo
• Académicos siempre son gratuitos independiente de los días

Analisis:
Programa para prestamos de libros
los libros estan en 3 categorias: variables: betsellers, literatura, academicos
*/

class Libro {
    constructor(titulo, categoria) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.tarifa = this.getTarifa();
    }

    getTarifa() {
        switch (this.categoria) {
            case "Bestsellers":
                return 500;
            case "Literatura":
                return 100;
            case "Académicos":
                return 0;
            default:
                throw new Error("Categoría no válida");
        }
    }
}

class Prestamo {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, categoria) {
        if (this.libros.length >= 5) {
            return "No puedes solicitar más de 5 libros por préstamo.";
        }
        const libro = new Libro(titulo, categoria);
        this.libros.push(libro);
        return `${titulo} agregado al préstamo.`;
    }

    calcularCosto(dias) {
        if (dias < 1 || dias > 30) {
            return "El préstamo debe ser entre 1 y 30 días.";
        }

        let costo = this.libros.reduce((total, libro) => {
            return total + libro.tarifa * dias;
        }, 0);

        if (dias > 10) {
            costo *= 0.9; // Aplicar descuento del 10%
        }

        return costo === 0 ? "El préstamo es gratuito." : `Costo total del préstamo: $${costo}`;
    }
}

// Ejemplo de uso
const prestamo = new Prestamo();
console.log(prestamo.agregarLibro("El Principito", "Literatura"));
console.log(prestamo.agregarLibro("Física Básica", "Académicos"));
console.log(prestamo.calcularCosto(12));
