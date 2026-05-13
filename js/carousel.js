document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    let intervalId = null;
    const intervalTime = 5000;

    function createDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (idx === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        updateDots();
        resetInterval();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function resetInterval() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, intervalTime);
    }

    createDots();
    resetInterval();

    // Pausar al pasar mouse sobre hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => {
            if (intervalId) clearInterval(intervalId);
        });
        hero.addEventListener('mouseleave', resetInterval);
    }
});
document.addEventListener('DOMContentLoaded', function() {
        const videos = document.querySelectorAll('.video-wrapper-short video');
        videos.forEach(video => {
            video.addEventListener('loadedmetadata', function() {
                const aspectRatio = (this.videoHeight / this.videoWidth) * 100;
                this.parentElement.style.paddingBottom = aspectRatio + '%';
                this.style.position = 'absolute';
                this.style.top = '0';
                this.style.left = '0';
                this.style.width = '100%';
                this.style.height = '100%';
                this.style.objectFit = 'contain';
            });
        });
    });
    