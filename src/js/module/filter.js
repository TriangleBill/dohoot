const category = document.querySelector('#category');
const categoryItems = document.querySelectorAll('.category');

category.addEventListener('click', (event) => {
    const target = event.target;
    categoryItems.forEach(item => item.classList.remove('active'));
    target.classList.add('active');
});
