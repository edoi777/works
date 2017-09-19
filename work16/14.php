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
                <h1>Название тикета</h1>
            </div>
        </div>
        <div class="content">
               <div class="tiket_description">
                   <p>Заголовок сообщения: <span>Не могу добавить клиента</span></p>
                   <p>Описание</p>
                   <div>
                       <p>Капец, что делать?</p>
                   </div>
               </div>
               <div class="obsugdenie">
                   <p>Обсуждение</p>
                   <div class="body">
                       <div class="otv">
                           <div class="description">
                               <p class="subject">
                                   Служба техподдержки
                               </p>
                               <p>
                                   <span class="date">24.10.2016</span>
                                   <span class="date">23:00</span>
                               </p>
                           </div>
                           <div class="message">
                               Нам очень жаль
                           </div>
                       </div>
                       <div class="vopr">
                           <div class="description">
                               <p class="subject">
                                   Вы
                               </p>
                               <p>
                                   <span class="date">24.10.2016</span>
                                   <span class="date">23:04</span>
                               </p>
                           </div>
                           <div class="message">
                               Спасибо
                           </div>
                       </div>
                   </div>
                   <div class="otpr_mess">
                       <textarea cols="30" rows="10"></textarea>
                       <a href="#" class="add_file">Прикрепить файл</a>
                       <a href="#" class="btn_t_3">Отправить</a>
                   </div>
               </div>
        </div>
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p21.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
