function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    if (edad >= 18) {
        alert("Acceso permitido a la App")
    } else {
        alert("Acceso denegado: necesitas ser mayor de edad")
    }
}

function validadorNombres() {
    let nombre = prompt("Ingresa tu nombre")
    let usuarios = []

    if (nombre !== "") {
        usuarios.push(nombre)
        alert("Usuarios: " + usuarios)
    } else {
        alert("Error: El nombre no puede estar en blanco")
    }
}

function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"]
    let nuevoProducto = prompt("Ingresa un producto")

    if (!productos.includes(nuevoProducto)) {
        productos.push(nuevoProducto)
        alert("Inventario: " + productos.join(", "))
    } else {
        alert("El producto ya está en el inventario")
    }
}

function controlStock() {
    let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"]

    if (bodega.length > 5) {
        bodega.pop()
        alert("Bodega llena, eliminando último ingreso")
        alert("Bodega: " + bodega.join(", "))
    } else {
        alert("Espacio disponible")
    }
}

function limpiezaDatos() {
    let colaEspera = ["error_404", "Juan", "Sofía"]

    if (colaEspera[0] === "error_404") {
        colaEspera.shift()
        alert("Cola limpia: " + colaEspera.join(", "))
    } else {
        alert("La lista de espera está correcta")
    }
}

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

function sistemaNotas() {
    let nota = prompt("Ingresa tu nota (1 a 7)")

    if (nota >= 6) {
        alert("Excelente, eximido")
    } else if (nota >= 4) {
        alert("Aprobado, vas a examen")
    } else {
        alert("Reprobado")
    }
}

function buscadorInvitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"]
    let persona = prompt("Ingresa tu nombre")

    if (invitados.includes(persona)) {
        alert("¡Bienvenido/a " + persona + "! Pasa a la fiesta")
    } else {
        alert("Lo siento, no estás en la lista de invitados")
    }
}

function almacenMatrices() {
    let estanteria = [["Manzanas", "Peras"], ["Leche", "Yogur"]]
    let seccion = prompt("Ingresa la sección (0 o 1)")
    let producto = prompt("Ingresa el producto")

    if (estanteria[seccion].includes(producto)) {
        alert("Producto encontrado en el estante")
    } else {
        alert("No tenemos ese producto en esa sección")
    }
}

function registroVisitas() {
    let bitacora = []
    let nombreVisita = prompt("Nombre de la visita")
    let esVip = prompt("¿Es VIP? (si/no)")

    if (nombreVisita === "") {
        alert("Error: nombre vacío")
    } else if (esVip === "si") {
        bitacora.unshift(nombreVisita)
    } else {
        bitacora.push(nombreVisita)
    }

    alert("Total de visitas: " + bitacora.length)
}