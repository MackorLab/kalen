class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, dey, dey_utr, dey_vech, color_utr, color_vech}) => {
          
            
            
            
            
            

htmlCatalog += `



</li>
<ul class="days">  
  <li><span class="active"  style = "background: linear-gradient(${color_utr} 50%, ${color_vech} 50%); padding: 1px 10px 1px 10px">${dey}</span></li>
 
</ul>







`;
            
            
            
            
  });          
            
            
            
            
            
            
            
            

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
};

const productsPage = new Products();
