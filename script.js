let slideIndex = 1; // Inicializa el índice de la diapositiva en 1 (la primera imagen)

// Llama a la función de mostrar diapositivas al cargar la página
showSlides(slideIndex);

/**
 * Avanza o retrocede en el carrusel.
 * @param {number} n - 1 para avanzar, -1 para retroceder.
 */
function changeSlide(n) {
    showSlides(slideIndex += n);
}

/**
 * Muestra una diapositiva específica al hacer clic en una miniatura.
 * @param {number} n - El número de la diapositiva a mostrar (1 a 10).
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Función principal que maneja la visibilidad de las imágenes.
 * @param {number} n - El índice de la diapositiva actual.
 */
function showSlides(n) {
    let i;
    // Obtiene todas las imágenes grandes y miniaturas por su clase
    const slides = document.getElementsByClassName("main-image");
    const thumbs = document.getElementsByClassName("thumb-image");

    // Lógica de bucle: si llegas al final, vuelve al inicio, y viceversa.
    if (n > slides.length) {
        slideIndex = 1; // Vuelve a la primera diapositiva
    }
    if (n < 1) {
        slideIndex = slides.length; // Va a la última diapositiva
    }

    // Oculta todas las imágenes grandes y quita el borde activo de todas las miniaturas
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        thumbs[i].classList.remove('active');
    }

    // Muestra la imagen grande actual y activa su miniatura correspondiente
    slides[slideIndex - 1].classList.add('active'); // Usamos (slideIndex - 1) porque los arrays de JS empiezan en 0
    thumbs[slideIndex - 1].classList.add('active');
}