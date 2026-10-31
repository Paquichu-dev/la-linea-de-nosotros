"use strict";

// ========================================
// LA LÍNEA DE NOSOTROS
// ESTACIONES + METRO + CALLEJÓN + NAVIDAD
// ========================================


// ========================================
// 0. ELEMENTOS DEL HTML
// ========================================

const botonInicio = document.querySelector("#botonInicio");
const inicio = document.querySelector("#inicio");
const pantallaJuego = document.querySelector("#pantallaJuego");

const botonPausa = document.querySelector("#botonPausa");
const menuPausa = document.querySelector("#menuPausa");
const botonContinuar = document.querySelector("#botonContinuar");
const botonMenu = document.querySelector("#botonMenu");

const volumen = document.querySelector("#volumen");
const valorVolumen = document.querySelector("#valorVolumen");

const canvas = document.querySelector("#juego");

if (
    !botonInicio || !inicio || !pantallaJuego ||
    !botonPausa || !menuPausa || !botonContinuar ||
    !botonMenu || !volumen || !valorVolumen || !canvas
) {
    throw new Error("Falta algún elemento del HTML. Comprueba los IDs del juego.");
}

const ctx = canvas.getContext("2d");

if (!ctx) {
    throw new Error("No se ha podido crear el canvas 2D.");
}

ctx.imageSmoothingEnabled = false;


// ========================================
// 1. MAPAS
// ========================================

// ESTACIÓN 1

const mapaEstacion1 = new Image();
let mapaCargado = false;

mapaEstacion1.onload = function () {
    mapaCargado = true;

    if (escenaActual === "estacion1") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 1 cargado.");
};

mapaEstacion1.onerror = function () {
    console.error("No se ha podido cargar imagenes/mapas/mapa-estacion-1.png");
};

mapaEstacion1.src = "imagenes/mapas/mapa-estacion-1.png";


// ESTACIÓN 2

const mapaEstacion2 = new Image();
let mapaEstacion2Cargado = false;

mapaEstacion2.onload = function () {
    mapaEstacion2Cargado = true;

    if (escenaActual === "estacion2") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 2 cargado.");
};

mapaEstacion2.onerror = function () {
    console.error("No se ha podido cargar imagenes/mapas/mapa-estacion-2.png");
};

mapaEstacion2.src = "imagenes/mapas/mapa-estacion-2.png";


// ESTACIÓN 3: NAVIDAD

const mapaEstacion3 = new Image();
let mapaEstacion3Cargado = false;

mapaEstacion3.onload = function () {
    mapaEstacion3Cargado = true;

    if (escenaActual === "estacion3") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 3: Navidad cargado.");
};

mapaEstacion3.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-estacion-3.png"
    );
};

mapaEstacion3.src = "imagenes/mapas/mapa-estacion-3.png";

// ESTACIÓN 4: EXÁMENES DE ENERO

const mapaEstacion4 = new Image();
let mapaEstacion4Cargado = false;

mapaEstacion4.onload = function () {
    mapaEstacion4Cargado = true;

    if (escenaActual === "estacion4") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 4 cargado.");
};

mapaEstacion4.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-estacion-4.png"
    );
};

mapaEstacion4.src = "imagenes/mapas/mapa-estacion-4.png";


// ESTACIÓN 5: ENTRE FOGONES


const mapaEstacion5 = new Image();
let mapaEstacion5Cargado = false;

mapaEstacion5.onload = function () {
    mapaEstacion5Cargado = true;

    if (escenaActual === "estacion5") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 5: Entre fogones cargado.");
};

mapaEstacion5.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-estacion-5.png"
    );
};

mapaEstacion5.src = "imagenes/mapas/mapa-estacion-5.png";


// ESTACIÓN 6: GRAN CANARIA

const mapaEstacion6 = new Image();
let mapaEstacion6Cargado = false;

mapaEstacion6.onload = function () {
    mapaEstacion6Cargado = true;

    if (escenaActual === "estacion6") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 6: Gran Canaria cargado.");
};

mapaEstacion6.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-estacion-6.png"
    );
};

mapaEstacion6.src = "imagenes/mapas/mapa-estacion-6.png";

// ESTACIÓN 7: ANNIVERSARY

const mapaEstacion7 = new Image();
let mapaEstacion7Cargado = false;

mapaEstacion7.onload = function () {
    mapaEstacion7Cargado = true;

    if (escenaActual === "estacion7") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Mapa de la estación 7: Anniversary cargado.");
};

mapaEstacion7.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-estacion-7.png"
    );
};

mapaEstacion7.src = "imagenes/mapas/mapa-estacion-7.png";

// INTERIOR DEL METRO

const imagenInteriorMetro = new Image();
let interiorCargado = false;

imagenInteriorMetro.onload = function () {
    interiorCargado = true;

    if (escenaActual === "interiorMetro") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    console.log("Interior del metro cargado.");
};

imagenInteriorMetro.onerror = function () {
    console.error("No se ha podido cargar imagenes/mapas/metro-interior.png");
};

imagenInteriorMetro.src = "imagenes/mapas/metro-interior.png";


// ========================================
// 2. CREAR DATOS DE LAS MÁSCARAS
// ========================================

function crearDatosMascara(imagen, nombre) {
    try {
        const lienzo = document.createElement("canvas");

        lienzo.width = imagen.naturalWidth;
        lienzo.height = imagen.naturalHeight;

        const contexto = lienzo.getContext("2d", {
            willReadFrequently: true
        });

        contexto.drawImage(imagen, 0, 0);

        const datos = contexto.getImageData(
            0,
            0,
            lienzo.width,
            lienzo.height
        );

        console.log("Máscara cargada:", nombre);

        return datos;
    } catch (error) {
        console.error(
            "No se han podido leer los píxeles de " + nombre +
            ". Abre el juego mediante el servidor local.",
            error
        );

        return null;
    }
}


// ========================================
// 3. MÁSCARAS DE COLISIONES
// ========================================

//COLISIONES ESTACIÓN 1

const mascaraColisiones = new Image();
let colisionesCargadas = false;
let datosColisiones = null;

mascaraColisiones.onload = function () {
    datosColisiones = crearDatosMascara(
        mascaraColisiones,
        "estación 1"
    );

    colisionesCargadas = Boolean(datosColisiones);

    if (
        mapaCargado &&
        (
            mascaraColisiones.naturalWidth !== mapaEstacion1.naturalWidth ||
            mascaraColisiones.naturalHeight !== mapaEstacion1.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 1 tienen dimensiones diferentes."
        );
    }
};

mascaraColisiones.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-1.png"
    );
};

mascaraColisiones.src = "imagenes/mapas/colisiones-estacion-1.png";


//COLISIONES ESTACIÓN 2

const mascaraColisionesEstacion2 = new Image();
let colisionesEstacion2Cargadas = false;
let datosColisionesEstacion2 = null;

mascaraColisionesEstacion2.onload = function () {
    datosColisionesEstacion2 = crearDatosMascara(
        mascaraColisionesEstacion2,
        "estación 2"
    );

    colisionesEstacion2Cargadas = Boolean(datosColisionesEstacion2);

    if (
        mapaEstacion2Cargado &&
        (
            mascaraColisionesEstacion2.naturalWidth !== mapaEstacion2.naturalWidth ||
            mascaraColisionesEstacion2.naturalHeight !== mapaEstacion2.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 2 tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesEstacion2.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-2.png"
    );
};

mascaraColisionesEstacion2.src =
    "imagenes/mapas/colisiones-estacion-2.png";


//COLISIONES ESTACIÓN 3: NAVIDAD

const mascaraColisionesEstacion3 = new Image();
let colisionesEstacion3Cargadas = false;
let datosColisionesEstacion3 = null;

mascaraColisionesEstacion3.onload = function () {
    datosColisionesEstacion3 = crearDatosMascara(
        mascaraColisionesEstacion3,
        "estación 3: Navidad"
    );

    colisionesEstacion3Cargadas = Boolean(datosColisionesEstacion3);

    if (
        mapaEstacion3Cargado &&
        (
            mascaraColisionesEstacion3.naturalWidth !== mapaEstacion3.naturalWidth ||
            mascaraColisionesEstacion3.naturalHeight !== mapaEstacion3.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 3 tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesEstacion3.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-3.png"
    );
};

mascaraColisionesEstacion3.src =
    "imagenes/mapas/colisiones-estacion-3.png";

//COLISIONES ESTACIÓN 4: EXÁMENES DE ENERO

const mascaraColisionesEstacion4 = new Image();
let colisionesEstacion4Cargadas = false;
let datosColisionesEstacion4 = null;

mascaraColisionesEstacion4.onload = function () {
    datosColisionesEstacion4 = crearDatosMascara(
        mascaraColisionesEstacion4,
        "estación 4"
    );

    colisionesEstacion4Cargadas = Boolean(datosColisionesEstacion4);

    if (
        mapaEstacion4Cargado &&
        (
            mascaraColisionesEstacion4.naturalWidth !== mapaEstacion4.naturalWidth ||
            mascaraColisionesEstacion4.naturalHeight !== mapaEstacion4.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 4 tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesEstacion4.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-4.png"
    );
};

mascaraColisionesEstacion4.src =
    "imagenes/mapas/colisiones-estacion-4.png";


// COLISIONES DE LA ESTACIÓN 5


const mascaraColisionesEstacion5 = new Image();

let colisionesEstacion5Cargadas = false;
let datosColisionesEstacion5 = null;

mascaraColisionesEstacion5.onload = function () {
    datosColisionesEstacion5 = crearDatosMascara(
        mascaraColisionesEstacion5,
        "estación 5: Entre fogones"
    );

    colisionesEstacion5Cargadas =
        Boolean(datosColisionesEstacion5);

    if (
        mapaEstacion5Cargado &&
        (
            mascaraColisionesEstacion5.naturalWidth !==
                mapaEstacion5.naturalWidth ||
            mascaraColisionesEstacion5.naturalHeight !==
                mapaEstacion5.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 5 tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesEstacion5.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-5.png"
    );
};

mascaraColisionesEstacion5.src =
    "imagenes/mapas/colisiones-estacion-5.png";



// COLISIONES ESTACIÓN 6: GRAN CANARIA

const mascaraColisionesEstacion6 = new Image();

let colisionesEstacion6Cargadas = false;
let datosColisionesEstacion6 = null;

mascaraColisionesEstacion6.onload = function () {
    datosColisionesEstacion6 = crearDatosMascara(
        mascaraColisionesEstacion6,
        "estación 6: Gran Canaria"
    );

    colisionesEstacion6Cargadas =
        Boolean(datosColisionesEstacion6);

    if (
        mapaEstacion6Cargado &&
        (
            mascaraColisionesEstacion6.naturalWidth !==
                mapaEstacion6.naturalWidth ||
            mascaraColisionesEstacion6.naturalHeight !==
                mapaEstacion6.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 6 tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesEstacion6.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-6.png"
    );
};

mascaraColisionesEstacion6.src =
    "imagenes/mapas/colisiones-estacion-6.png";


// COLISIONES ESTACIÓN 7: ANNIVERSARY

const mascaraColisionesEstacion7 = new Image();

let colisionesEstacion7Cargadas = false;
let datosColisionesEstacion7 = null;

mascaraColisionesEstacion7.onload = function () {
    datosColisionesEstacion7 = crearDatosMascara(
        mascaraColisionesEstacion7,
        "estación 7: Anniversary"
    );

    colisionesEstacion7Cargadas =
        Boolean(datosColisionesEstacion7);

    if (
        mapaEstacion7Cargado &&
        (
            mascaraColisionesEstacion7.naturalWidth !==
                mapaEstacion7.naturalWidth ||
            mascaraColisionesEstacion7.naturalHeight !==
                mapaEstacion7.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa de la estación 7 tienen dimensiones diferentes."
        );
    }

    if (escenaActual === "estacion7") {
        dibujar();
    }
};

mascaraColisionesEstacion7.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-estacion-7.png"
    );
};

mascaraColisionesEstacion7.src =
    "imagenes/mapas/colisiones-estacion-7.png";

// INTERIOR DEL METRO

const mascaraColisionesMetro = new Image();
let colisionesMetroCargadas = false;
let datosColisionesMetro = null;

mascaraColisionesMetro.onload = function () {
    datosColisionesMetro = crearDatosMascara(
        mascaraColisionesMetro,
        "interior del metro"
    );

    colisionesMetroCargadas = Boolean(datosColisionesMetro);

    if (
        interiorCargado &&
        (
            mascaraColisionesMetro.naturalWidth !== imagenInteriorMetro.naturalWidth ||
            mascaraColisionesMetro.naturalHeight !== imagenInteriorMetro.naturalHeight
        )
    ) {
        console.error(
            "La máscara y el mapa del metro tienen dimensiones diferentes."
        );
    }
};

mascaraColisionesMetro.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-metro-interior.png"
    );
};

mascaraColisionesMetro.src =
    "imagenes/mapas/colisiones-metro-interior.png";


// ========================================
// 4. MAPA Y MÁSCARA DEL CALLEJÓN
// ========================================

const mapaCallejon = new Image();
let callejonCargado = false;

mapaCallejon.onload = function () {
    callejonCargado = true;

    if (escenaActual === "callejon") {
        calcularEscalaMapa();
        limitarJugadorAlMapa();
        actualizarCamara();
        dibujar();
    }

    comprobarDimensionesCallejon();

    console.log("Mapa del callejón cargado.");
};

mapaCallejon.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/mapa-callejon-estacion-2.png"
    );
};

mapaCallejon.src =
    "imagenes/mapas/mapa-callejon-estacion-2.png";


const mascaraColisionesCallejon = new Image();
let colisionesCallejonCargadas = false;
let datosColisionesCallejon = null;

mascaraColisionesCallejon.onload = function () {
    datosColisionesCallejon = crearDatosMascara(
        mascaraColisionesCallejon,
        "callejón"
    );

    colisionesCallejonCargadas = Boolean(datosColisionesCallejon);

    comprobarDimensionesCallejon();
};

mascaraColisionesCallejon.onerror = function () {
    console.error(
        "No se ha podido cargar imagenes/mapas/colisiones-callejon-estacion-2.png"
    );
};

mascaraColisionesCallejon.src =
    "imagenes/mapas/colisiones-callejon-estacion-2.png";


function comprobarDimensionesCallejon() {
    if (!callejonCargado || !colisionesCallejonCargadas) {
        return;
    }

    if (
        mapaCallejon.naturalWidth !== mascaraColisionesCallejon.naturalWidth ||
        mapaCallejon.naturalHeight !== mascaraColisionesCallejon.naturalHeight
    ) {
        console.error(
            "La máscara y el mapa del callejón tienen dimensiones diferentes."
        );
    }
}


// ========================================
// 5. SPRITES DE STEPHI QUIETA
// ========================================

const rutaPersonajes = "imagenes/personajes/stephi/";

const spritesQuietos = {
    norte: new Image(),
    noreste: new Image(),
    este: new Image(),
    sureste: new Image(),
    sur: new Image(),
    suroeste: new Image(),
    oeste: new Image(),
    noroeste: new Image()
};

const archivosQuietos = {
    norte: "north.png",
    noreste: "north-east.png",
    este: "east.png",
    sureste: "south-east.png",
    sur: "south.png",
    suroeste: "south-west.png",
    oeste: "west.png",
    noroeste: "north-west.png"
};

for (const direccion in spritesQuietos) {
    const sprite = spritesQuietos[direccion];

    sprite.onload = dibujar;

    sprite.onerror = function () {
        console.error(
            "No se ha podido cargar:",
            rutaPersonajes + archivosQuietos[direccion]
        );
    };

    sprite.src = rutaPersonajes + archivosQuietos[direccion];
}


// ========================================
// 6. SPRITES DE STEPHI CAMINANDO
// ========================================

const spritesAndando = {
    norte: [new Image(), new Image()],
    noreste: [new Image(), new Image()],
    este: [new Image(), new Image()],
    sureste: [new Image(), new Image()],
    sur: [new Image(), new Image()],
    suroeste: [new Image(), new Image()],
    oeste: [new Image(), new Image()],
    noroeste: [new Image(), new Image()]
};

const archivosAndando = {
    norte: ["walking-north.png", "walking-2-north.png"],
    noreste: ["walking-north-east.png", "walking-2-north-east.png"],
    este: ["walking-east.png", "walking-2-east.png"],
    sureste: ["walking-south-east.png", "walking-2-south-east.png"],
    sur: ["walking-south.png", "walking-2-south.png"],
    suroeste: ["walking-south-west.png", "walking-2-south-west.png"],
    oeste: ["walking-west.png", "walking-2-west.png"],
    noroeste: ["walking-north-west.png", "walking-2-north-west.png"]
};

for (const direccion in spritesAndando) {
    for (let i = 0; i < 2; i++) {
        const sprite = spritesAndando[direccion][i];

        sprite.onload = dibujar;

        sprite.onerror = function () {
            console.error(
                "No se ha podido cargar:",
                rutaPersonajes + archivosAndando[direccion][i]
            );
        };

        sprite.src = rutaPersonajes + archivosAndando[direccion][i];
    }
}


// ========================================
// 7. IMAGEN DEL METRO
// ========================================

const imagenMetro = new Image();

imagenMetro.onload = dibujar;

imagenMetro.onerror = function () {
    console.error("No se ha podido cargar imagenes/mapas/metro.png");
};

imagenMetro.src = "imagenes/mapas/metro.png";


// ========================================
// 8. DATOS DEL PERSONAJE
// ========================================

const TAMANO_PERSONAJE = 80;
const MITAD_PERSONAJE = TAMANO_PERSONAJE / 2;

const TAMANO_PERSONAJE_ESTACION_1 = 80;
const TAMANO_PERSONAJE_ESTACION_2 = 80;
const TAMANO_PERSONAJE_ESTACION_3 = 80;
const TAMANO_PERSONAJE_ESTACION_4 = 95;
const TAMANO_PERSONAJE_ESTACION_5 = 120;
const TAMANO_PERSONAJE_ESTACION_6 = 110;
const TAMANO_PERSONAJE_ESTACION_7 = 110;
const TAMANO_PERSONAJE_METRO = 200;
const TAMANO_PERSONAJE_CALLEJON = 200;

const COLISION_PIES = {
    desplazamientoY: 25,
    mitadAncho: 7,
    mitadAlto: 3
};

const jugador = {
    x: 290,
    y: 300,
    velocidad: 2,
    direccion: "sur",
    moviendose: false,
    fotograma: 0,
    contadorAnimacion: 0
};

const APARICION_ESTACION_4 = {
    x: 1150,
    y: 375
};

let posicionEstacion4X = APARICION_ESTACION_4.x;
let posicionEstacion4Y = APARICION_ESTACION_4.y;

// ========================================
// 9. ESTADO DEL JUEGO
// ========================================

const teclas = {};

let juegoIniciado = false;
let pausado = false;
let volumenJuego = 0.7;

let escenaActual = "estacion1";

let dialogoMetroAbierto = false;
let transicionMetroActiva = false;

let faseTransicionMetro = "";
let posicionMetroX = 0;
let opacidadFundido = 0;

const VELOCIDAD_ENTRADA_METRO = 5;
const VELOCIDAD_FUNDIDO = 0.035;


// ========================================
// 10. POSICIONES DE CADA ESTACIÓN
// ========================================

const APARICION_ESTACION_1 = {
    x: 200,
    y: 400
};

const APARICION_ESTACION_2 = {
    x: 1050,
    y: 300
};

// NAVIDAD: MISMAS COORDENADAS QUE LA ESTACIÓN 2.
// Se aplican al mapa de la estación 3.

const APARICION_ESTACION_3 = {
    x: 1050,
    y: 300
};

const APARICION_ESTACION_5 = {
    x: 1150,
    y: 352
};

const APARICION_ESTACION_6 = {
    x: 1150,
    y: 352
};

const APARICION_ESTACION_7 = {
    x: 1150,
    y: 352
};

// Posición dentro del callejón.
const APARICION_CALLEJON = {
    x: 550,
    y: 500
};

let posicionEstacion1X = APARICION_ESTACION_1.x;
let posicionEstacion1Y = APARICION_ESTACION_1.y;

let posicionEstacion2X = APARICION_ESTACION_2.x;
let posicionEstacion2Y = APARICION_ESTACION_2.y;

let posicionEstacion3X = APARICION_ESTACION_3.x;
let posicionEstacion3Y = APARICION_ESTACION_3.y;

let posicionEstacion5X = APARICION_ESTACION_5.x;
let posicionEstacion5Y = APARICION_ESTACION_5.y;

let posicionEstacion6X = APARICION_ESTACION_6.x;
let posicionEstacion6Y = APARICION_ESTACION_6.y;

let posicionEstacion7X = APARICION_ESTACION_7.x;
let posicionEstacion7Y = APARICION_ESTACION_7.y;

// Coordenadas exactas de entrada al callejón.
let posicionEntradaCallejonX = 0;
let posicionEntradaCallejonY = 0;

let estacionOrigenMetro = "estacion1";
let estacionDestinoMetro = "estacion1";


// ========================================
// 11. CÁMARA Y MAPA ACTIVO
// ========================================

const camara = {
    x: 0,
    y: 0
};

let escalaMapa = 1;

function mapaActivo() {
    if (escenaActual === "interiorMetro" && interiorCargado) {
        return imagenInteriorMetro;
    }

    if (escenaActual === "estacion2" && mapaEstacion2Cargado) {
        return mapaEstacion2;
    }

    if (escenaActual === "estacion3" && mapaEstacion3Cargado) {
        return mapaEstacion3;
    }

    if (escenaActual === "estacion4" && mapaEstacion4Cargado) {
        return mapaEstacion4;
    }

    if (escenaActual === "estacion5" && mapaEstacion5Cargado) {
        return mapaEstacion5;
    }

    if (escenaActual === "estacion6" && mapaEstacion6Cargado) {
        return mapaEstacion6;
    }

    if (escenaActual === "estacion7" && mapaEstacion7Cargado) {
        return mapaEstacion7;
    }

    if (escenaActual === "callejon" && callejonCargado) {
        return mapaCallejon;
    }

    return mapaEstacion1;
}

function mapaActivoCargado() {
    if (escenaActual === "interiorMetro") {
        return interiorCargado;
    }

    if (escenaActual === "estacion2") {
        return mapaEstacion2Cargado;
    }

    if (escenaActual === "estacion3") {
        return mapaEstacion3Cargado;
    }

    if (escenaActual === "estacion4") {
        return mapaEstacion4Cargado;
    }

    if (escenaActual === "estacion5") {
        return mapaEstacion5Cargado;
    }

    if (escenaActual === "estacion6") {
        return mapaEstacion6Cargado;
    }

    if (escenaActual === "estacion7") {
        return mapaEstacion7Cargado;
    }

    if (escenaActual === "callejon") {
        return callejonCargado;
    }

    return mapaCargado;
}

function obtenerAnchoMapa() {
    if (mapaActivoCargado()) {
        return mapaActivo().naturalWidth;
    }

    return canvas.width / escalaMapa;
}

function obtenerAltoMapa() {
    if (mapaActivoCargado()) {
        return mapaActivo().naturalHeight;
    }

    return canvas.height / escalaMapa;
}

function obtenerAnchoVisible() {
    return canvas.width / escalaMapa;
}

function obtenerAltoVisible() {
    return canvas.height / escalaMapa;
}


// ========================================
// 12. DATOS DE COLISIONES ACTIVOS
// ========================================

function obtenerDatosColisionesActivos() {
    if (escenaActual === "interiorMetro") {
        return colisionesMetroCargadas
            ? datosColisionesMetro
            : null;
    }

    if (escenaActual === "estacion2") {
        return colisionesEstacion2Cargadas
            ? datosColisionesEstacion2
            : null;
    }

    if (escenaActual === "estacion3") {
        return colisionesEstacion3Cargadas
            ? datosColisionesEstacion3
            : null;
    }

    if (escenaActual === "estacion4") {
        return colisionesEstacion4Cargadas
            ? datosColisionesEstacion4
            : null;
    }

    if (escenaActual === "estacion5") {
        return colisionesEstacion5Cargadas
            ? datosColisionesEstacion5
            : null;
    }

    if (escenaActual === "estacion6") {
        return colisionesEstacion6Cargadas
            ? datosColisionesEstacion6
            : null;
    }

    if (escenaActual === "estacion7") {
        return colisionesEstacion7Cargadas
            ? datosColisionesEstacion7
            : null;
    }

    if (escenaActual === "callejon") {
        return colisionesCallejonCargadas
            ? datosColisionesCallejon
            : null;
    }

    return colisionesCargadas ? datosColisiones : null;
}

function mascaraActiva() {
    if (escenaActual === "interiorMetro") {
        return mascaraColisionesMetro;
    }

    if (escenaActual === "estacion2") {
        return mascaraColisionesEstacion2;
    }

    if (escenaActual === "estacion3") {
        return mascaraColisionesEstacion3;
    }

    if (escenaActual === "estacion4") {
        return mascaraColisionesEstacion4;
    }

    if (escenaActual === "estacion5") {
        return mascaraColisionesEstacion5;
    }

    if (escenaActual === "estacion6") {
    return mascaraColisionesEstacion6;
    }

    if (escenaActual === "estacion7") {
        return mascaraColisionesEstacion7;
    }

    if (escenaActual === "callejon") {
        return mascaraColisionesCallejon;
    }

    return mascaraColisiones;
}


// ========================================
// 13. AJUSTAR CANVAS Y ESCALA
// ========================================

function ajustarCanvas() {
    const rectangulo = canvas.getBoundingClientRect();

    if (rectangulo.width <= 0 || rectangulo.height <= 0) {
        return;
    }

    const ancho = Math.max(1, Math.round(rectangulo.width));
    const alto = Math.max(1, Math.round(rectangulo.height));

    if (canvas.width !== ancho || canvas.height !== alto) {
        canvas.width = ancho;
        canvas.height = alto;
    }

    ctx.imageSmoothingEnabled = false;

    calcularEscalaMapa();
    limitarJugadorAlMapa();
    actualizarCamara();
    dibujar();
}

function calcularEscalaMapa() {
    if (
        !mapaActivoCargado() ||
        obtenerAnchoMapa() <= 0 ||
        obtenerAltoMapa() <= 0 ||
        canvas.width <= 0 ||
        canvas.height <= 0
    ) {
        escalaMapa = 1;
        return;
    }

    const escalaHorizontal = canvas.width / obtenerAnchoMapa();
    const escalaVertical = canvas.height / obtenerAltoMapa();

    escalaMapa = Math.max(
        escalaHorizontal,
        escalaVertical
    );
}


// ========================================
// 14. LÍMITES DEL PERSONAJE
// ========================================

function limitarJugadorAlMapa() {
    const anchoMapa = obtenerAnchoMapa();
    const altoMapa = obtenerAltoMapa();

    if (anchoMapa <= 0 || altoMapa <= 0) {
        return;
    }

    const margenX = Math.min(MITAD_PERSONAJE, anchoMapa / 2);
    const margenY = Math.min(MITAD_PERSONAJE, altoMapa / 2);

    jugador.x = Math.max(
        margenX,
        Math.min(anchoMapa - margenX, jugador.x)
    );

    jugador.y = Math.max(
        margenY,
        Math.min(altoMapa - margenY, jugador.y)
    );
}


// ========================================
// 15. COMPROBAR COLISIONES
// ========================================

function puntoBloqueado(x, y) {
    const datos = obtenerDatosColisionesActivos();
    const imagenActiva = mascaraActiva();

    if (
        !datos ||
        !imagenActiva.complete ||
        imagenActiva.naturalWidth === 0
    ) {
        return false;
    }

    const ancho = imagenActiva.naturalWidth;
    const alto = imagenActiva.naturalHeight;

    const pixelX = Math.floor(x);
    const pixelY = Math.floor(y);

    if (
        pixelX < 0 ||
        pixelY < 0 ||
        pixelX >= ancho ||
        pixelY >= alto
    ) {
        return true;
    }

    const indice = (pixelY * ancho + pixelX) * 4;

    const rojo = datos.data[indice];
    const verde = datos.data[indice + 1];
    const azul = datos.data[indice + 2];
    const alfa = datos.data[indice + 3];

    if (alfa === 0) {
        return false;
    }

    // Únicamente el negro bloquea el movimiento.
    return rojo < 50 && verde < 50 && azul < 50;
}

function piesBloqueados(x, y) {
    const pieX = x;
    const pieY = y + COLISION_PIES.desplazamientoY;

    const puntos = [
        [pieX, pieY],
        [pieX - COLISION_PIES.mitadAncho, pieY],
        [pieX + COLISION_PIES.mitadAncho, pieY],
        [pieX, pieY - COLISION_PIES.mitadAlto],
        [pieX, pieY + COLISION_PIES.mitadAlto],
        [
            pieX - COLISION_PIES.mitadAncho,
            pieY + COLISION_PIES.mitadAlto
        ],
        [
            pieX + COLISION_PIES.mitadAncho,
            pieY + COLISION_PIES.mitadAlto
        ]
    ];

    for (const punto of puntos) {
        if (puntoBloqueado(punto[0], punto[1])) {
            return true;
        }
    }

    return false;
}


// ========================================
// 16. DETECTAR COLORES DE INTERACCIÓN
// ========================================

// Negro = bloqueado.
// Magenta = metro.
// Cian = entrar o salir del callejón.
// Verde = minijuego correspondiente a la zona.

function puntoDeColor(x, y, color) {
    const datos = obtenerDatosColisionesActivos();

    if (!datos) {
        return false;
    }

    const px = Math.floor(x);
    const py = Math.floor(y);

    if (
        px < 0 ||
        py < 0 ||
        px >= datos.width ||
        py >= datos.height
    ) {
        return false;
    }

    const indice = (py * datos.width + px) * 4;

    const rojo = datos.data[indice];
    const verde = datos.data[indice + 1];
    const azul = datos.data[indice + 2];
    const alfa = datos.data[indice + 3];

    if (alfa === 0) {
        return false;
    }

    if (color === "magenta") {
        return rojo > 200 && verde < 60 && azul > 200;
    }

    if (color === "cian") {
        return rojo < 60 && verde > 200 && azul > 200;
    }

    if (color === "verde") {
        return rojo < 60 && verde > 200 && azul < 60;
    }

    return false;
}

function jugadorSobreColor(color) {
    const pieY = jugador.y + COLISION_PIES.desplazamientoY;

    return (
        puntoDeColor(jugador.x, pieY, color) ||
        puntoDeColor(
            jugador.x - COLISION_PIES.mitadAncho,
            pieY,
            color
        ) ||
        puntoDeColor(
            jugador.x + COLISION_PIES.mitadAncho,
            pieY,
            color
        )
    );
}

function puntoDeInteraccion(x, y) {
    return puntoDeColor(x, y, "magenta");
}

function jugadorEnZonaInteraccion() {
    return jugadorSobreColor("magenta");
}

function jugadorEnZonaMetro() {
    return (
        (
            escenaActual === "estacion1" ||
            escenaActual === "estacion2" ||
            escenaActual === "estacion3" ||
            escenaActual === "estacion4" || 
            escenaActual === "estacion5" ||
            escenaActual === "estacion6" ||
            escenaActual === "estacion7"
        ) &&
        jugadorEnZonaInteraccion()
    );
}
// ===================
// ========================================
// 17. MOVER A STEPHI
// ========================================

function moverJugador(movimientoX, movimientoY) {
    const nuevaX = jugador.x + movimientoX;

    if (
        !piesBloqueados(nuevaX, jugador.y) &&
        nuevaX >= MITAD_PERSONAJE &&
        nuevaX <= obtenerAnchoMapa() - MITAD_PERSONAJE
    ) {
        jugador.x = nuevaX;
    }

    const nuevaY = jugador.y + movimientoY;

    if (
        !piesBloqueados(jugador.x, nuevaY) &&
        nuevaY >= MITAD_PERSONAJE &&
        nuevaY <= obtenerAltoMapa() - MITAD_PERSONAJE
    ) {
        jugador.y = nuevaY;
    }

    limitarJugadorAlMapa();
}


// ========================================
// 18. ACTUALIZAR LA CÁMARA
// ========================================

function actualizarCamara() {
    if (!mapaActivoCargado()) {
        camara.x = 0;
        camara.y = 0;
        return;
    }

    const anchoMapa = obtenerAnchoMapa();
    const altoMapa = obtenerAltoMapa();
    const anchoVisible = obtenerAnchoVisible();
    const altoVisible = obtenerAltoVisible();

    let x = jugador.x - anchoVisible / 2;
    let y = jugador.y - altoVisible / 2;

    x = anchoMapa > anchoVisible
        ? Math.max(0, Math.min(anchoMapa - anchoVisible, x))
        : 0;

    y = altoMapa > altoVisible
        ? Math.max(0, Math.min(altoMapa - altoVisible, y))
        : 0;

    camara.x = x;
    camara.y = y;
}


// ========================================
// 19. SISTEMA DE DIÁLOGOS
// ========================================

function limpiarTeclas() {
    for (const tecla in teclas) {
        teclas[tecla] = false;
    }
}

function cerrarDialogoMetro() {
    const dialogo = document.querySelector("#dialogoMetro");

    if (dialogo) {
        dialogo.remove();
    }

    dialogoMetroAbierto = false;
    limpiarTeclas();
}

function crearDialogoMetro(preguntaTexto, opciones) {
    if (dialogoMetroAbierto || pausado || transicionMetroActiva) {
        return;
    }

    dialogoMetroAbierto = true;
    limpiarTeclas();

    let seleccion = 0;

    const dialogo = document.createElement("div");
    dialogo.id = "dialogoMetro";
    dialogo.className = "dialogo-overlay";

    const caja = document.createElement("div");
    caja.className = "dialogo-caja";

    const pregunta = document.createElement("p");
    pregunta.className = "dialogo-pregunta";
    pregunta.textContent = preguntaTexto;

    const listaOpciones = document.createElement("div");
    listaOpciones.className = "dialogo-opciones";

    const botones = opciones.map((opcion, indice) => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "dialogo-opcion";

        const flecha = document.createElement("span");
        flecha.className = "dialogo-flecha";
        flecha.textContent = "▶";

        const texto = document.createElement("span");
        texto.textContent = opcion.texto;

        boton.appendChild(flecha);
        boton.appendChild(texto);

        boton.addEventListener("click", () => {
            if (seleccion !== indice) {
                seleccionarOpcion(indice);
                return;
            }

            cerrarDialogoMetro();
            opcion.accion();
        });

        listaOpciones.appendChild(boton);

        return boton;
    });

    function seleccionarOpcion(indice) {
        seleccion = (indice + opciones.length) % opciones.length;

        botones.forEach((boton, i) => {
            boton.classList.toggle(
                "seleccionada",
                i === seleccion
            );

            boton.setAttribute(
                "aria-pressed",
                String(i === seleccion)
            );
        });
    }

    dialogo.seleccionarSiguiente = function (direccion) {
        seleccionarOpcion(seleccion + direccion);
    };

    dialogo.confirmarSeleccion = function () {
        cerrarDialogoMetro();
        opciones[seleccion].accion();
    };

    caja.appendChild(pregunta);
    caja.appendChild(listaOpciones);
    dialogo.appendChild(caja);

    seleccionarOpcion(0);
    pantallaJuego.appendChild(dialogo);
}


// ========================================
// 20. DIÁLOGOS DEL METRO
// ========================================

function mostrarDialogoMetro() {
    if (
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        (
            escenaActual !== "estacion1" &&
            escenaActual !== "estacion2" &&
            escenaActual !== "estacion3" &&
            escenaActual !== "estacion4" &&
            escenaActual !== "estacion5" &&
            escenaActual !== "estacion6" &&
            escenaActual !== "estacion7" 
        ) ||
        pausado ||
        !jugadorEnZonaMetro()
    ) {
        return;
    }

    crearDialogoMetro("¿Quieres esperar al metro?", [
        {
            texto: "Sí",
            accion: iniciarLlegadaMetro
        },
        {
            texto: "No",
            accion: function () {}
        }
    ]);
}

function mostrarDialogoDestinoMetro() {
    if (
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        escenaActual !== "interiorMetro" ||
        pausado ||
        !jugadorEnZonaInteraccion()
    ) {
        return;
    }

    crearDialogoMetro("¿A qué estación quieres ir?", [
        {
            texto: "Estación 1: El inicio de todo",
            accion: function () {
                iniciarSalidaMetro("estacion1");
            }
        },
        {
            texto: "Estación 2: El Primer mes juntos",
            accion: function () {
                iniciarSalidaMetro("estacion2");
            }
        },
        {
            texto: "Estación 3: La Primera Navidad juntos",
            accion: function () {
                iniciarSalidaMetro("estacion3");
            }
        },
        {
            texto: "Estación 4: Exámen de la Relación",
            accion: function () {
                iniciarSalidaMetro("estacion4");
            }
        },
        {
            texto: "Estación 5: Entre fogones",
            accion: function () {
                iniciarSalidaMetro("estacion5");
            }
        },
        {
            texto: "Estación 6: Gran Canaria",
            accion: function () {
                iniciarSalidaMetro("estacion6");
            }
        },
        {
            texto: "Estación 7: Aniversario",
            accion: function () {
                iniciarSalidaMetro("estacion7");
            }
        },
        {
            texto: "Cancelar",
            accion: function () {}
        }
    ]);
}


// ========================================
// 21. DIÁLOGOS DEL CALLEJÓN Y NAVIDAD
// ========================================

// ========================================
// DIÁLOGO DE BIENVENIDA: ESTACIÓN 1
// ========================================

function mostrarIntroduccionPaco() {
    if (
        escenaActual !== "estacion1" ||
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        pausado ||
        !jugadorSobreColor("verde")
    ) {
        return;
    }

    crearDialogoMetro(
        "Paco: ¡Hola, Stephi! ¡Bienvenida a este pequeño viaje! He preparado algo especial para ti. A lo largo de este recorrido iremos visitando distintas estaciones, y cada una guarda un recuerdo, una sorpresa o algún pequeño reto. No tengas prisa, explora todo lo que quieras y disfruta del viaje. ¡Ah! Y recuerda que todavía nos quedan muchas estaciones por descubrir. ¡Vamos allá!",
        [
            {
                texto: "¡Vamos allá!",
                accion: function () {}
            }
        ]
    );
}

function mostrarDialogoCallejon() {
    if (dialogoMetroAbierto || transicionMetroActiva || pausado) {
        return;
    }

    // ESTACIÓN 2: ENTRAR AL CALLEJÓN.

    if (
        escenaActual === "estacion2" &&
        jugadorSobreColor("cian")
    ) {
        crearDialogoMetro("¿Quieres entrar al callejón?", [
            {
                texto: "Sí",
                accion: entrarAlCallejon
            },
            {
                texto: "No",
                accion: function () {}
            }
        ]);

        return;
    }

    // CALLEJÓN: VOLVER A LA ESTACIÓN 2.

    if (
        escenaActual === "callejon" &&
        jugadorSobreColor("cian")
    ) {
        crearDialogoMetro("¿Quieres salir del callejón?", [
            {
                texto: "Sí",
                accion: salirDelCallejon
            },
            {
                texto: "No",
                accion: function () {}
            }
        ]);

        return;
    }

    // CALLEJÓN: CALENDARIO DE ADVIENTO.

    if (
        escenaActual === "callejon" &&
        jugadorSobreColor("verde")
    ) {
        crearDialogoMetro(
            "¿Jugar al minijuego del calendario de Adviento?",
            [
                {
                    texto: "Sí",
                    accion: iniciarPresentacionAdviento
                },
                {
                    texto: "No",
                    accion: function () {}
                }
            ]
        );
    }
}


// NAVIDAD: CONVERSACIÓN CON PAPÁ NOEL

function mostrarDialogoNavidad() {
    if (
        escenaActual !== "estacion3" ||
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        pausado ||
        !jugadorSobreColor("verde")
    ) {
        return;
    }

    crearDialogoMetro(
        "Papá Noel: ¡Ho, ho, ho! ¡Se me han caído los regalos! ¿Me ayudas a recogerlos?",
        [
            {
                texto: "¡Claro!",
                accion: iniciarPresentacionRegalos
            },
            {
                texto: "Ahora no",
                accion: function () {}
            }
        ]
    );
}


 // ========================================
 // DIÁLOGO DE PACO: ESTACIÓN 5
 // ========================================

    
    function mostrarDialogoPaco() {
        if (
            escenaActual !== "estacion5" ||
            dialogoMetroAbierto ||
            transicionMetroActiva ||
            pausado
        ) {
            return;
        }

        crearDialogoMetro(
            "Paco: ¡Stephi! Menos mal que has llegado. ¿Me ayudas a preparar algo rico?",
            [
                {
                texto: "¡Claro! ¿Qué preparamos?",
                accion: function () {
                    if (typeof window.abrirMinijuegoCocina === "function") {
                        window.abrirMinijuegoCocina();
                    } else {
                        console.error(
                            "No se ha cargado cocina.js correctamente."
                        );
                    }
                }
                },
                {
                    texto: "Ahora no",
                    accion: function () {}
                }
            ]
        );
    }


// ========================================
// DIÁLOGO DE PACO: ESTACIÓN 6 - PESCA
// ========================================

function mostrarDialogoPacoPesca() {
    if (
        escenaActual !== "estacion6" ||
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        pausado
    ) {
        return;
    }

    crearDialogoMetro(
        "Paco: ¡Hola, Stephi! ¿Qué tal? Qué alegría verte por Canarias otra vez. ¿Te acuerdas de los buenos momentos que vivimos aquí? Se me ha ocurrido que podríamos echar un rato pescando y crear algún recuerdo más juntos. ¿Qué me dices?",
        [
            {
                texto: "¡Venga, vamos a pescar!",
                accion: function () {
                    if (typeof window.abrirMinijuegoPesca === "function") {
                        window.abrirMinijuegoPesca();
                    } else {
                        console.error(
                            "No se ha cargado pesca.js correctamente."
                        );
                    }
                }
            },
            {
                texto: "Ahora mismo no",
                accion: function () {}
            }
        ]
    );
}


// ========================================
// PREGUNTAS DE LA ESTACIÓN 4
// ========================================

let preguntaActualEstacion4 = 0;

const preguntasEstacion4 = [
    {
        pregunta: "Empezamos con una fácil. ¿Qué día comenzamos a salir?",
        respuestas: [
            "26 de Octubre",
            "27 de Noviembre",
            "27 de Octubre",
            "26 de Noviembre"
        ],
        correcta: 2,
        acierto: "Correcto, me hubiera puesto triste que la fallaras.",
        fallo: "..."
    },
    {
        pregunta: "¿Como llama Stephania a las lesiones de los tejidos fibrosos que unen los huesos y dan estabilidad a una articulación, causada por un estiramiento excesivo, una torsión brusca o un desgarro?",
        respuestas: [
            "Esguince",
            "Eginse",
            "Laceración",
            "Quiste pilonidal"
        ],
        correcta: 1,
        acierto: "Exacto!!! Como puedes ver es un vocablo común en la Isla de Margarita (Venezuela)",
        fallo: "Fallo! Muy mal..."
    },
    {
        pregunta: "¿Cuáles son los apelativos cariñosos de nuestra relación?",
        respuestas: [
            "Cachapita y Melocotón",
            "Gordi",
            "Amor",
            "Tartita de fresa con chispitas de colores"
        ],
        correcta: 0,
        acierto: "La verdad me parecen los mejores motes para una relación.",
        fallo: "Incorrecto, pero madre mía vaya mote mas malo..."
    },
    {
        pregunta: "¿Cual es el mejor plan para hacer cuando quedamos?",
        respuestas: [
            "Cocinar cosas bien ricas",
            "Ver anime calentitos y abrazaditos",
            "Jugar al minecraft juntos",
            "Cualquier plan mientras lo hagamos juntos"
        ],
        correcta: 3,
        acierto: "Muy muy bien, si que sabes como pasártelo bien.",
        fallo: "Esa no es mala opción pero hay otra que esta mejor."
    },
    {
        pregunta: "¿Dirías que Paco ha sido, y será, el mejor novio que tendrás en toda tu vida?",
        respuestas: [
            "No, puede mejorar bastante",
            "Jamás, que asco me da ese tío.",
            "Never 🤮",
            "Por supuesto, lo amo con todo mí corazón"
        ],
        correcta: 3,
        acierto: "Te quiero muchísimo Stephania, respuesta correcta.",
        fallo: "😞"
    }
];

function iniciarPreguntasEstacion4() {
    preguntaActualEstacion4 = 0;

    crearDialogoMetro(
        "A continuación te voy a hacer preguntas sobre cosas que hemos vivido a lo largo de la relación o que tienen que ver con nosotros. Prepárate porque no son fáciles.",
        [
            {
                texto: "¡Estoy preparada!",
                accion: function () {
                    mostrarPreguntaEstacion4();
                }
            }
        ]
    );
}

function mostrarPreguntaEstacion4() {
    const datos = preguntasEstacion4[preguntaActualEstacion4];

    if (!datos) {
        crearDialogoMetro(
            "¡Has terminado las preguntas! Gracias por compartir estos recuerdos conmigo, te quiero mucho Cachapita 💖",
            [
                {
                    texto: "Volver al mapa",
                    accion: function () {}
                }
            ]
        );
        return;
    }

    crearDialogoMetro(datos.pregunta, datos.respuestas.map(
        function (respuesta, indice) {
            return {
                texto: String.fromCharCode(65 + indice) + ". " + respuesta,
                accion: function () {
                    const acerto = indice === datos.correcta;

                    crearDialogoMetro(
                        acerto ? datos.acierto : datos.fallo,
                        [
                            {
                                texto: preguntaActualEstacion4 === preguntasEstacion4.length - 1
                                    ? "Continuar"
                                    : "Siguiente",
                                accion: function () {
                                    preguntaActualEstacion4++;
                                    mostrarPreguntaEstacion4();
                                }
                            }
                        ]
                    );
                }
            };
        }
    ));
}


// ========================================
// 22. ENTRAR Y SALIR DEL CALLEJÓN
// ========================================

function entrarAlCallejon() {
    if (!callejonCargado || !colisionesCallejonCargadas) {
        console.error(
            "El mapa o la máscara del callejón todavía no están cargados."
        );
        return;
    }

    posicionEntradaCallejonX = jugador.x;
    posicionEntradaCallejonY = jugador.y;

    escenaActual = "callejon";

    jugador.x = APARICION_CALLEJON.x;
    jugador.y = APARICION_CALLEJON.y;

    jugador.direccion = "sur";
    jugador.moviendose = false;
    jugador.fotograma = 0;
    jugador.contadorAnimacion = 0;

    limpiarTeclas();
    calcularEscalaMapa();
    limitarJugadorAlMapa();
    actualizarCamara();
    dibujar();
}

function salirDelCallejon() {
    escenaActual = "estacion2";

    jugador.x = posicionEntradaCallejonX;
    jugador.y = posicionEntradaCallejonY;

    jugador.direccion = "sur";
    jugador.moviendose = false;
    jugador.fotograma = 0;
    jugador.contadorAnimacion = 0;

    limpiarTeclas();
    calcularEscalaMapa();
    limitarJugadorAlMapa();
    actualizarCamara();
    dibujar();
}


// ========================================
// 23. ENTRADA AL METRO
// ========================================

function iniciarLlegadaMetro() {
    if (transicionMetroActiva) {
        return;
    }

    if (!imagenMetro.complete || imagenMetro.naturalWidth === 0) {
        console.error("No se ha cargado imagenes/mapas/metro.png.");
        return;
    }

    if (!interiorCargado || imagenInteriorMetro.naturalWidth === 0) {
        console.error(
            "No se ha cargado imagenes/mapas/metro-interior.png."
        );
        return;
    }

    estacionOrigenMetro = escenaActual;

    if (escenaActual === "estacion1") {
        posicionEstacion1X = jugador.x;
        posicionEstacion1Y = jugador.y;
    } else if (escenaActual === "estacion2") {
        posicionEstacion2X = jugador.x;
        posicionEstacion2Y = jugador.y;
    } else if (escenaActual === "estacion3") {
        posicionEstacion3X = jugador.x;
        posicionEstacion3Y = jugador.y;
    } else if (escenaActual === "estacion4") {
        posicionEstacion4X = jugador.x;
        posicionEstacion4Y = jugador.y;
    } else if (escenaActual === "estacion5") {
        posicionEstacion5X = jugador.x;
        posicionEstacion5Y = jugador.y;
    } else if (escenaActual === "estacion6") {
        posicionEstacion6X = jugador.x;
        posicionEstacion6Y = jugador.y;
    } else if (escenaActual === "estacion7") {
        posicionEstacion7X = jugador.x;
        posicionEstacion7Y = jugador.y;
    }

    transicionMetroActiva = true;
    faseTransicionMetro = "entrada";
    opacidadFundido = 0;
    posicionMetroX = obtenerAnchoMapa();

    jugador.moviendose = false;
    limpiarTeclas();
}

function iniciarSalidaMetro(destino) {
    if (
        transicionMetroActiva ||
        escenaActual !== "interiorMetro"
    ) {
        return;
    }

    if (
        destino !== "estacion1" &&
        destino !== "estacion2" &&
        destino !== "estacion3" &&
        destino !== "estacion4" &&
        destino !== "estacion5" &&
        destino !== "estacion6" &&
        destino !== "estacion7"
    ) {
        console.error("Destino de metro no válido:", destino);
        return;
    }

    if (
        destino === "estacion3" &&
        (!mapaEstacion3Cargado || !colisionesEstacion3Cargadas)
    ) {
        console.error(
            "El mapa o las colisiones de Navidad todavía no están cargados."
        );
        return;
    }

    if (
        destino === "estacion4" &&
        (!mapaEstacion4Cargado || !colisionesEstacion4Cargadas)
    ) {
        console.error(
            "El mapa o las colisiones de la estación 4 todavía no están cargados."
        );
        return;
    }
    
    if (
        destino === "estacion7" &&
        (!mapaEstacion7Cargado || !colisionesEstacion7Cargadas)
    ) {
        console.error(
            "El mapa o las colisiones de la estación 7 todavía no están cargados."
        );
        return;
    }

    estacionDestinoMetro = destino;

    transicionMetroActiva = true;
    faseTransicionMetro = "salidaFundidoCierre";
    opacidadFundido = 0;

    jugador.moviendose = false;
    limpiarTeclas();
}


// ========================================
// 24. ACTUALIZAR LAS TRANSICIONES DEL METRO
// ========================================

function actualizarTransicionMetro() {
    if (!transicionMetroActiva) {
        return;
    }

    if (faseTransicionMetro === "entrada") {
        const escalaMetro = Math.min(
            1,
            obtenerAnchoMapa() / imagenMetro.naturalWidth
        );

        const anchoMetro = imagenMetro.naturalWidth * escalaMetro;
        const destinoX = obtenerAnchoMapa() - anchoMetro;

        posicionMetroX -= VELOCIDAD_ENTRADA_METRO;

        if (posicionMetroX <= destinoX) {
            posicionMetroX = destinoX;
            faseTransicionMetro = "fundidoCierre";
        }
    }

    else if (faseTransicionMetro === "fundidoCierre") {
        opacidadFundido = Math.min(
            1,
            opacidadFundido + VELOCIDAD_FUNDIDO
        );

        if (opacidadFundido >= 1) {
            escenaActual = "interiorMetro";

            jugador.x = 250;
            jugador.y = 400;

            jugador.direccion = "sur";
            jugador.moviendose = false;
            jugador.fotograma = 0;
            jugador.contadorAnimacion = 0;

            calcularEscalaMapa();
            limitarJugadorAlMapa();
            actualizarCamara();

            faseTransicionMetro = "fundidoApertura";
        }
    }

    else if (faseTransicionMetro === "fundidoApertura") {
        opacidadFundido = Math.max(
            0,
            opacidadFundido - VELOCIDAD_FUNDIDO
        );

        if (opacidadFundido <= 0) {
            transicionMetroActiva = false;
            faseTransicionMetro = "";
        }
    }

    else if (faseTransicionMetro === "salidaFundidoCierre") {
        opacidadFundido = Math.min(
            1,
            opacidadFundido + VELOCIDAD_FUNDIDO
        );

        if (opacidadFundido >= 1) {
            escenaActual = estacionDestinoMetro;

            if (escenaActual === "estacion1") {
                jugador.x = posicionEstacion1X;
                jugador.y = posicionEstacion1Y;
            } else if (escenaActual === "estacion2") {
                jugador.x = posicionEstacion2X;
                jugador.y = posicionEstacion2Y;
            } else if (escenaActual === "estacion3") {
                jugador.x = posicionEstacion3X;
                jugador.y = posicionEstacion3Y;
            } else if (escenaActual === "estacion4") {
                jugador.x = posicionEstacion4X;
                jugador.y = posicionEstacion4Y;
            } else if (escenaActual === "estacion5") {
                jugador.x = posicionEstacion5X;
                jugador.y = posicionEstacion5Y;
            } else if (escenaActual === "estacion6") {
                jugador.x = posicionEstacion6X;
                jugador.y = posicionEstacion6Y;
            } else if (escenaActual === "estacion7") {
                jugador.x = posicionEstacion7X;
                jugador.y = posicionEstacion7Y;
            }


            jugador.direccion = "sur";
            jugador.moviendose = false;
            jugador.fotograma = 0;
            jugador.contadorAnimacion = 0;

            calcularEscalaMapa();
            limitarJugadorAlMapa();
            actualizarCamara();

            const escalaMetro = Math.min(
                1,
                obtenerAnchoMapa() / imagenMetro.naturalWidth
            );

            const anchoMetro = imagenMetro.naturalWidth * escalaMetro;

            posicionMetroX = obtenerAnchoMapa() - anchoMetro;

            opacidadFundido = 0;
            faseTransicionMetro = "salidaMetroIzquierda";
        }
    }

    else if (faseTransicionMetro === "salidaMetroIzquierda") {
        const escalaMetro = Math.min(
            1,
            obtenerAnchoMapa() / imagenMetro.naturalWidth
        );

        const anchoMetro = imagenMetro.naturalWidth * escalaMetro;

        posicionMetroX -= VELOCIDAD_ENTRADA_METRO;

        if (posicionMetroX <= -anchoMetro) {
            posicionMetroX = -anchoMetro;
            faseTransicionMetro = "salidaFundidoApertura";
        }
    }

    else if (faseTransicionMetro === "salidaFundidoApertura") {
        opacidadFundido = Math.max(
            0,
            opacidadFundido - VELOCIDAD_FUNDIDO
        );

        if (opacidadFundido <= 0) {
            transicionMetroActiva = false;
            faseTransicionMetro = "";
        }
    }
}


// ========================================
// 25. INICIAR EL JUEGO
// ========================================

botonInicio.addEventListener("click", async function () {

    if (musicaFondo.paused) {
        musicaFondo.play().catch(function (error) {
            console.error("No se ha podido reproducir la música:", error);
        });
    }

    inicio.hidden = true;
    pantallaJuego.hidden = false;
    menuPausa.hidden = true;

    pausado = false;

    requestAnimationFrame(function () {
        ajustarCanvas();

        if (!juegoIniciado) {
            juegoIniciado = true;
            bucleDelJuego();
        }
    });

    
});


// ========================================
// 26. PAUSA Y AJUSTES
// ========================================

botonPausa.addEventListener("click", function () {
    if (
        !juegoIniciado ||
        dialogoMetroAbierto ||
        transicionMetroActiva ||
        pantallaRegalos
    ) {
        return;
    }

    pausado = true;
    menuPausa.hidden = false;
    limpiarTeclas();
});

botonContinuar.addEventListener("click", function () {
    menuPausa.hidden = true;
    pausado = false;
});

botonMenu.addEventListener("click", async function () {
    pausado = true;
    menuPausa.hidden = true;

    pantallaJuego.hidden = true;
    inicio.hidden = false;

    cerrarDialogoMetro();

    transicionMetroActiva = false;
    faseTransicionMetro = "";

    limpiarTeclas();

    if (document.fullscreenElement && document.exitFullscreen) {
        try {
            await document.exitFullscreen();
        } catch (error) {
            console.log("No se ha podido salir de la pantalla completa.");
        }
    }
});


// ========================================
// 27. VOLUMEN
// ========================================

// ========================================
// MÚSICA DE FONDO
// ========================================

const musicaFondo = new Audio("audio/audio-1.mp3");

musicaFondo.loop = true;
musicaFondo.volume = volumenJuego;

volumen.addEventListener("input", function () {
    volumenJuego = Number(volumen.value) / 100;

    musicaFondo.volume = volumenJuego;

    valorVolumen.textContent = volumen.value + "%";
});

valorVolumen.textContent = volumen.value + "%";


// ========================================
// 28. CONTROLES DEL TECLADO
// ========================================

document.addEventListener("keydown", function (evento) {
    const tecla = evento.key.toLowerCase();

    // CONTROLES DEL DIÁLOGO.

    if (dialogoMetroAbierto) {
        if (tecla === "arrowup" || tecla === "arrowdown") {
            evento.preventDefault();

            if (!evento.repeat) {
                const dialogo = document.querySelector("#dialogoMetro");

                if (dialogo && dialogo.seleccionarSiguiente) {
                    const direccion = tecla === "arrowdown" ? 1 : -1;
                    dialogo.seleccionarSiguiente(direccion);
                }
            }

            return;
        }

        if (evento.code === "Space" || tecla === " ") {
            evento.preventDefault();

            if (!evento.repeat) {
                const dialogo = document.querySelector("#dialogoMetro");

                if (dialogo && dialogo.confirmarSeleccion) {
                    dialogo.confirmarSeleccion();
                }
            }

            return;
        }

        return;
    }

    const teclasMovimiento = [
        "arrowup", "arrowdown", "arrowleft", "arrowright",
        "w", "a", "s", "d"
    ];

    // ESPACIO: INTERACCIONES.

    if (evento.code === "Space" || tecla === " ") {
        evento.preventDefault();

        if (
            evento.repeat ||
            pausado ||
            pantallaJuego.hidden ||
            transicionMetroActiva ||
            pantallaRegalos
        ) {
            return;
        }

        // ESTACIÓN 1: PRESENTACIÓN DE PACO.

        if (
            escenaActual === "estacion1" &&
            jugadorSobreColor("verde")
        ) {
            mostrarIntroduccionPaco();
            return;
        }

        // ESTACIÓN 3: PAPÁ NOEL.

        if (
            escenaActual === "estacion3" &&
            jugadorSobreColor("verde")
        ) {
            mostrarDialogoNavidad();
            return;
        }

        // ESTACIÓN 2 Y CALLEJÓN.

        if (
            (escenaActual === "estacion2" && jugadorSobreColor("cian")) ||
            (
                escenaActual === "callejon" &&
                (
                    jugadorSobreColor("cian") ||
                    jugadorSobreColor("verde")
                )
            )
        ) {
            mostrarDialogoCallejon();
            return;
        }

        // ESTACIÓN 4: PREGUNTAS DE ENERO.

        if (
            escenaActual === "estacion4" &&
            jugadorSobreColor("cian")
        ) {
            iniciarPreguntasEstacion4();
            return;
        }

        
        // ESTACIÓN 5: PACO Y EL MINIJUEGO DE COCINA.

        if (
            escenaActual === "estacion5" &&
            jugadorSobreColor("cian")
        ) {
            mostrarDialogoPaco();
            return;
        }


        // ESTACIÓN 6: PACO Y EL MINIJUEGO DE PESCA.

        
        if (
            escenaActual === "estacion6" &&
            jugadorSobreColor("verde")
        ) {
            mostrarDialogoPacoPesca();
            return;
        }

        // METRO: SUBIR DESDE LAS ESTACIONES 1, 2, 3 Y 4.

        if (
            (
                escenaActual === "estacion1" ||
                escenaActual === "estacion2" ||
                escenaActual === "estacion3" ||
                escenaActual === "estacion4" ||
                escenaActual === "estacion5" ||
                escenaActual === "estacion6" ||
                escenaActual === "estacion7"
            ) &&
            jugadorEnZonaMetro()
        ) {
            mostrarDialogoMetro();
        }

        // METRO: ELEGIR DESTINO.

        else if (
            escenaActual === "interiorMetro" &&
            jugadorEnZonaInteraccion()
        ) {
            mostrarDialogoDestinoMetro();
        }

        return;
    }

    // MOVIMIENTO CON FLECHAS O WASD.

    if (teclasMovimiento.includes(tecla)) {
        evento.preventDefault();

        if (
            !pausado &&
            !pantallaJuego.hidden &&
            !transicionMetroActiva &&
            !pantallaRegalos
        ) {
            teclas[tecla] = true;
        }
    }

    // ESCAPE: PAUSA.

    if (
        evento.key === "Escape" &&
        !pantallaJuego.hidden &&
        !pausado
    ) {
        if (transicionMetroActiva || pantallaRegalos) {
            return;
        }

        pausado = true;
        menuPausa.hidden = false;
        limpiarTeclas();
    }
});

document.addEventListener("keyup", function (evento) {
    teclas[evento.key.toLowerCase()] = false;
});

window.addEventListener("blur", limpiarTeclas);


// ========================================
// 29. ACTUALIZAR MOVIMIENTO Y ANIMACIÓN
// ========================================

function actualizar() {
    if (
        pausado ||
        pantallaJuego.hidden ||
        dialogoMetroAbierto ||
        pantallaRegalos
    ) {
        return;
    }

    if (transicionMetroActiva) {
        actualizarTransicionMetro();
        return;
    }

    let dx = 0;
    let dy = 0;

    if (teclas["arrowright"] || teclas["d"]) dx++;
    if (teclas["arrowleft"] || teclas["a"]) dx--;
    if (teclas["arrowdown"] || teclas["s"]) dy++;
    if (teclas["arrowup"] || teclas["w"]) dy--;

    jugador.moviendose = dx !== 0 || dy !== 0;

    if (!jugador.moviendose) {
        jugador.fotograma = 0;
        jugador.contadorAnimacion = 0;
        return;
    }

    if (dx > 0 && dy < 0) jugador.direccion = "noreste";
    else if (dx < 0 && dy < 0) jugador.direccion = "noroeste";
    else if (dx > 0 && dy > 0) jugador.direccion = "sureste";
    else if (dx < 0 && dy > 0) jugador.direccion = "suroeste";
    else if (dx > 0) jugador.direccion = "este";
    else if (dx < 0) jugador.direccion = "oeste";
    else if (dy < 0) jugador.direccion = "norte";
    else if (dy > 0) jugador.direccion = "sur";

    const longitud = Math.hypot(dx, dy);

    const movimientoX = (dx / longitud) * jugador.velocidad;
    const movimientoY = (dy / longitud) * jugador.velocidad;

    moverJugador(movimientoX, movimientoY);

    jugador.contadorAnimacion++;

    if (jugador.contadorAnimacion >= 10) {
        jugador.fotograma = 1 - jugador.fotograma;
        jugador.contadorAnimacion = 0;
    }

    actualizarCamara();
}


// ========================================
// 30. DIBUJAR A STEPHI
// ========================================

function dibujarPersonaje() {
    let sprite;

    if (jugador.moviendose) {
        if (
            jugador.direccion === "norte" ||
            jugador.direccion === "sur"
        ) {
            sprite = spritesAndando[jugador.direccion][jugador.fotograma];
        } else {
            sprite = jugador.fotograma === 0
                ? spritesAndando[jugador.direccion][0]
                : spritesQuietos[jugador.direccion];
        }

        if (!sprite || !sprite.complete || sprite.naturalWidth === 0) {
            sprite = spritesQuietos[jugador.direccion];
        }
    } else {
        sprite = spritesQuietos[jugador.direccion];
    }

    if (!sprite || !sprite.complete || sprite.naturalWidth === 0) {
        return;
    }

    ctx.imageSmoothingEnabled = false;

    let tamanoPersonaje;

    if (escenaActual === "interiorMetro") {
        tamanoPersonaje = TAMANO_PERSONAJE_METRO;
    } else if (escenaActual === "estacion2") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_2;
    } else if (escenaActual === "estacion3") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_3;
    } else if (escenaActual === "estacion4") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_4;
    } else if (escenaActual === "estacion5") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_5;
    } else if (escenaActual === "estacion6") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_6;
    } else if (escenaActual === "estacion7") {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_7;
    } else if (escenaActual === "callejon") {
        tamanoPersonaje = TAMANO_PERSONAJE_CALLEJON;
    } else {
        tamanoPersonaje = TAMANO_PERSONAJE_ESTACION_1;
    }

    const mitadPersonaje = tamanoPersonaje / 2;

    ctx.drawImage(
        sprite,
        jugador.x - mitadPersonaje,
        jugador.y - mitadPersonaje,
        tamanoPersonaje,
        tamanoPersonaje
    );
}


// ========================================
// 31. DIBUJAR MAPA, METRO Y FUNDIDO
// ========================================

function dibujar() {
    if (canvas.width <= 0 || canvas.height <= 0) {
        return;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mapaActivoCargado()) {
        const mapaActual = mapaActivo();

        calcularEscalaMapa();
        actualizarCamara();

        ctx.setTransform(
            escalaMapa,
            0,
            0,
            escalaMapa,
            -camara.x * escalaMapa,
            -camara.y * escalaMapa
        );

        ctx.drawImage(
            mapaActual,
            0,
            0,
            mapaActual.naturalWidth,
            mapaActual.naturalHeight
        );

        dibujarPersonaje();

        if (
            escenaActual !== "interiorMetro" &&
            escenaActual !== "callejon" &&
            transicionMetroActiva &&
            imagenMetro.complete &&
            imagenMetro.naturalWidth > 0
        ) {
            const escalaMetro = Math.min(
                1,
                obtenerAnchoMapa() / imagenMetro.naturalWidth
            );

            const anchoMetro = imagenMetro.naturalWidth * escalaMetro;
            const altoMetro = imagenMetro.naturalHeight * escalaMetro;

            const ajusteVerticalMetro = escenaActual === "estacion4" ? 50 : 0;
            const yMetro = mapaActual.naturalHeight - altoMetro + ajusteVerticalMetro;

            ctx.drawImage(
                imagenMetro,
                posicionMetroX,
                yMetro,
                anchoMetro,
                altoMetro
            );
        }
    } else {
        ctx.fillStyle = "#527d46";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ffffff";
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center";

        ctx.fillText(
            "Cargando mapa...",
            canvas.width / 2,
            canvas.height / 2
        );
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    if (transicionMetroActiva && opacidadFundido > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${opacidadFundido})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


// ========================================
// 32. BUCLE PRINCIPAL
// ========================================

function bucleDelJuego() {
    if (!pausado && !pantallaJuego.hidden) {
        actualizar();
        dibujar();
    }

    requestAnimationFrame(bucleDelJuego);
}


// ========================================
// 33. AJUSTAR AL CAMBIAR EL TAMAÑO
// ========================================

window.addEventListener("resize", function () {
    ajustarCanvas();
});

document.addEventListener("fullscreenchange", function () {
    ajustarCanvas();
});


// ========================================
// 34. PREPARAR EL JUEGO
// ========================================

ajustarCanvas();

console.log("La línea de nosotros está preparado.");
/* ========================================
   MINIJUEGO DE NAVIDAD: RECOGER REGALOS
   ======================================== */

let pantallaRegalos = null;
let intervaloRegalos = null;
let animacionRegalos = null;

let partidaRegalosActiva = false;
let puntosRegalos = 0;
let tiempoRegalos = 20;

let posicionSaco = 50;
let regalosCayendo = [];
let ultimoTiempoRegalos = 0;
let ultimoRegaloCreado = 0;

let teclasRegalos = {
    izquierda: false,
    derecha: false
};


// ========================================
// PRESENTACIÓN DEL MINIJUEGO DE REGALOS
// ========================================

function iniciarPresentacionRegalos() {
    if (pantallaRegalos) return;

    pausado = true;
    limpiarTeclas();

    pantallaRegalos = document.createElement("div");
    pantallaRegalos.id = "pantallaRegalos";

    Object.assign(pantallaRegalos.style, {
        position: "fixed",
        inset: "0",
        zIndex: "10000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(8, 15, 28, 0.96)",
        color: "#fff",
        fontFamily: "monospace",
        padding: "20px",
        boxSizing: "border-box",
        overflowY: "auto"
    });

    pantallaRegalos.innerHTML = `
        <div style="
            width: min(650px, 100%);
            padding: 28px;
            box-sizing: border-box;
            text-align: center;
            background: #183c35;
            border: 4px solid #d8b56a;
            border-radius: 12px;
            box-shadow: 0 0 30px rgba(0,0,0,.45);
        ">
            <div style="font-size: 56px;">🎅</div>

            <h2 style="color:#f4d58b;">
                ¡La misión de Papá Noel!
            </h2>

            <p style="line-height:1.8;">
                ¡Ho, ho, ho! Se me han caído todos los regalos.
                Necesito que me ayudes a recogerlos antes de que
                se acabe el tiempo.
            </p>

            <p style="line-height:1.8;">
                Usa las flechas izquierda y derecha, o las teclas
                A y D, para mover el saco.
            </p>

            <p style="font-size:22px;">
                🎁 🎁 🎁
            </p>

            <div style="
                display:flex;
                gap:12px;
                justify-content:center;
                flex-wrap:wrap;
                margin-top:22px;
            ">
                <button id="botonIniciarRegalos" type="button"
                    style="padding:12px 18px;cursor:pointer;">
                    ¡A recoger regalos!
                </button>

                <button id="botonSalirRegalos" type="button"
                    style="padding:12px 18px;cursor:pointer;">
                    Volver a Navidad
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(pantallaRegalos);

    document.getElementById("botonIniciarRegalos")
        .addEventListener("click", comenzarPartidaRegalos);

    document.getElementById("botonSalirRegalos")
        .addEventListener("click", volverDeRegalos);
}


// ========================================
// EMPEZAR A RECOGER REGALOS
// ========================================

function comenzarPartidaRegalos() {
    if (!pantallaRegalos) return;

    limpiarTemporizadoresRegalos();

    puntosRegalos = 0;
    tiempoRegalos = 20;
    posicionSaco = 50;
    regalosCayendo = [];

    ultimoTiempoRegalos = performance.now();
    ultimoRegaloCreado = ultimoTiempoRegalos;

    partidaRegalosActiva = true;

    teclasRegalos.izquierda = false;
    teclasRegalos.derecha = false;

    pantallaRegalos.innerHTML = `
        <div style="
            width:min(850px,100%);
            text-align:center;
            font-family:monospace;
        ">
            <h2 style="color:#f4d58b;">
                ¡Recoge los regalos!
            </h2>

            <div style="
                display:flex;
                justify-content:space-between;
                gap:12px;
                flex-wrap:wrap;
                margin-bottom:12px;
                font-size:18px;
            ">
                <span>
                    Regalos: <strong id="puntosRegalos">0</strong>
                </span>

                <span>
                    Tiempo: <strong id="tiempoRegalos">30</strong>s
                </span>
            </div>

            <div id="campoRegalos" style="
                position:relative;
                width:100%;
                height:min(62vh,500px);
                min-height:280px;
                overflow:hidden;
                border:4px solid #d8b56a;
                border-radius:8px;
                background:
                    radial-gradient(circle at 15% 20%, #fff 0 2px, transparent 3px),
                    radial-gradient(circle at 80% 30%, #fff 0 2px, transparent 3px),
                    radial-gradient(circle at 55% 15%, #fff 0 2px, transparent 3px),
                    linear-gradient(#172d52,#315d75);
                touch-action:pan-y;
            ">
                <div style="
                    position:absolute;
                    top:10px;
                    left:0;
                    width:100%;
                    font-size:24px;
                    pointer-events:none;
                ">❄️ Navidad ❄️</div>

                <div id="contenedorRegalos"></div>

                <div id="sacoRegalos" style="
                    position:absolute;
                    bottom:8px;
                    left:50%;
                    transform:translateX(-50%);
                    font-size:72px;
                    user-select:none;
                ">🧺</div>
            </div>

            <p>
                Mueve el saco con ← → o A y D.
            </p>

            <button id="botonSalirPartidaRegalos" type="button"
                style="padding:10px 16px;cursor:pointer;">
                Abandonar minijuego
            </button>
        </div>
    `;

    document.getElementById("botonSalirPartidaRegalos")
        .addEventListener("click", volverDeRegalos);

    // Controles táctiles: tocar el lado izquierdo o derecho
    // del campo mueve el saco en esa dirección.

    const campo = document.getElementById("campoRegalos");

    campo.addEventListener("pointerdown", function (evento) {
        const rectangulo = campo.getBoundingClientRect();
        const posicionRelativa = evento.clientX - rectangulo.left;

        if (posicionRelativa < rectangulo.width / 2) {
            posicionSaco = Math.max(6, posicionSaco - 8);
        } else {
            posicionSaco = Math.min(94, posicionSaco + 8);
        }
    });

    intervaloRegalos = setInterval(function () {
        if (!partidaRegalosActiva) return;

        tiempoRegalos--;

        const indicador = document.getElementById("tiempoRegalos");

        if (indicador) {
            indicador.textContent = tiempoRegalos;
        }

        if (tiempoRegalos <= 0) {
            finalizarPartidaRegalos();
        }
    }, 1000);

    animacionRegalos = requestAnimationFrame(actualizarPartidaRegalos);
}


// ========================================
// CONTROLES DEL MINIJUEGO DE REGALOS
// ========================================

function teclaRegalosPresionada(evento) {
    if (!partidaRegalosActiva) return;

    const tecla = evento.key.toLowerCase();

    if (
        tecla === "arrowleft" ||
        tecla === "arrowright" ||
        tecla === "a" ||
        tecla === "d"
    ) {
        evento.preventDefault();
    }

    if (tecla === "arrowleft" || tecla === "a") {
        teclasRegalos.izquierda = true;
    }

    if (tecla === "arrowright" || tecla === "d") {
        teclasRegalos.derecha = true;
    }
}

function teclaRegalosSoltada(evento) {
    const tecla = evento.key.toLowerCase();

    if (tecla === "arrowleft" || tecla === "a") {
        teclasRegalos.izquierda = false;
    }

    if (tecla === "arrowright" || tecla === "d") {
        teclasRegalos.derecha = false;
    }
}

document.addEventListener("keydown", teclaRegalosPresionada);
document.addEventListener("keyup", teclaRegalosSoltada);


// ========================================
// ACTUALIZAR EL MINIJUEGO
// ========================================

function actualizarPartidaRegalos(tiempoActual) {
    if (!partidaRegalosActiva || !pantallaRegalos) return;

    const campo = document.getElementById("campoRegalos");
    const contenedor = document.getElementById("contenedorRegalos");
    const saco = document.getElementById("sacoRegalos");

    if (!campo || !contenedor || !saco) return;

    const delta = Math.min(
        (tiempoActual - ultimoTiempoRegalos) / 16.67,
        2
    );

    ultimoTiempoRegalos = tiempoActual;

    if (teclasRegalos.izquierda) {
        posicionSaco -= 0.9 * delta;
    }

    if (teclasRegalos.derecha) {
        posicionSaco += 0.9 * delta;
    }

    posicionSaco = Math.max(5, Math.min(95, posicionSaco));

    saco.style.left = posicionSaco + "%";

    // Crear un regalo cada cierto tiempo.

    if (tiempoActual - ultimoRegaloCreado > 650) {
        ultimoRegaloCreado = tiempoActual;

        const regalo = {
            x: 5 + Math.random() * 90,
            y: -35,
            velocidad: 1.3 + Math.random() * 1.7,
            elemento: document.createElement("div")
        };

        regalo.elemento.textContent = "🎁";

        Object.assign(regalo.elemento.style, {
            position: "absolute",
            left: regalo.x + "%",
            top: regalo.y + "px",
            fontSize: "30px",
            transform: "translateX(-50%)",
            pointerEvents: "none"
        });

        contenedor.appendChild(regalo.elemento);
        regalosCayendo.push(regalo);
    }

    const altoCampo = campo.clientHeight;
    const anchoCampo = campo.clientWidth;

    for (let i = regalosCayendo.length - 1; i >= 0; i--) {
        const regalo = regalosCayendo[i];

        regalo.y += regalo.velocidad * delta;

        regalo.elemento.style.top = regalo.y + "px";

        const sacoX = posicionSaco / 100 * anchoCampo;
        const regaloX = regalo.x / 100 * anchoCampo;

        const sacoY = altoCampo - 50;

        // Si el regalo alcanza el saco, se recoge.

        if (
            regalo.y + 25 >= sacoY &&
            regalo.y <= altoCampo - 5 &&
            Math.abs(regaloX - sacoX) < 60
        ) {
            puntosRegalos++;

            const marcador = document.getElementById("puntosRegalos");

            if (marcador) {
                marcador.textContent = puntosRegalos;
            }

            regalo.elemento.remove();
            regalosCayendo.splice(i, 1);
            continue;
        }

        // Eliminar regalos que se hayan salido del campo.

        if (regalo.y > altoCampo + 40) {
            regalo.elemento.remove();
            regalosCayendo.splice(i, 1);
        }
    }

    animacionRegalos = requestAnimationFrame(actualizarPartidaRegalos);
}


// ========================================
// TERMINAR EL MINIJUEGO DE REGALOS
// ========================================

function finalizarPartidaRegalos() {
    if (!pantallaRegalos) return;

    partidaRegalosActiva = false;

    limpiarTemporizadoresRegalos();

    pantallaRegalos.innerHTML = `
        <div style="
            width:min(600px,100%);
            padding:28px;
            box-sizing:border-box;
            text-align:center;
            background:#183c35;
            color:white;
            font-family:monospace;
            border:4px solid #d8b56a;
            border-radius:12px;
        ">
            <div style="font-size:56px;">🎅</div>

            <h2 style="color:#f4d58b;">
                ¡Buen trabajo!
            </h2>

            <p>
                Papá Noel ha conseguido recuperar
                <strong>${puntosRegalos}</strong> regalos.
            </p>

            <p>
                ¡Gracias por ayudarme! ¡Ho, ho, ho!
            </p>

            <div style="
                display:flex;
                justify-content:center;
                gap:12px;
                flex-wrap:wrap;
                margin-top:20px;
            ">
                <button id="botonRepetirRegalos" type="button"
                    style="padding:12px;cursor:pointer;">
                    Jugar otra vez
                </button>

                <button id="botonVolverNavidad" type="button"
                    style="padding:12px;cursor:pointer;">
                    Volver a Navidad
                </button>
            </div>
        </div>
    `;

    document.getElementById("botonRepetirRegalos")
        .addEventListener("click", comenzarPartidaRegalos);

    document.getElementById("botonVolverNavidad")
        .addEventListener("click", volverDeRegalos);
}


// ========================================
// LIMPIAR EL MINIJUEGO DE REGALOS
// ========================================

function limpiarTemporizadoresRegalos() {
    if (intervaloRegalos !== null) {
        clearInterval(intervaloRegalos);
        intervaloRegalos = null;
    }

    if (animacionRegalos !== null) {
        cancelAnimationFrame(animacionRegalos);
        animacionRegalos = null;
    }

    teclasRegalos.izquierda = false;
    teclasRegalos.derecha = false;
}


// ========================================
// VOLVER A LA ESTACIÓN DE NAVIDAD
// ========================================

function volverDeRegalos() {
    partidaRegalosActiva = false;

    limpiarTemporizadoresRegalos();

    if (pantallaRegalos) {
        pantallaRegalos.remove();
        pantallaRegalos = null;
    }

    regalosCayendo = [];

    limpiarTeclas();

    pausado = false;

    calcularEscalaMapa();
    actualizarCamara();
    dibujar();
}


/* ========================================
   MINIJUEGO: CALENDARIO DE ADVIENTO
   CÓDIGO ORIGINAL CONSERVADO
   ======================================== */

const imagenCalendarioAdviento = new Image();

let calendarioAdvientoCargado = false;

imagenCalendarioAdviento.onload = function () {
    calendarioAdvientoCargado = true;
    console.log("Calendario de Adviento cargado correctamente.");
};

imagenCalendarioAdviento.onerror = function () {
    calendarioAdvientoCargado = false;

    console.error(
        "No se ha podido cargar la imagen: imagenes/mapas/minijuego-adviento.png"
    );
};

imagenCalendarioAdviento.src = "imagenes/mapas/minijuego-adviento.png";

let pantallaAdviento = null;
let temporizadorAdviento = null;
let intervaloPuertaAdviento = null;

let puntosAdviento = 0;
let tiempoAdviento = 30;
let puertaAbiertaAdviento = -1;
let partidaAdvientoActiva = false;
let ultimaPuertaAdviento = -1;


// ========================================
// PRESENTACIÓN DEL MINIJUEGO
// ========================================

function iniciarPresentacionAdviento() {
    if (pantallaAdviento) return;

    pausado = true;
    limpiarTeclas();

    pantallaAdviento = document.createElement("div");
    pantallaAdviento.id = "pantallaAdviento";
    pantallaAdviento.className = "adviento-overlay";

    pantallaAdviento.innerHTML = `
        <div class="adviento-panel">
            <h2>Calendario de Adviento</h2>

            <p>¡Abre las puertas antes de que se acabe el tiempo!</p>

            <img
                id="portadaAdviento"
                class="adviento-portada"
                alt="Calendario de Adviento"
            >

            <p id="estadoImagenAdviento"></p>

            <div class="adviento-botones">
                <button id="botonIniciarAdviento" type="button">
                    Iniciar minijuego
                </button>

                <button id="botonSalirAdviento" type="button">
                    Volver al callejón
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(pantallaAdviento);

    const portada = document.getElementById("portadaAdviento");
    const estado = document.getElementById("estadoImagenAdviento");
    const botonIniciar = document.getElementById("botonIniciarAdviento");

    portada.src = imagenCalendarioAdviento.src;

    if (calendarioAdvientoCargado) {
        estado.textContent = "";
        botonIniciar.disabled = false;
    } else {
        estado.textContent = "Cargando calendario...";
        botonIniciar.disabled = true;

        imagenCalendarioAdviento.onload = function () {
            calendarioAdvientoCargado = true;

            if (portada.isConnected) {
                estado.textContent = "";
                botonIniciar.disabled = false;
            }

            console.log("Calendario de Adviento cargado correctamente.");
        };

        imagenCalendarioAdviento.onerror = function () {
            calendarioAdvientoCargado = false;

            if (portada.isConnected) {
                estado.textContent =
                    "No se ha podido cargar la imagen del calendario.";
            }

            console.error(
                "Revisa la ruta imagenes/mapas/minijuego-adviento.png"
            );
        };
    }

    botonIniciar.addEventListener("click", function () {
        if (!calendarioAdvientoCargado) {
            estado.textContent = "Espera a que se cargue el calendario.";
            return;
        }

        comenzarPartidaAdviento();
    });

    document.getElementById("botonSalirAdviento")
        .addEventListener("click", volverDelAdviento);
}


// ========================================
// COMENZAR PARTIDA
// ========================================

function comenzarPartidaAdviento() {
    if (!pantallaAdviento || !calendarioAdvientoCargado) return;

    limpiarTemporizadoresAdviento();

    puntosAdviento = 0;
    tiempoAdviento = 30;
    puertaAbiertaAdviento = -1;
    ultimaPuertaAdviento = -1;
    partidaAdvientoActiva = true;

    pantallaAdviento.innerHTML = `
        <div class="adviento-panel adviento-panel-juego">
            <h2>¡Encuentra las puertas!</h2>

            <div class="adviento-marcador">
                <span>
                    Puntos: <strong id="puntosAdviento">0</strong>
                </span>

                <span>
                    Tiempo: <strong id="tiempoAdviento">30</strong>s
                </span>
            </div>

            <div class="adviento-tablero" id="tableroAdviento">
                <img
                    id="imagenTableroAdviento"
                    alt="Calendario de Adviento"
                >

                <div
                    class="adviento-puertas"
                    id="puertasAdviento"
                ></div>
            </div>

            <p class="adviento-instruccion">
                Pulsa la puerta iluminada antes de que se cierre.
            </p>

            <button id="botonSalirPartidaAdviento" type="button">
                Salir al callejón
            </button>
        </div>
    `;

    document.getElementById("imagenTableroAdviento").src =
        imagenCalendarioAdviento.src;

    const contenedor = document.getElementById("puertasAdviento");

    for (let i = 0; i < 24; i++) {
        const puerta = document.createElement("button");

        puerta.type = "button";
        puerta.className = "adviento-puerta";
        puerta.textContent = String(i + 1);
        puerta.setAttribute("aria-label", "Puerta " + (i + 1));

        const fila = Math.floor(i / 4);
        const columna = i % 4;

        puerta.style.left = (43 + columna * 7) + "%";
        puerta.style.top = (19 + fila * 13) + "%";

        puerta.addEventListener("click", function () {
            if (!partidaAdvientoActiva) return;
            if (i !== puertaAbiertaAdviento) return;

            puntosAdviento++;

            const marcador = document.getElementById("puntosAdviento");

            if (marcador) {
                marcador.textContent = puntosAdviento;
            }

            abrirPuertaSiguienteAdviento();
        });

        contenedor.appendChild(puerta);
    }

    document.getElementById("botonSalirPartidaAdviento")
        .addEventListener("click", volverDelAdviento);

    abrirPuertaSiguienteAdviento();

    temporizadorAdviento = setInterval(function () {
        if (!partidaAdvientoActiva) return;

        tiempoAdviento--;

        const indicador = document.getElementById("tiempoAdviento");

        if (indicador) {
            indicador.textContent = tiempoAdviento;
        }

        if (tiempoAdviento <= 0) {
            finalizarPartidaAdviento();
        }
    }, 1000);
}


// ========================================
// CAMBIAR LA PUERTA ABIERTA
// ========================================

function abrirPuertaSiguienteAdviento() {
    if (!partidaAdvientoActiva) return;

    const puertas = document.querySelectorAll(".adviento-puerta");

    puertas.forEach(function (puerta) {
        puerta.classList.remove("abierta");
    });

    let nuevaPuerta = Math.floor(Math.random() * 23);

    if (nuevaPuerta >= ultimaPuertaAdviento) {
        nuevaPuerta++;
    }

    ultimaPuertaAdviento = nuevaPuerta;
    puertaAbiertaAdviento = nuevaPuerta;

    if (puertas[nuevaPuerta]) {
        puertas[nuevaPuerta].classList.add("abierta");
    }

    clearTimeout(intervaloPuertaAdviento);

    intervaloPuertaAdviento = setTimeout(function () {
        if (!partidaAdvientoActiva) return;

        abrirPuertaSiguienteAdviento();
    }, 1000);
}


// ========================================
// FIN DE LA PARTIDA
// ========================================

function finalizarPartidaAdviento() {
    partidaAdvientoActiva = false;
    puertaAbiertaAdviento = -1;

    limpiarTemporizadoresAdviento();

    if (!pantallaAdviento) return;

    pantallaAdviento.innerHTML = `
        <div class="adviento-panel">
            <h2>¡Se acabó el tiempo!</h2>

            <p>Has conseguido</p>

            <p class="adviento-puntuacion-final">
                ${puntosAdviento} puntos
            </p>

            <div class="adviento-botones">
                <button id="botonRepetirAdviento" type="button">
                    Jugar otra vez
                </button>

                <button id="botonVolverAdviento" type="button">
                    Volver al callejón
                </button>
            </div>
        </div>
    `;

    document.getElementById("botonRepetirAdviento")
        .addEventListener("click", comenzarPartidaAdviento);

    document.getElementById("botonVolverAdviento")
        .addEventListener("click", volverDelAdviento);
}


// ========================================
// LIMPIAR TEMPORIZADORES DEL CALENDARIO
// ========================================

function limpiarTemporizadoresAdviento() {
    if (temporizadorAdviento !== null) {
        clearInterval(temporizadorAdviento);
        temporizadorAdviento = null;
    }

    if (intervaloPuertaAdviento !== null) {
        clearTimeout(intervaloPuertaAdviento);
        intervaloPuertaAdviento = null;
    }
}


// ========================================
// VOLVER AL CALLEJÓN
// ========================================

function volverDelAdviento() {
    partidaAdvientoActiva = false;

    limpiarTemporizadoresAdviento();

    if (pantallaAdviento) {
        pantallaAdviento.remove();
        pantallaAdviento = null;
    }

    puertaAbiertaAdviento = -1;

    limpiarTeclas();

    pausado = false;

    calcularEscalaMapa();
    actualizarCamara();
    dibujar();
}


// ==========================================
// 35. CONVERSACIÓN FINAL - ANNIVERSARY
// ==========================================


// ==========================================
// INICIAR DIÁLOGO EN LA ZONA VERDE
// DE LA ESTACIÓN 7
// ==========================================

window.addEventListener("keydown", function(event) {

    if (event.code !== "Space") return;

    if (
        escenaActual === "estacion7" &&
        juegoIniciado &&
        !pausado &&
        !dialogoMetroAbierto &&
        !transicionMetroActiva &&
        !dialogoFinalActivo &&
        !pantallaFinalAnniversaryActiva &&
        jugadorSobreColor("verde")
    ) {
        event.preventDefault();
        event.stopImmediatePropagation();

        iniciarDialogoFinalAnniversary();
    }

}, true);


const dialogoFinalAnniversary = [
    "Vaya… así que has llegado hasta aquí.",
    "Parece que ha pasado mucho desde que empezó este viaje, ¿verdad?",
    "Hemos recorrido un montón de estaciones. Algunas han sido más bonitas que otras, pero todas forman parte de nuestra historia.",
    "¿Y ahora qué? ¿Ya se ha acabado el viaje?",
    "El viaje en este tranvía sí, pero nuestro viaje no.",
    "Te he hecho este juego para que pudieras recorrer algunos de nuestros momentos y que te hicieran sonreír.",
    "No sé qué estaciones nos quedan por descubrir, ni qué nos encontraremos por el camino. Pero sí sé que quiero seguir compartiéndolo contigo.",
    "Gracias por formar parte de mi vida, por cada momento, cada tontería, cada risa y por ser tú.",
    "Y si tuviera que volver a empezar este viaje, escogería a la misma acompañante: tú."
];

let indiceDialogoFinal = 0;
let dialogoFinalActivo = false;


// Iniciar conversación
function iniciarDialogoFinalAnniversary() {
    if (dialogoFinalActivo) return;

    dialogoFinalActivo = true;
    indiceDialogoFinal = 0;

    mostrarFraseFinalAnniversary();
}


// Mostrar frase usando el cuadro habitual
function mostrarFraseFinalAnniversary() {

    const esPreguntaDeStephi = indiceDialogoFinal === 3;

    const prefijo = esPreguntaDeStephi ? "Stephi: " : "Paco: ";

    crearDialogoMetro(
        prefijo + dialogoFinalAnniversary[indiceDialogoFinal],
        [
            {
                texto: indiceDialogoFinal === dialogoFinalAnniversary.length - 1
                    ? "Terminar"
                    : "Continuar",

                accion: function() {
                    indiceDialogoFinal++;

                    if (indiceDialogoFinal < dialogoFinalAnniversary.length) {
                        mostrarFraseFinalAnniversary();
                    } else {
                        dialogoFinalActivo = false;
                        mostrarPantallaFinalAnniversary();
                    }
                }
            }
        ]
    );
}


// Pantalla final
let pantallaFinalAnniversaryActiva = false;
let pantallaFinalAnniversary = null;

function mostrarPantallaFinalAnniversary() {

    pantallaFinalAnniversaryActiva = true;

    pantallaFinalAnniversary = document.createElement("div");

    pantallaFinalAnniversary.style.position = "fixed";
    pantallaFinalAnniversary.style.inset = "0";
    pantallaFinalAnniversary.style.background = "#171525";
    pantallaFinalAnniversary.style.display = "flex";
    pantallaFinalAnniversary.style.flexDirection = "column";
    pantallaFinalAnniversary.style.alignItems = "center";
    pantallaFinalAnniversary.style.justifyContent = "center";
    pantallaFinalAnniversary.style.textAlign = "center";
    pantallaFinalAnniversary.style.padding = "30px";
    pantallaFinalAnniversary.style.boxSizing = "border-box";
    pantallaFinalAnniversary.style.zIndex = "10001";
    pantallaFinalAnniversary.style.fontFamily = "monospace";
    pantallaFinalAnniversary.style.color = "#f6e9c9";

    pantallaFinalAnniversary.innerHTML = `
        <h1 style="font-size:clamp(32px, 6vw, 65px);">
            FIN DEL VIAJE
        </h1>

        <h2 style="color:#d9b9ff; font-style:italic;">
            Pero no de nuestra historia.
        </h2>

        <div style="width:min(650px, 90%); height:2px; background:#68577d; margin:30px;"></div>

        <h2 style="font-size:clamp(24px, 4vw, 40px);">
            La línea de nosotros
        </h2>

        <p style="max-width:600px; line-height:1.8; color:#e8dff2;">
            Un pequeño mundo creado para ti, lleno de recuerdos
            y momentos que siempre llevaré conmigo.
        </p>

        <p style="color:#e8dff2;">
            Gracias por ser mi acompañante.
        </p>

        <div style="width:min(650px, 90%); height:2px; background:#68577d; margin:25px;"></div>

        <p style="color:#d9b9ff;">27 · 10 · 2026</p>

        <p style="margin-top:40px; font-size:14px; color:#c5b9d4;">
            PULSA ESPACIO PARA CONTINUAR
        </p>
    `;

    document.body.appendChild(pantallaFinalAnniversary);
}


// Cerrar pantalla final
function cerrarPantallaFinalAnniversary() {

    if (pantallaFinalAnniversary) {
        pantallaFinalAnniversary.remove();
        pantallaFinalAnniversary = null;
    }

    pantallaFinalAnniversaryActiva = false;
}


// Control de la pantalla final
window.addEventListener("keydown", function(event) {

    if (pantallaFinalAnniversaryActiva && event.code === "Space") {
        event.preventDefault();
        event.stopImmediatePropagation();
        cerrarPantallaFinalAnniversary();
    }

}, true);
