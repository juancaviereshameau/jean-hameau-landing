document.addEventListener('DOMContentLoaded', function() {
    console.log('Scroll effects cargado'); // Para verificar que funciona
    
    const fadeElements = document.querySelectorAll('.fade-up');
    console.log('Elementos encontrados:', fadeElements.length);
    
    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight - 100) {
                el.classList.add('visible');
                console.log('Elemento visible:', el);
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Ejecutar al cargar
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 }); // 0 = al tocar, 0.5 = mitad visible, 1 = totalmente visible
// Menú: aparece al subir, desaparece al bajar
let lastScroll = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        menu.classList.remove('hide');
        menu.classList.add('show');
        return;
    }
    if (currentScroll > lastScroll && !menu.classList.contains('hide')) {
        menu.classList.add('hide');
        menu.classList.remove('show');
    } else if (currentScroll < lastScroll && menu.classList.contains('hide')) {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }
    lastScroll = currentScroll;
});

// Menú hamburguesa en móvil
const toggleBtn = document.getElementById('menu-toggle');
const menuLinks = document.querySelector('.menu-links');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        menuLinks.classList.remove('active');
    });
});