// Ejercicio 1: Función con validación de datos
// Objetivo: Validar entradas antes de procesarlas.
// Instrucciones:
// Crea un input donde el usuario escriba un número.
// Crea una función verificarNumero.
// La función debe:
// Capturar el valor del input
// Verificar si está vacío
// Si está vacío → mostrar: "Debes ingresar un número"
// Si tiene valor → mostrar: "Número ingresado correctamente"

function obtenerMensajeNumero(valor) {
    if (valor.trim() === "") {
        return "Debes ingresar un número";
    } else if (isNaN(valor)) {
        return "Debes ingresar un valor numérico";
    } else {
        return "Número ingresado correctamente";
    }
}



function verificarNumero() {
    const input = document.getElementById("input1").value;
    const mensaje = obtenerMensajeNumero(input);
    const result = document.getElementById("result1");
    const container = document.getElementById("resultadoContainer1");
    result.textContent = mensaje;
    container.classList.remove("d-none");
}


/*Ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.

Instrucciones:

Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más */



function clasificarNota(nota) {
    if (isNaN(nota)) {
        return "Por favor ingresa una nota válida";
    }
    if (nota < 1.0 || nota > 7.0) {
        return "La nota debe estar entre 1.0 y 7.0";
    }
    if (nota < 4.0) {
        return "Reprobado";
    } else if (nota >= 4.0 && nota <= 5.9) {
        return "Aprobado";
    } else if (nota >= 6.0) {
        return "Sobresaliente";
    }
}

function evaluarNota() {
    let valor = document.getElementById("input2").value;
    let nota = parseFloat(valor);
    let resultado = document.getElementById("result2");
    let contenedor = document.getElementById("resultadoContainer2");
    contenedor.classList.remove("d-none");
    resultado.textContent = clasificarNota(nota);
}


/*Ejercicio 3: Uso de múltiples funciones (flujo completo)
Objetivo: Integrar varias funciones con roles distintos.

Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y */

function procesarNumero() {
    let valor = document.getElementById("input3").value;
    let numero = parseFloat(valor);
    let resultado = document.getElementById("result3");
    let contenedor = document.getElementById("resultadoContainer3");
    contenedor.classList.remove("d-none");
    if (isNaN(numero)) {
        resultado.textContent = "Por favor ingresa un número válido";
        return;
    }
    let cuadrado = calcularCuadrado(numero);
    let triple = calcularTriple(numero);
    resultado.textContent = `Cuadrado: ${cuadrado}, Triple: ${triple}`;
    function calcularCuadrado(numero) {
        return numero * numero;
    }
    function calcularTriple(numero) {
        return numero * 3;
    }

}

/*
Ejercicio 4: Función que transforma texto
Objetivo: Manipular strings desde un input.

Instrucciones:

Crea un input para ingresar un texto.
Crea una función transformarTexto.
La función debe:
Capturar el texto
Convertirlo a mayúsculas (toUpperCase())
Mostrar el resultado en un <div>

Ejemplo esperado:

Entrada: hola mundo
Salida: HOLA MUNDO */

function procesarTexto(texto) {
    if (texto === "") {
        return "Debes ingresar un texto";
    }
    return texto.toUpperCase();
}

function transformarTexto() {
    const texto = document.getElementById("input4").value;
    const textoTransformado = procesarTexto(texto);
    const resultado = document.getElementById("result4");
    const contenedor = document.getElementById("resultadoContainer4");
    resultado.textContent = textoTransformado;
    contenedor.classList.remove("d-none");
}