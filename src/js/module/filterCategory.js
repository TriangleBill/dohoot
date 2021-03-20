const filter = document.querySelectorAll('.filter-icon')
const filterAgency = document.querySelector('.filter-agency')
const filterPerson = document.querySelector('.filter-person')
const filterEducation = document.querySelector('.filter-education')
const filterMusic = document.querySelector('.filter-music')
const filterTrans = document.querySelector('.filter-trans')

const card = document.querySelectorAll('.card')
const cardLong = document.querySelectorAll('.card__long')

const cardAgency = document.querySelectorAll('.card--agency')
const cardPerson = document.querySelectorAll('.card--person')
const cardEducation = document.querySelectorAll('.card--education')
const cardMusic = document.querySelectorAll('.card--music')
const cardTrans = document.querySelectorAll('.card--trans')

filterAgency.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        filter.forEach(item => item.classList.remove('active'))
        hideCardFilter()
    } else {
        filter.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        showCardFilter(cardAgency)
    }
})

filterPerson.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        filter.forEach(item => item.classList.remove('active'))
        hideCardFilter()
    } else {
        filter.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        showCardFilter(cardPerson)
    }
})

filterEducation.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        filter.forEach(item => item.classList.remove('active'))
        hideCardFilter()
    } else {
        filter.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        showCardFilter(cardEducation)
    }
})

filterMusic.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        filter.forEach(item => item.classList.remove('active'))
        hideCardFilter()
    } else {
        filter.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        showCardFilter(cardMusic)
    }
})

filterTrans.addEventListener('click', function () {
    if (this.classList.contains('active')) {
        filter.forEach(item => item.classList.remove('active'))
        hideCardFilter()
    } else {
        filter.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
        showCardFilter(cardTrans)
    }
})



function showCardFilter(cardFilter) {
    card.forEach(item => item.style.display = 'none')
    cardLong.forEach(item => item.style.display = 'none')
    cardFilter.forEach(item => item.style.display = 'block')
}

function hideCardFilter() {
    card.forEach(item => {
        item.style.display = 'block'
    })
}
