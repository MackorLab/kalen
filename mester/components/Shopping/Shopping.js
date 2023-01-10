
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {
         let urt_s;
         let dey_s;
         let vech_s;
         let chec_utr = "";
         let chec_dey = "";   
         let chec_vech = "";
            var html_vivod = ``; 
          var html_chek = ``; 
            
          var html_Name_tel = `
  <div class="shopping-container">
              <a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/WFkZT76/imgonline-com-ua-Resize-g-CNOFAAJBXK.png" alt="shopping-cart"></a>
                             
           <form id="form"  name='theForm'>
<fieldset>
    
      <p> Имя</p>
      <input id="name" name='name'><br>
        <p> Телефон</p>
      <input id="telephone"><br>
      
      <br>
  </fieldset>
          
          
          `;    
            
         var html_but = `
                   
                   
                <div class="accordion"> 
   <div class="tab">
    <input type="checkbox" id="tab1" name="tab-group">
    <label onclick="polit_con();" for="tab1" class="tab-title">Политика конфиденциальности:</label> 
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
    <input onclick="per_dan();" type="checkbox" id="tab2" name="tab-group">
    <label for="tab2" class="tab-title">Обработка персональных данных:</label> 
    <section class="tab-content"> 
     Нет, на HTML5 по прежнему нельзя программировать, основным языком является JavaScript. 
     Так что в разговоре лучше не упоминать, что умеешь программировать на HTML5, засмеют.
    </section> 
   </div> 
  
  </div> 
  

   </form>          
                   
        
                   
        <button type="button" id="submits" class="btn btn-outline-warning" onclick="alerted();">Оформить заказ</button>           
                   
                   
                </div>
         
         
         `;    
            
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
            
            
            
            
            
            
            
            
            
            
if (dey_utr == 0) {
    html_chek = `
  
    <table>
                        
                        <tr>
            
  <label class="container_sho" style = "display:${urt_s}">Онлайн встреча 9 - 11 МСК
  <input type="radio" id="rid1" name="rate" value="rid1" checked="checked">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${dey_s}">Онлайн встреча 13 - 15 МСК
  <input type="radio" id="rid2" name="rate" value="rid2">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${vech_s}">Онлайн встреча 17 - 19 МСК
  <input type="radio" id="rid3" name="rate" value="rid3">
  <span class="checkmark_sho"></span>
</label>
           
                        
                            
                        </tr>
                    </table>
  
  
  
  
  `;
    
   html_vivod = html_Name_tel + html_chek + html_but;
 
} else if (dey_dey == 0) {
   
    html_chek = `
  
    <table>
                        
                        <tr>
            
  <label class="container_sho" style = "display:${urt_s}">Онлайн встреча 9 - 11 МСК
  <input type="radio" id="rid1" name="rate" value="rid1">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${dey_s}">Онлайн встреча 13 - 15 МСК
  <input type="radio" id="rid2" name="rate" value="rid2" checked="checked">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${vech_s}">Онлайн встреча 17 - 19 МСК
  <input type="radio" id="rid3" name="rate" value="rid3">
  <span class="checkmark_sho"></span>
</label>
           
                        
                            
                        </tr>
                    </table>
  
  
  
  
  `;
    
   html_vivod = html_Name_tel + html_chek + html_but;
    
  
} else if (dey_vech == 0) {
  
  html_chek = `
  
    <table>
                        
                        <tr>
            
  <label class="container_sho" style = "display:${urt_s}">Онлайн встреча 9 - 11 МСК
  <input type="radio" id="rid1" name="rate" value="rid1">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${dey_s}">Онлайн встреча 13 - 15 МСК
  <input type="radio" id="rid2" name="rate" value="rid2">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${vech_s}">Онлайн встреча 17 - 19 МСК
  <input type="radio" id="rid3" name="rate" value="rid3" checked="checked">
  <span class="checkmark_sho"></span>
</label>
           
                        
                            
                        </tr>
                    </table>
  
  
  
  
  `;
    
   html_vivod = html_Name_tel + html_chek + html_but;
  
} else {
    
 
}  
            
            
            
            
            
            
            
         

  const html = `
               
                  
                  
                  
                  
              


 
    
                  
                  
       ${html_vivod}           
                
                   
                   
                   
                   
         
            `;
    
             ROOT_SHOPPING.innerHTML = html;


           
           
           
           
 
           
           
           
           
           
          
        }
    };
    
    
    
    
    
    
    const shoppingPage = new Shopping();
    
var polit;
var per;

function polit_con(){
    polit = 1;
    console.log(polit)

};

function per_dan(){
    per = 1;
     console.log(per)
};









    function alerted(){
     //spinnerPage.render();
        
 var pro = localStorageUtil.getProducts(); 
     
     

       var forms = document.getElementById('form');  
        
        
    var cech = document.querySelector('input[name="rate"]:checked').value;
        
        console.log(forms.name.value);
        console.log(forms.telephone.value);
        console.log(forms.rid1.value);
         console.log(forms.rid2.value);
         console.log(forms.rid3.value);
       console.log(cech)
     
    
    

     
      
        
    }

