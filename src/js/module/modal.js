const modalLoginBtn = document.querySelector('.log');
const modalLoginWafer = document.getElementById('modalLoginWafer')
const modalLogin = document.getElementById('modalLogin')
const modalRecoveryWafer = document.getElementById('modalRecoveryWafer')
const modalRecovery = document.getElementById('modalRecovery')
const modalSignUpWafer = document.getElementById('modalSignUpWafer')
const modalSignUp = document.getElementById('modalSignUp')

const showModalRecovery = document.querySelectorAll('.show-modal-recovery')
const showModalSignUp = document.querySelectorAll('.show-modal-sign-up')
const showModalLogin = document.querySelectorAll('.show-modal-login')

let modalActiveWafer
let modalActive


function showModal (modal, wafer) {
    wafer.classList.add('active')
    setTimeout(() => modal.style.transform = 'translateY(0)', 2)
}

function hideModal (modal, wafer) {
    modal.style.transform = 'translateY(-100px)'
    setTimeout(() =>  wafer.classList.remove('active'), 100)
}

modalLoginBtn.addEventListener('click', () => {
    showModal(modalLogin, modalLoginWafer)
})

modalLoginWafer.addEventListener('click', event => {
    if (event.target === modalLoginWafer) {
        hideModal(modalLogin, modalLoginWafer)
    }
})

modalRecoveryWafer.addEventListener('click', event => {
    if (event.target === modalRecoveryWafer) {
        hideModal(modalRecovery, modalRecoveryWafer)
    }
})

modalSignUpWafer.addEventListener('click', event => {
    if (event.target === modalSignUpWafer) {
        hideModal(modalSignUp, modalSignUpWafer)
    }
})



showModalRecovery.forEach(item => {
    item.addEventListener('click', () => {
        modalActiveWafer = document.querySelector('.modal__wafer.active')
        modalActive = document.querySelector(`.modal__wafer.active .modal`)

        hideModal(modalActive, modalActiveWafer)
        showModal(modalRecovery, modalRecoveryWafer)
    })
})

showModalLogin.forEach(item => {
    item.addEventListener('click', () => {
        modalActiveWafer = document.querySelector('.modal__wafer.active')
        modalActive = document.querySelector(`.modal__wafer.active .modal`)

        hideModal(modalActive, modalActiveWafer)
        showModal(modalLogin, modalLoginWafer)
    })
})

showModalSignUp.forEach(item => {
    item.addEventListener('click', () => {
        modalActiveWafer = document.querySelector('.modal__wafer.active')
        modalActive = document.querySelector(`.modal__wafer.active .modal`)

        hideModal(modalActive, modalActiveWafer)
        showModal(modalSignUp, modalSignUpWafer)
    })
})
