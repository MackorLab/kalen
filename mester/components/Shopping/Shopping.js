
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {
            const productsStore = localStorageUtil.getProducts();
           
            
            
             let htmlCatalog = '';
             let sumCatalog = 0;
    
            
            
            
    
            datas.forEach(({ dey_utr, dey_dey, dey_vech }) => {
                
                    htmlCatalog += `
                        <tr>
                            <td class="shopping-element__name">⚡️ ${dey_dey}</td> 
                            <td class="shopping-element__price">${dey_vech}</td>
                            <td class="shopping-element__price">${dey_vech}</td>
                        </tr>
                    `;
                    sumCatalog += dey_utr;
                 sumCat = dey_dey;
                   
                    
              
            });
    
           
           
               

  const html = `
  <div class="shopping-container">
<a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/F3SMJxY/shopping-cart-remove-12830-1.png" alt="shopping-cart"></a>
      
      <table>
          ${htmlCatalog}
          <tr>
              <td class="shopping-element__name">💥 Сумма:</td>
              <td class="shopping-element__price"> ${dey_vech}</td>
          </tr>
      </table>
      <button type="button" id="submits" class="btn btn-outline-warning" onclick="alerted();">Оформить заказ</button>
  </div>
`;

ROOT_SHOPPING.innerHTML = html;


           
           
           
           
           
           
           
           
           
          
        }
    };
    
    
    
    
    
    
    const shoppingPage = new Shopping();
    
    
    function alerted(){
     spinnerPage.render();
        
 var pro = localStorageUtil.getProducts(); 
     
       //console.log(pro)
       //console.log(sumCat)
     
    
    
fetch('https://skyauto.me/cllbck/' + p + '?api=1&sid=' + vkid + '&price=' + sumCat, {  
  method: 'post', 
  redirect: 'manual',   
  headers: {  
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
  },  
  body: JSON.stringify(pro)
})
.then((response) => response.text())
.then((text) => {
  //console.log(text)
   localStorage.clear() 
   document.getElementById("header").innerHTML = "";
    document.getElementById("products").innerHTML = "";
    document.getElementById("shopping").innerHTML = "";
    document.getElementById("spinner").innerHTML = "";
    document.getElementById("error").innerHTML = ""; 
    document.getElementById("btns").innerHTML = "";
   
    
  location.replace(text);  
  spinnerPage.handleClear();  
});
     
      
        
    }


