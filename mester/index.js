var banks;

function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();	
}

spinnerPage.render();
let pred = [];
CATALOG = [];

 function func()
{
fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vcsps + '&vxod=0&month=0&id_dey=0&periud=0',)
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


}

setTimeout(func, 2000);


