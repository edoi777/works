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
                 <div class="add_question">
                     <form>
                         <table>
                             <tbody>
                                 <tr>
                                     <td>Тип проблемы</td>
                                     <td><select><option value="1">1</option></select></td>
                                 </tr>
                                 <tr>
                                     <td>Где</td>
                                     <td><select><option value="1">1</option></select></td>
                                 </tr>
                                 <tr>
                                     <td>Краткое описание</td>
                                     <td><input type="text"></td>
                                 </tr>
                                 <tr>
                                     <td class="pr">Подробное описание</td>
                                     <td><textarea cols="30" rows="10"></textarea></td>
                                 </tr>
                                 <tr>
                                     <td colspan="2"><a href="#" class="btn_t_1">Отправить запрос</a></td>
                                     
                                 </tr>
                             </tbody>
                         </table>
                     </form>
                     <div class="description_slugbi">
                         <p>Описание условий работы<br>
 службы техпотдержки</p>
                     </div>
                 </div>
        </div>
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p19.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
