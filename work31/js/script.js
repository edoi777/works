$(document).ready(function(){
    
var scene = document.getElementById('scene_1');
var parallax = new Parallax(scene, {
    hoverOnly: true,
  scalarY: 0
});

$('.s2_item__title').on('click', function() {
    $('.s2_item').removeClass('show');
   $(this).parent().addClass('show');
});
		
});