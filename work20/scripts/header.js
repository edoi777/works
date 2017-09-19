$(document).ready(function() {
    $('.search__arrow_top').click(function() {
           $(".search__list_scroll").animate({"scrollTop":$('.search__list_scroll').scrollTop() - 40},150); 
    });    
    $('.search__arrow_bottom').click(function() {
           $(".search__list_scroll").animate({"scrollTop":$('.search__list_scroll').scrollTop() + 40},150); 
    });
    
$('.shop_menu,.shopping_cart').hover(function() {
    $('.ten').addClass('ten_show')
}, function() {
     $('.ten').removeClass('ten_show')
});
   

   
});