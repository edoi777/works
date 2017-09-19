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
            <a href="#">Компании</a>
            <p>Название компании</p>
        </div>
    </div>
    
    <main>
        <div class="name_page">
            <div class="content">
                <h1>Компании</h1>
            </div>
        </div>
        <div class="content">
          <div class="links_menu">
              <a href="#" class="active">Профиль компании</a><a href="#">Клиенты</a><a href="#">Фактуры</a>
          </div>
          <div class="kompany_page_table">
              <div class="description_kompany">
                  <img src="images/komp.png" class="logo_kompany" alt="">
                  <p class="name_kompany">Название компании</p>
                  <p class="date_kompany">Дата регистрации компании: <span>24.06.2015</span></p>
              </div>
              <div class="kompany_table_item">
                  <p>Адрес</p>
                  <div class="info_tables">
                      <table>
                      <tbody>
                          <tr>
                              <td>Область / регион</td>
                              <td>Область / регион</td>
                          </tr>
                          <tr>
                              <td>Город / населенный пункт</td>
                              <td>Город / населенный пункт</td>
                          </tr>
                          <tr>
                              <td>Улица</td>
                              <td>Улица</td>
                          </tr>
                          <tr>
                              <td>Дом</td>
                              <td>Дом</td>
                          </tr>
                          <tr>
                              <td>Корпус</td>
                              <td>Корпус</td>
                          </tr>
                          <tr>
                              <td>Квартира</td>
                              <td>Квартира</td>
                          </tr>
                          <tr>
                              <td>Индекс</td>
                              <td>Индекс</td>
                          </tr>
                      </tbody>
                  </table>
                  <table>
                      <tbody>
                          <tr>
                              <td>Номер регистрации</td>
                              <td>Номер регистрации</td>
                          </tr>
                          <tr>
                              <td>Тип компании</td>
                              <td>Тип компании</td>
                          </tr>
                          <tr>
                              <td>Член правления</td>
                              <td>Член правления</td>
                          </tr>
                          <tr>
                              <td>Член правления</td>
                              <td>Член правления</td>
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
                  <p class="admin_name">Администратор: <span>Имя Фамилия</span></p>
                  <a href="#" class="btn_t_1"> Изменить</a>
              </div>
          </div>
        </div>
    </main>
    
<?php include 'include/footer.php'; ?>
       <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/page/p3.css">
        <link rel="stylesheet" href="css/all.css">
        
</body>
</html>
