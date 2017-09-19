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
                <h1>Изменить данные о компании</h1>
            </div>
        </div>
        <div class="content">
          <div class="kompany_page_table">
              <div class="description_kompany">
                  <img src="images/komp.png" class="logo_kompany" alt="">
                  <p class="name_kompany">Название компании</p>
                  <p class="date_kompany">Дата регистрации компании: <span>24.06.2015</span></p>
              </div>
             <div class="change_table_company">
                 <p>Адрес</p>
                 <div class="info_tables_change">
                       <table>
                      <tbody>
                          <tr>
                              <td>Область / регион</td>
                              <td><input type="text" placeholder="Область / регион"></td>
                          </tr>
                          <tr>
                              <td>Город / населенный пункт</td>
                              <td><input type="text" placeholder="Город / населенный пункт"></td>
                          </tr>
                          <tr>
                              <td>Улица</td>
                              <td><input type="text" placeholder="Улица"></td>
                          </tr>
                          <tr>
                              <td>Дом</td>
                              <td><input type="text" placeholder="Дом"></td>
                          </tr>
                          <tr>
                              <td>Корпус</td>
                              <td><input type="text" placeholder="Корпус"></td>
                          </tr>
                          <tr>
                              <td>Квартира</td>
                              <td><input type="text" placeholder="Квартира"></td>
                          </tr>
                          <tr>
                              <td>Индекс</td>
                              <td><input type="text" placeholder="Индекс"></td>
                          </tr>
                      </tbody>
                  </table>
                  <table>
                      <tbody>
                          <tr>
                              <td>Номер регистрации</td>
                              <td><input type="text" placeholder="Номер регистрации"></td>
                          </tr>
                          <tr>
                              <td>Тип компании</td>
                              <td><select>
                                  <option value="вариант1">Вариант1</option>
                                  <option value="вариант2">Вариант2</option>
                              </select></td>
                          </tr>
                          <tr>
                              <td>Тип компании</td>
                              <td><label><input type="checkbox"> <span>ДДС</span></label></td>
                          </tr>
                          <tr>
                              <td>Член правления</td>
                              <td><input type="text" placeholder="Член правления"></td>
                          </tr>
                          <tr>
                              <td>Член правления</td>
                              <td><input type="text" placeholder="Член правления"></td>
                          </tr>
                          <tr>
                              <td></td>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
                 </div>
                <div class="controls">
                     <a href="#" class="btn_t_1">Сохранить</a>
                     <a href="#" class="btn_t_2">Назад</a>
                </div>
             </div>
          </div>
          </div>
        
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p4.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
