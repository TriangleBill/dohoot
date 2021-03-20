const ratingItemsList = document.querySelectorAll('.rating--view .rating__item');

const ratingItemsArr = Array.prototype.slice.call(ratingItemsList);

ratingItemsArr.forEach((item) => {
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    });
});
