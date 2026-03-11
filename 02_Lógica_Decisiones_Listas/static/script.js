/*1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
 */

function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 0 && edad >= 130) {
        alert("Ingresa un valor valido")
    }
    else if (edad => 18) {
        alert("Acceso denegado: necesitas ser mayor de edad")
    }
    else if (edad <= 17 && edad > 0) {
        alert("Acceso permitido a la App")
    }
    else {
        alert("Ingresa un valor valido.")

    }

}
/*2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
 */

function validadorNombres() {
    let nombre = prompt("Ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);

    } else {
        alert("Error: El nombre no puede estar en blanco");

    }

}

/*3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
 */

function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }

}

/*Si ya existe, muestra: "El producto ya está en el inventario".
4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible".
 */
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
function controlStock() {
    if (bodega.length <= 5) {
        alert("Espacio disponible")
    } else {
        alert("bodega llena, elimanado último ingreso")
        bodega.pop()
    }
}

/*5. Limpieza de Datos
A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
 */
function limpiezaDatos() {
    let colaEspera = ["error_404", "Juan", "Sofía"]

    if (colaEspera[0] === "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`)
}

/*6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push().
 */

function accesoVIP() {
    let foro = ["User1", "User2"]
    let nombre = prompt("Ingresa tu nombre")
    let rol = prompt("Ingresa tu rol (Admin o User)")

    if (rol === "Admin") {
        foro.unshift(nombre)
    } else {
        foro.push(nombre)
    }

    alert("Foro: " + foro.join(", "))

}

/*7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if).
 */

function CalificacionChile() {
    let nota = parseInt(prompt("Ingresar la nota: "));
    if (6 >= 7) {
alert ("Excelente, eximido");
    } else if (4 >= 0) {
        alert("Aprobado, vas a examen") 
            
        
    }
}