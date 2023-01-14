class Header {
    handlerOpenShoppingPage() {
        
        shoppingPage.render();
    }

    render() {
        let avat_img = [NASROYKI[0].avat_img]
        let avat_name = [NASROYKI[0].avat_name]
        const html = `
           
<style>
.mimg {
  border-radius: 50%;
  width:120px

}
</style>     
   <div class="hedr_sdvg"> 

           
         <div class="month">  
         
         
         <img class="mimg" src=${avat_img} alt="Avatar"><br><br>
         
  <ul>
   <li class="prev" onclick="calculationPage.cal_minus();">❮</li>
    <li class="next" onclick="calculationPage.cal_plus();">❯</li>
    <li>
    
    <h5>${avat_name}</h5>
     <span style="font-size:18px">Запись на консультацию</span>
    
    
 <span style="font-size:18px">ЯНВАРЬ 2023</span>
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
