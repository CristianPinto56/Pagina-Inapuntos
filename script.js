JavaScript
/* ==========================================================================
   INTERACTIVIDAD Y ADAPTACIÓN RESPONSIVA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Asignación de elementos del DOM para la navegación móvil
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn-nav');

    // Manejador de eventos para abrir o cerrar el menú desplegable móvil
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animación del botón hamburguesa
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // Cierre automático del menú móvil al presionar cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

});