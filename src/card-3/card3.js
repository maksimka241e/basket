// card3
//card2
// реализация карточки при перезагрузке страницы
let cards3pro = document.querySelector('.productCard3')
if(localStorage.getItem('card3Img') ==  cards3pro || null){
    console.log("добавлено");
}else if(localStorage.getItem('card3Img') != ''){
    if (document.documentElement.clientWidth < 768){
        if(localStorage.getItem('basInfo') <= 5){
    products.insertAdjacentHTML("beforeend", localStorage.getItem('card3Img'))
  let Card3Rem = document.querySelector('.productCard3BtnNot')
          Card3Rem.addEventListener('click', function(){
                let card3Prod = [].forEach.call(document.querySelectorAll('.productCard3'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card3Img')
                    // счетчик
                    bas--;
                    localStorage.setItem('basInfo', bas)
                    restart3--;   
                    basket.innerHTML = `${localStorage.getItem('basInfo')}`
                    
                    localStorage.setItem('restart3Info', restart3) 
                     // начальная цена
                     resMain -= cardProduct.cards3.resMoney;
                     localStorage.setItem('resultMain', resMain)
                     result.innerHTML = `${resMain}`
                     
                     // скидка
                     disMain -= cardProduct.cards3.disMoney;
                     localStorage.setItem('dislult', disMain)
                     discount.innerHTML = `${disMain}`
                     // итог
                     resDisMain -= cardProduct.cards3.resDisMoney;
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
products.insertAdjacentHTML("beforeend", localStorage.getItem('card3Img'))
let Card3Rem = document.querySelector('.productCard3BtnNot')
      Card3Rem.addEventListener('click', function(){
            let card3Prod = [].forEach.call(document.querySelectorAll('.productCard3'),function(e){
                e.parentNode.removeChild(e);
                localStorage.removeItem('card3Img')
                // счетчик
                bas--;
                localStorage.setItem('basInfo', bas)
                restart3--;   
                basket.innerHTML = `${localStorage.getItem('basInfo')}`
                
                localStorage.setItem('restart3Info', restart3) 
                // начальная цена
                resMain -= cardProduct.cards3.resMoney;
                localStorage.setItem('resultMain', resMain)
                result.innerHTML = `${resMain}`
                
                // скидка
                disMain -= cardProduct.cards3.disMoney;
                localStorage.setItem('dislult', disMain)
                discount.innerHTML = `${disMain}`
                // итог
                resDisMain -= cardProduct.cards3.resDisMoney;
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
let restart3 = localStorage.getItem('restart3Info') || 0;
let card3Btn = document.getElementById('card3Btn')
card3Btn.addEventListener('click', card3Buy)
// функция добавление и тд
function card3Buy(){
         // если экран маленький
if (document.documentElement.clientWidth < 768){
        if(bas < 5){
        if(restart3 < 1){
        // счетчик
        restart3++
        bas++;  
        basket.innerHTML = `${bas}` 
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart3Info', restart3)
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard3'>
        <img src='${'images/card-3/card3.jpg'}' class='productCard3Img'>
        <h3 class='productCard3Title'>Смартфон Xiaomi 12x 256Gb,<br>фиолетовый</h3>
        <p class='productCard3Reslut'>72 000 ₽</p>
        <button class='productCard3BtnNot'>X</button>
        </div>`
        localStorage.setItem('card3Img',img)
        products.insertAdjacentHTML("beforeend",localStorage.getItem('card3Img'))
        // начальная цена
        resMain += cardProduct.cards3.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards3.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards3.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`;
        // кнопка для удаление
    let Card3Rem = document.querySelector('.productCard3BtnNot')
    Card3Rem.addEventListener('click', function(){
        let card3Prod = [].forEach.call(document.querySelectorAll('.productCard3'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card3Img')
            // счетчик
            bas--;
            restart3--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart3Info', restart3) 
         // начальная цена
         resMain -= cardProduct.cards3.resMoney;
         localStorage.setItem('resultMain', resMain)
         result.innerHTML = `${resMain}`
         
         // скидка
         disMain -= cardProduct.cards3.disMoney;
         localStorage.setItem('dislult', disMain)
         discount.innerHTML = `${disMain}`
         // итог
         resDisMain -= cardProduct.cards3.resDisMoney;
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
        if(restart3 < 1){
            restart3++     
        // счетчик
        bas++;  
        basket.innerHTML = `${bas}`
        localStorage.setItem('basInfo', bas)
        localStorage.setItem('restart3Info', restart3)
        // добавление карточки (разметка)
        const img = `
        <div class ='productCard3'>
        <img src='${'images/card-3/card3.jpg'}' class='productCard3Img'>
        <h3 class='productCard3Title'>Смартфон Xiaomi 12x 256Gb,<br>фиолетовый</h3>
        <p class='productCard3Reslut'>72 000 ₽</p>
        <button class='productCard3BtnNot'>X</button>
        </div>`
        localStorage.setItem('card3Img',img)
        products.insertAdjacentHTML("beforeend",localStorage.getItem('card3Img'))
        // начальная цена
        resMain += cardProduct.cards3.resMoney;
        localStorage.setItem('resultMain', resMain)
        result.innerHTML = `${resMain}`
        
        // скидка
        disMain += cardProduct.cards3.disMoney;
        localStorage.setItem('dislult', disMain)
        discount.innerHTML = `${disMain}`
        // итог
        resDisMain += cardProduct.cards3.resDisMoney;
        localStorage.setItem('resultDislultMain', resDisMain)
        resultDiscount.innerHTML = `${resDisMain}`; 
        // кнопка для удаление
    let Card3Rem = document.querySelector('.productCard3BtnNot')
    Card3Rem.addEventListener('click', function(){
        let card3Prod = [].forEach.call(document.querySelectorAll('.productCard3'),function(e){
            e.parentNode.removeChild(e);
            localStorage.removeItem('card3Img')
            // счетчик
            bas--;
            restart3--;
            basket.innerHTML = `${bas}`
            localStorage.setItem('basInfo', bas)
            localStorage.setItem('restart3Info', restart3)
            // начальная цена
            resMain -= cardProduct.cards3.resMoney;
            localStorage.setItem('resultMain', resMain)
            result.innerHTML = `${resMain}`
            
            // скидка
            disMain -= cardProduct.cards3.disMoney;
            localStorage.setItem('dislult', disMain)
            discount.innerHTML = `${disMain}`
            // итог
            resDisMain -= cardProduct.cards3.resDisMoney;
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