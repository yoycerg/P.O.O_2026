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
    else { alert("Ingresa un valor valido.")

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