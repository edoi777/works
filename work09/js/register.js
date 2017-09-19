$(document).ready(function() {
$('#models .item_car').on('click', function() {
    var item_click = $(this);
    inviteList = [];
     selectize.clear();
    selectize.clearOptions();
    
  if ($('#'+$(this).attr('for')).attr('disabled') != 'disabled') {
      
    document.getElementById('pop_up_time_picker').checked = true; 
    $('#model_click').removeAttr('class');
    $('#model_click').addClass($(this).attr('data-model'));
      
    $.ajax({
          url: 'http://admin1.infiniti-10years.ru/?r=P16034REST/tickets',
          type: "GET",
          dataType: 'jsonp',
            success:  function(data) {


                var i;
                var a = 0;
                $('.models input').attr('disabled','disabled');
                
                
                for (i = 0; i < data.length; i++) {
                    
                   if ( $('#'+item_click.attr('for')).attr('id').toUpperCase() == data[i].name) {
                        
                       
                           var aasd = new Object();
                           aasd['text'] = data[i].place;
                           aasd['value'] = data[i].timeStart;
                           inviteList[a] =  aasd;
                   
                        
                       
//                            selectize.clear();
//                            selectize.clearOptions();
                        
                            selectize.load(function(callback) {
                                callback(inviteList);
                                
                            });
                       
                     
                       
                        a++;
                        }; 
                        
                        $('#' + data[i].name.toLowerCase()).removeAttr('disabled');   
                }
                
                    
                    

                
                

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(JSON.parse(jqXHR), textStatus, errorThrown);
            }
    });  //END AJAX
      
     
      
  } //END IF

});//END CLICK  
$('#place').selectize();
var selectize = $('#place')[0].selectize;
    
var inviteList = [];
    

    
$.ajax({
  url: 'http://admin1.infiniti-10years.ru/?r=P16034REST/tickets',
  type: "GET",
  dataType: 'jsonp',
    success:  function(data) {
        var i = data.length;
        console.log(data);
        $('.models input').attr('disabled','disabled');
        
        while (i) {
            i--; 
            
       $('#' + data[i].name.toLowerCase()).removeAttr('disabled');
           
            
        }
        
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(JSON.parse(jqXHR), textStatus, errorThrown);
    }
});
}); //END READY





var directionSlider = document.getElementById('time_picker_hid');
var setButton = document.getElementById('top');
var setButtonN = document.getElementById('bottom');

noUiSlider.create(directionSlider, {
	start: 10,
	range: {
		'min': 0,
		'max': 23
	}
});

var directionField = document.getElementById('time_picker_hid2');
var asdfla = 0;
directionSlider.noUiSlider.on('update', function( values, handle ){
    
	directionField.innerHTML = Number(values[handle]).toFixed(0);
	document.getElementById('time_picker_hid3').innerHTML = (Number(values[handle]) + 1).toFixed(0);
});

	


setButton.addEventListener('click', function(){
    directionSlider.noUiSlider.set(Number($('#time_picker_hid2').text()) + 1);
});
setButtonN.addEventListener('click', function(){
    directionSlider.noUiSlider.set(Number($('#time_picker_hid2').text()) - 1);
});