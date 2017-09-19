 $(document).ready(function(){

     /*Определяем меню при загрузке---------------*/

     if ($(window).scrollTop() > 0) {} else {
         $('.animate div section').css({'margin-top':'300px'});
        $('.animate').css({'max-height':($('.animate').innerHeight() - 2400) + 'px'});
     
     }

     if ( $(window).scrollTop() > 0 ){                   
      $('menu').addClass('scroll');
   } else {$('menu').removeClass('scroll');}
    /*-*-*/
     var winheight = $(window).height();
     var scrltop = $(window).scrollTop();




  $('.scrollToTop').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  });


  $('.arrow').click(function() {
    $('html, body').animate({scrollTop: $('.animate').offset().top},500);
    return false;
  });  
     
     $('.section_conteiner > div:eq(0)').click(function() {
          $('section').css({'margin':'0px','transition':'none'});
   setTimeout(function() { $('html, body').animate({scrollTop: $('.animate > div:eq(1)').offset().top - 100},500);}, 1);
  
  });
     $('.section_conteiner > div:eq(1)').click(function() {
         $('section').css({'margin':'0px','transition':'none'});
    setTimeout(function() {$('html, body').animate({scrollTop: $('.animate > div:eq(3)').offset().top - 100},500);},1);
    return false;
  });
     $('.section_conteiner > div:eq(2)').click(function() {
         $('section').css({'margin':'0px','transition':'none'});
    setTimeout(function() {$('html, body').animate({scrollTop: $('.animate > div:eq(2)').offset().top - 100},500);},1);
    return false;
  });
     $('.section_conteiner > div:eq(3)').click(function() {
         $('section').css({'margin':'0px','transition':'none'});
    setTimeout(function() {$('html, body').animate({scrollTop: $('.animate > div:eq(6)').offset().top - 100},500);},1);
    return false;
  });
     $('.section_conteiner > div:eq(4)').click(function() {
         $('section').css({'margin':'0px','transition':'none'});
    setTimeout(function() {$('html, body').animate({scrollTop: $('.animate > div:eq(4)').offset().top - 100},500);},1);
    return false;
  });
   $('.section_conteiner > div:eq(5)').click(function() {
       $('section').css({'margin':'0px','transition':'none'});
    setTimeout(function() {$('html, body').animate({scrollTop: $('.animate > div:eq(7)').offset().top - 100},500);},1);
    return false;
  });

   
     /*Событие загрузки и отсчета отступов выше экрана положения---------------------------*/
           
        scrltop = $(window).scrollTop();
         

     /*Событие скрола---------------------------*/
    
     $(window).scroll(function(){
         
        scrltop = $(window).scrollTop();
         
   if ( scrltop > 0 ){                   
      $('menu').addClass('scroll');
   } else {$('menu').removeClass('scroll');}
        if ( scrltop > 200 ) {
            $('.scrollToTop').css({'opacity':'1'});
        }
         else {$('.scrollToTop').css({'opacity':'0'});}
       /*Aнимация блоков--------------------------*/ 
         
          $('section').each(function () {
              
                if (scrltop >= $(this).offset().top - winheight * 1.2) {
                    $(this).css({'margin':'0px'}); } 
              
      });
         
         
});/*Конец события скрола------------*/

     /*Mobile MENU*/
     $('#burger_menu').click(function() {
         if ($('.logo_box').hasClass('active_mobile_menu')) 
         {
             $('.logo_box').removeClass('d_none');
         $('.logo_box').removeClass('active_mobile_menu');
        $('.menu_links a').addClass('d_none'); 
        $('.menu_links').removeClass('w_pol');
         }
         else  {
            $('.logo_box').addClass('d_none'); 
         $('.logo_box').addClass('active_mobile_menu');
        $('.menu_links a').css({'display':'inline'}); 
        $('.menu_links a').removeClass('d_none');
        $('.menu_links').addClass('w_pol');
             
         }
     });
     /*Language*/
   $('html *[lang]').addClass('lang');
     $('.lang[lang='+$('.languages input:radio:checked').attr('id')+']').removeClass('lang');
     
     $('.languages input').click(function() {
         
          $('html *[lang]').addClass('lang');
     $('.lang[lang='+$('.languages input:radio:checked').attr('id')+']').removeClass('lang');

     });
     
     /*Условия акции*/
     $('#button_yslovia_akcii').click(function() {
         $('#yslovia_akcii').css({'visibility':'visible'});
         $('main *, section *, menu').addClass('blur_html');
     });
     
     $('#yslovia_akcii').click(function (e){ 
		var h = $('#yslovia_akcii'); 
         console.log(h.is(e.target));
		if (h.is(e.target) // если клик был не по нашему блоку
		    && h.has(e.target).length === 0) { 
			$('#yslovia_akcii').css({'visibility':'hidden'});
             $('main *, section *, menu').removeClass('blur_html');
		}
	}); 
     
     $('#close').click(function() {
		$('#yslovia_akcii').css({'visibility':'hidden'}); 
         $('main *, section *, menu').removeClass('blur_html');
     });

 });