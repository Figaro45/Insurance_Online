/*jshint esversion: 6 */
// меню бургер
const MenuBurger = document.querySelector('.burger_menu');
const nav = document.querySelector('.nav');

if (MenuBurger) {
    MenuBurger.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        nav.classList.toggle('_active');
        MenuBurger.classList.toggle('_active');
    });
}



//Прокрутка
const search_Scrolling = document.querySelectorAll('.search_Scrolling[data-goto]');

if (search_Scrolling.length > 0) {
    search_Scrolling.forEach(item => {
        item.addEventListener('click', onMenuClick);
    });
}

function onMenuClick(e) {
    const item_one = e.target;
    if (item_one.dataset.goto && document.querySelector(item_one.dataset.goto)) {
        const gotoBlock = document.querySelector(item_one.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if (MenuBurger.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            nav.classList.remove('_active');
            MenuBurger.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
    }
}


