$(document).ready(function() {
    $('#right').mouseover(function() {
       $('#left').addClass('right_hover');
    });
    $('#right').mouseout(function() {
        $('#left').removeClass('right_hover');
    });
    
});