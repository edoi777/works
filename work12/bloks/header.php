
       <header>
        <div class="logo_info">
            <span class="description_site back_color uppercase">Интернет магазин обуви</span>
            <a href="#" class="logo">catalogobuvi<span class="color_text_2">.ru</span></a>
        </div>
        <div class="contact">
                <h1>8 (800) 123 45 67</h1>
                <a href="#" class="color_text_2"><span>Заказать</span> обратный звонок</a>
        </div>
        <div class="search_and_control">
         <div class="gamburger_button"  id="menu_button">
             <div></div>
             <div></div>
             <div></div>
         </div> 
            <div class="gamburger_button "  id="hide_burg">
             <div></div>
             <div></div>
             <div></div>
         </div>
          <div class="search"><span class="icon" id="loupe">&#xe800</span><input  id="input_loupe" type="text" class="search_input " placeholder="Что-то ищите?"></div>  
          
          <div class="header_profile" id="head_profile"><div class="but_bor_rad_50 back_color"> <a href="#" class="icon">&#xe801</a> <a href="#" class="informer"><span class="icon">&#xe803</span></a></div></div>
          
          <div class="shop_card" id="shop_card"><div class="but_bor_rad_50 back_color"> <a href="#" class="icon">&#xe802</a> <a href="#" class="informer">7</a></div>
              <div class="info_shop_card">
                  <a href="#"><p class="color_text_2">Корзина<span>(2)</span></p>
                  <p class="bld">25 000 Р.</p></a>
              </div>
          </div>
        </div>
    </header>
    <nav class="back_color"  id="menu">
        <ul>
            <li><a href="#">Мужская<br> обувь</a></li>
            <li><a href="#">Женская<br> обувь</a></li>
            <li><a href="#">Детская<br> обувь</a></li>
            <li><a href="#">Спортивная<br> обувь</a></li>
            <li><a href="#">Спортивная<br> обувь</a></li>
            <li><a href="#">Спортивная<br> обувь</a></li>
            <div class="tel_menu">
                <h3>8 (800) 123 45 67</h3>
                <p>ОБРАТНЫЙ ЗВОНОК</p>
            </div>
        </ul>
    </nav>
    
    <div class="path">
        <a href="#">Главная</a>
        <a href="#">Каталог обуви</a>
        <a href="#">Мужская обувь</a>
    </div>
    <script>
        document.getElementById('menu_button').onclick = function() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu_button").style.display = "none";
    document.getElementById("hide_burg").style.display = "table-cell";
}
        document.getElementById('menu').onclick = function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("hide_burg").style.display = "none";
    document.getElementById("menu_button").style.display = "table-cell";
}
        document.getElementById('hide_burg').onclick = function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu_button").style.display = "table-cell";
    document.getElementById("hide_burg").style.display = "none";
}
        
 document.getElementById('loupe').onclick = function() {
    document.getElementById("loupe").style.display = "none";
    document.getElementById("input_loupe").style.display = "block";
    document.getElementById("input_loupe").focus();

     
     document.getElementById("head_profile").style.display = "none";
     document.getElementById("shop_card").style.display = "none";

} 
 document.getElementById('input_loupe').onblur = function() {
    document.getElementById("loupe").style.display = "block";
    document.getElementById("input_loupe").style.display = "none";

     
     document.getElementById("head_profile").style.display = "table-cell";
     document.getElementById("shop_card").style.display = "table-cell";

}

</script>