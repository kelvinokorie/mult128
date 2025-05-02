document.addEventListener('DOMContentLoaded', function () {
    let scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '&uarr;';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });


    scrollToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


    ScrollReveal().reveal('section', {
        reset: true,
        distance: '60px',
        duration: 800,
        delay: 200
    });
});