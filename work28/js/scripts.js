$(document).ready(function() {
	$('.b6 .wrapper').slick({
		 arrows: false,
		 dots:true,
		   infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
	});	

	$('.b7_slider').slick({
		 arrows: true,
		 dots:false,
		   infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  prevArrow: $('.b7_prev'),
		  nextArrow: $('.b7_next'),
		    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	$('#menu_button').on('click', function() {
		$('.header__top_line__menu').stop();
		$(this).toggleClass('show');
		if(!$('#menu_button').hasClass('show')) {
				$('.header__top_line__menu').animate({height: '0px', padding: '0px'}, 200);
		} else {
			$('.header__top_line__menu').animate({height: $('.header__top_line__menu')[0].scrollHeight, padding: '25px 0px 0px 0px'}, 200);
		}
	});

var scrolled = window.pageYOffset;
window.onscroll = function() {
 if(scrolled > window.pageYOffset) { $('.header__top_line').removeClass('hide_menu');} else { if(!$('body').hasClass('show_menu')) {$('.header__top_line').addClass('hide_menu');}}
   scrolled = window.pageYOffset;
}
 
    /*Маска для инпута оставления заявки перезвонить*/
    $.mask.definitions['~']='[+-]';
    $('#tel').mask('+7 (999) 999 99 99');
    /*Маска для инпута оставления заявки перезвонить КОНЕЦ*/
var currentform;
$('.footer_form ').on('submit',function(e){
                currentform = $(this);
                e.preventDefault();
                // $('.popup_tnx_for_order').toggleClass('show');
                var response = grecaptcha.getResponse(); 
           		if(response.length == 0) {
                               alert('Введите капчу');
                               console.log('Капча не нажата');
                             } 
                             else {
                                
                                console.log('Капча нажата');
                                var form = currentform;
                                var data = form.serialize();

                                $('.popup_tnx_for_order.step_1').toggleClass('step_1').addClass('step_2');
                                $.ajax({
                                    url: 'mail.php',
                                    type: 'POST',
                                    dataType: 'json',
                                    data: data,
                                    success: function(data){
                                        if(data['error'] == 0) {
                                        	console.log('0 ошибок');
                                        	 $('.footer_form').append('<p id="tnx_form" style="display:block; color:green; max-width:100%;box-sizing: border-box; padding:10px; margin-top:20px; border:2px solid green; width:100%; text-align:center; font-weight:bold;">Ваша заявка отправлена</p>');

                                    } else {
                                            alert('Что-то пошло не так!');
                                            console.log('ОШИБКА');
                                            console.log(data);
                                            $('.footer_form').append('<p id="tnx_form" style="display:block; color:red; max-width:100%;box-sizing: border-box; padding:10px; margin-top:20px; border:2px solid red; width:100%; text-align:center; font-weight:bold;">Ваша заявка отправлена</p>');

                                        }
                                        currentform.trigger( 'reset' );
                                        grecaptcha.reset();
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
                             }
     
    });



/*Отправка заявки конец*/

});
	$(window).resize(function() {
		$('.header__top_line__menu').stop();
		if($('html').width() < 1141) {
				if(!$('#menu_button').hasClass('show')) {
				$('.header__top_line__menu').animate({height: '0px', padding: '0px'}, 0);
				} else {
					$('.header__top_line__menu').attr('style','transition: all 0s;')
					$('.header__top_line__menu').animate({height: $('.header__top_line__menu')[0].scrollHeight-25, padding: '25px 0px 0px 0px'}, 0);
					$('.header__top_line__menu').animate({height: $('.header__top_line__menu')[0].scrollHeight-25, padding: '25px 0px 0px 0px'}, 0);
				}
		} else {
			$('.header__top_line__menu').css({height:'auto', padding: '0px'})
		}
	});



