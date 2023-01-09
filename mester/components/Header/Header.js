class Header {
    handlerOpenShoppingPage(datas) {
        var datas_hen = datas;
        shoppingPage.render(datas_hen);
    }

    render(count) {
        const html = `
           
              
   <div class="hedr_sdvg">  
           
         <div class="month">      
  <ul>
   
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
