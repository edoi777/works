$(document).ready(function() {
        //Горизонтальное меню на мобилке на странице анализов
    if($('.programma table')[0]) {
            if($(".programma table")[0] && $(window).width() <= 768) {
        $(".programma table").mCustomScrollbar({
            axis: "x", // horizontal scrollbar
            theme: "minimal-dark",
        });
        } else {
            $(".programma table").mCustomScrollbar("destroy");
        }
    }
 
});
$(window).on('resize', function() {
   if($(".programma table")[0]) {
       if($(window).innerWidth() <= 768) {
        $(".programma table").mCustomScrollbar({
            axis: "x", // horizontal scrollbar
            theme: "minimal-dark",
        });
        } else {
            $(".programma table").mCustomScrollbar("destroy");
        }
   }
});