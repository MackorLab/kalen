
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
            console.log(vkid)
            console.log(p)
            fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vkid + '&vxod=1',)
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
                  
            };





 cal_minus() {

            spinnerPage.render();
            let pred = [];
            CATALOG = [];
            console.log(vkid)
            console.log(p)
            fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vkid + '&vxod=2',)
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
                  
            };


     
     
     
     
     









  };
  
  



const calculationPage = new Calculation();
