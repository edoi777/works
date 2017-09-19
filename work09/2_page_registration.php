<?php 
if(!$_POST['ajaxLoad']) {
    
    include 'header.php';
    ?>
   <div id="content">  
<?php
    }
?>
  <link rel="stylesheet" href="css/2_page_registration.css">
     <link rel="stylesheet" href="css/nouislider.min.css">
   <label>
       <span>ваше Имя *</span>
       <input type="text" name="name">
   </label>
      
   <label>
       <span>ваша Фамилия *</span>
       <input type="text" name="famale">
   </label>

    
    <label>
       <span>E-MAIL *</span>
       <input type="text" name="Email">
   </label>
      
    <label>
       <span>КОНТАКТНЫЙ ТЕЛЕФОН *</span>
       <input type="text" name="tel">
   </label>
         
    <div class="choose_model_box">
       <input type="checkbox" id="choose_model" checked >
       <label for="choose_model" class="choose_model_button">
           <p><i>Выберите модель</i><img width='10' height='5' title='' alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAV0lEQVQI13XO0QlAcBgE8J94N8N/DAsoC9hB2UaxgWQeK/BuAOXlSx64urq77upgRu0fDRaosKP7KPU4ogMSNgzIg0NkCbLXusSKK3yOFufXnwITxtAPbgJ2DDz4+upRAAAAAElFTkSuQmCC'></p>
       </label>
         <div class="models" id="models" >
                
                <input type="radio" name="car" id="q30" disabled="disabled">
                    <label class="item_car q30" for="q30" data-model="q30">
                        
                          
                     </label>
                      <input type="radio" name="car" id="q50" disabled="disabled">
                    <label class="item_car q50" for="q50" data-model="q50">
                        
                          
                     </label>
                 <input type="radio" name="car" id="qx30" disabled="disabled">
                    <label class="item_car qx30" for="qx30" data-model="qx30">
                     
                      
                     </label>
                     <input type="radio" name="car" id="qx50" disabled="disabled">
                    <label class="item_car qx50" for="qx50" data-model="qx50">
                         
                          
                     </label>
                     <input type="radio" name="car" id="qx70" disabled="disabled">
                    <label class="item_car qx70" for="qx70" data-model="qx70">
                         
                          
                     </label>
                <input type="radio" name="car" id="qx60" disabled="disabled">
                    <label class="item_car qx60" for="qx60" data-model="qx60">
                     
                      
                     </label>
                     <input type="radio" name="car" id="qx80" disabled="disabled">
                    <label class="item_car qx80" for="qx80" data-model="qx80">
                         
                         
                     </label>
               
         </div>
         <input type="checkbox" id="pop_up_time_picker" >
         <div for="pop_up_time_picker" id="label_pop_up_time_picker">
             <div>
                 <label for="pop_up_time_picker" id="close_pop_up_time_picker"></label>
                 <p>ВАШ INFINITI</p>
                 <div id="model_click">
                     
                 </div>
                 <span>МЕСТО ДЛЯ тест-драйва</span>
                 <select id="place" placeholder="ВЫБЕРИТЕ ПЛОЩАДКУ" >
                     <option value="Площадка 1">Площадка 1</option>
                     <option value="Площадка 2">Площадка 2</option>
                     <option value="Площадка 3">Площадка 3</option>
                     <option value="Площадка 4">Площадка 4</option>
                </select>
                 <img width='20' height='10' id="top" title='' alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz6XRMU4CQRiG4WejEQqgEUpCKwdYagn2egXp6IknICTG3opwAFDjAQj0XsBWO9EzaGxmEiXg7uKbTPN/X97M/EM+RhgjySoeZuQHuEWKL9QxwGfOi/ziCHOsUAtniTuUisoqWOAR5R/zEh5CVs0rO8YTpuHJ29YwCZ1GlqyJZ9z4+wMSXIdua1fpBC+4KrCaIV7R3gxSvKFfQBa5xBqdOOjhHRd7yCLn+MAZzND9hyxyivtv3tIbGyV9/OcAAAAASUVORK5CYII='>
                 <div id="time_picker_hid">
                     
                 </div>
                <div id="perel">
                    <div id="time_picker_hid2">
                     
                     </div>
                     <span>-</span>
                      <div id="time_picker_hid3">
                     
                     </div>
                </div>
                 <img width='21' height='10' id="bottom" title='' alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAKCAYAAABblxXYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAtklEQVQoz63RPWpCQRQG0BM0VbT2ZwEBRVyAIOGBgnsQhGQXwSJZQjoLESytBQm4AAsFcQMiduoqUmQeBEFefPp1c+fOucwMTNB2n3SCp4kDXm8E34LTiAsVbPGRAnvAZzj/fL5ZxAojZP8JPmKMJQqXmnKY4Rv5BDCPOaZ4SpqexRBrlC70lLHBAJlr3qqPHapn9Rr2eL8G+5ue3x99CesIR3TTgnFaOOErgNGtYJw6FuHqifkBNdgbKtjSOWwAAAAASUVORK5CYII='>
                 <label id="timeadsf">
                     <input type="checkbox" id="lubtime">
                     <span>ЛЮБОЕ ВРЕМЯ</span>
                 </label>
                 <label for="pop_up_time_picker" id="next_btn">Далее</label>
             </div>
         </div>
   </div>
    
    <label class="checkbox">
      <input type="checkbox" name="rools">
       <span>Настоящей подписью я соглашаюсь 
            с <a href="#">ПРАВИЛАми обработки персональных данных</a>
        </span>
       
   </label>
    <button>РЕГИСТРАЦИЯ</button>

    <p class="rools">
        НАЖИМАЯ КНОПКУ «РЕГИСТРАЦИЯ»,<br>
Я СОГЛАШАЮСЬ С <a href="#">ПРАВИЛАМИ проведения тест-драйва</a>
    </p>
     
     <script type="text/javascript" src="js/nouislider.min.js"></script>
    <script type="text/javascript" src="js/selectize.js"></script>
     <script type="text/javascript" src="js/register.js"></script>

     
     <script type="text/javascript">
    $('.registr').addClass('do');
    </script> 
<?php 
    if(!$_POST['ajaxLoad']) {
?>
</div>

</body>
</html>
<?php
    }
?>