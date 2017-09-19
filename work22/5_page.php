<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimal-ui">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700" rel="stylesheet">
    <!-- //////////////////////////// -->
    <link rel="stylesheet" href="css/all.css" />
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/otzivi.css" />
        <!-- //////////////////////////// -->
</head>
</head>

<body>
    <?php include 'php/header.php'; ?>
<main>
   <div class="wrapper">
       <h1>Отзывы клиентов</h1>
    <div class="body_ontzivi_page">
       <div class="main_dots">
                </div>
                <!-- /.main_dots -->
                <div class="main_galleries">
                    <?php include 'php/gallery_home.php'; ?>
                </div>
                <!-- /.main_galleries -->
    </div><!-- /.body_ontzivi_page -->
           <div class="download_more_button ten">
            <div class="plus_button"><span>+</span></div><!-- /.plus_button -->
           <span>Показать ещё</span>
       </div>
       <div class="pagination">
           <p class="show_pages">
               Показано: <span>8</span> из <span>56</span>
           </p><!-- /.show_pages -->
           <div class="pagination__pages">
               <a href="#" class="arrow">←</a>
               <a href="#" class="active">1</a>
               <a href="#">2</a>
               <a href="#">3</a>
               <a href="#" class="arrow">→</a>
           </div><!-- /.pagination__pages -->
       </div><!-- /.pagination -->
   </div><!-- /.wrapper -->
</main>
    <?php include 'php/footer.php'; ?>

    <!-- //////////////////////////// -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/header.js"></script>
    <!-- //////////////////////////// -->
    <script   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwxQDJEYEOkWXbspHDLk_QUduVBWol-9U&callback=initMap"></script>
        <!-- //////////////////////////// -->
    <link rel="stylesheet" type="text/css" href="css/fancybox.css" />
    <script type="text/javascript" src="js/fancybox.js"></script>
    <!-- //////////////////////////// -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
        <!-- //////////////////////////// -->
    <script src="js/otzivi_page.js"></script>
    <!-- //////////////////////////// -->

</body>

</html>
