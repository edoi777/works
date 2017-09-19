   

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimal-ui">
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <script src="js/navigator.js"></script>
    
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/all.css"> 
    <link rel="stylesheet" href="css/pages.css">
    <link rel="stylesheet" href="css/header.css">
    
    <script src="js/myjs.js"></script>
</head>
<body class="welcome_screen">
    <input type="checkbox" id="nav_to_home_screen">
    
    <div class="conteiner">
        <header class="">
            <div class="logo"><a href="/index.php" class="logo_a" title="На страницу приветствие "><img src="images/logo.png" alt=""></a></div>
                 <div class="button">
                    <label for="nav_to_home_screen" id="label_home_screen">
                       <img src="images/menu_icon.png" class="menu_icon" alt="">
                       <img src="images/back_icon.png" class="back" alt="">
                    </label>
                 </div>
        </header>
    </div> 
    <div class="menu">
        <div class="item histiry">
            <div>
                <a href="1_page_history.php"  id="p1"><img src="images/1icon.png" alt="">ИСТОРИЯ БРЕНДА</a>
            </div>
        </div>
        
        <div class="item registr">
            <div>
                <a href="2_page_registration.php"  id="p2"><img src="images/2icon.png" alt="">РЕГИСТРАЦИЯ<br>НА МЕРОПРИЯТИЕ</a>
            </div>
        </div>
        
        <div class="item merop">
            <div>
                <a href="3_page_omeropriatii.php"  id="p3"><img src="images/3icon.png" alt="">О МЕРОПРИЯТИИ</a>
            </div>
        </div>
    </div>
    