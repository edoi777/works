<?php 
if(!$_POST['ajaxLoad']) {
    
    include 'header.php';
    ?>
   <div id="content">  
<?php
    }
?>
   <link rel="stylesheet" href="css/3_page_omeropriatii.css">
    <table>
            <tbody>
                <td>
                    <span>ДАТА</span>
                    <span>17 Сентября</span>
                </td>

                <td>
                    <span>Время </span>
                    <span>10:00 – 23:00</span>
                </td>  

                <td>
                    <span>МЕСТО  </span>
                    <span>Парк «Музеон», г. Москва</span>
                 </td>
              
            </tbody>
    </table>
    <span>Вас ожидает</span>
    <p>Пин-понг<br>
Настольный футбол<br>
Инсталляция со значками Infiniti<br>
Временные татуировки <br>
Моментальная фотография <br>
Инсталляция «Видеоселфи» <br>
Видеоприставки</p>
    <p>Также в течение дня будут работать 
Активности для детей и фуд-станции 
с кухней на любой вкус. 
</p>
    <p>
Всем, кто примет участие 
в тест-драйве — <span>призы!</span></p>
     
     <script type="text/javascript">
    $('.merop').addClass('do');
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