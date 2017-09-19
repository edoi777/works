$(document).ready(function() {
    /*SIDEBAR SELECT PRISE*/
var html5Slider = document.getElementById('catalog_page__wrapper__sidebar__select_prise__this');

noUiSlider.create(html5Slider, {
	start: [ 0, 50000 ],
	connect: true,
	range: {
		'min': 0,
		'max': 100000
	}
});
var inputNumber = document.getElementById('catalog_page__wrapper__sidebar__select_prise__this_inputs__ot');
var inputNumber2 = document.getElementById('catalog_page__wrapper__sidebar__select_prise__this_inputs__do');

html5Slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		inputNumber.value = Math.round(value)
	} else {
		inputNumber2.value = Math.round(value)
	}
});

inputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});
inputNumber2.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});
//SIDEBAR SELECT PRISE END!
    
$('#catalog_page__wrapper__result__order_by_params').selectric();
$('#catalog_page__wrapper__result__show_products').selectric();
    
    $('#catalog_page__wrapper__result__order__view__block').on('click',function() {
        $('.catalog_page__wrapper__result__order__view > div').removeClass('active');
        $(this).addClass('active');
        $('.catalog_page__wrapper__result__products').removeClass('list');
    });

    $('#catalog_page__wrapper__result__order__view__line').on('click',function() {
        $('.catalog_page__wrapper__result__order__view > div').removeClass('active');
        $(this).addClass('active');
        $('.catalog_page__wrapper__result__products').addClass('list');
    });
     
});
