class Spinner {
	var proxod = 0;
	
	
  handleClear() {
      ROOT_SPINNER.innerHTML = '';
  }

  render() {
    
    let spin;
    
    
    
if (proxod == 0 ) {
   spin = "#c9c5c5";
 proxod = proxod + 1;
} else {
  let spiner_c = [NASROYKI[0].spiner_c]
  spin = spiner_c;
   otstup = 10;
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
