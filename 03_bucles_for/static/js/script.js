console.log("js conectado... ")

/*1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=) el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo. */

function contadorPantalla() {
    let numeros = [];
    const contaiener = document.getElementById('resultadoContainer');
    const resultado = document.getElementById('result1')
    for (let i = 1; i <= 10; i++) {
        numeros.push(i)
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    contaiener.classList.remove('d-none');
}

function asistenciaAutomatica() {

    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const contaiener = document.getElementById('resultadoContainer2');
    const resultado = document.getElementById('result2')
    for (let i = 1; i <= curso; i++) {
        curso.push(i);
     
    }
    resultado.textContent = `Lista: ${curso.join(" - ")}`;
 
    contaiener.classList.remove('d-none');
}