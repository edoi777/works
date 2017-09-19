var select = document.getElementById('input-select');
var html5Slider = document.getElementById('html5');

noUiSlider.create(html5Slider, {
	start: [ 1000, 3000 ],
	connect: true,
	range: {
		'min': 0,
		'max': 5000
	}
});
var inputNumber = document.getElementById('input-number');

html5Slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		inputNumber.value = Math.round(value);
	} else {
		select.value = Math.round(value);
	}
});

select.addEventListener('change', function(){
	html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});

var snapValues = [
	document.getElementById('slider-snap-value-lower'),
	document.getElementById('slider-snap-value-upper')
];

html5Slider.noUiSlider.on('update', function( values, handle ) {
	snapValues[handle].innerHTML = Math.round(values[handle]) + ' Р.';
});

$('.parametri_obuvi div h4').click(function() {
    if ($(this).parent().hasClass('show')) {$(this).parent().attr("class", " ")}
    else ($(this).parent().attr("class", "show"))
});
