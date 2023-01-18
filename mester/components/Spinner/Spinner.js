class Spinner {
	
	
	
  handleClear() {
      ROOT_SPINNER.innerHTML = '';
  }

  render() {
    
    let spin;
    
    
    
if (proxod_spiner == 0 ) {
   spin = "#c9c5c5";
 proxod_spiner = proxod_spiner + 1;
} else {
  let spiner_c = [NASROYKI[0].spiner_c]
  spin = spiner_c;
  
} 		
	
    
    
      const html = `
      
      
      <style>
      
.loader {
 
  border-top: 6px solid ${spin};

}
      
      
      </style>
      
      
      
      
        <div class="spinner-container">
          
      
         
         
         
         
         
         
        <div class="d-flex justify-content-center"> 
       <div class="loader"></div>
          </div>
        </div>
       </div>
      `;

      ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
