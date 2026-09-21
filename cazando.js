
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}
}
function inciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = canvas.height - ALTO_GATO;
    
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}