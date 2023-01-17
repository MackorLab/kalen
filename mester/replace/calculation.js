class Calculation {
     
       

      render() {
            const productsStore = localStorageUtil.getProducts();
      
            headerPage.render(productsStore.length);
            productsPage.render();	
      }
      




      cal_plus() {

            spinnerPage.render();
            
            let pred = [];
           month = [CATALOG[0].month];
           let month_new;
           let month_new_otpr;
           
            let num = Number(month);
           console.log(num);
           month_new = num+1;
           console.log(month_new);
           month_new_otpr = String(month_new)
           console.log(month_new_otpr);
            fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vcsps + '&vxod=1&month=' + month_new_otpr + '&id_dey=0&periud=0',)
                .then(res => res.json())
                .then(body => {
                        CATALOG = body.katalog;
                        NASROYKI = body.set;
                 
               
                        setTimeout(() => {
                              spinnerPage.handleClear();
                              render();
                        }, 100);
                })
                .catch(() => {
                    spinnerPage.handleClear();
                      errorPage.render();
                })
                  
            };





 cal_minus() {

            spinnerPage.render();
             
            let pred = [];
            month = [CATALOG[0].month];
           let month_new;
           let month_new_otpr;
            let num = Number(month);
           month_new = num-1;
           console.log(month_new);
           month_new_otpr = String(month_new)
           console.log(month_new_otpr);
            fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vcsps + '&vxod=1&month=' + month_new_otpr + '&id_dey=0&periud=0',)
                .then(res => res.json())
                .then(body => {
                        CATALOG = body.katalog;
            NASROYKI = body.set;
                        setTimeout(() => {
                              spinnerPage.handleClear();
                              render();
                        }, 100);
                })
                .catch(() => {
                    spinnerPage.handleClear();
                      errorPage.render();
                })
                  
            };


     
     
     
     oplat_uspex() {

            spinnerPage.render();
            document.getElementById("shopping").innerHTML = "";
            let pred = [];
           month = [CATALOG[0].month];
           let month_new;
           let month_new_otpr;
           
            let num = Number(month);
           console.log(num);
           month_new = num+1;
           console.log(month_new);
           month_new_otpr = String(month_new)
           console.log(month_new_otpr);
            fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vcsps + '&vxod=0&month='+ month +'&id_dey=0&periud=0',)
                .then(res => res.json())
                .then(body => {
                        CATALOG = body.katalog;
            NASROYKI = body.set;
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
