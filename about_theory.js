document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Animate header on load
    setTimeout(() => {
        header.classList.add('active');
    }, 100);

    // --- Intersection Observer for Reveal on Scroll ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
});