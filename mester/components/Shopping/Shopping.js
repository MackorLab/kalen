
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {

  const html = `
                <div class="shopping-container">
              <a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/F3SMJxY/shopping-cart-remove-12830-1.png" alt="shopping-cart"></a>
                    
                    <table>
                        
                        <tr>
            
  <label class="container_sho" style = "display:block" >One
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho">Two
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho">Three
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho">Four
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
                        
                        
                            
                        </tr>
                    </table>
                   
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

