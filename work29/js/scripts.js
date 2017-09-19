$(document).ready(function() {
            $('.data_bg').each(function () {
                $(this).attr('style', 'background-image:url(' + $(this).attr('data-bg_img') + ')');
            });
});