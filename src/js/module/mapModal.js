const mapModalTrigger = document.querySelector('.hide-map')
const mapModalWafer = document.getElementById('mapModal')
const mapModal = document.querySelector('.map-modal')

mapModalTrigger.addEventListener('click', () => {
    mapModalWafer.classList.add('active')
})

mapModalWafer.addEventListener('click', () => {
    mapModalWafer.classList.remove('active')
})
