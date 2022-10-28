
// navBar scroll anim
const navBar = document.querySelector('.nav-bar-sticky-fixed');
let scroll = 0;
const HEADER_HEIGHT = 164;
window.addEventListener('scroll', () => {
    scroll = scrollY;
    if (scroll > HEADER_HEIGHT) {
        navBar.style.padding = '0px';
        navBar.style.boxShadow = '0px 2px 20px rgba(0,0,0,0.2)';
    } else {
        navBar.style.padding = '30px';
    }
})


// Mobile nav bar slide in on click
const mobileNavBar = document.querySelector('.mobile-nav-bar');
const hamburger = document.querySelector('.nav-bar .hamburger');
const mobileNavCloseBtn = document.querySelector('.mobile-nav-bar .close-button i');
const mobileOverlay = document.querySelector('.mobile-overlay');

hamburger.addEventListener('click', () => {
    mobileNavBar.style.transform = 'translateX(0)';
    mobileOverlay.style.display = 'block';
})
 mobileNavCloseBtn.addEventListener('click', () => {
    mobileNavBar.style.transform = 'translateX(-100%)';
    mobileOverlay.style.display = 'none';
 })