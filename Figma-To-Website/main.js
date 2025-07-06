const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const navigationMenu = document.querySelector('.mobile-navigation');
mobileMenu.addEventListener('click',toggle);
mobileClose.addEventListener('click',toggle);
function toggle(){
    mobileMenu.classList.toggle('active');
    mobileClose.classList.toggle('active');
    navigationMenu.classList.toggle('active');
}