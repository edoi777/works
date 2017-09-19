<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name='viewport' content='width=device-width,initial-scale=1,minimal-ui'>
</head>
<body>

<?php include 'include/header.php'; ?>
<input type="checkbox" id="add_facture">
 <div class="popup">
     <div class="content">
         <form>
            <label for="add_facture close" class="close_icon">+</label>
             <p>Создать фактуру</p>
             <div>
                 <div>
                     <p>Клиент</p>
                     <select>
                         <option value="Все">Все</option>
                         <option value="Все1">Все1</option>
                     </select>
                 </div>
                 <div>
                     <p>Услуга</p>
                     <select>
                         <option value="Все">Все</option>
                         <option value="Все1">Все1</option>
                     </select>
                 </div>
                 <div>
                    <label><input type="checkbox"><span>Выставить</span></label>
                    <label><input type="checkbox"><span>На оплату</span></label>
                 </div>
                 <div>
                   <a href="#" class="btn_t_1">Загрузить фактуру</a>
                 </div>
             </div>
           <div class="links">
                 <a href="#" class="btn_t_2">+Создать нового клиента</a>
                 <a href="#" class="btn_t_2">Отмена</a>
                 <a href="#" class="btn_t_1">Сохранить</a>
           </div>
         </form>
     </div>
 </div>
    <div class="breadcumbs">
        <div class="content">
            <a href="#">Назад</a>
        </div>
    </div>
    
    <main>
        <div class="name_page">
            <div class="content">
                <h1>Фактуры "Название клиента"</h1>
                <a href="#" class="btn_t_2">Создать отчет</a>
            </div>
        </div>
        <div class="content">
    
         
                 <div class="sort">
                    <span>Показать фактуры</span>
                    <select>
                        <option value="Дате">Выставленные</option>
                    </select>
                    <span>Сортировать по</span>
                    <select>
                        <option value="Дате">Дате</option>
                    </select>
                    <a href="#" class="btn_t_1">Создать фактуру</a>
                </div>
                <div class="items_fakturi">
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
                             <a href="#" class="btn_t_2">Номер фактуры</a>
                             <p>Параметры ДДС</p>
                             <b>Сумма: EURO 20 000</b>
                         </div>
                    </div>
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
                             <a href="#" class="btn_t_2">Номер фактуры</a>
                             <p>Параметры ДДС</p>
                             <b>Сумма: EURO 20 000</b>
                         </div>
                    </div>
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
                             <a href="#" class="btn_t_2">Номер фактуры</a>
                             <p>Параметры ДДС</p>
                             <b>Сумма: EURO 20 000</b>
                         </div>
                    </div>
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
                             <a href="#" class="btn_t_2">Номер фактуры</a>
                             <p>Параметры ДДС</p>
                             <b>Сумма: EURO 20 000</b>
                         </div>
                    </div>
                </div>
          </div>
        
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p23.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
