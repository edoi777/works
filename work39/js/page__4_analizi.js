$(document).ready(function() {
        //Горизонтальное меню на мобилке на странице анализов
    if($('.content-b__description__panel')[0]) {
            if($(".content-b__description__panel")[0] && $(window).width() <= 768) {
        $(".content-b__description__panel").mCustomScrollbar({
            axis: "x", // horizontal scrollbar
            theme: "minimal-dark",
        });
        } else {
            $(".content-b__description__panel").mCustomScrollbar("destroy");
        }
    }
 
});
$(window).on('resize', function() {
        if($(".content-b__description__panel")[0]) {
        if($(window).innerWidth() <= 768) {
            $(".content-b__description__panel").mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                theme: "minimal-dark",
            });
        } else {
            $(".content-b__description__panel").mCustomScrollbar("destroy");
        } 
    }
});