// Code to handle the mobile menu button click event
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('translate-x-full');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});