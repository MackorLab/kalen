
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {
         let urt_s;
         let dey_s;
         let vech_s;
            
if (dey_utr == 0) {
 urt_s = "block";
} else {
 urt_s = "none"; 
}
  
if (dey_dey == 0) {
 dey_s = "block";
} else {
 dey_s = "none"; 
}            
 
if (dey_vech == 0) {
 vech_s = "block";
} else {
 vech_s = "none"; 
}            

  const html = `
                <div class="shopping-container">
              <a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/WFkZT76/imgonline-com-ua-Resize-g-CNOFAAJBXK.png" alt="shopping-cart"></a>
                    
                    <table>
                        
                        <tr>
            
  <label class="container_sho" style = "display:${urt_s}">Онлайн встреча 9 - 11 МСК
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${dey_s}">Онлайн встреча 13 - 15 МСК
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${vech_s}">Онлайн встреча 17 - 19 МСК
  <input type="radio" name="radio">
  <span class="checkmark_sho"></span>
</label>
           
                        
                            
                        </tr>
                    </table>
                   
                   
                   
                   
                   
                   
                   
                   
         
                   
                   
                   
                   
                </div>
            `;
    
             ROOT_SHOPPING.innerHTML = html;


           
           
           
           
<div class="accordion"> 
   <div class="tab">
    <input type="checkbox" id="tab1" name="tab-group">
    <label for="tab1" class="tab-title">Что такое HTML5?</label> 
    <section class="tab-content"> 
     <p>Под HTML5 обычно подразумевают два разных понятия:</p>
     <ul>
      <li>Это язык разметки документа, пришедший на смену HTML4 и XHTML.</li>
      <li>Это набор веб-технологий, позволяющий делать на сайте 
       всякие интересные штуки.</li>
     </ul>
    </section> 
   </div> 
   <div class="tab">
    <input type="checkbox" id="tab2" name="tab-group">
    <label for="tab2" class="tab-title">Можно ли программировать на HTML5?</label> 
    <section class="tab-content"> 
     Нет, на HTML5 по прежнему нельзя программировать, основным языком является JavaScript. 
     Так что в разговоре лучше не упоминать, что умеешь программировать на HTML5, засмеют.
    </section> 
   </div> 
   <div class="tab">
    <input type="checkbox" id="tab3" name="tab-group">
    <label for="tab3" class="tab-title">Чем HTML5 отличается от HTML4?</label>
    <section class="tab-content">
     В HTML5 добавлены новые элементы, вроде &lt;header&gt;, &lt;footer&gt;, 
     &lt;aside&gt;, &lt;article&gt;, появилась долгожданная поддержка аудио, 
     видео и многое другое.
    </section>
   </div>
  </div>   
           
           
           
           
           
           
          
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

