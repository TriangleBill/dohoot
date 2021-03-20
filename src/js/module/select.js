const selectHeader = document.querySelectorAll('.select__header')
const selectItem = document.querySelectorAll('.select__item')


selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
})

selectItem.forEach(item => {
    item.addEventListener('click', function () {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__header')
        currentText.innerText = text
        select.classList.remove('active')
    })
})

function selectToggle() {
    this.parentElement.classList.toggle('active')
}
