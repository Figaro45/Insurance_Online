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



// номер телефона
var InputMask = document.getElementById('phone');
var InputMask01 = document.getElementById('phone02');
var NameSurname = document.getElementById('name_surname');
var email = document.getElementById('email01');
let checbox01 = document.getElementById('checbox01');
const checkedValue = document.querySelectorAll('input[type="checkbox"]');
const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
const blockChecbox = document.querySelectorAll("block_checbox");


var phoneMask = IMask(InputMask, {
    mask: '+{7} (000) 000-00-00'
})

var phoneMask01 = IMask(InputMask01, {
    mask: '+{7} (000) 000-00-00'
})



// Проверка инпута Name
let regX = /[0-9|/><.?,"'{}()~[#@!#4$%^&*-_=+№]/g
NameSurname.oninput = function () {
    NameSurname.value = NameSurname.value.replace(regX, '')
}



// записывает значение из checkbox
const checkedValue01 = checkedValue.forEach(item => {
    item.addEventListener('change', function () {
        if (item.checked) {
            console.log(`${item.value}`);
        } else {
            return
        }
    });
})



// быстро реагирует на изменения в inpute
InputMask.onchange = function (item) {
    console.log(item.target.value);
}

InputMask01.onchange = function (item) {
    console.log(item.target.value)
}

NameSurname.onchange = function (item) {
    console.log(item.target.value)
}

email.onchange = function (item) {
    console.log(item.target.value)
}



// pop-up
function sending() {
    if (InputMask.value.length > 16) {
        popupOverlay.style.display = "block";
        document.body.classList.toggle('_lock');
        document.querySelector('.img_close').addEventListener('click', function () {
            popupOverlay.style.display = "none";
            document.body.classList.remove('_lock');
        });

    } else {
        document.querySelector('.input_text').classList.add('inputBorder');
        document.querySelector('.input_text').addEventListener('click', () => {
            document.querySelector('.input_text').classList.remove('inputBorder');
        });
    }
}



// три попыта
function clickBtnThree() {

    if (InputMask01.value.length > 16 && NameSurname.value.length >= 1 && email.value.length) {
        document.querySelector('.label_CASCO').innerHTML = 'КАСКО *';
        document.querySelector('.label_CTP').innerHTML = 'ОСАГО *';
        document.querySelector('.label_Life_insurance').innerHTML = 'Страхование жизни *';
        if (document.getElementById('CASCO').checked || document.getElementById('CTP').checked || document.getElementById('Life_insurance').checked) {
            popupOverlay.style.display = "block";
            document.body.classList.toggle('_lock');
            document.querySelector('.img_close').addEventListener('click', function () {
                popupOverlay.style.display = "none";
                document.body.classList.remove('_lock');
            });
            (function () {
                emailjs.init({
                    publicKey: "Dlv0Qtp0decbR-VcI",
                });
            })();
            document.getElementById('contact_form').addEventListener('submit', function (event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_ov6hp88', 'template_iybvou5', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }

    } else {
        document.querySelector('.label_CASCO').innerHTML = 'КАСКО *';
        document.querySelector('.label_CTP').innerHTML = 'ОСАГО *';
        document.querySelector('.label_Life_insurance').innerHTML = 'Страхование жизни *';
        InputMask01.setAttribute("required", '');
        NameSurname.setAttribute("required", '');
        email.setAttribute("required", '');
    }

}



