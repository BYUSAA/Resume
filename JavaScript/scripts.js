const themeToggle = document.getElementById('theme-toggle');
const autoTextElements = document.querySelectorAll('.auto-text');

// Check if the user has a preferred theme saved
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.checked = savedTheme === 'dark';
    adjustTextColor();
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    adjustTextColor();
});

function adjustTextColor() {
    // Get the background color of the body
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    
    // Convert the background color to RGB components
    const rgb = backgroundColor.match(/\d+/g);
    const r = parseInt(rgb[0], 10);
    const g = parseInt(rgb[1], 10);
    const b = parseInt(rgb[2], 10);
    
    // Calculate brightness using the formula (from 0 to 255)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // If brightness is less than 128, set text color to white, otherwise to black
    const textColor = brightness < 128 ? 'white' : 'black';
    
    // Apply the text color to all elements with the class 'auto-text'
    autoTextElements.forEach(element => {
        element.style.color = textColor;
    });
}

// Run on page load to adjust the text color
adjustTextColor();

// Placeholder for future interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
});
