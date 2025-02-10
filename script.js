document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if user has previously selected dark mode
    function initializeTheme() {
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            themeToggle.textContent = "🌙";
        } else {
            themeToggle.textContent = "🌞";
        }
    }

    // Toggle dark mode
    function toggleTheme() {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            themeToggle.textContent = "🌙";
        } else {
            localStorage.setItem("darkMode", "disabled");
            themeToggle.textContent = "🌞";
        }
    }

    // Mobile Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    // Close mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }

    
    // Event Listeners
    themeToggle.addEventListener("click", toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking any navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Initialize theme on page load
    initializeTheme();
});