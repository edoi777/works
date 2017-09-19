var rangeSlider = document.getElementById('slider-range');

noUiSlider.create(rangeSlider, {
	start: [ 300 ],
    pips: {
		mode: 'positions',
		values: [0,100],
		density: 600
	},
	range: {
		'min': [  0 ],
		'max': [ 600 ]
	}
});
var rangeSliderValueElement = document.getElementById('slider-range-value');

rangeSlider.noUiSlider.on('update', function( values, handle ) {

	rangeSliderValueElement.innerHTML = Number(values[handle]).toFixed(0);
});
/*----------------------------*/
var rangeSlider2 = document.getElementById('slider-vertikal_1');

noUiSlider.create(rangeSlider2, {
	start: [ 300 ],
    orientation: 'vertical',
    pips: {
		mode: 'positions',
		values: [0,100],
		density: 600
	},
	range: {
		'min': [  0 ],
		'max': [ 600 ]
	}
});
var rangeSliderValueElement2 = document.getElementById('slider-vertikal_value_1');

rangeSlider2.noUiSlider.on('update', function( values, handle ) {

	rangeSliderValueElement2.innerHTML = Number(values[handle]).toFixed(0);
});
/*--------------------*/
var rangeSlider3 = document.getElementById('slider-vertikal_2');

noUiSlider.create(rangeSlider3, {
	start: [ 300 ],
    orientation: 'vertical',
    pips: {
		mode: 'positions',
		values: [0,100],
		density: 600
	},
	range: {
		'min': [  0 ],
		'max': [ 600 ]
	}
});
var rangeSliderValueElement3 = document.getElementById('slider-vertikal_value_2');

rangeSlider3.noUiSlider.on('update', function( values, handle ) {

	rangeSliderValueElement3.innerHTML = Number(values[handle]).toFixed(0);
});