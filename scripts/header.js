
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



