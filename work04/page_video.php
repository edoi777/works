<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/video.css">

    
</head>
<body>
    <?php include 'header.php' ?>
    <div class="content">
         <div class="video_group">
             <div class="spisok_video">
                 <h2>Видео</h2>
                 <div class="vedeos">
                     <div class="item_video">
                         <div class="img_video">
                            <span>06:30</span> 
                         </div>
                         <h3>Видеоклип с оооочень длинным названием</h3>
                         <p>Дата:</p> <span class="data">15.06.2016</span>
                         <span class="comments_video">17</span>
                     </div><div class="item_video active_item_video">
                         <div class="img_video">
                            <span>06:30</span> 
                         </div>
                         <h3>Видеоклип с оооочень длинным названием</h3>
                         <p>Дата:</p> <span class="data">15.06.2016</span>
                         <span class="comments_video">17</span>
                     </div><div class="item_video">
                         <div class="img_video">
                            <span>06:30</span> 
                         </div>
                         <h3>Видеоклип с оооочень длинным названием</h3>
                         <p>Дата:</p> <span class="data">15.06.2016</span>
                         <span class="comments_video">17</span>
                     </div><div class="item_video">
                         <div class="img_video">
                            <span>06:30</span> 
                         </div>
                         <h3>Видеоклип с оооочень длинным названием</h3>
                         <p>Дата:</p> <span class="data">15.06.2016</span>
                         <span class="comments_video">17</span>
                     </div><div class="item_video">
                         <div class="img_video">
                            <span>06:30</span> 
                         </div>
                         <h3>Видеоклип с оооочень длинным названием</h3>
                         <p>Дата:</p> <span class="data">15.06.2016</span>
                         <span class="comments_video">17</span>
                     </div>
                 </div>
                 <div class="navigate_video">
                     <p><span class="pages_left_right">«</span><span class="pages active_page">1</span><span class="pages">2</span><span class="pages">3</span><span class="pages_left_right">»</span></p>
                 </div>
             </div>
             <div class="video_play">
                 
           <h2>Название Видео Ролика <p>Опубликовано:  <span class="date">15.16.2016</span></p></h2>
           <iframe width="100%" height="450px" src="https://www.youtube.com/embed/5kYsxoWfjCg" frameborder="0" allowfullscreen></iframe>
       
             </div>
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