$(document).ready(function(){
    $('#item_slider').slick({cssEase: 'linear', dots: true});
    $('.vibor > div').click(function() {
        $('.vibor').prepend($(this));
    });
});
