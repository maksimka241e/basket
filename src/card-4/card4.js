// card4
// card3
//card2
// реализация карточки при перезагрузке страницы
let cards4pro = document.querySelector('.productCard4')
if(localStorage.getItem('card4Img') ==  cards4pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card4Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card4Img'))
  let Card4Rem = document.querySelector('.productCard4BtnNot')
          Card4Rem.addEventListener('click', function(){
                let card4Prod = [].forEach.call(document.querySelectorAll('.productCard4'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card4Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart4--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    
                    localStorage.setItem('restart4Info', restart4) 
                    // начальная цена
                    resMain -= cardProduct.cards4.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards4.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards4.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card4Img'))
let Card4Rem = document.querySelector('.productCard4BtnNot')
      Card4Rem.addEventListener('click', function(){
            let card4Prod = [].forEach.call(document.querySelectorAll('.productCard4'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card4Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart4--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart4Info', restart4) 
                 // начальная цена
                 resMain -= cardProduct.cards4.resMoney;
                 localStorage.setItem('resultMain', resMain)
                 result.innerHTML = `${resMain}`
                 
                 // скидка
                 disMain -= cardProduct.cards4.disMoney;
                 localStorage.setItem('dislult', disMain)
                 discount.innerHTML = `${disMain}`
                 // итог
                 resDisMain -= cardProduct.cards4.resDisMoney;
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
let restart4 = localStorage.getItem('restart4Info') || 0;
let card4Btn = document.getElementById('card4Btn')
card4Btn.addEventListener('click', card4Buy)
// функция добавление и тд
function card4Buy(){ 
         // если экран маленький
if (document.documentElement.clientWidth < 768){
        if(bas < 5){
        if(restart4 < 1){
        // счетчик
        restart4++    
        bas++;  
        basket.innerHTML = `${bas}`
        localStorage.setItem('basInfo', bas) 
        localStorage.setItem('restart4Info', restart4)
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard4'>
        <img src='${'images/card-4/card4.jpg'}' class='productCard4Img'>
        <h3 class='productCard4Title'>Смартфон Xiaomi Poco F4,<br>GT 128Gb, желтый</h3>
        <p class='productCard4Reslut'>54 000 ₽</p>
        <button class='productCard4BtnNot'>X</button>
        </div>`
        localStorage.setItem('card4Img',img)
        products.insertAdjacentHTML("beforeend",localStorage.getItem('card4Img'))
        // начальная цена
       resMain += cardProduct.cards4.resMoney;
       localStorage.setItem('resultMain', resMain)
       result.innerHTML = `${resMain}`
       
       // скидка
       disMain += cardProduct.cards4.disMoney;
       localStorage.setItem('dislult', disMain)
       discount.innerHTML = `${disMain}`
       // итог
       resDisMain += cardProduct.cards4.resDisMoney;
       localStorage.setItem('resultDislultMain', resDisMain)
       resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card4Rem = document.querySelector('.productCard4BtnNot')
    Card4Rem.addEventListener('click', function(){
        let card4Prod = [].forEach.call(document.querySelectorAll('.productCard4'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card4Img')
            // счетчик
            bas--;
            restart4--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart4Info', restart4) 
            // начальная цена
            resMain -= cardProduct.cards4.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards4.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards4.resDisMoney;
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
        if(restart4 < 1){
            restart4++
        // счетчик
        bas++;  
        basket.innerHTML = `${bas}`
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart4Info', restart4) 
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard4'>
        <img src='${'images/card-4/card4.jpg'}' class='productCard4Img'>
        <h3 class='productCard4Title'>Смартфон Xiaomi Poco F4,<br>GT 128Gb, желтый</h3>
        <p class='productCard4Reslut'>54 000 ₽</p>
        <button class='productCard4BtnNot'>X</button>
        </div>`
        localStorage.setItem('card4Img',img)
        products.insertAdjacentHTML("beforeend",localStorage.getItem('card4Img'))
       // начальная цена
       resMain += cardProduct.cards4.resMoney;
       localStorage.setItem('resultMain', resMain)
       result.innerHTML = `${resMain}`
       
       // скидка
       disMain += cardProduct.cards4.disMoney;
       localStorage.setItem('dislult', disMain)
       discount.innerHTML = `${disMain}`
       // итог
       resDisMain += cardProduct.cards4.resDisMoney;
       localStorage.setItem('resultDislultMain', resDisMain)
       resultDiscount.innerHTML = `${resDisMain}`;

        // кнопка для удаление
    let Card4Rem = document.querySelector('.productCard4BtnNot')
    Card4Rem.addEventListener('click', function(){
        let card4Prod = [].forEach.call(document.querySelectorAll('.productCard4'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card4Img')
            // счетчик
            bas--;
            restart4--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart4Info', restart4) 
            // начальная цена
            resMain -= cardProduct.cards4.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards4.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards4.resDisMoney;
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