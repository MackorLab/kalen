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







<li>
  <div class="dropdown">
  <a class="dropbtn">${dey}</a>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

 













`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            <ul class="days"> 
                ${htmlCatalog}
           </ul> 
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
