const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav__links');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('mobile-nav-active');
});
