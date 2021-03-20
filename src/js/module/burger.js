const burgerMenu = document.querySelector('.burger')
const nav = document.querySelector('.nav')


console.log(burgerMenu)
burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active')
    nav.classList.toggle('active')
})

