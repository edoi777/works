<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];

//send email
    mail("email@gmail.com", "Имя:  " .$name. '   || Почта:  '.$email, $email );
}
?>