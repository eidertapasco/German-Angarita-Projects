class Inventario {
  constructor() {  //constructor: método especial que se llama cuando creas una nueva instancia (un nuevo objeto) de la clase Inventario.
      this.videojuegos = []; // lista de objetos o videojuegos
  }

  ingresarVideojuego(videojuego) {
      this.videojuegos.push(videojuego);
  }

  eliminarVideojuego(nombre) {
      this.videojuegos = this.videojuegos.filter(v => v.nombre !== nombre);
  }

  obtenerTodosVideojuegos() {
      return this.videojuegos;
  }

  actualizarVideojuego(nombre, nuevoDatos) {
      const index = this.videojuegos.findIndex(v => v.nombre === nombre);
      if (index !== -1) {
          this.videojuegos[index] = { ...this.videojuegos[index], ...nuevoDatos };
      }
  }
}

//clase admin
class Admin {
  constructor(nombre, contraseña, email, inventario) {
      this.nombre = nombre;
      this.contraseña = contraseña;
      this.email = email;
      this.inventario = inventario;
  }

  agregarVideojuego(videojuego) {
      this.inventario.ingresarVideojuego(videojuego);
  }

  eliminarVideojuego(nombre) {
      this.inventario.eliminarVideojuego(nombre);
  }

  verInventario() {
      return this.inventario.obtenerTodosVideojuegos();
  }

  modificarVideojuego(nombre, nuevosDatos) {
      this.inventario.actualizarVideojuego(nombre, nuevosDatos);
  }
}

//prueba del sistema
const inventario = new Inventario();
const admin = new Admin("Jhon", "1234", "jhon@example.com", inventario);
//agregar video juegos
admin.agregarVideojuego({ nombre: "GTA V", genero: "Acción", precio: 60 });
admin.agregarVideojuego({ nombre: "Minecraft", genero: "Aventura", precio: 30 });
admin.agregarVideojuego({ nombre: "Clash Royale", genero: "Estrategia", precio: 70 });
admin.agregarVideojuego({ nombre: "Valorant", genero: "Aventura", precio: 30 });
admin.agregarVideojuego({ nombre: "FIFA 25", genero: "Deportes", precio: 50 });

console.log("Todos los videojuegos:", admin.verInventario());
//modificar valores
admin.modificarVideojuego("GTA V", { precio: 50 });
console.log("Después de actualizar Valorant:", admin.verInventario());
admin.modificarVideojuego("Valorant",{genero: "Fantasia", precio: 180} )

//eliminar videojuegos
admin.eliminarVideojuego("Minecraft");
console.log("Después de eliminar Minecraft:", admin.verInventario());
admin.eliminarVideojuego("Clash Royale");
console.log("Después de eliminar Clash Royale:", admin.verInventario());