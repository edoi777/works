$(document).ready(function(){
    $('.question h1').click(function() {
  
        if ($(this).parent().hasClass('allquest')) {
            $(this).parent().removeClass('allquest');
            $('.arrow').text('');
                                                       }
        else {
            $(this).parent().addClass('allquest');
            $('.arrow').text('');
        }
    });
});