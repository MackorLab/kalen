class Spinner {
  handleClear() {
      ROOT_SPINNER.innerHTML = '';
  }

  render() {
      const html = `
        <div class="spinner-container">
          
         <div class="box"> 
          <div class="d-flex justify-content-center"> 
         <img src="https://xn--74-6kcaethvbmg4e6b.xn--p1ai/images/uslugi/44.jpg" alt="Avatar" style="width:100%;">
         </div>
         
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
