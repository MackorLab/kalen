
var reloads;

    class Shopping {
        handlerClear() {
            ROOT_SHOPPING.innerHTML = '';
        }
    
        render() {
            
         clean_st = ``; 
         month;		
         dey;
         let urt_s;
         let dey_s;
         let vech_s;
         let chec_utr = "";
         let chec_dey = "";   
         let chec_vech = "";
         var html_vivod = ``; 
         var html_chek = ``;
         let month_vivod;   
          var htm_test = ``;
		
		
		
		
		
		
        
        
if (month == 1) {
month_vivod = "Января";
} else if (month == 2) {
month_vivod = "Февраля";
} else if (month == 3) {
month_vivod = "Марта";
} else if (month == 4) {
month_vivod = "Апреля";
} else if (month == 5) {
month_vivod = "Мая";
} else if (month == 6) {
month_vivod = "Июня";
} else if (month == 7) {
month_vivod = "Июля";
} else if (month == 8) {
month_vivod = "Августа";
} else if (month == 9) {
month_vivod = "Сентября";
} else if (month == 10) {
month_vivod = "Октября";
} else if (month == 11) {
month_vivod = "Ноября";
} else if (month == 12) {
month_vivod = "Декабря";
}else {
  
}
		
		
		
	
		
            
          var html_Name_tel = `
	  
	  

  <div class="shopping-container">
              <a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/WFkZT76/imgonline-com-ua-Resize-g-CNOFAAJBXK.png" alt="shopping-cart"></a>
              
	      
	       <div class="d-flex justify-content-center"> 
	       <p class="form_zag">${dey} - ${month_vivod}</p>
	      </div>
           <form id="form"  name='theForm'>
	   
	 
	   
	   
	   
<fieldset>
    
      
      <input id="name" name='name'>
      <p class="in_t_form">Имя(с заглавной буквы)</p>
      <input class="pop_phone" id="email" name='email' value="" onclick="clean_inp_email();">
       <p class="in_t_form">Email</p>
      
     <select id="country" class="my-select">
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/russia-flag.png" value="7">RUS +7</option>
      
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/azerbaijan-flag.png" value="994">AZE +994</option>
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/armenia-flag.png" value="374">ARM +374</option>
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/ukraine-flag.png" value="380">UKR +380</option>
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/belarus-flag.png" value="375">BEL +375</option>
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/armenia-flag.png" value="374">KAZ +374</option>
      <option data-img-src="https://v1.iconsearch.ru/uploads/icons/finalflags/16x16/kyrgyzstan-flag.png" value="996">KGZ +996</option>
      <option data-img-src="https://i.ibb.co/ZgZgr8b/free-icon-moldova-321210-1.png" value="373">MOL +373</option>
      
    </select>  
  
    
 <input class="pop_phone" id="phone" name='phone' value="" onclick="clean_inp();">
   <p class="in_t_form">Телефон(код страны уже заполнен)</p>

 





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
                   
        
                   
        <button type="button" id="submits" class="btn_send" onclick="alerted();">ЗАПИСАТЬСЯ</button>           
                   
                   
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
            
  <label class="container_sho" style = "display:${urt_s}">Удобное время для звонка 9 - 11 МСК
  <input type="radio" id="rid1" name="rate" value="rid1" checked="checked">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${dey_s}">Удобное время для звонка 13 - 15 МСК
  <input type="radio" id="rid2" name="rate" value="rid2">
  <span class="checkmark_sho"></span>
</label>
<label class="container_sho" style = "display:${vech_s}">Удобное время для звонка 17 - 19 МСК
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
    
  var html_vivod = `
  <div class="shopping-container">
              <a class="pop-icon" onclick="shoppingPage.handlerClear();"><img src="https://i.ibb.co/WFkZT76/imgonline-com-ua-Resize-g-CNOFAAJBXK.png" alt="shopping-cart"></a>
            
  <H3> К сожалению на на эту дату все забронированно! </H3>
  
  
  
  

 
  
  
  
  
  </div>
  
  
  `; 
    
    
    htm_test = `
    
      <div class="alert alert-danger" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  
    
    
    `;
    
    
    
  
    
    
}  
            
            
            
            
            
            
            
         

  const html = `
               
                  
                  
                  
                  
              


 
    
                  
                  
       ${html_vivod}           
                
                   
                   
                   
                   
         
            `;
    
            
            
            
            
             ROOT_SHOPPING.innerHTML = html;


           
           
           
           
 
           
           
           
           
           
          
        }
    };
    
    
    
    
    
    
    const shoppingPage = new Shopping();
    
var polit = 0;
var per = 0;

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
        console.log(forms.phone.value);
        console.log(forms.rid1.value);
         console.log(forms.rid2.value);
         console.log(forms.rid3.value);
       console.log(cech)
     
    


       
        
 function validateNames(names){
let regexs = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
 return regexs.test(names);
};     
  
 let names = forms.name.value;        
 
if (!validateNames(names)){
  console.log('Не соответствует');
}else{
  console.log('Соответствует');
}; 
        
        
        
        
        
 function validatePhone(phone){
let regex = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;
 return regex.test(phone);
};

 function validateEmail(emails){
let regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
 return regex.test(emails);
};	    
	    
	    
let selects = document.getElementById("country");
let phone_sel = selects.value;
console.log(phone_sel);  
        
        
let phone_num = forms.phone.value;    
let phone = phone_sel + phone_num;
   console.log(phone);     
if (!validatePhone(phone)){
  console.log('Не соответствует');
}else{
  console.log('Соответствует');
};     
  
        
 let emails = forms.email.value;    

   console.log(emails);     
if (!validateEmail(emails)){
  console.log('emai Не соответствует');
}else{
  console.log('emaiСоответствует');
};     
  
    
	    
	    
	    
        
        
  if (!validateNames(names)) {
      
      Toastify({
  text: "Некорректно заполнено поле Имя",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #e04343)",
  },
  onClick: function(){} // Callback after click
}).showToast();


      
 
     console.log('Не соответствует имя'); 
} else if (!validateEmail(emails)) {
    
    
       Toastify({
  text: "Некорректно заполнено поле Email",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #e04343)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    
    
  
    console.log('Не соответствует телефон');
} else if (!validatePhone(phone)) {
    
    
       Toastify({
  text: "Некорректно заполнено поле Телефон",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #e04343)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    
    
  
    console.log('Не соответствует телефон');
} else if (polit == 0) {
    
       Toastify({
  text: "Ознакомтесь с политикой",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #e04343)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    
  console.log('Не соответствует политика');
    
} else if (per == 0) {
    
    
       Toastify({
  text: "Ознакомтесь с Обработка",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #e04343)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    
  
    console.log('Не соответствует персонал');
} else {

    
       Toastify({
  text: "Спасибо, дпнные отправленны!",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #02b002, #4ce056)",
  },
  onClick: function(){} // Callback after click
}).showToast();
    
   
    
    
    
    
    
    
     console.log('Начало отправки в АП'); 
    
    spinnerPage.render();
fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vcsps + '&vxod=2&month=' + month + '&id_dey=' + id_dey + '&periud=' + cech,)
    .then(res => res.json())
    .then(body => {
		CATALOG = body.katalog;
            NASROYKI = body.set;
                       
                              
	                   ROOT_SHOPPING.innerHTML = '';
	
	
	render();  
	spinnerPage.handleClear();
                     
    })
    .catch(() => {
       
    })

     
    
   console.log('Успех, данные отправленны!');   
}      
        
        
      
        
        
        
        
        
        
        
        
        
        
        
        
        
    }

