// Animación suave al hacer scroll a cada sección
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Cambiar color de fondo al pasar el mouse
document.querySelector("header").addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#1a202c";
});

document.querySelector("header").addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#2d3748";
});
