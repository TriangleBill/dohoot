const searchBtn = document.querySelector('.header__search');
const loop = document.querySelector('.header__search-loop');

loop.addEventListener('click', () => {
    searchBtn.classList.toggle('active')
});


