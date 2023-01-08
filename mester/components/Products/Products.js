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



<style>

.dropbtn {
   
    color: white;
    padding: 0px;
    font-size: 26px;
    border: none;
    
    
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}


</style>



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
