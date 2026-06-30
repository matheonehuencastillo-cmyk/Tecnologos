// ==========================================================================
// LENGUAJES INFORMÁTICOS 1 (UNAHUR) - TRABAJO PRÁCTICO GRUPAL
// Etapa 4 - JavaScript
// Funcionalidad: Buscador de programas (sección "Programas")
// ==========================================================================




    // ----------------------------------------------------------------
    // 1. MODO OSCURO
    // ----------------------------------------------------------------
    const botonModo = document.getElementById("btn-modo");

    if (botonModo) {
        // Si el usuario ya había activado el modo oscuro antes, lo recordamos
        if (localStorage.getItem("modo") === "oscuro") {
            document.body.classList.add("oscuro");
            botonModo.textContent = "☀️ Modo claro";
        }

        botonModo.addEventListener("click", () => {
            document.body.classList.toggle("oscuro");

            const activado = document.body.classList.contains("oscuro");
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
