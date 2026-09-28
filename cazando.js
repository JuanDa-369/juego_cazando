
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntaje = 0;
let tiempo =10;
let intervalo;

function aparecerComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
}
function detectarColision() {
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {

        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);
        if(puntaje===6){
            alert("¡felicidades, ganaste el juego!");
            clearInterval(intervalo);
        }
        aparecerComida();
        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}
function restarTiempo(){
    tiempo = tiempo - 1
    mostrarEnSpan("tiempo", tiempo);

    if(tiempo===0){
        alert("¡Game Over! Se acabó el tiempo.");
        clearInterval(intervalo);
    }
}
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

function inciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = canvas.height - ALTO_GATO;
    aparecerComida();
    actualizarPantalla();
    intervalo=setInterval(restarTiempo, 1000);
}
function actualizarPantalla() {
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moverIzquierda() {
    gatoX = gatoX - 10;
    detectarColision();
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function moverDerecha() {
    gatoX = gatoX + 10;
    detectarColision();
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function moverArriba() {
    gatoY = gatoY - 10;
    detectarColision();
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function moverAbajo() {
    gatoY = gatoY + 10;
    detectarColision();
    limpiarCanva();
    graficarGato();
    graficarComida();
}
function reiniciarJuego() {
    clearInterval(intervalo);
    puntaje = 0;
    tiempo = 10;
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = canvas.height - ALTO_GATO;
    aparecerComida();
    limpiarCanva();
    graficarGato();
    graficarComida();
    intervalo = setInterval(restarTiempo, 1000);
}