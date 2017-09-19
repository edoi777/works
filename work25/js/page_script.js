$(document).ready(function() {
var range_all_sliders = {
        'min': [     100,150],
        '20%': [   250,  100 ],
        '50%': [  350, 150 ],
        '80%': [  500, 500 ],
        'max': [ 550 ]
};

var slider = document.getElementById('noui');

noUiSlider.create(slider, {
    start: [250],
    connect: [true, false],
    range: range_all_sliders,
    pips: {
            mode: 'values',
            values: [100,250, 350,500,550],
            density: 550,
            stepped: true
    },
    format: wNumb({
        decimals: 0
    }),
});
var rangeSliderValueElement = document.getElementById('slider-range-value');

slider.noUiSlider.on('update', function( values, handle ) {
    rangeSliderValueElement.innerHTML = values[handle];
    
    if(values[handle] == 100) { $('#prise').html('203 000'); $('#prise_persent').html('32 000');}
    if(values[handle] == 250) { $('#prise').html('220 000'); $('#prise_persent').html('55 000');}
    if(values[handle] == 350) { $('#prise').html('275 000'); $('#prise_persent').html('60 000');}
    if(values[handle] == 500) { $('#prise').html('395 000'); $('#prise_persent').html('65 000');}
    if(values[handle] == 550) { $('#prise').html('425 000'); $('#prise_persent').html('70 000');}

    
});

$('.b5_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
///////////////////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////////////////////

// если клик произошел по затемняющей области попапа, то закрываем окно
$(document).click(
function(e){if(e.target == $("#popup")[0])
{
        $('#popup').toggleClass('show');
}
}); 
// если клик произошел по затемняющей области попапа, то закрываем окно КОНЕЦ
/*Отправка заявки*/
$('body').on('click','#close',function() {
    $('#popup').toggleClass('show');  ;
});
$('body').on('click','.popup_form',function() {
    $('#popup').toggleClass('show'); 
    $('#tnx_form').remove();
});
//Закрытие формы по нажатию на крестик

var currentform;

$('body').on('submit', '#popup form',function(e){
 e.preventDefault();
                                var form = $(this);
                                var data = form.serialize()  + '&prise=' + $('#prise').text();
                                $.ajax({
                                    url: 'mail.php',
                                    type: 'POST',
                                    dataType: 'json',
                                    data: data,
                                    success: function(data){
                                        if(data['error'] == 0) {
                                            console.log('0 ошибок');
                                            $('#tnx_form').remove();
                                           $('#popup form').append('<p id="tnx_form" style="display:block; color:green; padding:10px; margin-top:20px; border:2px solid green; width:100%; text-align:center; font-weight:bold;">Ваша заявка отправлена</p>');

                                        } else {
                                            console.log(data['1']);
                                            console.log(data['error']);
                                                                                   }
                                        form.trigger( 'reset' );
                                    }
                                    // ,
                                    //  error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                                    //     alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                                    //     alert(thrownError); // и тeкст oшибки
                                    //     console.log('nope');
                                    //  },
                                })
                                    // .done(function() {
                                    //     console.log("success");
                                    //     // $('#popup').attr('checked', 'checked');
                                    //     $('.commercial_offer__phone_button  ').trigger( 'reset' );
                                       
                                    // })
                                    // .fail(function() {
                                    //     console.log("error");
                                    // })
                                    .always(function() {
                                        console.log("complete");
                                    });
                                    // window.location.href = '/spasibo/';
}); 





});
