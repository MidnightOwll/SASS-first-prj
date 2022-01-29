const iconMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
const body = document.querySelector('body');

iconMenu.addEventListener('click',e => {
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});