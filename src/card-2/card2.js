//card2
// реализация карточки при перезагрузке страницы
let cards2pro = document.querySelector('.productCard2')
if(localStorage.getItem('card2Img') ==  cards2pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card2Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card2Img'))
  let Card2Rem = document.querySelector('.productCard2BtnNot')
          Card2Rem.addEventListener('click', function(){
                let card2Prod = [].forEach.call(document.querySelectorAll('.productCard2'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card2Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart2--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    
                    localStorage.setItem('restart2Info', restart2) 
                    // начальная цена
                    resMain -= cardProduct.cards2.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards2.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards2.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card2Img'));
let Card2Rem = document.querySelector('.productCard2BtnNot')
      Card2Rem.addEventListener('click', function(){
            let card2Prod = [].forEach.call(document.querySelectorAll('.productCard2'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card2Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart2--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart2Info', restart2) 
               // начальная цена
               resMain -= cardProduct.cards2.resMoney;
               localStorage.setItem('resultMain', resMain)
               result.innerHTML = `${resMain}`
               
               // скидка
               disMain -= cardProduct.cards2.disMoney;
               localStorage.setItem('dislult', disMain)
               discount.innerHTML = `${disMain}`
               // итог
               resDisMain -= cardProduct.cards2.resDisMoney;
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
// сама кнопка для добавления
let restart2 = localStorage.getItem('restart2Info') || 0;
let card2Btn = document.getElementById('card2Btn')
card2Btn.addEventListener('click', card2Buy)
// функция добавление и тд
function card2Buy(){
if (document.documentElement.clientWidth < 768){
        if(bas < 5){
        if(restart2 < 1){
        // счетчик
        restart2++    
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas) 
        localStorage.setItem('restart2Info', restart2)
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard2'>
        <img src='${'images/card-2/card2.jpg'}' class='productCard2Img'>
        <h3 class='productCard2Title'>Смартфон Samsung Galaxy S22 Ultra<br> 256Gb, черный фантом</h3>
        <p class='productCard2Reslut'>90 000 ₽</p>
        <button class='productCard2BtnNot'>X</button>
        </div>`
        localStorage.setItem('card2Img', img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card2Img'))
        // начальная цена
        resMain += cardProduct.cards2.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards2.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards2.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`; 
        // кнопка для удаление
    let Card2Rem = document.querySelector('.productCard2BtnNot')
    Card2Rem.addEventListener('click', function(){
        let card2Prod = [].forEach.call(document.querySelectorAll('.productCard2'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card2Img')
            // счетчик
            bas--;
            restart2--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart2Info', restart2)
            // начальная цена
            resMain -= cardProduct.cards2.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards2.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards2.resDisMoney;
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
        if(restart2 < 1){
        restart2++    
        // счетчик
        bas++;  
        basket.innerHTML = `${bas}`
        localStorage.setItem('basInfo', bas) 
        localStorage.setItem('restart2Info', restart2)
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard2'>
        <img src='${'images/card-2/card2.jpg'}' class='productCard2Img'>
        <h3 class='productCard2Title'>Смартфон Samsung Galaxy S22 Ultra<br> 256Gb, черный фантом</h3>
        <p class='productCard2Reslut'>90 000 ₽</p>
        <button class='productCard2BtnNot'>X</button>
        </div>`
        localStorage.setItem('card2Img', img)
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card2Img'))
        // начальная цена
        resMain += cardProduct.cards2.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards2.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards2.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`; 

        

        // кнопка для удаление
    let Card2Rem = document.querySelector('.productCard2BtnNot')
    Card2Rem.addEventListener('click', function(){
        let card2Prod = [].forEach.call(document.querySelectorAll('.productCard2'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card2Img')
            // счетчик
            bas--;
            restart2--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart2Info', restart2) 
            // начальная цена
            resMain -= cardProduct.cards2.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards2.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards2.resDisMoney;
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