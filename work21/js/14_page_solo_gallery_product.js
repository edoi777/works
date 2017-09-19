$(document).ready(function() {

 $('.this_gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: '.sell_lots_page__galery_nav'
});
$('.sell_lots_page__galery_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.this_gallery',
    responsive: [

        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }

    ]
});
   $('.sell_lots_page__description .bl3').customScroll();
    



    
});