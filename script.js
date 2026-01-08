document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    hamburgerBtn.addEventListener('click', () => {
        // Toggle the 'active' class on the nav-links div
        navLinks.classList.toggle('active');
    });
});