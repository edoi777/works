$(document).ready(function () {
    $('#header__menu-button, #header__close-button').on('click', function () {
        $('body').toggleClass('toggle-header-menu');
    });
    $('#first-screen__arrow-botom').on('click', function () {
        $('body,html').animate({
            scrollTop: $('.first-screen').offset().top + $('.first-screen').innerHeight() - 76
        }, 500);
    });
     $('.header__submit-application-button').on('click',function (e) {
            e.preventDefault();
            if ($('*').is('.footer__callback')) {
                $('body,html').animate({
                    scrollTop: $('.footer__callback').offset().top
                }, 500);   
            }  
         if($('*').is('.wrapper_final')) {
                      $('body,html').animate({
                            scrollTop: $('.wrapper_final').offset().top
                }, 500);  
         }
 
          
    

     });
    $('.to_footer').on('click', function(e) {
         e.preventDefault();
         if (document.getElementsByClassName('footer__callback')!==null) {
            $('body,html').animate({
                scrollTop: $('.footer__callback').offset().top - 76
            }, 500);   
        }
    });

    $('.up_button').on('click', function() {
   $('body,html').animate({
                scrollTop: 0
            }, 500);   
});
$(window).on('scroll', function() {
    
if($(window).innerHeight() < window.pageYOffset) {
    $('.up_button').css({'visibility':'visible'});
   } else {
        $('.up_button').css({'visibility':'hidden'});
   }
}); 
});

