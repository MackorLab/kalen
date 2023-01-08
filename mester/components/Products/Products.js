class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, dey, dey_utr, dey_vech, color_utr, color_vech, pop_vid}) => {
          let col_utr;
          let col_vech;  
            
            
            if (dey_utr === 0) {
   col_utr = "#33cc33";
 
} else {
    col_utr = "#cc3333";
}
		
		
            if (dey_vech === 0) {
   col_vech = "#33cc33";
 
} else {
   col_vech = "#cc3333";
}            

htmlCatalog += `







<li>
  <div class="dropdown">
  <a class="dropbtn">${dey}</a>
  <div class="dropdown-content">
    <a href="#">Утро 9 - 11МСК</a>
    <a href="#">День 13 - 15МСК</a>
    <a href="#">Вечер 17 -19МСК</a>
  </div>
</div>

 </li>













`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            <div class="row">
  <div class="col-sm-9">
                ${htmlCatalog}
		
  </div>
  <div class="col-sm-3">
  
  
  </div>
</div> 
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
