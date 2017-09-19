<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name='viewport' content='width=device-width,initial-scale=1,minimal-ui'>
</head>
<body>

<?php include 'include/header.php'; ?>
 
    <div class="breadcumbs">
        <div class="content">
            <a href="#">Назад</a>
        </div>
    </div>
    
    <main>
        <div class="name_page">
            <div class="content">
                <h1>Название фактуры</h1>
            </div>
        </div>
        <div class="content">
            
            <div class="list_horizontal">
                 <div class="item">
                     <div class="desc_param">
                         <div class="valuta">
                             eur
                         </div>
                         <div class="date">
                             12.06.2016
                         </div>
                     </div>
                  <div class="body">
                      <div class="info_body">
                          <div class="img">
                              
                          </div>
                          <p class="name_faq">Название фактуры</p>
                          <p class="param_dds">Параметры ДДС</p>
                          <p class="summa">Сумма: EURO 20 000</p>
                      </div>
                      <table>
                          <tbody>
                              <tr>
                                  <td colspan="2">Контактная информация</td>
                              </tr>
                              <tr>
                                  <td>+35 44 553 0153</td>
                                  <td>Имя Фамилия</td>
                              </tr>
                              <tr>
                                  <td>email@mail.ru</td>
                                  <td>Отдел продаж</td>
                              </tr>
                          </tbody>
                      </table>
                      <a href="#" class="btn_t_1">Все фактуры клиента</a>
                  </div>
                 
               </div>
            </div>
       
           <div class="faktura_doc">
               <img src="images/faktura.jpg" alt="">
           </div>
           <div class="control_fakrura">
               <a href="#" class="btn_t_4">Изменить фактуру</a>
               <a href="#" class="btn_t_1">Скачать фактуру</a>
           </div>
        </div>
        
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p13.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
