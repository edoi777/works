$(document).ready(function() {
	$('.b6_slick').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1500,
    responsive: [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.menu ul a').click(function() {
      var scroll_el =$(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html,body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие

});

});

// 	var map2;
// function initMap() {

//   map2 = new google.maps.Map(document.getElementById('map_page'), {
//     center: {lat: 55.5, lng: 38},
//     zoom: 8,  
//     scrollwheel: false,
//     navigationControl: false,
//     mapTypeControl: false,
//     scaleControl: false,
//     // draggable: false,
//   });
//     var marker2 = new google.maps.Marker({
//     position: {lat: 55.5, lng: 38},
//     map: map2,

//   });

    ///////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////////////////////

// если клик произошел по затемняющей области попапа, то закрываем окно
$(document).click(
function(e){if(e.target == $("#popup")[0])
{
        $('#popup').toggleClass('show');
}
}); 
// если клик произошел по затемняющей области попапа, то закрываем окно КОНЕЦ
/*Отправка заявки*/
$('body').on('click','#close',function() {
    $('#popup').toggleClass('show');  ;
});
$('body').on('click','.popup_order',function() {
    $('#popup').toggleClass('show'); 
    $('.tnx_form').remove();
});
//Закрытие формы по нажатию на крестик

var currentform;

$('body').on('submit', '#popup form',function(e){
 e.preventDefault();
                                var form = $(this);
                                var data = form.serialize()  + '&prise=' + $('#prise').text();
                                $.ajax({
                                    url: 'mail.php',
                                    type: 'POST',
                                    dataType: 'json',
                                    data: data,
                                    success: function(data){
                                        if(data['error'] == 0) {
                                            console.log('0 ошибок');
                                            $('#tnx_form').remove();
                                           $('#popup form').append('<p id="tnx_form" style="display:block; color:#fff; max-width:100%;box-sizing: border-box; padding:10px; margin-top:20px; border:2px solid #fff; width:100%; text-align:center; font-weight:bold;">Ваша заявка отправлена</p>');

                                        } else {
                                            console.log(data['1']);
                                            console.log(data['error']);
                                                                                   }
                                        form.trigger( 'reset' );
                                    }
                                    // ,
                                    //  error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                                    //     alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                                    //     alert(thrownError); // и тeкст oшибки
                                    //     console.log('nope');
                                    //  },
                                })
                                    // .done(function() {
                                    //     console.log("success");
                                    //     // $('#popup').attr('checked', 'checked');
                                    //     $('.commercial_offer__phone_button  ').trigger( 'reset' );
                                       
                                    // })
                                    // .fail(function() {
                                    //     console.log("error");
                                    // })
                                    .always(function() {
                                        console.log("complete");
                                    });
                                    // window.location.href = '/spasibo/';
}); 
$('body').on('submit', '#footer_form',function(e){
 e.preventDefault();
                                var form = $(this);
                                var data = form.serialize()  + '&prise=' + $('#prise').text();
                                $.ajax({
                                    url: 'mail.php',
                                    type: 'POST',
                                    dataType: 'json',
                                    data: data,
                                    success: function(data){
                                        if(data['error'] == 0) {
                                            console.log('0 ошибок');
                                            $('#tnx_form').remove();
                                           $('#footer_form').append('<p class="tnx_form" style="display:block; color:#fff; padding:10px; box-sizing: border-box; max-width:100%;margin-top:20px; border:2px solid #fff; width:100%; text-align:center; font-weight:bold;">Ваша заявка отправлена</p>');

                                        } else {
                                            console.log(data['1']);
                                            console.log(data['error']);
                                                                                   }
                                        form.trigger( 'reset' );
                                    }
                                    // ,
                                    //  error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                                    //     alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                                    //     alert(thrownError); // и тeкст oшибки
                                    //     console.log('nope');
                                    //  },
                                })
                                    // .done(function() {
                                    //     console.log("success");
                                    //     // $('#popup').attr('checked', 'checked');
                                    //     $('.commercial_offer__phone_button  ').trigger( 'reset' );
                                       
                                    // })
                                    // .fail(function() {
                                    //     console.log("error");
                                    // })
                                    .always(function() {
                                        console.log("complete");
                                    });
                                    // window.location.href = '/spasibo/';
}); 



