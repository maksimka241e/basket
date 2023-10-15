// card8
// card7
/// реализация карточки при перезагрузке страницы
let cards8pro = document.querySelector('.productCard8')
if(localStorage.getItem('card8Img') ==  cards8pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card8Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card8Img'))
  let Card8Rem = document.querySelector('.productCard8BtnNot')
          Card8Rem.addEventListener('click', function(){
                let card8Prod = [].forEach.call(document.querySelectorAll('.productCard8'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card8Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart8--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    localStorage.setItem('restart8Info', restart8) 
                    // начальная цена
                    resMain -= cardProduct.cards8.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards8.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards8.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card8Img'))
let Card8Rem = document.querySelector('.productCard8BtnNot')
      Card8Rem.addEventListener('click', function(){
            let card8Prod = [].forEach.call(document.querySelectorAll('.productCard8'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card8Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart8--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart8Info', restart8) 
               // начальная цена
               resMain -= cardProduct.cards8.resMoney;
               localStorage.setItem('resultMain', resMain)
               result.innerHTML = `${resMain}`
               
               // скидка
               disMain -= cardProduct.cards8.disMoney;
               localStorage.setItem('dislult', disMain)
               discount.innerHTML = `${disMain}`
               // итог
               resDisMain -= cardProduct.cards8.resDisMoney;
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

let restart8 = localStorage.getItem('restart8Info') || 0;
// сама кнопка для добавления
let card8Btn = document.getElementById('card8Btn')
card8Btn.addEventListener('click', card8Buy)
// функция добавление и тд
function card8Buy(){
        // счетчик
        // если экран маленький
        
        if (document.documentElement.clientWidth < 768){
            if(bas < 5){
            if(restart8 < 1){
                restart8++;
               
                // счетчик
                bas++;  
                basket.innerHTML = `${bas}`
                localStorage.setItem('basInfo', bas) 
                localStorage.setItem('restart8Info', restart8) 
                //добавление карточки при перезагрузке 
                // добавление карточки (разметка)
                const img = `
        <div class ='productCard8'>
        <img src='${'images/card-8/card8.jpg'}' class='productCard8Img'>
        <h3 class='productCard8Title'>Lenovo ideaPad 3, 256ГБ<br>SSD, cерый</h3>
        <p class='productCard8Reslut'>45 000 ₽</p>
        <button class='productCard8BtnNot'>X</button>
        </div>`
                localStorage.setItem('card8Img',img)
                products.insertAdjacentHTML("beforeend",localStorage.getItem('card8Img'))
                // начальная цена
        resMain += cardProduct.cards8.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards8.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards8.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;  
                // кнопка для удаление
            let Card8Rem = document.querySelector('.productCard8BtnNot')
            Card8Rem.addEventListener('click', function(){
                let card8Prod = [].forEach.call(document.querySelectorAll('.productCard8'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card8Img')
                    // счетчик
                    bas--;
                    restart8--;   
                    basket.innerHTML = `${bas}`
                    localStorage.setItem('basInfo', bas)
                    localStorage.setItem('restart8Info', restart8) 
                    // начальная цена
                    resMain -= cardProduct.cards8.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards8.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards8.resDisMoney;
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
            if(restart8 < 1){
                restart8++
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart8Info', restart8)
        //добавление карточки при перезагрузке 
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard8'>
        <img src='${'images/card-8/card8.jpg'}' class='productCard8Img'>
        <h3 class='productCard8Title'>Lenovo ideaPad 3, 256ГБ<br>SSD, cерый</h3>
        <p class='productCard8Reslut'>45 000 ₽</p>
        <button class='productCard8BtnNot'>X</button>
        </div>`
        localStorage.setItem('card8Img',img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card8Img'))
        // начальная цена   
        resMain += cardProduct.cards8.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards8.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards8.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card8Rem = document.querySelector('.productCard8BtnNot')
    Card8Rem.addEventListener('click', function(){
        let card8Prod = [].forEach.call(document.querySelectorAll('.productCard8'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card8Img')
            // sessionStorage.removeItem('cards1img')
            // счетчик
            bas--;
            restart8--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart8Info', restart8) 
            // начальная цена
            resMain -= cardProduct.cards8.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards8.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards8.resDisMoney;
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