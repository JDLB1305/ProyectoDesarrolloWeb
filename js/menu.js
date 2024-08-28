const menuIcon = document.getElementById('iconoMenu');
const navMenu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
});