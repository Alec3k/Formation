// MENU BURGER ---------------------------------------------------------
const menuBurger = document.querySelector('.menu-burger');
const navBar = document.querySelector('nav');

const topLine = document.querySelector('.top-line');
const middleLine = document.querySelector('.middle-line');
const downLine = document.querySelector('.down-line');

const lineSeparation = document.querySelector('.line-separation');

menuBurger.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
    topLine.classList.toggle('top-line-active');
    middleLine.classList.toggle('middle-line-active');
    downLine.classList.toggle('down-line-active');
    lineSeparation.classList.toggle('line-separation-active');
})