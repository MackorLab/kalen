
class Calculation {
     


      render() {
            const productsStore = localStorageUtil.getProducts();
      
            headerPage.render(productsStore.length);
            productsPage.render();	
      }
      




      cal_plus() {

            spinnerPage.render();
            let pred = [];
            CATALOG = [];
            
            
            fetch('https://skyauto.me/cllbck/217669590/1696073/bFplaitsM0NBdnlPWTRrVkZOaWllUT0?api=1&sid=535939344')
                .then(res => res.json())
                .then(body => {
                        CATALOG = body.katalog;
            
                        setTimeout(() => {
                              spinnerPage.handleClear();
                              render();
                        }, 1000);
                })
                .catch(() => {
                    spinnerPage.handleClear();
                      errorPage.render();
                })
                  
            }















  };
  
  



const calculationPage = new Calculation();
