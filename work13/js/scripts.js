$(window).ready(function() {
    $('.resul_kamni').prepend('<div id="fon_texture"></div>');
    $('#fon_texture').css({'height':($('.resul_kamni').innerHeight() + 85) + 'px'});
    $(window).resize(function(){
         $('#fon_texture').css({'height':($('.resul_kamni').innerHeight() + 85) + 'px'});
    });
});  