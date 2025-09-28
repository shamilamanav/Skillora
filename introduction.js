// Force scroll restoration to manual control
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
    // Always scroll to the top of the page on load
    window.scrollTo(0, 0);

    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    const splashLogo = document.querySelector('.splash-logo');
    const splashText = document.querySelector('.splash-text');
    
    const navigationEntries = performance.getEntriesByType("navigation");
    const navigationType = navigationEntries.length > 0 ? navigationEntries[0].type : '';

    const hasVisited = sessionStorage.getItem('hasVisitedIntro');

    if (hasVisited && navigationType === 'back_forward') {
        // --- If returning, run a staggered fade/slide-in for content ---
        splashScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
        document.body.classList.add('is-returning');

        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach((el, index) => {
            // Apply a staggered delay to each section's transition
            el.style.transitionDelay = `${index * 150}ms`;
            // Add the active class to trigger the animation
            el.classList.add('active');
        });

        handlePageExit(); 

    } else {
        // --- For first visits OR page refreshes, run the full splash screen ---
        
        sessionStorage.setItem('hasVisitedIntro', 'true');

        mainContent.classList.add('hidden');

        setTimeout(() => { splashLogo.style.animation = 'fadeInScale 1s forwards'; }, 300);
        setTimeout(() => { splashText.style.animation = 'slideInLeft 1s forwards'; }, 800);

        setTimeout(() => {
            splashScreen.classList.add('fade-out');
            splashScreen.addEventListener('transitionend', () => {
                splashScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.classList.add('visible');
                initScrollReveal();
                handlePageExit(); 
            }, { once: true });
        }, 3000);
    }

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        revealElements.forEach(el => observer.observe(el));
    }
    
    function handlePageExit() {
        const navLinks = document.querySelectorAll('a.nav-card');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const destination = link.href;
                document.body.classList.add('is-exiting');
                setTimeout(() => {
                    window.location.href = destination;
                }, 500); 
            });
        });
    }
});