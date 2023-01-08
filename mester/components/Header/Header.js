class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
           
        <div class="row">
  <div class="col-sm-10">        
  
            
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
  <li>Вс.</li>
  <li>Пн.</li>
  <li>Вт.</li>
  <li>Ср.</li>
  <li>Чет.</li>
  <li>Пт.</li>
  <li>Суб.</li>
</ul>
       
                
    </div>
  <div class="col-sm-2">
  
  
  </div>
</div>               
  
            
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
