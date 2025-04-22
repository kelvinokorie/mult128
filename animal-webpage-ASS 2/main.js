document.addEventListener("DOMContentLoaded", () => {
    console.log("Red Panda page loaded successfully!");

    const carousel = document.getElementById('funFactsCarousel');
    const inner = document.getElementById('carouselInner');

    // Function to update carousel background color
    const updateCarouselBg = () => {
      const activeItem = carousel.querySelector('.carousel-item.active');
      const bgColor = activeItem.getAttribute('data-bg');
      inner.style.backgroundColor = bgColor;
    };

    // Update when the page loads and every time the carousel slides
    updateCarouselBg();
    carousel.addEventListener('slid.bs.carousel', updateCarouselBg);
});
