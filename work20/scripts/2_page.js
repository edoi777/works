$(document).ready(function() {
    
    var moneyFormat = wNumb({
    decimals: 0,
	thousand: ' ',
	postfix: ' <span class="rubl"></span>'
});

var slider = document.getElementById('price_slider');
noUiSlider.create(slider, {
	start: [30000, 80000],
	connect: true,
    tooltips: true,
    format: wNumb({
		decimals: 0,
        thousand: ' ',
	   postfix: ' <span class="rubl"></span>'
	}),
	range: {
		'min': 0,
		'max': 120000
	}
}); 
    var snapValues = [
	document.getElementById('slider-snap-value-lower'),
	document.getElementById('slider-snap-value-upper')
];
});
