class Header {
    handlerOpenShoppingPage() {
        
        shoppingPage.render();
    }

    render() {
        let avat_fon_color = [NASROYKI[0].avat_fon_color]
        let avat_img = [NASROYKI[0].avat_img]
        let avat_img_b_c = [NASROYKI[0].avat_img_b_c]
        let avat_img_b_s = [NASROYKI[0].avat_img_b_s]
        let avat_name = [NASROYKI[0].avat_name]
        let avat_text = [NASROYKI[0].avat_text]
        let month = [CATALOG[0].month];
        let month_vivod;
        let avat_s_name = [NASROYKI[0].avat_s_name]
        let avat_s_text = [NASROYKI[0].avat_s_name]
        let avat_s_data = [NASROYKI[0].avat_s_name]
        
if (month == 1) {
month_vivod = "Январь";
} else if (month == 2) {
month_vivod = "Февраль";
} else if (month == 3) {
month_vivod = "Март";
} else if (month == 4) {
month_vivod = "Апрель";
} else if (month == 5) {
month_vivod = "Май";
} else if (month == 6) {
month_vivod = "Июнь";
} else if (month == 7) {
month_vivod = "Июль";
} else if (month == 8) {
month_vivod = "Август";
} else if (month == 9) {
month_vivod = "Сентябрь";
} else if (month == 10) {
month_vivod = "Октябрь";
} else if (month == 11) {
month_vivod = "Ноябрь";
} else if (month == 12) {
month_vivod = "Декабрь";
}else {
  
}
        
        
        
        
        
        
        const html = `
           
<style>
.mimg {
  border-radius: 100%;
  width:120px;
   border: ${avat_img_b_s} solid ${avat_img_b_c};
 }
.month {
    padding: 50px 25px;
    width: 100%;
    background: ${avat_fon_color};
    text-align: center;
}
</style>     
   <div class="hedr_sdvg"> 

           
         <div class="month">  
         
         
         <img class="mimg" src=${avat_img} alt="Avatar"><br><br>
         
  <ul>
   <li class="prev" onclick="calculationPage.cal_minus();">❮</li>
    <li class="next" onclick="calculationPage.cal_plus();">❯</li>
    <li>
    
    
     <h${avat_s_text}>${avat_text}</h${avat_s_text}>
    
    <h${avat_s_name}>${avat_name}</h${avat_s_name}>
<h${avat_s_data}>${month_vivod} 2023</h${avat_s_data}>
    </li>
  </ul>
</div>

<ul class="weekdays">
 
  <li>Пн.</li>
  <li>Вт.</li>
  <li>Ср.</li>
  <li>Чт.</li>
  <li>Пт.</li>
  <li>Сб.</li> 
  <li>Вс.</li>
</ul>
       
   </div>             
              
  
            
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
