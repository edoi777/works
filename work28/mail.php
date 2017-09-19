<?php

$json = array(); // пoдгoтoвим мaссив oтвeтa

if($_POST){
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret=6LdlqRcUAAAAAKsrJCX0SfedWKz2IFjOaWtNx7zI&response='.(array_key_exists('g-recaptcha-response', $_POST) ? $_POST["g-recaptcha-response"] : '').'&remoteip='.$_SERVER['REMOTE_ADDR'];
        $resp = json_decode(file_get_contents($url), true);

    if ($resp['success'] == true) {

            $name = $_POST['name'];
            $tel = $_POST['tel'];
            $comment = $_POST['comment'];
            $mail = $_POST['mail'];

            mail('nabalexey@mail.ru', 'Заявка с сайта', '| Имя: '.$name.'| Телефон: '.$tel.'| Коммент: '.$comment.'|Цена: '.$prise.'|E-mail: '.$mail);

            $json['error'] = 0;
    }
    else {
        $json['error'] = "Введите recaptchy";
    }
            echo json_encode($json);
}

