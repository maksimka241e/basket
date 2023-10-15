// реализуем карточку
var products = document.getElementById('products')

// счетчик и добавление в корзину
let bas =  localStorage.getItem('basInfo') || 0;
// счетчик
let basket = document.getElementById('basket')
basket.innerHTML = `${bas}`
// кнопка
let basketBtn = document.getElementById('basket-btn')
// basket
let divBask = document.getElementById('divBask')
let baskNo = document.getElementById('bakset-no')
// basket 
basketBtn.addEventListener('click', baskets)
function baskets(){
    divBask.style.display = "flex"
}
// закрывать корзину
baskNo.addEventListener("click", basketsNo)
function basketsNo(){
    divBask.style.display = "none"
}

