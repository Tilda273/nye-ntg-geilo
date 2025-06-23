
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
    console.log("Hamburger menu clicked");
    menuLinks.classList.toggle('active');
    menu.classList.toggle('active');
});
