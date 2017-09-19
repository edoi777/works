$(document).ready(function() {
    $('.mobile_menu_button, .menu_table .close').on('click', function() {
       $('body').toggleClass('show_menu'); 
    });
});