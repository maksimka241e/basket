// реализация карточки при перезагрузке страницы
        let cards6pro = document.querySelector('.productCard6')
        if(localStorage.getItem('card6Img') ==  cards6pro || null){
            console.log("добавлено");
        }else if(localStorage.getItem('card6Img') != ''){
            if (document.documentElement.clientWidth < 768){
                if(localStorage.getItem('basInfo') <= 5){
            products.insertAdjacentHTML("beforeend", localStorage.getItem('card6Img'))
          let Card6Rem = document.querySelector('.productCard6BtnNot')
                  Card6Rem.addEventListener('click', function(){
                        let card6Prod = [].forEach.call(document.querySelectorAll('.productCard6'),function(e){
                            e.parentNode.removeChild(e);
                            localStorage.removeItem('card6Img')
                            // счетчик
                            bas--;
                            localStorage.setItem('basInfo', bas)
                            restart6--;   
                            basket.innerHTML = `${localStorage.getItem('basInfo')}`
                            localStorage.setItem('restart6Info', restart6) 
                            // начальная цена
                            resMain -= cardProduct.cards6.resMoney;
                            localStorage.setItem('resultMain', resMain)
                            result.innerHTML = `${resMain}`
                            
                            // скидка
                            disMain -= cardProduct.cards6.disMoney;
                            localStorage.setItem('dislult', disMain)
                            discount.innerHTML = `${disMain}`
                            // итог
                            resDisMain -= cardProduct.cards6.resDisMoney;
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
        products.insertAdjacentHTML("beforeend", localStorage.getItem('card6Img'))
        let Card6Rem = document.querySelector('.productCard6BtnNot')
              Card6Rem.addEventListener('click', function(){
                    let card6Prod = [].forEach.call(document.querySelectorAll('.productCard6'),function(e){
                        e.parentNode.removeChild(e);
                        localStorage.removeItem('card6Img')
                        // счетчик
                        bas--;
                        localStorage.setItem('basInfo', bas)
                        restart6--;   
                        basket.innerHTML = `${localStorage.getItem('basInfo')}`
                        
                        localStorage.setItem('restart6Info', restart6) 
                       // начальная цена
                       resMain -= cardProduct.cards6.resMoney;
                       localStorage.setItem('resultMain', resMain)
                       result.innerHTML = `${resMain}`
                       
                       // скидка
                       disMain -= cardProduct.cards6.disMoney;
                       localStorage.setItem('dislult', disMain)
                       discount.innerHTML = `${disMain}`
                       // итог
                       resDisMain -= cardProduct.cards6.resDisMoney;
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
        
        let restart6 = localStorage.getItem('restart6Info') || 0;
        // сама кнопка для добавления
        let card6Btn = document.getElementById('card6Btn')
        card6Btn.addEventListener('click', card6Buy)
        // функция добавление и тд
        function card6Buy(){
                // счетчик
                // если экран маленький
                
                if (document.documentElement.clientWidth < 768){
                    if(bas < 5){
                    if(restart6 < 1){
                        restart6++;
                       
                        // счетчик
                        bas++;  
                        basket.innerHTML = `${bas}`
                        localStorage.setItem('basInfo', bas) 
                        localStorage.setItem('restart6Info', restart6) 
                        //добавление карточки при перезагрузке 
                        // добавление карточки (разметка)
                        const img = `
                        <div class ='productCard6'>
                        <img src='${'images/card-6/card6.jpg'}' class='productCard6Img'>
                        <h3 class='productCard6Title'>Ноутбук MSL Sword 15,<br>512ГБ SSD, белый</h3>
                        <p class='productCard6Reslut'>90 000 ₽</p>
                        <button class='productCard6BtnNot'>X</button>
                        </div>`
                        localStorage.setItem('card6Img',img)
                        products.insertAdjacentHTML("beforeend",localStorage.getItem('card6Img'))
                        // начальная цена
                resMain += cardProduct.cards6.resMoney;
                localStorage.setItem('resultMain', resMain)
                result.innerHTML = `${resMain}`
                
                // скидка
                disMain += cardProduct.cards6.disMoney;
                localStorage.setItem('dislult', disMain)
                discount.innerHTML = `${disMain}`
                // итог
                resDisMain += cardProduct.cards6.resDisMoney;
                localStorage.setItem('resultDislultMain', resDisMain)
                resultDiscount.innerHTML = `${resDisMain}`;  
                        // кнопка для удаление
                    let Card6Rem = document.querySelector('.productCard6BtnNot')
                    Card6Rem.addEventListener('click', function(){
                        let card6Prod = [].forEach.call(document.querySelectorAll('.productCard6'),function(e){
                            e.parentNode.removeChild(e);
                            localStorage.removeItem('card6Img')
                            // счетчик
                            bas--;
                            restart6--;   
                            basket.innerHTML = `${bas}`
                            localStorage.setItem('basInfo', bas)
                            localStorage.setItem('restart6Info', restart6) 
                            // начальная цена
                            resMain -= cardProduct.cards6.resMoney;
                            localStorage.setItem('resultMain', resMain)
                            result.innerHTML = `${resMain}`
                            
                            // скидка
                            disMain -= cardProduct.cards6.disMoney;
                            localStorage.setItem('dislult', disMain)
                            discount.innerHTML = `${disMain}`
                            // итог
                            resDisMain -= cardProduct.cards6.resDisMoney;
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
                    if(restart6 < 1){
                        restart6++
                bas++;  
                basket.innerHTML = `${bas}` 
                localStorage.setItem('basInfo', bas)
                localStorage.setItem('restart6Info', restart6)
                //добавление карточки при перезагрузке 
                // добавление карточки (разметка)
                const img = `
        <div class ='productCard6'>
        <img src='${'images/card-6/card6.jpg'}' class='productCard6Img'>
        <h3 class='productCard6Title'>Ноутбук MSL Sword 15,<br>512ГБ SSD, белый</h3>
        <p class='productCard6Reslut'>90 000 ₽</p>
        <button class='productCard6BtnNot'>X</button>
        </div>`
                localStorage.setItem('card6Img',img)
                products.insertAdjacentHTML("beforeend", localStorage.getItem('card6Img'))
                // начальная цена   
                resMain += cardProduct.cards6.resMoney;
                localStorage.setItem('resultMain', resMain)
                result.innerHTML = `${resMain}`
                
                // скидка
                disMain += cardProduct.cards6.disMoney;
                localStorage.setItem('dislult', disMain)
                discount.innerHTML = `${disMain}`
                // итог
                resDisMain += cardProduct.cards6.resDisMoney;
                localStorage.setItem('resultDislultMain', resDisMain)
                resultDiscount.innerHTML = `${resDisMain}`;
                // кнопка для удаление
            let Card6Rem = document.querySelector('.productCard6BtnNot')
            Card6Rem.addEventListener('click', function(){
                let card6Prod = [].forEach.call(document.querySelectorAll('.productCard6'),function(e){
                    e.parentNode.removeChild(e);
                    localStorage.removeItem('card6Img')
                    // sessionStorage.removeItem('cards1img')
                    // счетчик
                    bas--;
                    restart6--;
                    basket.innerHTML = `${bas}`
                    localStorage.setItem('basInfo', bas)
                    localStorage.setItem('restart6Info', restart6) 
                    // начальная цена
                    resMain -= cardProduct.cards6.resMoney;
                    localStorage.setItem('resultMain', resMain)
                    result.innerHTML = `${resMain}`
                    
                    // скидка
                    disMain -= cardProduct.cards6.disMoney;
                    localStorage.setItem('dislult', disMain)
                    discount.innerHTML = `${disMain}`
                    // итог
                    resDisMain -= cardProduct.cards6.resDisMoney;
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
        