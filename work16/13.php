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
                <h1>Запрос в службу техподдержки</h1>
            </div>
        </div>
        <div class="content">
              <div class="links_menu">
                    <a href="#" class="active">Создать запрос</a><a href="#">Мои запросы</a>
                 </div>
                 <div class="tikets">
                     <div class="item">
                         <div class="desc_param">
                             <div class="status_close">
                                 закрытый
                             </div>
                             <div class="date">
                                 12.06.2016
                             </div>
                         </div>
                         <div class="body">
                             <a href="#">Заголовок сообщения</a>
                             <p><span class="ic9"></span>2</p>
                         </div>
                     </div>
                     <div class="item">
                         <div class="desc_param">
                             <div class="status_open">
                                 открытый
                             </div>
                             <div class="date">
                                 12.06.2016
                             </div>
                         </div>
                         <div class="body">
                             <a href="#">Заголовок сообщения</a>
                             <p><span class="ic9"></span>2</p>
                         </div>
                     </div>
                 </div>
        </div>
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p20.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
