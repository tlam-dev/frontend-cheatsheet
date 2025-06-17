// Collapse
document.querySelectorAll(".section-title").forEach(title => {
    title.addEventListener("click", () => {
        title.nextElementSibling.classList.toggle("hidden");
    });
});

// Copy to Clipboard
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.getAttribute("data-copy"));
        alert("Copied!");
    });
});

// Load the theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
        document.getElementById("toggle-theme").innerText = savedTheme === "dark" ? "◎ Dark" : "◉ Light";
        document.getElementById("html-theme").innerText = "\"" + savedTheme + "\"";
    }
});

// Function to toggle between light and dark mode
function toggleTheme () {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    body.classList.toggle("dark-mode");
    document.getElementById("toggle-theme").innerText = newTheme === "dark" ? "◎ Dark" : "◉ Light";
    document.getElementById("html-theme").innerText = newTheme === "dark" ? "\"dark\"" : "\"light\"";
    localStorage.setItem("theme", newTheme);
}

// Function to change the button text on hover
function hoverTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    return currentTheme === "dark" ? "◉ Light" : "◎ Dark";
}

function currentTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    return currentTheme === "dark" ? "◎ Dark" : "◉ Light";
}

// For mobile view
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
   
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    const hamburger = document.getElementById('menu-toggle');
    if (currentTheme === "dark") {
        hamburger.style.color = (menu.style.display === 'flex') ? 'var(--font-color-black)' : 'var(--bar-color-dark)';
    }
    else {
        hamburger.style.color = (menu.style.display === 'flex') ? 'var(--font-color-white)' : 'var(--bar-color-light)';
    }
}

// Responsive nav menu logic
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('nav-menu').style.display = 'flex';
    }
    else if (window.innerWidth <= 768) {
         document.getElementById('nav-menu').style.display = 'none';
    }
});
