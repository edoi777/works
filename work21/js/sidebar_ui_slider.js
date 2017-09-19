$(document).ready(function() {

    var Slider = document.getElementById('slider');

    noUiSlider.create(Slider, {
        start: [2000, 8000],
        range: {
            'min': [  0 ],
            'max': [ 10000 ]
        }
    });
    var snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ];

    Slider.noUiSlider.on('update', function( values, handle ) {
        snapValues[handle].innerHTML = Number(values[handle]).toFixed(0);
    });

    
});