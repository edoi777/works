<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/music32.css">

   
</head>
<body>
    <?php include 'header.php' ?>
    <div class="content">
    <div class="album">
        
        <h1><span>Альбом</span> Название альбома или заголовок <span class="year">(2012 год)</span></h1> 
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/148232746&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        <input type="button" class="buy_albom" value="Купить альбом">
    </div>
    
<div class="socicons_album">
    
    <div class="socicons">
       <p>Поделиться этой новостью в соц сетях:</p>
    <a href="#" class="goodshare" data-type="vk">&#xe801<span data-counter="vk"></span></a> 
    <a href="#" class="goodshare" data-type="fb">&#xe803<span data-counter="fb"></span></a> 
    <a href="#" class="goodshare" data-type="tw">&#xe802<span data-counter="tw"></span></a>
    </div>
    
</div>
     <div class="fb-comments" data-href="http://verstkaw.esy.es/page_music32.php" data-width="100%" data-numposts="5" data-colorscheme="dark"></div>
        </div>
<!--        End content-->
<?php include 'footer.php'?>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.goodshare.js/3.2.8/goodshare.min.js"></script>
</body>
</html>