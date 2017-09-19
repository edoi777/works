<?php

$json = array(); // пoдгoтoвим мaссив oтвeтa

if($_POST){

            $name = $_POST['name'];
            $tel = $_POST['tel'];
            $comment = $_POST['comment'];
            $prise = $_POST['prise'];

            mail('nabalexey@mail.ru', 'Заявка с сайта', '| Имя: '.$name.'| Телефон: '.$tel.'| Коммент: '.$comment.'|Цена: '.$prise);

            $json['error'] = 0;
 
            echo json_encode($json);
}
else {
    $json['error'] = 'Ошибка!';
}
    // print_r($_SERVER['REMOTE_ADDR']);
    // print_r($_POST);
    // mail($email, $post_data['post_title'],'Благодарим за заявку! Мы свяжемся с Вами в ближайшее время.' );
    // mail($option['mail1'], $post_data['post_title'],$post_data['post_content'] );
