
/* ==========================================
   LA LÍNEA DE NOSOTROS
   MINIJUEGO DE PESCA - VERSIÓN CON SPRITES
   ========================================== */

(function () {

    // ==========================================
    // VARIABLES GENERALES
    // ==========================================

    let ventanaPesca = null;
    let fase = "inicio";

    let pecesCapturados = [];
    let pezActual = null;
    let capturaActual = false;

    let tension = 35;
    let progresoPesca = 0;
    let botonPulsado = false;

    let temporizadorPicada = null;
    let temporizadorEscape = null;
    let intervaloTension = null;
    let temporizadorLanzamiento = null;

    let pescaCerrada = true;

    // ==========================================
    // RUTA DE LAS IMÁGENES
    // ==========================================

    const RUTA_PESCA = "imagenes/pesca/";

    // ==========================================
    // CONFIGURACIÓN DE TAMAÑOS Y POSICIONES
    //
    // ancho: anchura del sprite en pantalla.
    // alto: altura del sprite en pantalla.
    // x: desplazamiento horizontal en píxeles.
    // y: desplazamiento vertical en píxeles.
    //
    // x positivo = derecha.
    // x negativo = izquierda.
    // y positivo = abajo.
    // y negativo = arriba.
    // ==========================================

    const TAMANOS_PESCA = {

        boya: {
            ancho: 384,
            alto: 384,
            x: 0,
            y: -100
        },

        salpicadura: {
            ancho: 512,
            alto: 384,
            x: 0,
            y: -100
        },

        sardina: {
            ancho: 800,
            alto: 800,
            x: 0,
            y: -100
        },

        pulpo: {
            ancho: 960,
            alto: 960,
            x: 0,
            y: -100
        },

        morena: {
            ancho: 1040,
            alto: 800,
            x: 0,
            y: -100
        },

        cherryCola: {
            ancho: 640,
            alto: 880,
            x: 0,
            y: -100
        },

        pezCaraculo: {
            ancho: 960,
            alto: 960,
            x: 0,
            y: -100
        },

        ajolote: {
            ancho: 880,
            alto: 880,
            x: 0,
            y: -100
        },

        miniatura: {
            ancho: 35,
            alto: 35
        }

    };

    // ==========================================
    // LISTA DE PECES
    // Todos tienen la misma probabilidad.
    // ==========================================

    const peces = [

        {
            nombre: "Sardina",
            imagen: "sardina.png",
            rareza: "Común",
            tamano: "sardina"
        },

        {
            nombre: "Pulpo",
            imagen: "pulpo.png",
            rareza: "Común",
            tamano: "pulpo"
        },

        {
            nombre: "Morena",
            imagen: "morena.png",
            rareza: "Común",
            tamano: "morena"
        },

        {
            nombre: "Cherry-Cola",
            imagen: "cherry-cola.png",
            rareza: "Especial",
            tamano: "cherryCola"
        },

        {
            nombre: "Pez caraculo",
            imagen: "pez-caraculo.png",
            rareza: "Especial",
            tamano: "pezCaraculo"
        },

        {
            nombre: "Ajolote",
            imagen: "ajolote.png",
            rareza: "Especial",
            tamano: "ajolote"
        }

    ];

    function elegirPez() {
        return peces[Math.floor(Math.random() * peces.length)];
    }

    // ==========================================
    // CREAR IMÁGENES
    // ==========================================

    function crearSprite(nombreArchivo, ancho, alto, clase = "") {

        const imagen = document.createElement("img");

        imagen.src = RUTA_PESCA + nombreArchivo;
        imagen.alt = "";
        imagen.draggable = false;

        imagen.style.width = ancho + "px";
        imagen.style.height = alto + "px";
        imagen.style.objectFit = "contain";
        imagen.style.imageRendering = "pixelated";

        if (clase) {
            imagen.className = clase;
        }

        imagen.onerror = function () {

            console.error(
                "No se ha podido cargar el sprite:",
                imagen.src
            );

        };

        return imagen;
    }

    // ==========================================
    // MOSTRAR BOYA
    // ==========================================

    function mostrarBoya() {

        const flotador = elemento("pescaFlotador");

        flotador.innerHTML = "";

        const configuracion = TAMANOS_PESCA.boya;

        const sprite = crearSprite(
            "boya.png",
            configuracion.ancho,
            configuracion.alto
        );

        sprite.style.marginLeft = configuracion.x + "px";
        sprite.style.marginTop = configuracion.y + "px";

        flotador.appendChild(sprite);

    }

    // ==========================================
    // CREAR VENTANA DEL MINIJUEGO
    // ==========================================

    function crearVentana() {

        const anterior = document.getElementById("ventanaPesca");

        if (anterior) {
            anterior.remove();
        }

        ventanaPesca = document.createElement("div");
        ventanaPesca.id = "ventanaPesca";

        ventanaPesca.innerHTML = `

            <style>

                #ventanaPesca {
                    position: fixed;
                    inset: 0;
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    color: white;
                    font-family: Arial, sans-serif;
                    background: #103d56;
                    user-select: none;
                }

                #ventanaPesca * {
                    box-sizing: border-box;
                }

                #ventanaPesca button {
                    font: inherit;
                    font-weight: bold;
                    border: 3px solid #173047;
                    border-radius: 12px;
                    padding: 12px 18px;
                    cursor: pointer;
                    color: #173047;
                    background: #fff0bd;
                    transition: transform 0.12s, background 0.15s;
                    touch-action: manipulation;
                }

                #ventanaPesca button:active {
                    transform: scale(0.96);
                }

                #ventanaPesca .pesca-oculto {
                    display: none !important;
                }

                /* CABECERA */

                #ventanaPesca .pesca-cabecera {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 10px 14px;
                    background: #17445c;
                    border-bottom: 3px solid #0b3046;
                }

                #ventanaPesca .pesca-titulo {
                    font-size: clamp(16px, 3vw, 22px);
                }

                #ventanaPesca #pescaSalir {
                    padding: 8px 12px;
                    background: #ffe5d6;
                }

                /* MAR */

                #ventanaPesca .pesca-mar {
                    position: relative;
                    flex: 1;
                    min-height: 0;
                    overflow: hidden;
                    isolation: isolate;
                    background: #167b9e;
                }

                #ventanaPesca .pesca-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    image-rendering: pixelated;
                    z-index: -1;
                    pointer-events: none;
                }

                /* PERSONAJE */

                #ventanaPesca .pesca-personaje {
                    position: absolute;
                    top: 8%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1;
                    pointer-events: none;
                }

                /* ALERTAS */

                #ventanaPesca .pesca-alerta {
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 5;
                    padding: 8px 14px;
                    border: 2px solid rgba(255,255,255,0.8);
                    border-radius: 12px;
                    background: rgba(7, 49, 70, 0.75);
                    font-size: clamp(13px, 2.5vw, 18px);
                    font-weight: bold;
                    text-align: center;
                    white-space: nowrap;
                }

                #ventanaPesca .pesca-alerta.picada {
                    color: white;
                    background: #159447;
                    animation: pescaAlerta 0.35s ease-in-out infinite alternate;
                }

                @keyframes pescaAlerta {
                    from {
                        transform: translateX(-50%) scale(1);
                    }

                    to {
                        transform: translateX(-50%) scale(1.06);
                    }
                }

                /* ZONA DEL AGUA */

                #ventanaPesca .pesca-zona-agua {
                    position: absolute;
                    top: 35%;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #ventanaPesca .pesca-objetivo {
                    position: relative;
                    width: 200px;
                    height: 190px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* ANILLOS DEL AGUA */

                #ventanaPesca .pesca-anillos {
                    position: absolute;
                    width: 110px;
                    height: 32px;
                    bottom: 30px;
                    border: 3px solid rgba(192, 255, 246, 0.45);
                    border-radius: 50%;
                    opacity: 0.7;
                }

                #ventanaPesca .pesca-anillos::after {
                    content: "";
                    position: absolute;
                    inset: 9px -12px;
                    border: 2px solid rgba(192, 255, 246, 0.25);
                    border-radius: 50%;
                }

                /* BOYA */

                #ventanaPesca .pesca-flotador {
                    position: absolute;
                    z-index: 2;
                    top: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform-origin: center;
                    filter: drop-shadow(0 4px 2px rgba(0, 34, 57, 0.35));
                }

                #ventanaPesca .pesca-flotador img {
                    display: block;
                    object-fit: contain;
                    image-rendering: pixelated;
                }

                #ventanaPesca .pesca-flotador.flota {
                    animation: pescaFlotar 1.5s ease-in-out infinite;
                }

                @keyframes pescaFlotar {
                    0%, 100% {
                        transform: translateY(0) rotate(-4deg);
                    }

                    50% {
                        transform: translateY(7px) rotate(4deg);
                    }
                }

                #ventanaPesca .pesca-flotador.lanzando {
                    animation: pescaLanzar 0.65s cubic-bezier(.15,.8,.3,1) forwards;
                }

                @keyframes pescaLanzar {
                    0% {
                        transform: translate(-150px, -180px) scale(0.45) rotate(-25deg);
                        opacity: 0;
                    }

                    65% {
                        transform: translate(0, 15px) scale(1.12) rotate(12deg);
                        opacity: 1;
                    }

                    82% {
                        transform: translate(0, -9px) scale(0.95);
                    }

                    100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                }

                #ventanaPesca .pesca-flotador.picando {
                    animation: pescaPicada 0.55s ease-in forwards;
                }

                @keyframes pescaPicada {
                    0% {
                        transform: translateY(0) scale(1);
                    }

                    20% {
                        transform: translateY(9px) scale(0.95);
                    }

                    45% {
                        transform: translateY(28px) scale(0.72) rotate(12deg);
                    }

                    65% {
                        transform: translateY(4px) scale(1.04) rotate(-8deg);
                    }

                    82% {
                        transform: translateY(25px) scale(0.8);
                    }

                    100% {
                        transform: translateY(32px) scale(0.72);
                    }
                }

                #ventanaPesca .pesca-flotador.enganchado {
                    animation: pescaEnganchado 0.65s ease-in-out infinite;
                }

                @keyframes pescaEnganchado {
                    0%, 100% {
                        transform: translateY(0) rotate(-7deg);
                    }

                    50% {
                        transform: translateY(8px) rotate(8deg);
                    }
                }

                /* SALPICADURA */

                #ventanaPesca .pesca-salpicadura {
                    position: absolute;
                    z-index: 3;
                    pointer-events: none;
                    animation: pescaSalpicar 0.7s ease-out forwards;
                }

                #ventanaPesca .pesca-salpicadura img {
                    display: block;
                    object-fit: contain;
                    image-rendering: pixelated;
                }

                @keyframes pescaSalpicar {
                    0% {
                        opacity: 0;
                        transform: scale(0.3) translateY(0);
                    }

                    30% {
                        opacity: 1;
                        transform: scale(1.2) translateY(-10px);
                    }

                    100% {
                        opacity: 0;
                        transform: scale(1.5) translateY(-24px);
                    }
                }

                /* PEZ CAPTURADO */

                #ventanaPesca .pesca-pez-visual {
                    position: absolute;
                    z-index: 4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: pescaPezNadando 4s ease-in-out infinite alternate;
                    filter: drop-shadow(0 5px 3px rgba(0, 30, 50, 0.4));
                }

                #ventanaPesca .pesca-pez-visual img {
                    display: block;
                    object-fit: contain;
                    image-rendering: pixelated;
                }

                @keyframes pescaPezNadando {
                    from {
                        transform: translateX(-18px) rotate(-4deg);
                    }

                    to {
                        transform: translateX(18px) rotate(4deg);
                    }
                }

                /* MENSAJE */

                #ventanaPesca .pesca-mensaje {
                    flex-shrink: 0;
                    min-height: 48px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 14px;
                    text-align: center;
                    font-size: clamp(13px, 2.5vw, 16px);
                    background: #17445c;
                }

                /* CONTROLES */

                #ventanaPesca .pesca-controles {
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    padding: 12px;
                    color: #173047;
                    background: #f0e2bb;
                }

                #ventanaPesca .pesca-boton-principal {
                    min-width: min(280px, 90%);
                    min-height: 48px;
                    background: #ffe08a;
                }

                #ventanaPesca .pesca-boton-principal.picada {
                    background: #55f58b;
                    color: #073d20;
                    border-color: #146b39;
                    box-shadow: 0 0 0 4px rgba(49, 225, 114, 0.25);
                    animation: pescaBotonAlerta 0.5s ease-in-out infinite alternate;
                }

                @keyframes pescaBotonAlerta {
                    from {
                        transform: scale(1);
                    }

                    to {
                        transform: scale(1.035);
                    }
                }

                /* TENSIÓN */

                #ventanaPesca .pesca-tension-zona {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }

                #ventanaPesca .pesca-barra {
                    position: relative;
                    width: min(90%, 440px);
                    height: 28px;
                    overflow: hidden;
                    border: 3px solid #173047;
                    border-radius: 8px;
                    background: #e7e7e7;
                }

                #ventanaPesca .pesca-zona-segura {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 37.5%;
                    width: 35%;
                    background: rgba(66, 201, 120, 0.22);
                    border-left: 2px dashed #258447;
                    border-right: 2px dashed #258447;
                }

                #ventanaPesca .pesca-barra-interior {
                    position: relative;
                    z-index: 1;
                    height: 100%;
                    width: 35%;
                    background: #42c978;
                    transition: width 0.1s linear;
                }

                #ventanaPesca .pesca-instruccion {
                    max-width: 440px;
                    text-align: center;
                    font-size: 13px;
                }

                #ventanaPesca .pesca-progreso {
                    width: min(90%, 440px);
                    height: 10px;
                    overflow: hidden;
                    border: 2px solid #173047;
                    border-radius: 10px;
                    background: #fff;
                }

                #ventanaPesca .pesca-progreso-interior {
                    height: 100%;
                    width: 0%;
                    background: #3e9cf5;
                    transition: width 0.1s linear;
                }

                /* COLECCIÓN */

                #ventanaPesca .pesca-coleccion {
                    flex-shrink: 0;
                    padding: 9px 12px;
                    color: #173047;
                    background: #fff9e8;
                }

                #ventanaPesca .pesca-coleccion-titulo {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    align-items: center;
                    margin-bottom: 7px;
                    font-size: 14px;
                }

                #ventanaPesca .pesca-lista {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 6px;
                }

                #ventanaPesca .pesca-pez {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 8px;
                    border-radius: 8px;
                    background: #e3f4f7;
                    font-size: 12px;
                }

                #ventanaPesca .pesca-pez.descubierto {
                    background: #d8f4dd;
                }

                #ventanaPesca .pesca-pez img {
                    display: block;
                    object-fit: contain;
                    image-rendering: pixelated;
                }

                /* CONFIRMACIÓN */

                #ventanaPesca .pesca-modal-fondo {
                    position: absolute;
                    inset: 0;
                    z-index: 20;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: rgba(3, 23, 37, 0.72);
                }

                #ventanaPesca .pesca-modal {
                    width: min(420px, 100%);
                    padding: 24px;
                    border: 4px solid #173047;
                    border-radius: 18px;
                    color: #173047;
                    background: #fff9e8;
                    text-align: center;
                    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
                    animation: pescaModalEntrada 0.2s ease-out;
                }

                @keyframes pescaModalEntrada {
                    from {
                        opacity: 0;
                        transform: scale(0.88);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                #ventanaPesca .pesca-modal h2 {
                    margin: 0 0 12px;
                    font-size: clamp(20px, 4vw, 26px);
                }

                #ventanaPesca .pesca-modal p {
                    margin: 0 0 20px;
                    line-height: 1.5;
                }

                #ventanaPesca .pesca-modal-botones {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                }

                #ventanaPesca .pesca-modal-si {
                    background: #55f58b;
                }

                #ventanaPesca .pesca-modal-no {
                    background: #ffe5d6;
                }

                /* PANTALLAS PEQUEÑAS */

                @media (max-height: 650px) {
                    #ventanaPesca .pesca-cabecera {
                        padding: 6px 10px;
                    }

                    #ventanaPesca .pesca-mensaje {
                        min-height: 38px;
                        padding: 6px;
                    }

                    #ventanaPesca .pesca-controles {
                        padding: 7px;
                        gap: 6px;
                    }

                    #ventanaPesca .pesca-coleccion {
                        padding: 6px 10px;
                    }

                    #ventanaPesca .pesca-personaje {
                        top: 3%;
                    }

                    #ventanaPesca .pesca-zona-agua {
                        top: 24%;
                    }

                    #ventanaPesca .pesca-objetivo {
                        transform: scale(0.8);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    #ventanaPesca * ,
                    #ventanaPesca *::before,
                    #ventanaPesca *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }

            </style>

            <!-- CABECERA -->

            <div class="pesca-cabecera">
                <strong class="pesca-titulo">Pesca en Canarias</strong>
                <button id="pescaSalir">Salir</button>
            </div>

            <!-- MAR -->

            <div class="pesca-mar" id="pescaMar">

                <img
                    src="imagenes/pesca/fondo-mar.png"
                    class="pesca-fondo"
                    alt=""
                >

                <div class="pesca-personaje"></div>

                <div
                    class="pesca-alerta pesca-oculto"
                    id="pescaAlerta"
                ></div>

                <div class="pesca-zona-agua">

                    <div class="pesca-objetivo">

                        <div class="pesca-anillos"></div>

                        <div
                            class="pesca-flotador"
                            id="pescaFlotador"
                        ></div>

                        <div
                            class="pesca-pez-visual pesca-oculto"
                            id="pescaPezVisual"
                        ></div>

                    </div>

                </div>

            </div>

            <!-- MENSAJE -->

            <div class="pesca-mensaje" id="pescaMensaje">
                ¡Qué buen día para pescar!
            </div>

            <!-- CONTROLES -->

            <div class="pesca-controles">

                <button
                    class="pesca-boton-principal"
                    id="pescaAccion"
                >
                    Lanzar la caña
                </button>

                <div
                    id="pescaTensionZona"
                    class="pesca-tension-zona pesca-oculto"
                >

                    <strong id="pescaTensionTexto">
                        ¡Recoge el pez!
                    </strong>

                    <div class="pesca-barra">

                        <div class="pesca-zona-segura"></div>

                        <div
                            class="pesca-barra-interior"
                            id="pescaTensionBarra"
                        ></div>

                    </div>

                    <div class="pesca-instruccion">
                        Mantén pulsado para recoger. Suelta si la barra
                        sube demasiado. Intenta mantenerla en la zona verde.
                    </div>

                    <div class="pesca-progreso">
                        <div
                            class="pesca-progreso-interior"
                            id="pescaProgresoBarra"
                        ></div>
                    </div>

                    <button
                        class="pesca-boton-principal"
                        id="pescaRecoger"
                    >
                        Mantener para recoger
                    </button>

                </div>

            </div>

            <!-- COLECCIÓN -->

            <div class="pesca-coleccion">

                <div class="pesca-coleccion-titulo">
                    <strong>Tu colección</strong>
                    <span id="pescaContador">0 capturas</span>
                </div>

                <div
                    class="pesca-lista"
                    id="pescaLista"
                ></div>

            </div>

            <!-- CONFIRMACIÓN -->

            <div
                class="pesca-modal-fondo pesca-oculto"
                id="pescaConfirmacion"
            >

                <div
                    class="pesca-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="pescaConfirmacionTitulo"
                >

                    <h2 id="pescaConfirmacionTitulo">
                        ¿Volvemos a pescar?
                    </h2>

                    <p>
                        ¿Seguro que quieres volver a tirar la caña?
                        Puedes quedarte un momento viendo el pez
                        que acabas de pescar.
                    </p>

                    <div class="pesca-modal-botones">

                        <button
                            class="pesca-modal-si"
                            id="pescaConfirmarSi"
                        >
                            Sí, volver a pescar
                        </button>

                        <button
                            class="pesca-modal-no"
                            id="pescaConfirmarNo"
                        >
                            No, quiero ver mi pez
                        </button>

                    </div>

                </div>

            </div>

        `;

        document.body.appendChild(ventanaPesca);

        elemento("pescaSalir").onclick = cerrarPesca;
        elemento("pescaAccion").onclick = accionPrincipal;
        elemento("pescaConfirmarSi").onclick = confirmarNuevaPesca;
        elemento("pescaConfirmarNo").onclick = cancelarNuevaPesca;

        // Control de pulsación para recoger el pez.

        const botonRecoger = elemento("pescaRecoger");

        function empezarPulsacion(evento) {

            evento.preventDefault();

            if (fase === "recogiendo") {
                botonPulsado = true;
            }

        }

        function terminarPulsacion() {
            botonPulsado = false;
        }

        botonRecoger.addEventListener(
            "pointerdown",
            empezarPulsacion
        );

        botonRecoger.addEventListener(
            "pointerup",
            terminarPulsacion
        );

        botonRecoger.addEventListener(
            "pointercancel",
            terminarPulsacion
        );

        botonRecoger.addEventListener(
            "lostpointercapture",
            terminarPulsacion
        );

        botonRecoger.addEventListener(
            "contextmenu",
            evento => evento.preventDefault()
        );

        actualizarColeccion();
        mostrarFase("inicio");

    }

    // ==========================================
    // FUNCIONES AUXILIARES
    // ==========================================

    function elemento(id) {
        return ventanaPesca.querySelector("#" + id);
    }

    function mensaje(texto) {

        if (ventanaPesca) {
            elemento("pescaMensaje").textContent = texto;
        }

    }

    function mostrarAlerta(texto, clase) {

        const alerta = elemento("pescaAlerta");

        alerta.textContent = texto;
        alerta.className = "pesca-alerta";

        if (clase) {
            alerta.classList.add(clase);
        }

        if (!texto) {
            alerta.classList.add("pesca-oculto");
        }

    }

    // ==========================================
    // CAMBIAR DE FASE
    // ==========================================

    function mostrarFase(nuevaFase) {

        fase = nuevaFase;

        const boton = elemento("pescaAccion");
        const zona = elemento("pescaTensionZona");

        zona.classList.toggle(
            "pesca-oculto",
            fase !== "recogiendo"
        );

        boton.classList.toggle(
            "pesca-oculto",
            fase === "esperando" ||
            fase === "picada" ||
            fase === "recogiendo"
        );

        boton.classList.remove("picada");
        boton.style.transform = "";
        boton.style.background = "";
        boton.style.color = "";

        mostrarAlerta("", "");

        if (fase === "inicio") {

            boton.textContent = "Lanzar la caña";

            const flotador = elemento("pescaFlotador");

            flotador.style.visibility = "visible";
            flotador.className = "pesca-flotador";

            mostrarBoya();

            const pezVisual = elemento("pescaPezVisual");

            pezVisual.innerHTML = "";
            pezVisual.classList.add("pesca-oculto");

            mensaje(
                "¡Qué buen día para pescar! Pulsa para lanzar la caña."
            );

        }

        if (fase === "resultado") {
            boton.textContent = "Volver a pescar";
        }

    }

    // ==========================================
    // BOTÓN PRINCIPAL
    // ==========================================

    function accionPrincipal() {

        if (fase === "inicio") {

            lanzarCana();

        } else if (fase === "resultado") {

            if (capturaActual) {
                mostrarConfirmacion();
            } else {
                lanzarCana();
            }

        } else if (fase === "picada") {

            iniciarRecogida();

        }

    }

    // ==========================================
    // CONFIRMACIÓN DE NUEVA PESCA
    // ==========================================

    function mostrarConfirmacion() {
        elemento("pescaConfirmacion").classList.remove("pesca-oculto");
    }

    function confirmarNuevaPesca() {

        elemento("pescaConfirmacion").classList.add("pesca-oculto");

        lanzarCana();

    }

    function cancelarNuevaPesca() {

        elemento("pescaConfirmacion").classList.add("pesca-oculto");

        // Conservamos el pez en pantalla.

    }

    // ==========================================
    // LANZAR LA CAÑA
    // ==========================================

    function lanzarCana() {

        limpiarTemporizadores();

        pezActual = null;
        capturaActual = false;

        botonPulsado = false;
        tension = 35;
        progresoPesca = 0;

        elemento("pescaConfirmacion").classList.add("pesca-oculto");

        mostrarFase("esperando");

        const flotador = elemento("pescaFlotador");

        flotador.style.visibility = "visible";
        flotador.className = "pesca-flotador lanzando";

        mostrarBoya();

        const pezVisual = elemento("pescaPezVisual");

        pezVisual.innerHTML = "";
        pezVisual.classList.add("pesca-oculto");

        elemento("pescaTensionBarra").style.width = tension + "%";
        elemento("pescaProgresoBarra").style.width = "0%";

        mensaje("¡Has lanzado la caña! Espera a que pique...");

        mostrarAlerta("Esperando una picada...", "");

        crearSalpicadura();

        temporizadorLanzamiento = setTimeout(function () {

            temporizadorLanzamiento = null;

            if (pescaCerrada || fase !== "esperando") {
                return;
            }

            flotador.className = "pesca-flotador flota";

            mostrarAlerta("Espera...", "");

        }, 650);

        temporizadorPicada = setTimeout(function () {

            if (fase !== "esperando" || pescaCerrada) {
                return;
            }

            iniciarPicada();

        }, 2500 + Math.random() * 3500);

    }

    // ==========================================
    // SALPICADURA
    // ==========================================

    function crearSalpicadura() {

        if (!ventanaPesca) {
            return;
        }

        const mar = elemento("pescaMar");

        const salpicadura = document.createElement("div");

        salpicadura.className = "pesca-salpicadura";

        const configuracion = TAMANOS_PESCA.salpicadura;

        const sprite = crearSprite(
            "salpicadura.png",
            configuracion.ancho,
            configuracion.alto
        );

        salpicadura.appendChild(sprite);

        salpicadura.style.left =
            `calc(50% - ${configuracion.ancho / 2}px + ${configuracion.x}px)`;

        salpicadura.style.top =
            `calc(55% + ${configuracion.y}px)`;

        mar.appendChild(salpicadura);

        setTimeout(function () {
            salpicadura.remove();
        }, 800);

    }

    // ==========================================
    // PICADA
    // ==========================================

    function iniciarPicada() {

        fase = "picada";

        clearTimeout(temporizadorPicada);

        const flotador = elemento("pescaFlotador");
        const boton = elemento("pescaAccion");

        flotador.className = "pesca-flotador picando";

        boton.textContent = "¡TIRAR DE LA CAÑA!";

        boton.classList.remove("pesca-oculto");
        boton.classList.add("picada");

        mostrarAlerta("¡HA PICADO! ¡PULSA AHORA!", "picada");

        mensaje(
            "¡El pez ha picado! Pulsa el botón verde para tirar de la caña."
        );

        crearSalpicadura();

        temporizadorEscape = setTimeout(function () {

            if (fase !== "picada") {
                return;
            }

            mensaje("¡Se ha escapado! No pasa nada, prueba otra vez.");

            mostrarBoya();

            mostrarFase("resultado");

        }, 3000);

    }

    // ==========================================
    // INICIAR RECOGIDA
    // ==========================================

    function iniciarRecogida() {

        if (fase !== "picada") {
            return;
        }

        clearTimeout(temporizadorEscape);

        pezActual = elegirPez();

        tension = 35;
        progresoPesca = 0;
        botonPulsado = false;

        const flotador = elemento("pescaFlotador");

        flotador.className = "pesca-flotador enganchado";

        mostrarBoya();

        flotador.style.visibility = "visible";

        elemento("pescaTensionTexto").textContent =
            "¡Mantén la tensión en la zona verde!";

        elemento("pescaTensionBarra").style.width = tension + "%";

        elemento("pescaProgresoBarra").style.width = "0%";

        elemento("pescaRecoger").textContent =
            "Mantener para recoger";

        mostrarFase("recogiendo");

        mostrarAlerta("¡LO TIENES!", "");

        mensaje(
            "¡Lo tienes enganchado! Mantén y suelta para recogerlo."
        );

        intervaloTension = setInterval(
            actualizarTension,
            100
        );

    }

    // ==========================================
    // CONTROL DE TENSIÓN
    // ==========================================

    function actualizarTension() {

        if (fase !== "recogiendo" || pescaCerrada) {
            return;
        }

        if (botonPulsado) {
            tension += 2.0;
        } else {
            tension -= 1.8;
        }

        // Pequeños tirones aleatorios del pez.

        if (Math.random() < 0.035) {
            tension += 3;
        }

        tension = Math.max(0, Math.min(100, tension));

        const barra = elemento("pescaTensionBarra");

        barra.style.width = tension + "%";

        if (tension < 35) {

            barra.style.background = "#42c978";

            elemento("pescaTensionTexto").textContent =
                "Un poco más de tensión...";

        } else if (tension <= 75) {

            barra.style.background = "#42c978";

            elemento("pescaTensionTexto").textContent =
                "¡Bien! Sigue controlando la tensión.";

        } else if (tension <= 88) {

            barra.style.background = "#ffd34d";

            elemento("pescaTensionTexto").textContent =
                "¡Cuidado! Suelta un poco.";

        } else {

            barra.style.background = "#ef5350";

            elemento("pescaTensionTexto").textContent =
                "¡MUCHA TENSIÓN! ¡SUELTA!";

        }

        if (tension >= 37.5 && tension <= 72.5) {

            progresoPesca += 1.2;

        } else {

            progresoPesca = Math.max(
                0,
                progresoPesca - 0.25
            );

        }

        progresoPesca = Math.min(100, progresoPesca);

        elemento("pescaProgresoBarra").style.width =
            progresoPesca + "%";

        if (tension >= 100) {

            finalizarPesca(
                false,
                "¡El hilo se ha roto! El pez ha escapado."
            );

            return;
        }

        if (progresoPesca >= 100) {

            finalizarPesca(
                true,
                "¡Has pescado un pez!"
            );

        }

    }

    // ==========================================
    // FINALIZAR PESCA
    // ==========================================

    function finalizarPesca(acierto, texto) {

        clearInterval(intervaloTension);

        intervaloTension = null;

        botonPulsado = false;

        capturaActual = acierto && !!pezActual;

        mostrarFase("resultado");

        const flotador = elemento("pescaFlotador");

        const pezVisual = elemento("pescaPezVisual");

        if (acierto && pezActual) {

            pecesCapturados.push(pezActual);

            // Ocultamos la boya.

            flotador.style.visibility = "hidden";

            // Limpiamos el pez anterior.

            pezVisual.innerHTML = "";

            // Buscamos el tamaño y la posición configurados.

            const tamanos = TAMANOS_PESCA[pezActual.tamano];

            // Creamos su imagen.

            const sprite = crearSprite(
                pezActual.imagen,
                tamanos.ancho,
                tamanos.alto
            );

            sprite.style.marginLeft = tamanos.x + "px";
            sprite.style.marginTop = tamanos.y + "px";

            pezVisual.appendChild(sprite);

            pezVisual.classList.remove("pesca-oculto");

            mensaje(
                texto + " Has conseguido: " +
                pezActual.nombre +
                " (" + pezActual.rareza + ")."
            );

            mostrarAlerta("¡PESCA CONSEGUIDA!", "");

            actualizarColeccion();

        } else {

            flotador.style.visibility = "visible";

            mostrarBoya();

            pezVisual.innerHTML = "";

            pezVisual.classList.add("pesca-oculto");

            mensaje(texto);

            mostrarAlerta("¡Prueba otra vez!", "");

        }

        elemento("pescaAccion").textContent =
            "Volver a pescar";

    }

    // ==========================================
    // ACTUALIZAR COLECCIÓN
    // ==========================================

    function actualizarColeccion() {

        if (!ventanaPesca) {
            return;
        }

        elemento("pescaContador").textContent =
            pecesCapturados.length + " capturas";

        const lista = elemento("pescaLista");

        lista.innerHTML = "";

        const resumen = {};

        pecesCapturados.forEach(function (pez) {

            resumen[pez.nombre] =
                (resumen[pez.nombre] || 0) + 1;

        });

        peces.forEach(function (pez) {

            const tarjeta = document.createElement("div");

            tarjeta.className = "pesca-pez";

            if (resumen[pez.nombre]) {

                tarjeta.classList.add("descubierto");

                const miniatura = TAMANOS_PESCA.miniatura;

                const imagen = crearSprite(
                    pez.imagen,
                    miniatura.ancho,
                    miniatura.alto
                );

                tarjeta.appendChild(imagen);

                const nombre = document.createElement("span");

                nombre.textContent =
                    pez.nombre + " ×" + resumen[pez.nombre];

                tarjeta.appendChild(nombre);

            } else {

                tarjeta.textContent = "Desconocido";

            }

            lista.appendChild(tarjeta);

        });

    }

    // ==========================================
    // LIMPIAR TEMPORIZADORES
    // ==========================================

    function limpiarTemporizadores() {

        clearTimeout(temporizadorPicada);
        clearTimeout(temporizadorEscape);
        clearTimeout(temporizadorLanzamiento);

        clearInterval(intervaloTension);

        temporizadorPicada = null;
        temporizadorEscape = null;
        temporizadorLanzamiento = null;
        intervaloTension = null;

    }

    // ==========================================
    // CERRAR MINIJUEGO
    // ==========================================

    function cerrarPesca() {

        limpiarTemporizadores();

        pescaCerrada = true;

        botonPulsado = false;

        if (ventanaPesca) {

            ventanaPesca.remove();

            ventanaPesca = null;

        }

        // La colección se conserva mientras la página siga abierta.

        if (typeof window.dibujar === "function") {
            window.dibujar();
        }

    }

    // ==========================================
    // ABRIR MINIJUEGO
    // ==========================================

    window.abrirMinijuegoPesca = function () {

        limpiarTemporizadores();

        pescaCerrada = false;

        fase = "inicio";

        pezActual = null;

        capturaActual = false;

        crearVentana();

    };

})();
