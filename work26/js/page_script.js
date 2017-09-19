$(document).ready(function() {

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
