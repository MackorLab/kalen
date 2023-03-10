class Header {
    handlerOpenShoppingPage() {
        
        shoppingPage.render();
    }

    render() {
        let avat_fon_color = [NASROYKI[0].avat_fon_color]
        let avat_img = [NASROYKI[0].avat_img]
        let avat_img_b_c = [NASROYKI[0].avat_img_b_c]
        let avat_img_b_s = [NASROYKI[0].avat_img_b_s]
        let avat_name = [NASROYKI[0].avat_name]
        let avat_text = [NASROYKI[0].avat_text]
        let month = [CATALOG[0].month];
        let month_vivod;
        let avat_s_name = [NASROYKI[0].avat_s_name]
        let avat_s_text = [NASROYKI[0].avat_s_text]
        let avat_s_data = [NASROYKI[0].avat_s_data]
        let avat_c_name = [NASROYKI[0].avat_c_name]
        let avat_c_text = [NASROYKI[0].avat_c_text]
        let avat_c_data = [NASROYKI[0].avat_c_data]
        let form_chek_c = [NASROYKI[0].form_chek_c]
	
	let btn_text_s = [NASROYKI[0].btn_text_s]
        let btn_text_c = [NASROYKI[0].btn_text_c]
        let btn_board_c = [NASROYKI[0].btn_board_c]
        let btn_bord_c = [NASROYKI[0].btn_bord_c]
	 let btn_vn_ots_v = [NASROYKI[0].btn_vn_ots_v]
        let btn_vn_ots_n = [NASROYKI[0].btn_vn_ots_n]
	let btn_bord_rad_s = [NASROYKI[0].btn_bord_rad_s]
        let btn_bord_wid_s = [NASROYKI[0].btn_bord_wid_s]
	let form_zag_c = [NASROYKI[0].form_zag_c]
        let form_zag_s = [NASROYKI[0].form_zag_s]
        
if (month == 1) {
month_vivod = "Январь";
} else if (month == 2) {
month_vivod = "Февраль";
} else if (month == 3) {
month_vivod = "Март";
} else if (month == 4) {
month_vivod = "Апрель";
} else if (month == 5) {
month_vivod = "Май";
} else if (month == 6) {
month_vivod = "Июнь";
} else if (month == 7) {
month_vivod = "Июль";
} else if (month == 8) {
month_vivod = "Август";
} else if (month == 9) {
month_vivod = "Сентябрь";
} else if (month == 10) {
month_vivod = "Октябрь";
} else if (month == 11) {
month_vivod = "Ноябрь";
} else if (month == 12) {
month_vivod = "Декабрь";
}else {
  
}
        
        
        
        
        
        
        const html = `
           
<style>
.mimg {
  border-radius: 100%;
  width:120px;
   border: ${avat_img_b_s} solid ${avat_img_b_c};
 }
.month {
    padding: 50px 25px;
    width: 100%;
    background: ${avat_fon_color};
    text-align: center;
}

.tab :checked + .tab-title {
 background-color: ${form_chek_c};
 border-radius: 3px 3px 0 0; /* Скругляем уголки */
 color: #fff; /* Цвет текста */
 }


/* When the radio button is checked, add a blue background */
.container_sho input:checked ~ .checkmark_sho {
    background-color: #0c4ccc;
}


        

.btn_send {

        color: ${btn_text_c};
	font-size: ${btn_text_s};
	background-color: ${btn_board_c};
	border-color: ${btn_bord_c};
	
	
	padding:  ${btn_vn_ots_v}  ${btn_vn_ots_n};
	margin-top: 5px;
	border-radius: ${btn_bord_rad_s};
	
	border-width: ${btn_bord_wid_s};
	cursor: pointer;
	
	transition-duration: 0.6s;
	
}

.btn_send:hover {
    box-shadow: 7px 10px 14px 1px rgba(0,0,0,0.24),0 17px 50px 1px rgba(0,0,0,0.19);
}


.form_zag{
  color: ${form_zag_c};
  font-size: ${form_zag_s};
}




</style>     
   <div class="hedr_sdvg"> 

           
         <div class="month">  
         
         
         <img class="mimg" src=${avat_img} alt="Avatar"><br><br>
         
  <ul>
   <li class="prev" onclick="calculationPage.cal_minus();" style = "color:${avat_c_text}">❮</li>
    <li class="next" onclick="calculationPage.cal_plus();" style = "color:${avat_c_text}">❯</li>
    <li>
    
     <h${avat_s_name} style = "color:${avat_c_name}">${avat_name}</h${avat_s_name}>
     <h${avat_s_text} style = "color:${avat_c_text}">${avat_text}</h${avat_s_text}>
    
   
<h${avat_s_data} style = "color:${avat_c_data}">${month_vivod} 2023</h${avat_s_data}>
    </li>
  </ul>
</div>

<ul class="weekdays">
 
  <li>Пн.</li>
  <li>Вт.</li>
  <li>Ср.</li>
  <li>Чт.</li>
  <li>Пт.</li>
  <li>Сб.</li> 
  <li>Вс.</li>
</ul>
       
   </div>             
              
  
            
        `;

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();
