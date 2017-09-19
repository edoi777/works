$(document).ready(function() {
    $(".team_galleries").slick({
    dots: true,
    arrows:false,
    appendDots: $('.team_dots'),
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<div class="team_dots__dot_dude" style="background-image:url('+thumb+');"></div>';
    }
});
});