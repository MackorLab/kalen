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
        
        
        
if (month == 1) {

} else if (month == 2) {

} else if (month == 3) {

} else if (month == 4) {

} else if (month == 5) {

} else if (month == 6) {

} else if (month == 7) {

} else if (month == 8) {

} else if (month == 9) {

} else if (month == 10) {

} else if (month == 11) {

} else if (month == 12) {

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
    
    
     <h5>${avat_text}</h5>
    
    <h5>${avat_name}</h5>
<h5>ЯНВАРЬ 2023</h5>
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
