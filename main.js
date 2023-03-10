const trimenu = document.querySelector('.trimenu');
const mobileMenu = document.querySelector('.mobile-menu')

trimenu.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
});

