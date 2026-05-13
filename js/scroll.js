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