$(document).ready(function() {
    $('.footer_form__input__tel').mask('+7 (999) 999 99 99');
var countTEXT = false;
    $('.footer_form input[type="text"]').on('blur', function () {
         countTEXT = true;
        if (!$(this).val()) {
            $(this).parents('label').addClass('warning');
        } else {
            $(this).parents('label').removeClass('warning');
        }
        $('.footer_form input[type="text"]').each(function() {
            if(!$(this).val()) {
                countTEXT = false;
            }
        });
        
        if ($('.footer_form input[type="checkbox"]').is(':checked') && countTEXT == true ) {
            $('.footer_form button').removeClass('disabled');
        } else {
             $('.footer_form button').addClass('disabled');
        }
        
    });
    $('.footer_form input[type="checkbox"]').on('click', function () {
        countTEXT = true;
        
        if (!$(this).is(':checked')) {
            $(this).parents('label').addClass('warning');
        } else {
            $(this).parents('label').removeClass('warning');
        }
        
        $('.footer_form input[type="text"]').each(function() {
            if(!$(this).val()) {
                countTEXT = false;
            }
        });
        
        if ($('.footer_form input[type="checkbox"]').is(':checked') && countTEXT == true ) {
            $('.footer_form button').removeClass('disabled');
        } else {
             $('.footer_form button').addClass('disabled');
        }
        
        
    });
    
   $('.footer_form .btn_t_2').on('hover', function() {
       alert('asdf');
       if (!$('.footer_form input[type="checkbox"]').is(':checked')) {
          $('.footer_form input[type="checkbox"]').parents('label').addClass('warning');
       }
        $('.footer_form input[type="text"]').each(function() {
            if (!$(this).val()) {
                $(this).parents('label').addClass('warning');
            }
            });
   });
    
    
    

    
    
    
    
    
    
    
    
    
    

});