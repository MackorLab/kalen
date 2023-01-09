
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {
            const productsStore = localStorageUtil.getProducts();
           
            
            
             let htmlCatalog = '';
             let sumCatalog = 0;
    
            
            
            
    
            CATALOG.forEach(({ id, name, price }) => {
                if (productsStore.indexOf(id) !== -1) {
                    htmlCatalog += `
                        <tr>
                            <td class="shopping-element__name">⚡️ ${name}</td> 
                            <td class="shopping-element__price">${datas}</td>
                        </tr>
                    `;
                    sumCatalog += price;
                 sumCat = sumCatalog;
                  ROOT_SHOPPING.innerHTML = htmlCatalog;   
                    
                }
            });
    
           
           
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


