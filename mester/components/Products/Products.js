


class Products {
	
	

	

    render() {
	    
	    
	    
	    	
	
	    
	    
	    
	    
	    
	    
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, month, dey, dey_utr, dey_dey, dey_vech, sdvig}) => {
		
		
	let dey_c_on = [NASROYKI[0].dey_c_on]
	let dey_c_off = [NASROYKI[0].dey_c_off]
	let dey_c_none = [NASROYKI[0].dey_c_none]
		
          let col_utr;
	  let col_dey;	
          let col_vech;  
          let otstup;
	  let cards;
	  let d;
	  let o;
	  let c;	
	d = Number(id);
	o = Number(sdvig);	
	cards = d - o;
        c = String(cards);
		
if (dey_utr === 0) {
  col_utr = dey_c_on;
} else if (dey_utr === 1) {
   col_utr = dey_c_off;
} else if (dey_utr === 2) {
   col_utr = dey_c_none;
}  else {
   col_utr = dey_c_none;
}	


if (dey_dey === 0) {
 col_dey = dey_c_on;
} else if (dey_dey === 1) {
   col_dey = dey_c_off;
} else if (dey_dey === 2) {
   col_dey = dey_c_none;
}  else {
   col_dey = dey_c_none;
}	

		
		
if (dey_vech === 0) {
col_vech = dey_c_on;
} else if (dey_vech === 1) {
    col_vech = dey_c_off;
} else if (dey_vech === 2) {
   col_vech = dey_c_none;
}  else {
   col_vech = dey_c_none;
}	
		
		
		
		
		
		
		
	
		
		
if (dey > 9) {
   otstup = 4;
 
} else {
   otstup = 10;
} 		
		
		
		
		
		

htmlCatalog += `







<li>
<a onclick="openPop_dey_${c}();" class="dropbtn" style = "background: linear-gradient(to top, ${col_vech} 34%, ${col_dey} 34%, ${col_dey} 66%, ${col_utr} 66%); padding: 1px ${otstup}px 1px ${otstup}px; color: #ffffff;">${dey}</a>
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
