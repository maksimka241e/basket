// реализация карточки при перезагрузке страницы
let cards5pro = document.querySelector('.productCard5')
if(localStorage.getItem('card5Img') ==  cards5pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card5Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card5Img'))
  let Card5Rem = document.querySelector('.productCard5BtnNot')
          Card5Rem.addEventListener('click', function(){
                let card5Prod = [].forEach.call(document.querySelectorAll('.productCard5'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card5Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart5--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    localStorage.setItem('restart5Info', restart5) 
                    // начальная цена
                    resMain -= cardProduct.cards5.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards5.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards5.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card5Img'))
let Card5Rem = document.querySelector('.productCard5BtnNot')
      Card5Rem.addEventListener('click', function(){
            let card5Prod = [].forEach.call(document.querySelectorAll('.productCard5'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card5Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart5--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart5Info', restart5) 
               // начальная цена
               resMain -= cardProduct.cards5.resMoney;
               localStorage.setItem('resultMain', resMain)
               result.innerHTML = `${resMain}`
               
               // скидка
               disMain -= cardProduct.cards5.disMoney;
               localStorage.setItem('dislult', disMain)
               discount.innerHTML = `${disMain}`
               // итог
               resDisMain -= cardProduct.cards5.resDisMoney;
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

let restart5 = localStorage.getItem('restart5Info') || 0;
// сама кнопка для добавления
let card5Btn = document.getElementById('card5Btn')
card5Btn.addEventListener('click', card5Buy)
// функция добавление и тд
function card5Buy(){
        // счетчик
        // если экран маленький
        
        if (document.documentElement.clientWidth < 768){
            if(bas < 5){
            if(restart5 < 1){
                restart5++;
               
                // счетчик
                bas++;  
                basket.innerHTML = `${bas}`
                localStorage.setItem('basInfo', bas) 
                localStorage.setItem('restart5Info', restart5) 
                //добавление карточки при перезагрузке 
                // добавление карточки (разметка)
                const img = `
            <div class ='productCard5'>
            <img src='${'images/card-5/card5.jpg'}' class='productCard5Img'>
            <h3 class='productCard5Title'>Ноутбук Apple MacbBook Pro<br>10, 512ГБ SSD, серый космос</h3>
            <p class='productCard5Reslut'>270 000 ₽</p>
            <button class='productCard5BtnNot'>X</button>
            </div>`
                localStorage.setItem('card5Img',img)
                products.insertAdjacentHTML("beforeend",localStorage.getItem('card5Img'))
                // начальная цена
        resMain += cardProduct.cards5.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards5.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards5.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;  
                // кнопка для удаление
            let Card5Rem = document.querySelector('.productCard5BtnNot')
            Card5Rem.addEventListener('click', function(){
                let card5Prod = [].forEach.call(document.querySelectorAll('.productCard5'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card5Img')
                    // счетчик
                    bas--;
                    restart5--;   
                    basket.innerHTML = `${bas}`
                    localStorage.setItem('basInfo', bas)
                    localStorage.setItem('restart5Info', restart5) 
                    // начальная цена
                    resMain -= cardProduct.cards5.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards5.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards5.resDisMoney;
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
            if(restart5 < 1){
                restart5++
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart5Info', restart5)
        //добавление карточки при перезагрузке 
        // добавление карточки (разметка)
        const img = `
            <div class ='productCard5'>
            <img src='${'images/card-5/card5.jpg'}' class='productCard5Img'>
            <h3 class='productCard5Title'>Ноутбук Apple MacbBook Pro<br>10, 512ГБ SSD, серый космос</h3>
            <p class='productCard5Reslut'>270 000 ₽</p>
            <button class='productCard5BtnNot'>X</button>
            </div>`
        localStorage.setItem('card5Img',img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card5Img'))
        // начальная цена   
        resMain += cardProduct.cards5.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards5.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards5.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card5Rem = document.querySelector('.productCard5BtnNot')
    Card5Rem.addEventListener('click', function(){
        let card5Prod = [].forEach.call(document.querySelectorAll('.productCard5'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card5Img')
            // sessionStorage.removeItem('cards1img')
            // счетчик
            bas--;
            restart5--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart5Info', restart5) 
            // начальная цена
            resMain -= cardProduct.cards5.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards5.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards5.resDisMoney;
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
