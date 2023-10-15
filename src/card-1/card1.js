// итог
let restart1 = localStorage.getItem('restart1Info') || 0;
let result = document.getElementById('result-money')

let resMain = localStorage.getItem('resultMain') || 0;
result.innerHTML = `${resMain}`
// скидка
let discount = document.getElementById('discount-money')

let disMain = localStorage.getItem('dislult') || 0;
discount.innerHTML = `${disMain}`
// итог и скидка
let resultDiscount = document.getElementById('result-dis-money')
let resDisMain = localStorage.getItem('resultDislultMain') || 0 ;
resultDiscount.innerHTML = `${resDisMain}`
// реализация карточки при перезагрузке страницы
let cards1pro = document.querySelector('.productCard1')
if(localStorage.getItem('card1Img') ==  cards1pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card1Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend",localStorage.getItem('card1Img'))
  let Card1Rem = document.querySelector('.productCard1BtnNot')
          Card1Rem.addEventListener('click', function(){
                let card1Prod = [].forEach.call(document.querySelectorAll('.productCard1'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card1Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart1--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    localStorage.setItem('restart1Info', restart1) 
                    // начальная цена
                    resMain -= cardProduct.cards1.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards1.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards1.resDisMoney;
                    localStorage.setItem('resultDislultMain', resDisMain)
                    resultDiscount.innerHTML = `${resDisMain}`;

                    if(localStorage.getItem('resultMain') == 0){
                        localStorage.removeItem('resultMain')
                    }
                    if(localStorage.getItem('dislult') == 0){
                        localStorage.removeItem('dislult')
                    }
                    if(localStorage.getItem('resultDislultMain') == 0){
                        localStorage.removeItem('resultDislultMain')
                    }
                  });
            })}
}else if(document.documentElement.clientWidth < 768){
    if(localStorage.getItem('basInfo') == 5){
        setTimeout(() => {
            titlLim.style.display = "flex"
        },10)
        setTimeout(() =>{
            titlLim.style.display = "none"
        },3000)
    }
} 

if (document.documentElement.clientWidth > 768){
    if(localStorage.getItem('basInfo') <= 7){    
products.insertAdjacentHTML("beforeend", localStorage.getItem('card1Img'))
let Card1Rem = document.querySelector('.productCard1BtnNot')
      Card1Rem.addEventListener('click', function(){
            let card1Prod = [].forEach.call(document.querySelectorAll('.productCard1'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card1Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart1--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart1Info', restart1) 
               // начальная цена
               resMain -= cardProduct.cards1.resMoney;
               localStorage.setItem('resultMain', resMain)
               result.innerHTML = `${resMain}`
               
               // скидка
               disMain -= cardProduct.cards1.disMoney;
               localStorage.setItem('dislult', disMain)
               discount.innerHTML = `${disMain}`
               // итог
               resDisMain -= cardProduct.cards1.resDisMoney;
               localStorage.setItem('resultDislultMain', resDisMain)
               resultDiscount.innerHTML = `${resDisMain}`;

               if(localStorage.getItem('resultMain') == 0){
                localStorage.removeItem('resultMain')
            }
            if(localStorage.getItem('dislult') == 0){
                localStorage.removeItem('dislult')
            }
            if(localStorage.getItem('resultDislultMain') == 0){
                localStorage.removeItem('resultDislultMain')
            }
              });
        })}
}else if(document.documentElement.clientWidth > 768){
    if(localStorage.getItem('basInfo') == 7){
        setTimeout(() => {
            titlLim.style.display = "flex"
        },10)
        setTimeout(() =>{
            titlLim.style.display = "none"
        },3000)
}}
}



// }

// card1
// если корзина заполнена 

let titlLim = document.getElementById('titlLim')
// сама кнопка для добавления
let card1Btn = document.getElementById('card1Btn')
card1Btn.addEventListener('click', card1Buy)
// функция добавление и тд
function card1Buy(){
        // счетчик
        // если экран маленький
        
        if (document.documentElement.clientWidth < 768){
            if(bas < 5){
            if(restart1 < 1){
                restart1++;
               
                // счетчик
                bas++;  
                basket.innerHTML = `${bas}`
                localStorage.setItem('basInfo', bas) 
                localStorage.setItem('restart1Info', restart1) 
                //добавление карточки при перезагрузке 
                // добавление карточки (разметка)
                const img = `
                <div class ='productCard1'>
                <img src='${'images/card-1/card1.png'}' class='productCard1Img'>
                <h3 class='productCard1Title'>Смартфон Apple Iphone 14 Pro Max<br>256Gb, золотой</h3>
                <p class='productCard1Reslut'>135 000 ₽</p>
                <button class='productCard1BtnNot'>X</button>
                </div>`
                localStorage.setItem('card1Img',img)
                products.insertAdjacentHTML("beforeend",localStorage.getItem('card1Img'))
                // начальная цена
        resMain += cardProduct.cards1.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards1.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards1.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;  
                // кнопка для удаление
            let Card1Rem = document.querySelector('.productCard1BtnNot')
            Card1Rem.addEventListener('click', function(){
                let card1Prod = [].forEach.call(document.querySelectorAll('.productCard1'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card1Img')
                    // счетчик
                    bas--;
                    restart1--;   
                    basket.innerHTML = `${bas}`
                    localStorage.setItem('basInfo', bas)
                    localStorage.setItem('restart1Info', restart1) 
                    // начальная цена
                    resMain -= cardProduct.cards1.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards1.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards1.resDisMoney;
                    localStorage.setItem('resultDislultMain', resDisMain)
                    resultDiscount.innerHTML = `${resDisMain}`;
                  });
            }) 
            }
            }
            }
            if(document.documentElement.clientWidth < 768){
                if(bas == 5){
                    setTimeout(() => {
                        titlLim.style.display = "flex"
                    },10)
                    setTimeout(() =>{
                        titlLim.style.display = "none"
                    },3000)
                } 
            }
            if(document.documentElement.clientWidth > 768){
            if(bas < 7){
            if(restart1 < 1){
                restart1++
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart1Info', restart1)
        //добавление карточки при перезагрузке 
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard1'>
        <img src='${'images/card-1/card1.png'}' class='productCard1Img'>
        <h3 class='productCard1Title'>Смартфон Apple Iphone 14 Pro Max<br>256Gb, золотой</h3>
        <p class='productCard1Reslut'>135 000 ₽</p>
        <button class='productCard1BtnNot'>X</button>
        </div>`
        localStorage.setItem('card1Img',img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card1Img'))
        // начальная цена   
        resMain += cardProduct.cards1.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards1.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards1.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card1Rem = document.querySelector('.productCard1BtnNot')
    Card1Rem.addEventListener('click', function(){
        let card1Prod = [].forEach.call(document.querySelectorAll('.productCard1'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card1Img')
            // sessionStorage.removeItem('cards1img')
            // счетчик
            bas--;
            restart1--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart1Info', restart1) 
            // начальная цена
            resMain -= cardProduct.cards1.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards1.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards1.resDisMoney;
            localStorage.setItem('resultDislultMain', resDisMain)
            resultDiscount.innerHTML = `${resDisMain}`;
          });
 }) 
}
}
}
if(document.documentElement.clientWidth > 768){
if(bas == 7){
    setTimeout(() => {
        titlLim.style.display = "flex"
    },10)
    setTimeout(() =>{
        titlLim.style.display = "none"
    },3000)
}
}
}
