


class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, month, dey, dey_utr, dey_dey, dey_vech, sdvig}) => {
          let col_utr;
	  let col_dey;	
          let col_vech;  
          let otstup;
	  let cards;
	  let d;
	  let o;
		
	d = Number(id);
	o = Number(sdvig);	
	deys = 	d - o;
          
if (dey_utr === 0) {
  col_utr = "#33cc33";
} else if (dey_utr === 1) {
   col_utr = "#cc3333";
} else if (dey_utr === 2) {
   col_utr = "#b2d6b2";
}  else {
   col_utr = "#b2d6b2";
}	


if (dey_dey === 0) {
 col_dey = "#33cc33";
} else if (dey_dey === 1) {
   col_dey = "#cc3333";
} else if (dey_dey === 2) {
   col_dey = "#b2d6b2";
}  else {
   col_dey = "#b2d6b2";
}	

		
		
if (dey_vech === 0) {
col_vech = "#33cc33";
} else if (dey_vech === 1) {
    col_vech = "#cc3333";
} else if (dey_vech === 2) {
   col_vech = "#b2d6b2";
}  else {
   col_vech = "#b2d6b2";
}	
		
		
		
		
		
		
		
	
		
		
if (dey > 9) {
   otstup = 4;
 
} else {
   otstup = 10;
} 		
		
		
		
		
		

htmlCatalog += `







<li>
<a onclick="openPop_dey_${cards}();" class="dropbtn" style = "background: linear-gradient(to top, ${col_utr} 34%, ${col_dey} 34%, ${col_dey} 66%, ${col_vech} 66%); padding: 1px ${otstup}px 1px ${otstup}px; color: #ffffff;">${dey}</a>
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
