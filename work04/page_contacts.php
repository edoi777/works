<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/contacts.css">
  
</head>
<body>
    <?php include 'header.php' ?>
    <div class="content">
        <div class="contacts_block">
            <h2>Форма связи</h2>
            <form action="">
                <input type="text" placeholder="Ваише Имя *">
                <input type="mail" placeholder="Ваш E-mail *">
                <input type="text" placeholder="Тема сообщения *">
                <textarea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение *"></textarea>
                <input type="button" value="Отправить сообщение">
            </form>
        </div>
        <div class="contacts_block">
            <h2>Контакты</h2>
            <table class="table">
  <tbody>
	<tr>
		<td>Группа «PSYRUS»</td>
		<td>e-mail: <span><a href="#" class="mail_link">group@msurus.ru</a></span></td>
	</tr>
	<tr>
		<td>Организация<br> концернотв:</td>
		<td>Директор: <span>ИмяФамилия</span><br>
		телефон <span>8-921-126-45-48</span>
		</td>
	</tr>
	<tr>
		<td>Промоушен:</td>
		<td><span>Имя Фамилия</span><br> телефон: <span>8-921-123-45-68</span><br>
		е-mail: <span><a href="#" class="mail_link">info@msurus.ru</a></span></td>
	</tr>
	<tr>
		<td>PR и Пресса:</td>
		<td><span>Имя Фамилия</span><br> телефон: <span>8-921-123-45-68</span><br>
		е-mail: <span><a href="#" class="mail_link">info@msurus.ru</a></span></td>
	</tr>
	<tr>
		<td>Звукорежиссер:</td>
		<td><span>Имя Фамилия</span><br> телефон: <span>8-921-123-45-68</span><br>
		е-mail: <span><a href="#" class="mail_link">info@msurus.ru</a></span><br>
		<a href="#"> Технический рейдер (Электрика)</a><br>
		<a href="#"> Технический рейдер (Акустика)</a></td>
	</tr>
	<tr>
		<td>Веб-мастер:</td>
		<td>e-mail: <span><a href="#">Info@psyrus.ru</a></span></td>
	</tr>
  </tbody>
</table>
        </div>
    </div>
<?php include 'footer.php'?>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.goodshare.js/3.2.8/goodshare.min.js"></script>
</body>
</html>