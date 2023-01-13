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
fetch('https://skyauto.me/cllbck/' + p + '?api=1&uid=' + vkid,)
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

setTimeout(func, 5000);


