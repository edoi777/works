$(document).ready(function() {
    $('#menu li').hover(function() {
         $('#menu li').removeClass('active');
         $('.slider > div').removeClass('active');
         $('main > div').removeClass('active');
        $(this).addClass('active');
        $('.slider > div:eq(' + $(this).index() + ')').addClass('active');
        $('main > div:eq(' + $(this).index() + ')').addClass('active');
        
    });
});