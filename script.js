// ====== VARIABLES ======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('nav a[href^="#"]');
const header = document.querySelector('header');

// ====== MENU MOBILE ======
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('slide-in'); // animation CSS
    });
}

// ====== SCROLL SMOOTH & FERMETURE MENU ======
navItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = header.offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Fermer le menu mobile après clic
        if (!navLinks.classList.contains('hidden')) {
            navLinks.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
});

// ====== HEADER STICKY & LIEN ACTIF ======
window.addEventListener('scroll', () => {
    // Header sticky
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Lien actif
    navItems.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            const sectionTop = section.offsetTop - header.offsetHeight - 10;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
