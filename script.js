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