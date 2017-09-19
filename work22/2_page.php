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
        <!-- //////////////////////////// -->
    <link rel="stylesheet" href="css/contacts_page.css" />
    <!-- //////////////////////////// -->
</head>
</head>

<body>
    <?php include 'php/header.php'; ?>
<main>
    <div class="map_page_contacts">
        <div id="map_page_contacts"></div>
        <div class="map_page_contacts__text wrapper">
            <div class="map_page_contacts__text__content">
                <p class="number"><span>(+7 812)</span>244-87-47</p>
                <p class="adress">Измайловский проспект д.9, офис 7 г. Санкт-Петербург, Россия, 190005</p>
                <p class="time_work">Режим работы: пн-пт 9:30 – 18:00</p>
                <p class="mail">ohrana@aksioma-gkb.ru</p>
                <button class="uppercase btn_t_1">Построить маршрут</button>
                <p class="arrow_bottom"><span></span> Вакансии</p>
            </div><!-- /.map_page_contacts__text__content -->
        </div><!-- /.map_page_contacts__text -->
    </div>
    <div class="wrapper">
        <h1>Хотите работать в нашей команде?</h1>
        <div class="decor_line"></div>
        <p class="p1">Отдел по работе с персоналом</p>
        <p class="p_tel">(+7 812) 244-87-47</p>
        <p class="p_mail">rabota@aksioma-gkb.ru</p>
    </div><!-- /.wrapper -->
</main>
    <?php include 'php/footer.php'; ?>

    <!-- //////////////////////////// -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/header.js"></script>
    <script   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwxQDJEYEOkWXbspHDLk_QUduVBWol-9U&callback=initMap"></script>
    <!-- //////////////////////////// -->

</body>

</html>
