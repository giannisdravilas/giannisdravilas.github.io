// JavaScript to toggle the dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = dropdownToggle.parentElement;

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        dropdown.classList.toggle('open'); // Toggle the 'open' class
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});