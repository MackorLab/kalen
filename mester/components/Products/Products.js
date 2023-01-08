class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, dey, dey_utr, dey_vech, color_utr, color_vech}) => {
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









  
</li>
<ul class="days">  
  <li><span class="active"  style = "background: linear-gradient(${col_utr} 50%, ${col_vech} 50%); padding: 1px 10px 1px 10px">${dey}</span></li>
 
</ul>













`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            
                ${htmlCatalog}
            
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
