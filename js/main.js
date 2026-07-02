// ==========================================================================
// LENGUAJES INFORMÁTICOS 1 (UNAHUR) - TRABAJO PRÁCTICO GRUPAL
// Etapa 4 - JavaScript
// Funcionalidad: Buscador de programas (sección "Programas")
// ==========================================================================

// ----------------------------------------------------------------
// 1. MODO OSCURO
// ----------------------------------------------------------------
const botonModo = document.getElementById("btn-modo");

function aplicarModoOscuro() {
    const activado = localStorage.getItem("modo") === "oscuro";
    document.body.classList.toggle("oscuro", activado);

    if (botonModo) {
        botonModo.textContent = activado ? "☀️ Modo claro" : "🌙 Modo oscuro";
    }
}

if (botonModo) {
    aplicarModoOscuro();

    botonModo.addEventListener("click", () => {
        const activado = document.body.classList.toggle("oscuro");
        botonModo.textContent = activado ? "☀️ Modo claro" : "🌙 Modo oscuro";
        localStorage.setItem("modo", activado ? "oscuro" : "claro");
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador-programas");

    // Si la página actual no tiene el buscador (no es programas.html), no hace nada
    if (!buscador) return;

    const items = document.querySelectorAll(".programa-item");
    const sinResultados = document.getElementById("sin-resultados");

    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLowerCase();
        let hayResultados = false;

        items.forEach((item) => {
            const titulo = item.querySelector(".card-title").textContent.toLowerCase();

            if (titulo.includes(texto)) {
                item.style.display = "";
                hayResultados = true;
            } else {
                item.style.display = "none";
            }
        });

        // Muestra un mensaje si ningún programa coincide con la búsqueda
        if (sinResultados) {
            sinResultados.style.display = hayResultados ? "none" : "block";
        }
    });

});
// ----------------------------------------------------------------
// 2. VALIDACIÓN DEL FORMULARIO DE DONACIÓN
// ----------------------------------------------------------------
const formDonacion = document.getElementById("form-donacion");

if (formDonacion) {
    formDonacion.addEventListener("submit", (e) => {
        e.preventDefault(); // evita que la página se recargue

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const programa = document.getElementById("programa").value;
        const donacion = document.getElementById("donacion").value;

        if (nombre === "") {
            alert("Por favor ingresá tu nombre.");
            return;
        }

        if (email === "" || !email.includes("@")) {
            alert("Por favor ingresá un email válido.");
            return;
        }

        if (programa === "") {
            alert("Por favor elegí un programa.");
            return;
        }

        if (donacion === "") {
            alert("Por favor elegí qué vas a donar.");
            return;
        }

        alert("¡Gracias por tu donación, " + nombre + "!");
        formDonacion.reset(); // limpia el formulario
    });
}