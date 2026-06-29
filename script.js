// --- Mobile Menu Toggle & Scroll Lock Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const icon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
    // Toggle the menu visibility
    navMenu.classList.toggle('active');

    // Toggle scroll lock on the body
    document.body.classList.toggle('no-scroll');

    // Change icon between bars and close (X)
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// --- Scroll Animation Logic ---
const navbar = document.getElementById('myNavbar');

window.addEventListener('scroll', () => {
    // Check if the page is scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// --- Footer Scroll Animation ---
const footerElements = document.querySelectorAll('.footer-fade-in');

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve once animation is triggered for better performance
            footerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

footerElements.forEach(element => {
    footerObserver.observe(element);
});