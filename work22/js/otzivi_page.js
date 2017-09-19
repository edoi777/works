$(document).ready(function() {
     $('.main_galleries').slick({
        arrows: false,
        touchMove: false,
        swipe: false,
        dots: true,
        fade: true,
        appendDots: $('.main_dots'),
        customPaging: function(slider, i) {
            var name = $(slider.$slides[i]).data('name');
            return name;
        },
    });
    $('.smi_slider').slick({
        dots: true,
        arrows: false
    });

    $('.blog_slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [

            {
                breakpoint: 1041,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
             {
                breakpoint: 875,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });


    $('.popup_review a').fancybox();



    $(".fancy_youtube").click(function() {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 680,
            'height': 495,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

    $(".youtube_fancybox").click(function() {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 680,
            'height': 495,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

});