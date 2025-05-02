let scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '&uarr;'; 
scrollToTopButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'position-fixed', 'bottom-0', 'end-0', 'm-3');
scrollToTopButton.style.display = 'none'; 
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

ScrollReveal({
    reset: true, 
    distance: '60px',
    duration: 800,
    delay: 200
});