$(window).ready(function() {
    $('.resul_kamni:first').prepend('<div id="fon_texture"></div>');
    $('#fon_texture').css({'height':($('.resul_kamni').innerHeight()) + 'px'});
    $(window).resize(function(){
         $('#fon_texture').css({'height':($('.resul_kamni').innerHeight()) + 'px'});
    });
});  