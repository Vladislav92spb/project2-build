const menuBtn = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.menu');
const html = document.querySelector('html');
const menuClose = menu.querySelector('.menu__close');
const menuLinks = menu.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.add('menu--open');
  html.classList.add('no-scroll');
});

menuClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.remove('menu--open');
  html.classList.remove('no-scroll');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('menu__tel' ))
    {menu.classList.remove('menu--open');
    html.classList.remove('no-scroll');}
    
  });
});