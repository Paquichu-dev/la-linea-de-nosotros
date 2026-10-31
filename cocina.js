/* =========================================
   LA LÍNEA DE NOSOTROS
   MINIJUEGO: ENTRE FOGONES
   ========================================= */

let cocinaAbierta = false;
let recetaCocinaActual = null;
let ingredientesSeleccionados = [];
let progresoPlato = 0;
let progresoMezcla = 0;
let progresoCoccion = 0;

let temporizadorMezcla = null;
let temporizadorCoccion = null;
let temporizadorAvance = null;

let indicadorCoccion = 0;
let direccionIndicador = 1;
let coccionEnMarcha = false;

/* =========================================
   RUTAS DE LOS SPRITES
   ========================================= */

const carpetaCocina = "imagenes/cocina/";

const spritesIngredientes = {
    "Maíz tierno": "ingredientes/maiz.png",
    "Leche": "ingredientes/leche.png",
    "Harina P.A.N.": "ingredientes/harina-pan.png",
    "Azúcar": "ingredientes/azucar.png",
    "Sal": "ingredientes/sal.png",
    "Queso": "ingredientes/queso.png",
    "Agua": "ingredientes/agua.png",
    "Carne mechada": "ingredientes/carne-mechada.png",
    "Salsa de ajo": "ingredientes/salsa-ajo.png",
    "Harina de trigo": "ingredientes/harina-trigo.png",
    "Salsa de tomate": "ingredientes/salsa-tomate.png",
    "Pepperoni": "ingredientes/pepperoni.png"
};

const spritesMezclas = {
    vacio: "mezclas/cuenco-vacio.png",
    cachapa: "mezclas/mezcla-cachapa.png",
    arepitas: "mezclas/masa-arepitas.png",
    pizza: "mezclas/masa-pizza.png",
    cuchara: "mezclas/cuchara.png"
};

const spritesCachapa = {
    sarten: "cachapa/sarten.png",
    cocinando: "cachapa/cachapa-cocinando.png",
    voltear: "cachapa/cachapa-voltear.png",
    volteada: "cachapa/cachapa-volteada.png",
    espatula: "cachapa/espatula.png",
    final: "cachapa/cachapa-final.png"
};

const spritesArepitas = {
    formar: "arepitas/arepitas-formar.png",
    cocinando: "arepitas/arepitas-cocinando.png",
    rellenas: "arepitas/arepitas-rellenas.png",
    final: "arepitas/arepitas-final.png"
};

const spritesPizza = {
    base: "pizza/pizza-base.png",
    tomate: "pizza/pizza-tomate.png",
    ingredientes: "pizza/pizza-ingredientes.png",
    horno: "pizza/horno-pizza.png",
    final: "pizza/pizza-final.png"
};

/* =========================================
   RECETAS
   ========================================= */

const recetasCocina = {
    cachapa: {
        nombre: "Cachapa con queso",
        emoji: "🌽",
        final: spritesCachapa.final,
        descripcion: "Una cachapa calentita con queso fundido.",
        ingredientes: [
            "Maíz tierno", "Leche", "Harina P.A.N.",
            "Azúcar", "Sal", "Queso"
        ],
        fases: [
            {
                titulo: "Prepara la mezcla",
                texto: "Mantén pulsado y mueve la cuchara para mezclar.",
                boton: "Mezclar",
                accion: "mezclar",
                sprite: spritesMezclas.cachapa,
                resultado: "¡La mezcla está lista!"
            },
            {
                titulo: "Cocina la cachapa",
                texto: "Detén el indicador dentro de la zona verde.",
                boton: "Empezar a cocinar",
                accion: "cocinar",
                sprite: spritesCachapa.cocinando,
                resultado: "¡La cachapa está bien cocinada!"
            },
            {
                titulo: "Dale la vuelta",
                texto: "Usa la espátula para girar la cachapa.",
                boton: "Dar la vuelta",
                accion: "voltear",
                sprite: spritesCachapa.voltear,
                resultado: "¡Perfecto! Ahora vamos a añadir el queso."
            },
            {
                titulo: "Añade el queso",
                texto: "Añade el queso y termina de preparar la cachapa.",
                boton: "Añadir queso",
                accion: "queso",
                sprite: spritesCachapa.volteada,
                resultado: "¡Cachapa terminada!"
            }
        ]
    },

    arepitas: {
        nombre: "Tres arepitas",
        emoji: "🫓",
        final: spritesArepitas.final,
        descripcion: "Tres arepitas rellenas de cosas ricas.",
        ingredientes: [
            "Harina P.A.N.", "Agua", "Carne mechada",
            "Queso", "Salsa de ajo"
        ],
        fases: [
            {
                titulo: "Prepara la masa",
                texto: "Mantén pulsado y mueve la cuchara para mezclar.",
                boton: "Mezclar",
                accion: "mezclar",
                sprite: spritesMezclas.arepitas,
                resultado: "¡Masa preparada!"
            },
            {
                titulo: "Forma tres arepitas",
                texto: "Dale forma a las tres arepitas.",
                boton: "Formar arepitas",
                accion: "formar",
                sprite: spritesArepitas.formar,
                resultado: "¡Ya tienes las tres arepitas!"
            },
            {
                titulo: "Cocina las arepitas",
                texto: "Detén el indicador dentro de la zona verde.",
                boton: "Empezar a cocinar",
                accion: "cocinar",
                sprite: spritesArepitas.cocinando,
                resultado: "¡Están doraditas!"
            },
            {
                titulo: "Rellena las arepitas",
                texto: "Reparte la carne, el queso y la salsa de ajo.",
                boton: "Añadir relleno",
                accion: "rellenar",
                sprite: spritesArepitas.rellenas,
                resultado: "¡Qué buena pinta!"
            },
            {
                titulo: "Sirve el plato",
                texto: "Coloca las tres arepitas en el plato.",
                boton: "Servir",
                accion: "servir",
                sprite: spritesArepitas.final,
                resultado: "¡Tres arepitas listas!"
            }
        ]
    },

    pizza: {
        nombre: "Pizza de corazón",
        emoji: "🍕",
        final: spritesPizza.final,
        descripcion: "Una pizza especial con forma de corazón.",
        ingredientes: [
            "Harina de trigo", "Agua", "Salsa de tomate",
            "Queso", "Pepperoni"
        ],
        fases: [
            {
                titulo: "Prepara la masa",
                texto: "Mantén pulsado y mueve la cuchara para mezclar.",
                boton: "Mezclar",
                accion: "mezclar",
                sprite: spritesMezclas.pizza,
                resultado: "¡Masa preparada!"
            },
            {
                titulo: "Extiende la salsa de tomate.",
                texto: "Extiende la salsa por toda la base.",
                boton: "Extender tomate",
                accion: "base",
                sprite: spritesPizza.base,
                resultado: "¡Ya tiene forma de corazón!"
            },
            {
                titulo: "Pon el queso y el pepperoni",
                texto: "Reparte el queso y coloca el pepperoni.",
                boton: "Añadir ingredientes",
                accion: "ingredientes",
                sprite: spritesPizza.tomate,
                resultado: "¡Pizza preparada!"
            },
            {
                titulo: "Ya esta lista para hornear",
                texto: "Mete la pizza en el horno y espera a que se cocine.",
                boton: "Meter al horno",
                accion: "llevar al horno",
                sprite: spritesPizza.ingredientes,
                resultado: "Caliente caliente!!!"
            },
            {
                titulo: "Hornea la pizza",
                texto: "Detén el indicador dentro de la zona verde.",
                boton: "Empezar a hornear",
                accion: "hornear",
                sprite: spritesPizza.horno,
                resultado: "¡La pizza está lista!"
            },
            {
                titulo: "Sirve la pizza",
                texto: "Saca la pizza del horno y sírvela.",
                boton: "Servir pizza",
                accion: "servir",
                sprite: spritesPizza.final,
                resultado: "¡Pizza de corazón terminada!"
            }
        ]
    }
};

/* =========================================
   FUNCIONES AUXILIARES DE IMÁGENES
   ========================================= */

function crearImagenCocina(ruta, clase, alternativa = "") {
    const imagen = document.createElement("img");

    imagen.className = clase;
    imagen.src = carpetaCocina + ruta;
    imagen.alt = alternativa;
    imagen.draggable = false;

    imagen.addEventListener("error", function () {
        imagen.hidden = true;

        const aviso = document.createElement("span");
        aviso.className = "cocina-imagen-faltante";
        aviso.textContent = "🖼️";
        aviso.title = "No se encuentra: " + imagen.src;

        if (imagen.parentNode) {
            imagen.parentNode.insertBefore(aviso, imagen);
        }
    }, { once: true });

    return imagen;
}

function ponerImagen(elemento, ruta, alternativa = "") {
    elemento.replaceChildren();

    if (!ruta) {
        elemento.textContent = "🍽️";
        return;
    }

    const imagen = crearImagenCocina(
        ruta,
        "cocina-sprite",
        alternativa
    );

    imagen.style.width = "100%";
    imagen.style.maxWidth = "600px";
    imagen.style.maxHeight = "450px";
    imagen.style.objectFit = "contain";
    imagen.style.imageRendering = "pixelated";

    elemento.appendChild(imagen);
}

/* =========================================
   TEMPORIZADORES
   ========================================= */

function detenerTemporizadoresCocina() {
    if (temporizadorMezcla !== null) {
        clearInterval(temporizadorMezcla);
        temporizadorMezcla = null;
    }

    if (temporizadorCoccion !== null) {
        clearInterval(temporizadorCoccion);
        temporizadorCoccion = null;
    }

    if (temporizadorAvance !== null) {
        clearTimeout(temporizadorAvance);
        temporizadorAvance = null;
    }

    coccionEnMarcha = false;
}

function reiniciarProgresoFase() {
    detenerTemporizadoresCocina();
    progresoMezcla = 0;
    progresoCoccion = 0;
    indicadorCoccion = 0;
    direccionIndicador = 1;
}

/* =========================================
   ESTILOS
   ========================================= */

function instalarEstilosCocina() {
    if (document.getElementById("estilosCocina")) return;

    const estilos = document.createElement("style");
    estilos.id = "estilosCocina";

    estilos.textContent = `
        #pantallaCocina {
            position: fixed;
            inset: 0;
            z-index: 10000;
            overflow-y: auto;
            box-sizing: border-box;
            padding: 20px;
            background: #211f2b;
            color: #fff3d6;
            font-family: monospace;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        #pantallaCocina * { box-sizing: border-box; }

        .cocina-marco {
            width: 100%;
            max-width: 850px;
            margin: auto;
            padding: 22px;
            border: 4px solid #a87951;
            border-radius: 12px;
            background: #383142;
            box-shadow: 0 8px 0 #13121a;
        }

        .cocina-cabecera {
            display: flex;
            align-items: center;
            gap: 14px;
            padding-bottom: 18px;
            border-bottom: 2px solid #67516d;
        }

        .cocina-insignia {
            width: 48px;
            height: 48px;
            display: grid;
            place-items: center;
            flex-shrink: 0;
            background: #f3c969;
            color: #423047;
            font-size: 28px;
            border: 3px solid #fff0b9;
        }

        .cocina-subtitulo {
            color: #d8b8ed;
            font-size: 10px;
            letter-spacing: 2px;
        }

        .cocina-cabecera h1 {
            margin: 5px 0 0;
            font-size: clamp(19px, 4vw, 30px);
        }

        .cocina-boton-cerrar {
            margin-left: auto;
            align-self: flex-start;
            border: 2px solid #f0b8ad;
            border-radius: 5px;
            padding: 8px 12px;
            background: #75444e;
            color: white;
            font: inherit;
            cursor: pointer;
        }

        .cocina-intro {
            display: flex;
            align-items: center;
            gap: 14px;
            margin: 20px 0;
            padding: 14px;
            background: #292633;
            border: 2px solid #67516d;
            border-radius: 8px;
        }

        .cocina-personaje { font-size: 38px; }
        .cocina-intro strong { color: #f3c969; }
        .cocina-intro p { margin: 6px 0 0; line-height: 1.5; }

        .cocina-titulo-seccion {
            font-size: 19px;
            color: #f3c969;
        }

        .cocina-recetas {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
            gap: 14px;
        }

        .cocina-receta {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            min-height: 170px;
            padding: 18px 12px;
            border: 3px solid #9276a4;
            border-radius: 8px;
            background: #4b405b;
            color: #fff3d6;
            font: inherit;
            cursor: pointer;
        }

        .cocina-receta:hover { background: #64516f; }

        .cocina-receta-icono { font-size: 42px; }
        .cocina-receta small {
            color: #d8c8e4;
            text-align: center;
            line-height: 1.5;
        }

        .cocina-panel {
            padding: 18px;
            border: 2px solid #67516d;
            border-radius: 8px;
            background: #292633;
        }

        .cocina-panel h2 {
            margin-top: 0;
            color: #f3c969;
        }

        .cocina-ayuda {
            color: #d8c8e4;
            line-height: 1.6;
        }

        .cocina-ingredientes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
            gap: 10px;
            margin: 18px 0;
        }

        .cocina-ingrediente {
            min-height: 120px;
            padding: 10px 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 2px solid #82718d;
            border-radius: 7px;
            background: #44394f;
            color: white;
            font: inherit;
            cursor: pointer;
        }

        .cocina-ingrediente.seleccionado {
            border-color: #f3c969;
            background: #665333;
            box-shadow: inset 0 0 0 2px #f3c969;
        }

        .cocina-ingrediente-imagen {
            width: 64px;
            height: 64px;
            object-fit: contain;
            image-rendering: pixelated;
        }

        .cocina-acciones {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 18px;
        }

        .cocina-accion {
            padding: 12px 16px;
            border: 2px solid #f3d99b;
            border-radius: 6px;
            background: #86613f;
            color: white;
            font: inherit;
            cursor: pointer;
            touch-action: manipulation;
        }

        .cocina-accion:disabled {
            opacity: .55;
            cursor: not-allowed;
        }

        .cocina-accion-secundaria {
            background: #494050;
            border-color: #a895b4;
        }

        .cocina-mensaje {
            min-height: 24px;
            margin-top: 14px;
            color: #f3c969;
            line-height: 1.5;
        }

        .cocina-escena {
            display: grid;
            place-items: center;
            gap: 12px;
            min-height: 300px;
            margin: 16px 0;
            padding: 15px;
            border: 3px dashed #9276a4;
            border-radius: 8px;
            background: #332c3b;
            text-align: center;
        }

        .cocina-sprite {
            display: block;
            width: auto;
            height: auto;
            max-width: min(100%, 300px);
            max-height: 210px;
            object-fit: contain;
            image-rendering: pixelated;
        }

        .cocina-escena .cocina-sprite {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 420px;
            object-fit: contain;
            image-rendering: pixelated;
        }

        .cocina-imagen-faltante { font-size: 28px; }

        .cocina-progreso {
            height: 20px;
            margin: 14px 0;
            overflow: hidden;
            border: 2px solid #a87951;
            border-radius: 5px;
            background: #211f2b;
        }

        .cocina-progreso > div {
            height: 100%;
            width: 0%;
            background: #f3c969;
            transition: width .08s linear;
        }

        .cocina-barra-coccion {
            position: relative;
            height: 34px;
            margin: 22px 0 12px;
            border: 3px solid #e6d6ad;
            border-radius: 6px;
            background: #4a3c4b;
            overflow: hidden;
        }

        .cocina-zona-verde {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 42%;
            width: 16%;
            background: #35b86b;
            border-left: 2px solid #b5ffd0;
            border-right: 2px solid #b5ffd0;
        }

        .cocina-indicador {
            position: absolute;
            top: -3px;
            bottom: -3px;
            left: 0%;
            width: 5px;
            background: #fff5c2;
            border: 1px solid #5b3b2d;
            box-shadow: 0 0 8px #fff5c2;
            transform: translateX(-50%);
        }

        .cocina-leyenda-barra {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            color: #d8c8e4;
            font-size: 12px;
        }

        .cocina-pie {
            margin-top: 20px;
            padding-top: 14px;
            border-top: 2px solid #67516d;
            color: #c3afcf;
            text-align: center;
            font-size: 10px;
            letter-spacing: 2px;
        }

        @media (max-width: 520px) {
            #pantallaCocina { padding: 8px; }
            .cocina-marco { padding: 13px; }
            .cocina-insignia {
                width: 38px;
                height: 38px;
                font-size: 22px;
            }
            .cocina-intro { align-items: flex-start; }
            .cocina-recetas { grid-template-columns: 1fr; }
        }
    `;

    document.head.appendChild(estilos);
}

/* =========================================
   ABRIR Y CERRAR
   ========================================= */

function abrirMinijuegoCocina() {
    if (cocinaAbierta) return;

    cocinaAbierta = true;
    recetaCocinaActual = null;
    ingredientesSeleccionados = [];
    progresoPlato = 0;
    reiniciarProgresoFase();

    if (typeof pausado !== "undefined") pausado = true;
    if (typeof limpiarTeclas === "function") limpiarTeclas();

    document.getElementById("pantallaCocina")?.remove();
    instalarEstilosCocina();

    const pantalla = document.createElement("div");
    pantalla.id = "pantallaCocina";

    pantalla.innerHTML = `
        <div class="cocina-marco">
            <header class="cocina-cabecera">
                <div class="cocina-insignia">★</div>
                <div>
                    <div class="cocina-subtitulo">LA LÍNEA DE NOSOTROS</div>
                    <h1>ENTRE FOGONES</h1>
                </div>
                <button id="cocinaCerrar"
                    class="cocina-boton-cerrar"
                    aria-label="Volver a la estación">✕</button>
            </header>

            <div class="cocina-intro">
                <span class="cocina-personaje">👨🏻‍🍳</span>
                <div>
                    <strong>Paco</strong>
                    <p>¡Bienvenida a mi cocina! ¿Qué preparamos hoy?</p>
                </div>
            </div>

            <main id="cocinaContenido"></main>

            <footer class="cocina-pie">
                HECHO CON CARIÑO · ESTACIÓN 5
            </footer>
        </div>
    `;

    document.body.appendChild(pantalla);

    document.getElementById("cocinaCerrar").addEventListener(
        "click",
        cerrarMinijuegoCocina
    );

    mostrarMenuRecetasCocina();
}

function cerrarMinijuegoCocina() {
    detenerTemporizadoresCocina();

    document.getElementById("pantallaCocina")?.remove();
    document.getElementById("estilosCocina")?.remove();

    cocinaAbierta = false;
    recetaCocinaActual = null;
    ingredientesSeleccionados = [];
    progresoPlato = 0;
    reiniciarProgresoFase();

    if (typeof pausado !== "undefined") pausado = false;
    if (typeof limpiarTeclas === "function") limpiarTeclas();
}

/* =========================================
   MENÚ DE RECETAS
   ========================================= */

function mostrarMenuRecetasCocina() {
    detenerTemporizadoresCocina();

    const contenido = document.getElementById("cocinaContenido");
    if (!contenido) return;

    contenido.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.className = "cocina-titulo-seccion";
    titulo.textContent = "¿Qué vamos a cocinar?";

    const ayuda = document.createElement("p");
    ayuda.className = "cocina-ayuda";
    ayuda.textContent =
        "Elige una receta. ¡Paco te ayudará a preparar algo especial!";

    const recetas = document.createElement("div");
    recetas.className = "cocina-recetas";

    Object.entries(recetasCocina).forEach(([id, receta]) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "cocina-receta";

        const icono = document.createElement("span");
        icono.className = "cocina-receta-icono";

        if (id === "cachapa") {
            ponerImagen(icono, spritesCachapa.final, receta.nombre);
        } else if (id === "arepitas") {
            ponerImagen(icono, spritesArepitas.final, receta.nombre);
        } else {
            ponerImagen(icono, spritesPizza.final, receta.nombre);
        }

        const nombre = document.createElement("strong");
        nombre.textContent = receta.nombre;

        const detalle = document.createElement("small");
        detalle.textContent = receta.descripcion;

        boton.append(icono, nombre, detalle);
        boton.addEventListener("click", () => seleccionarRecetaCocina(id));
        recetas.appendChild(boton);
    });

    contenido.append(titulo, ayuda, recetas);
}

/* =========================================
   INGREDIENTES
   ========================================= */

function seleccionarRecetaCocina(id) {
    detenerTemporizadoresCocina();

    recetaCocinaActual = recetasCocina[id];
    ingredientesSeleccionados = [];
    progresoPlato = 0;
    reiniciarProgresoFase();

    mostrarSeleccionIngredientes();
}

function mostrarSeleccionIngredientes() {
    detenerTemporizadoresCocina();

    const contenido = document.getElementById("cocinaContenido");
    if (!contenido || !recetaCocinaActual) return;

    contenido.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "cocina-panel";

    const titulo = document.createElement("h2");
    titulo.textContent = "Ingredientes: " + recetaCocinaActual.nombre;

    const ayuda = document.createElement("p");
    ayuda.className = "cocina-ayuda";
    ayuda.textContent =
        "Selecciona todos los ingredientes necesarios para preparar el plato.";

    const lista = document.createElement("div");
    lista.className = "cocina-ingredientes";

    recetaCocinaActual.ingredientes.forEach(ingrediente => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "cocina-ingrediente";

        const marcado = ingredientesSeleccionados.includes(ingrediente);
        boton.classList.toggle("seleccionado", marcado);
        boton.setAttribute("aria-pressed", String(marcado));

        const ruta = spritesIngredientes[ingrediente];

        if (ruta) {
            const imagen = crearImagenCocina(
                ruta,
                "cocina-ingrediente-imagen",
                ingrediente
            );
            boton.appendChild(imagen);
        } else {
            const icono = document.createElement("span");
            icono.textContent = "🍽️";
            boton.appendChild(icono);
        }

        const nombre = document.createElement("span");
        nombre.textContent = (marcado ? "✓ " : "") + ingrediente;
        boton.appendChild(nombre);

        boton.addEventListener("click", () => {
            if (ingredientesSeleccionados.includes(ingrediente)) {
                ingredientesSeleccionados =
                    ingredientesSeleccionados.filter(
                        item => item !== ingrediente
                    );
            } else {
                ingredientesSeleccionados.push(ingrediente);
            }

            mostrarSeleccionIngredientes();
        });

        lista.appendChild(boton);
    });

    const mensaje = document.createElement("p");
    mensaje.className = "cocina-mensaje";
    mensaje.textContent =
        ingredientesSeleccionados.length + " de " +
        recetaCocinaActual.ingredientes.length +
        " ingredientes seleccionados.";

    const acciones = document.createElement("div");
    acciones.className = "cocina-acciones";

    acciones.append(
        crearBotonCocina("¡A cocinar! →", comprobarIngredientesCocina),
        crearBotonCocina("Volver a las recetas",
            mostrarMenuRecetasCocina, true)
    );

    panel.append(titulo, ayuda, lista, mensaje, acciones);
    contenido.appendChild(panel);
}

function comprobarIngredientesCocina() {
    if (!recetaCocinaActual) return;

    const faltan = recetaCocinaActual.ingredientes.filter(
        ingrediente => !ingredientesSeleccionados.includes(ingrediente)
    );

    if (faltan.length > 0) {
        const mensaje = document.querySelector(
            "#cocinaContenido .cocina-mensaje"
        );

        if (mensaje) {
            mensaje.textContent =
                "¡Faltan ingredientes! Necesitas: " +
                faltan.join(", ") + ".";
        }
        return;
    }

    progresoPlato = 0;
    reiniciarProgresoFase();
    mostrarMinijuegoPlato();
}

/* =========================================
   FASES DE LAS RECETAS
   ========================================= */

function obtenerTipoPlato() {
    return Object.keys(recetasCocina).find(
        id => recetasCocina[id] === recetaCocinaActual
    ) || null;
}

function mostrarMinijuegoPlato() {
    detenerTemporizadoresCocina();

    const contenido = document.getElementById("cocinaContenido");
    if (!contenido || !recetaCocinaActual) return;

    const fases = recetaCocinaActual.fases;

    if (progresoPlato >= fases.length) {
        mostrarRecetaTerminada();
        return;
    }

    const fase = fases[progresoPlato];
    contenido.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "cocina-panel";

    const titulo = document.createElement("h2");
    titulo.textContent = recetaCocinaActual.nombre;

    const contador = document.createElement("p");
    contador.className = "cocina-ayuda";
    contador.textContent =
        "PASO " + (progresoPlato + 1) + " DE " + fases.length;

    const escena = document.createElement("div");
    escena.className = "cocina-escena";

    if (fase.accion === "mezclar") {
        // No mostrar las imágenes antes del minijuego.
        escena.style.display = "none";
    } else {
        ponerImagen(escena, fase.sprite, fase.titulo);

        const nombreFase = document.createElement("strong");
        nombreFase.textContent = fase.titulo;
        escena.appendChild(nombreFase);
    }

    const instrucciones = document.createElement("p");
    instrucciones.className = "cocina-ayuda";
    instrucciones.textContent = fase.texto;

    panel.append(titulo, contador, escena, instrucciones);

    if (fase.accion === "mezclar") {
        mostrarMinijuegoMezcla(panel, fase);
    } else if (
        fase.accion === "cocinar" ||
        fase.accion === "hornear"
    ) {
        mostrarMinijuegoCoccion(panel, fase);
    } else {
        const acciones = document.createElement("div");
        acciones.className = "cocina-acciones";

        acciones.append(
            crearBotonCocina(fase.boton, ejecutarAccionPlato),
            crearBotonCocina(
                "Volver a ingredientes",
                mostrarSeleccionIngredientes,
                true
            )
        );

        panel.appendChild(acciones);
    }

    contenido.appendChild(panel);
}

/* =========================================
   MINIJUEGO: MEZCLAR EN CÍRCULOS
   ========================================= */

function mostrarMinijuegoMezcla(panel, fase) {
    const textoAyuda = document.createElement("p");
    textoAyuda.className = "cocina-ayuda";
    textoAyuda.textContent =
        "Mantén pulsado el botón y mueve la cuchara en círculos.";

    const barra = document.createElement("div");
    barra.className = "cocina-progreso";
    barra.setAttribute("role", "progressbar");
    barra.setAttribute("aria-valuemin", "0");
    barra.setAttribute("aria-valuemax", "100");

    const nivel = document.createElement("div");
    nivel.style.width = progresoMezcla + "%";
    barra.appendChild(nivel);

    const porcentaje = document.createElement("p");
    porcentaje.className = "cocina-mensaje";

    const cuenco = document.createElement("div");
    cuenco.className = "cocina-escena";

    const imagenMezcla = crearImagenCocina(
        fase.sprite, "cocina-sprite", fase.titulo
    );

    const cuchara = crearImagenCocina(
        spritesMezclas.cuchara, "cocina-sprite", "Cuchara"
    );
    cuchara.style.maxWidth = "70px";
    cuchara.style.maxHeight = "70px";
    cuchara.style.transition = "transform .12s linear";

    cuenco.append(imagenMezcla, cuchara);

    const boton = crearBotonCocina(
        "Mantén pulsado y mezcla en círculos", () => {}
    );

    boton.style.width = "100%";
    boton.style.minHeight = "64px";
    boton.style.touchAction = "none";
    boton.style.userSelect = "none";

    let mezclando = false;
    let giro = 0;

    function actualizarBarra() {
        nivel.style.width = progresoMezcla + "%";
        barra.setAttribute("aria-valuenow", String(progresoMezcla));
        porcentaje.textContent = "Mezcla: " + progresoMezcla + "%";
    }

    function pararMezcla() {
        mezclando = false;

        if (temporizadorMezcla !== null) {
            clearInterval(temporizadorMezcla);
            temporizadorMezcla = null;
        }

        if (progresoMezcla < 100) {
            boton.textContent = "Mantén pulsado y sigue mezclando";
        }
    }

    function empezarMezcla(evento) {
        evento.preventDefault();

        if (mezclando || progresoMezcla >= 100 || !cocinaAbierta) {
            return;
        }

        mezclando = true;
        boton.textContent = "¡Sigue mezclando!";

        try {
            boton.setPointerCapture(evento.pointerId);
        } catch (_) {}

        temporizadorMezcla = setInterval(() => {
            if (!mezclando || !cocinaAbierta) return;

            progresoMezcla = Math.min(100, progresoMezcla + 2);
            giro += 45;
            cuchara.style.transform = "rotate(" + giro + "deg)";
            actualizarBarra();

            if (progresoMezcla >= 100) {
                pararMezcla();
                boton.disabled = true;
                boton.textContent = "✓ Mezcla terminada";
                porcentaje.textContent = "¡La mezcla está preparada!";

                temporizadorAvance = setTimeout(() => {
                    temporizadorAvance = null;
                    if (cocinaAbierta) completarFaseActual();
                }, 700);
            }
        }, 50);
    }

    boton.addEventListener("pointerdown", empezarMezcla);
    boton.addEventListener("pointerup", pararMezcla);
    boton.addEventListener("pointercancel", pararMezcla);
    boton.addEventListener("lostpointercapture", pararMezcla);
    boton.addEventListener("contextmenu", e => e.preventDefault());

    const acciones = document.createElement("div");
    acciones.className = "cocina-acciones";
    acciones.appendChild(
        crearBotonCocina(
            "Volver a ingredientes",
            mostrarSeleccionIngredientes,
            true
        )
    );

    actualizarBarra();
    panel.append(textoAyuda, cuenco, barra, porcentaje, boton, acciones);
}

/* =========================================
   MINIJUEGO: COCCIÓN
   ========================================= */

function mostrarMinijuegoCoccion(panel, fase) {
    const textoAyuda = document.createElement("p");
    textoAyuda.className = "cocina-ayuda";
    textoAyuda.textContent =
        "Pulsa empezar y detén la línea dentro de la zona verde.";

    const barra = document.createElement("div");
    barra.className = "cocina-barra-coccion";

    const zonaVerde = document.createElement("div");
    zonaVerde.className = "cocina-zona-verde";

    const indicador = document.createElement("div");
    indicador.className = "cocina-indicador";
    indicador.style.left = indicadorCoccion + "%";

    barra.append(zonaVerde, indicador);

    const leyenda = document.createElement("div");
    leyenda.className = "cocina-leyenda-barra";
    leyenda.innerHTML =
        "<span>🔥 Poco hecho</span>" +
        "<span>Bien cocinado ✓</span>" +
        "<span>🔥 Demasiado</span>";

    const mensaje = document.createElement("p");
    mensaje.className = "cocina-mensaje";
    mensaje.textContent = "Pulsa empezar cuando estés preparada.";

    const acciones = document.createElement("div");
    acciones.className = "cocina-acciones";

    const empezar = crearBotonCocina(
        fase.accion === "hornear"
            ? "▶ Empezar a hornear"
            : "▶ Empezar a cocinar",
        empezarCoccion
    );

    const parar = crearBotonCocina("■ Parar", pararCoccion);
    parar.disabled = true;

    acciones.append(
        empezar,
        parar,
        crearBotonCocina(
            "Volver a ingredientes",
            mostrarSeleccionIngredientes,
            true
        )
    );

    panel.append(barra, leyenda, textoAyuda, mensaje, acciones);

    function empezarCoccion() {
        if (coccionEnMarcha) return;

        if (temporizadorCoccion !== null) {
            clearInterval(temporizadorCoccion);
        }

        coccionEnMarcha = true;
        indicadorCoccion = 0;
        direccionIndicador = 1;

        indicador.style.left = "0%";
        mensaje.textContent = "¡Atenta! Pulsa parar en la zona verde.";
        empezar.disabled = true;
        parar.disabled = false;

        temporizadorCoccion = setInterval(() => {
            indicadorCoccion += direccionIndicador * 1.6;

            if (indicadorCoccion >= 100) {
                indicadorCoccion = 100;
                direccionIndicador = -1;
            } else if (indicadorCoccion <= 0) {
                indicadorCoccion = 0;
                direccionIndicador = 1;
            }

            indicador.style.left = indicadorCoccion + "%";
        }, 16);
    }

    function pararCoccion() {
        if (!coccionEnMarcha) return;

        if (temporizadorCoccion !== null) {
            clearInterval(temporizadorCoccion);
            temporizadorCoccion = null;
        }

        coccionEnMarcha = false;
        parar.disabled = true;

        if (indicadorCoccion >= 42 && indicadorCoccion <= 58) {
            progresoCoccion = 100;
            mensaje.textContent =
                "¡Perfecto! Has parado dentro de la zona verde.";

            zonaVerde.style.background = "#35d879";
            indicador.style.background = "#d8ffe5";
            empezar.textContent = "✓ ¡Cocción perfecta!";
            empezar.disabled = true;

            temporizadorAvance = setTimeout(() => {
                temporizadorAvance = null;
                if (cocinaAbierta) completarFaseActual();
            }, 850);
        } else {
            progresoCoccion = 0;
            mensaje.textContent =
                "¡Uy, fuera de la zona verde! Vuelve a intentarlo.";

            empezar.textContent = "↻ Intentar otra vez";
            empezar.disabled = false;
        }
    }
}

/* =========================================
   AVANZAR DE FASE
   ========================================= */

function completarFaseActual() {
    detenerTemporizadoresCocina();

    if (!recetaCocinaActual) return;

    progresoPlato++;
    progresoMezcla = 0;
    progresoCoccion = 0;
    indicadorCoccion = 0;
    direccionIndicador = 1;

    if (progresoPlato >= recetaCocinaActual.fases.length) {
        mostrarRecetaTerminada();
    } else {
        mostrarMinijuegoPlato();
    }
}

function ejecutarAccionPlato() {
    if (!recetaCocinaActual) return;
    completarFaseActual();
}

/* =========================================
   RECETA TERMINADA
   ========================================= */

function mostrarRecetaTerminada() {
    detenerTemporizadoresCocina();

    const contenido = document.getElementById("cocinaContenido");
    if (!contenido || !recetaCocinaActual) return;

    contenido.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "cocina-panel";
    panel.style.textAlign = "center";

    const imagen = crearImagenCocina(
        recetaCocinaActual.final,
        "cocina-sprite",
        recetaCocinaActual.nombre
    );
    imagen.style.maxWidth = "100%";
    imagen.style.maxHeight = "450px";
    imagen.style.margin = "0 auto";

    const titulo = document.createElement("h2");
    titulo.textContent = "¡Receta terminada!";

    const texto = document.createElement("p");
    texto.className = "cocina-ayuda";
    texto.textContent =
        "¡Buen trabajo, Stephi! Has preparado " +
        recetaCocinaActual.nombre +
        ". Paco está muy orgulloso de ti.";

    const acciones = document.createElement("div");
    acciones.className = "cocina-acciones";
    acciones.style.justifyContent = "center";

    acciones.append(
        crearBotonCocina("Preparar otra receta", () => {
            recetaCocinaActual = null;
            ingredientesSeleccionados = [];
            progresoPlato = 0;
            reiniciarProgresoFase();
            mostrarMenuRecetasCocina();
        }),
        crearBotonCocina(
            "Volver a la estación",
            cerrarMinijuegoCocina,
            true
        )
    );

    panel.append(imagen, titulo, texto, acciones);
    contenido.appendChild(panel);
}

/* =========================================
   CREAR BOTONES
   ========================================= */

function crearBotonCocina(texto, accion, secundario = false) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "cocina-accion";

    if (secundario) {
        boton.classList.add("cocina-accion-secundaria");
    }

    boton.textContent = texto;
    boton.addEventListener("click", accion);

    return boton;
}

/* =========================================
   CONEXIÓN CON SCRIPT.JS
   ========================================= */

window.abrirMinijuegoCocina = abrirMinijuegoCocina;