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








<ul class="days"> 
<span class="active" >

  <li>
  
  <div class="dropdown">
  <button class="dropbtn" style = "background: linear-gradient(#33cc33 33%, #cc3333 33%, #cc3333 67%, #33cc33 67%); padding: 10px 19px 10px 19px">${dey}</button>
  <div class="dropdown-content">
    <a href="#">Link 11</a>
    <a href="#">Link 22</a>
    <a href="#">Link 33</a>
  </div>
</div>

  </li>


</span>

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
