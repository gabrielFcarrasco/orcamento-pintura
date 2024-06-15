let currentIndex = 0;

function moveSlides(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.img').length;

    currentIndex += n;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Auto slide
setInterval(() => {
    moveSlides(1);
}, 3000);
