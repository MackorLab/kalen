class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, dey, dey_utr, dey_vech, color_utr, color_vech, pop_vid}) => {
          let col_utr;
          let col_vech;  
          let otstup;  
            
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

		
		
		
		
if (dey > 9) {
   otstup = 4;
 
} else {
   otstup = 10;
} 		
		
		
		
		
		

htmlCatalog += `







<li>
  <div class="dropdown">
  <a class="dropbtn" style = "background: linear-gradient(to top, ${col_utr} 34%, ${col_vech} 34%, ${col_vech} 66%, ${col_utr} 66%); padding: 1px ${otstup}px 1px ${otstup}px; color: #ffffff;">${dey}</a>
  <div class="dropdown-content">
    <a href="#">9 - 11 МСК</a>
    <a href="#">13 - 15 МСК</a>
    <a href="#">17 - 19 МСК</a>
  </div>
</div>

 </li>













`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            <div class="osnv_sdvg">  
                ${htmlCatalog}
	</div>	
  
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
