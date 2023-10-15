// card7
/// реализация карточки при перезагрузке страницы
let cards7pro = document.querySelector('.productCard7')
if(localStorage.getItem('card7Img') ==  cards7pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card7Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card7Img'))
  let Card7Rem = document.querySelector('.productCard7BtnNot')
          Card7Rem.addEventListener('click', function(){
                let card7Prod = [].forEach.call(document.querySelectorAll('.productCard7'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card7Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart7--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    localStorage.setItem('restart7Info', restart7) 
                    // начальная цена
                    resMain -= cardProduct.cards7.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards7.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards7.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card7Img'))
let Card7Rem = document.querySelector('.productCard7BtnNot')
      Card7Rem.addEventListener('click', function(){
            let card7Prod = [].forEach.call(document.querySelectorAll('.productCard7'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card7Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart7--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart7Info', restart7) 
               // начальная цена
               resMain -= cardProduct.cards7.resMoney;
               localStorage.setItem('resultMain', resMain)
               result.innerHTML = `${resMain}`
               
               // скидка
               disMain -= cardProduct.cards7.disMoney;
               localStorage.setItem('dislult', disMain)
               discount.innerHTML = `${disMain}`
               // итог
               resDisMain -= cardProduct.cards7.resDisMoney;
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

let restart7 = localStorage.getItem('restart7Info') || 0;
// сама кнопка для добавления
let card7Btn = document.getElementById('card7Btn')
card7Btn.addEventListener('click', card7Buy)
// функция добавление и тд
function card7Buy(){
        // счетчик
        // если экран маленький
        
        if (document.documentElement.clientWidth < 768){
            if(bas < 5){
            if(restart7 < 1){
                restart7++;
               
                // счетчик
                bas++;  
                basket.innerHTML = `${bas}`
                localStorage.setItem('basInfo', bas) 
                localStorage.setItem('restart7Info', restart7) 
                //добавление карточки при перезагрузке 
                // добавление карточки (разметка)
                const img = `
        <div class ='productCard7'>
        <img src='${'images/card-7/card7.jpg'}' class='productCard7Img'>
        <h3 class='productCard7Title'>Ноутбук Acer Swift 3,<br>512 ГБ SSD, cерый </h3>
        <p class='productCard7Reslut'>72 000 ₽</p>
        <button class='productCard7BtnNot'>X</button>
        </div>`
                localStorage.setItem('card7Img',img)
                products.insertAdjacentHTML("beforeend",localStorage.getItem('card7Img'))
                // начальная цена
        resMain += cardProduct.cards7.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards7.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards7.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;  
                // кнопка для удаление
            let Card7Rem = document.querySelector('.productCard7BtnNot')
            Card7Rem.addEventListener('click', function(){
                let card7Prod = [].forEach.call(document.querySelectorAll('.productCard7'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card7Img')
                    // счетчик
                    bas--;
                    restart7--;   
                    basket.innerHTML = `${bas}`
                    localStorage.setItem('basInfo', bas)
                    localStorage.setItem('restart7Info', restart7) 
                    // начальная цена
                    resMain -= cardProduct.cards7.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards7.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards7.resDisMoney;
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
            if(restart7 < 1){
                restart7++
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart7Info', restart7)
        //добавление карточки при перезагрузке 
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard7'>
        <img src='${'images/card-7/card7.jpg'}' class='productCard7Img'>
        <h3 class='productCard7Title'>Ноутбук Acer Swift 3,<br>512 ГБ SSD, cерый </h3>
        <p class='productCard7Reslut'>72 000 ₽</p>
        <button class='productCard7BtnNot'>X</button>
        </div>`
        localStorage.setItem('card7Img',img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card7Img'))
        // начальная цена   
        resMain += cardProduct.cards7.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards7.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards7.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card7Rem = document.querySelector('.productCard7BtnNot')
    Card7Rem.addEventListener('click', function(){
        let card7Prod = [].forEach.call(document.querySelectorAll('.productCard7'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card7Img')
            // sessionStorage.removeItem('cards1img')
            // счетчик
            bas--;
            restart7--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart7Info', restart7) 
            // начальная цена
            resMain -= cardProduct.cards7.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards7.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards7.resDisMoney;
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