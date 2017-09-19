$(document).ready(function(){
    $('.block_gratitude .wrapper').slick({
        vertical:true,
//        autoplay: true,
//        autoplaySpeed: 1000,
        nextArrow: '<svg class="arrow_right" xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53"><defs>    <style>      .cls-2 {        fill: #fff;        stroke: #ccc;        stroke-width: 1px;      }      .cls-2, .cls-3 {        fill-rule: evenodd;      }      .cls-3 {        fill: #ccc;      }    </style>  </defs>  <path class="cls-2" d="M0.337,26.5L26.5,0.337,52.663,26.5,26.5,52.662Z"/>  <path id="Forma_1_copy" data-name="Forma 1 copy" class="cls-3" d="M20.188,24.689a0.59,0.59,0,0,0,0,.878,0.687,0.687,0,0,0,.923,0l4.728-4.451V33.385a0.631,0.631,0,0,0,.653.615,0.639,0.639,0,0,0,.662-0.615V21.116l4.719,4.451a0.7,0.7,0,0,0,.932,0,0.59,0.59,0,0,0,0-.878l-5.847-5.505a0.67,0.67,0,0,0-.923,0Z"/></svg>',
        prevArrow: '<svg  class="arrow_left"  xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53"><defs>    <style>      .cls-2 {        fill: #fff;        stroke: #ccc;        stroke-width: 1px;      }      .cls-2, .cls-3 {        fill-rule: evenodd;      }      .cls-3 {        fill: #ccc;      }    </style>  </defs>  <path class="cls-2" d="M0.337,26.5L26.5,0.337,52.663,26.5,26.5,52.662Z"/>  <path id="Forma_1_copy" data-name="Forma 1 copy" class="cls-3" d="M20.188,24.689a0.59,0.59,0,0,0,0,.878,0.687,0.687,0,0,0,.923,0l4.728-4.451V33.385a0.631,0.631,0,0,0,.653.615,0.639,0.639,0,0,0,.662-0.615V21.116l4.719,4.451a0.7,0.7,0,0,0,.932,0,0.59,0.59,0,0,0,0-.878l-5.847-5.505a0.67,0.67,0,0,0-.923,0Z"/></svg>',
                  responsive: [
    {
      breakpoint: 1170,
      settings: {
            vertical:false
      }
    }
  ]
    });
    
    $('.block_rating__items_wrapper').slick({
        slidesToShow:3,
        slidesToScroll:3,
//        vertical:true,
//        autoplay: true,
//        autoplaySpeed: 1000,
        nextArrow: '<svg class="arrow_right" xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53"><defs>    <style>      .cls-2 {        fill: #fff;        stroke: #ccc;        stroke-width: 1px;      }      .cls-2, .cls-3 {        fill-rule: evenodd;      }      .cls-3 {        fill: #ccc;      }    </style>  </defs>  <path class="cls-2" d="M0.337,26.5L26.5,0.337,52.663,26.5,26.5,52.662Z"/>  <path id="Forma_1_copy" data-name="Forma 1 copy" class="cls-3" d="M20.188,24.689a0.59,0.59,0,0,0,0,.878,0.687,0.687,0,0,0,.923,0l4.728-4.451V33.385a0.631,0.631,0,0,0,.653.615,0.639,0.639,0,0,0,.662-0.615V21.116l4.719,4.451a0.7,0.7,0,0,0,.932,0,0.59,0.59,0,0,0,0-.878l-5.847-5.505a0.67,0.67,0,0,0-.923,0Z"/></svg>',
        prevArrow: '<svg  class="arrow_left"  xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53"><defs>    <style>      .cls-2 {        fill: #fff;        stroke: #ccc;        stroke-width: 1px;      }      .cls-2, .cls-3 {        fill-rule: evenodd;      }      .cls-3 {        fill: #ccc;      }    </style>  </defs>  <path class="cls-2" d="M0.337,26.5L26.5,0.337,52.663,26.5,26.5,52.662Z"/>  <path id="Forma_1_copy" data-name="Forma 1 copy" class="cls-3" d="M20.188,24.689a0.59,0.59,0,0,0,0,.878,0.687,0.687,0,0,0,.923,0l4.728-4.451V33.385a0.631,0.631,0,0,0,.653.615,0.639,0.639,0,0,0,.662-0.615V21.116l4.719,4.451a0.7,0.7,0,0,0,.932,0,0.59,0.59,0,0,0,0-.878l-5.847-5.505a0.67,0.67,0,0,0-.923,0Z"/></svg>',
          responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
    });
    
var scene = document.getElementById('scene_1');
var parallax = new Parallax(scene, {
    hoverOnly: true
});
var scene = document.getElementById('scene_2');
var parallax = new Parallax(scene, {
    hoverOnly: true
});
var scene = document.getElementById('scene_3');
var parallax = new Parallax(scene, {
    hoverOnly: true
});
    
    
$('header .anim').css('transform', 'translateX(0px) translateY(0px)');
     $('.clock').each(function() {
        if (($(window).scrollTop() + ($(window).height()/3)) >= $(this).offset().top) {
            $(this).find('.anim').css('transform', 'translateX(0px) translateY(0px)');
        }
     });    
 $(window).scroll(function(){ 
     $('.clock').each(function() {
        if (($(window).scrollTop() + ($(window).height()/2)) >= $(this).offset().top) {
            $(this).find('.anim').css('transform', 'translateX(0px) translateY(0px)');
        }
     });
 });
    $('.menu__button').on('click', function() {
        $('.header_menu__list').toggleClass('show');
    })
    
});