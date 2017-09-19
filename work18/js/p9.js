$(document).ready(function() {
    $(".gallery_item").slick({
    arrows:false,
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },

});

});