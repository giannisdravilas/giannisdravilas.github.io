// Wrap in DOMContentLoaded to ensure the button exists before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    // Helper function to update the icon based on the current theme
    const updateIcon = (isDark) => {
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    // 1. Initial Icon Setup
    // We check documentElement because the anti-flash script 
    // already applied the class there if needed.
    const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
    updateIcon(isCurrentlyDark);

    // 2. Click Event Listener
    themeToggle.addEventListener('click', () => {
        // Toggle the class on documentElement
        const isDark = document.documentElement.classList.toggle('dark-mode');
        
        // Save the user's preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update the button icon
        updateIcon(isDark);
    });
});