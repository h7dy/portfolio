// Get elements
const lightModeToggle = document.getElementById('lightModeToggle');
const backToTopToggle = document.getElementById('backToTopToggle');

// Toggle light/dark mode
lightModeToggle.addEventListener('click', () => {
    // Toggle between dark and light mode
    document.body.classList.toggle('light-mode');
    
    // Change the button text
    if (document.body.classList.contains('light-mode')) {
        lightModeToggle.textContent = 'Toggle Dark Mode';
    } else {
        lightModeToggle.textContent = 'Toggle Light Mode';
    }
});

// Back to top button functionality
backToTopToggle.addEventListener('click', () => {
    window.scrollTo({ top: 0});
});

document.documentElement.style.scrollBehavior = "smooth"; // for smoother scrolling
