class Header {
    handlerOpenShoppingPage() {
        
        shoppingPage.render();
    }

    render() {
        const html = `
           
<style>
.mimg {
  border-radius: 50%;
  width:150px
}
</style>     
   <div class="hedr_sdvg"> 

           
         <div class="month">   
         <img class="mimg" src="https://html5css.ru/edithtm/img_avatar.png" alt="Avatar"><br>
         
  <ul>
   <li class="prev" onclick="calculationPage.cal_minus();">❮</li>
    <li class="next" onclick="calculationPage.cal_plus();">❯</li>
    <li>
    
    
    
    <h5>Запись на консультацию</h5>
      ЯНВАРЬ<br>
      <span style="font-size:18px">2023</span>
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
