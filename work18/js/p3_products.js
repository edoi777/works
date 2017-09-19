$(document).ready(function() {
    
    $('#razmer #minus').click(function() {
        if (Number($('#input_pole').val()) > 15) {
            $('#input_pole').val(Number($('#input_pole').val())-0.5);
        }
       
    });
    
    $('#razmer #plus').click(function() {
          if (Number($('#input_pole').val()) < 22.5) {
            $('#input_pole').val(Number($('#input_pole').val())+0.5);
        }
    });
    
    $('#razmer .variants span').click(function() {
        $('#input_pole').val(Number($(this).text()));
    });
    
    $('.sortirovka').hover(function(){
        $('.sortirovka').addClass('show_list');
    },function() {
         $('.sortirovka').removeClass('show_list');
    });
    $('.sortirovka > p').click(function() {
        $('.sortirovka').prepend($(this));
    });
    
    var slider = document.getElementById('slider_prise');

noUiSlider.create(slider, {
	start: [20000, 80000],
	connect: true,
	range: {
		'min': 0,
		'max': 150000
	}
});
    var marginMin = document.getElementById('left_prise'),
	marginMax = document.getElementById('right_prise');

slider.noUiSlider.on('update', function ( values, handle ) {
    var value = values[handle];
	if ( handle ) {
		marginMax.value = Number(values[handle]).toFixed(0);
	} else {
		marginMin.value = Number(values[handle]).toFixed(0);
	}
});
 
marginMin.addEventListener('change', function(){
	slider.noUiSlider.set([this.value, null]);
});

marginMax.addEventListener('change', function(){
	slider.noUiSlider.set([null, this.value]);
});
    
    
    
    
});