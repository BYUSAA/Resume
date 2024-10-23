const themeToggle = document.getElementById('theme-toggle');

// Check if the user has a preferred theme saved
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.checked = savedTheme === 'dark';
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Placeholder for future interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
});
