$(document).ready(function(){
var nomer = $('.slides div').index('.prev');
    
    $('.next').click(function(){
        
        nomer = $('.prev').index();
        $('.prev').removeClass("prev");
        if (nomer == 11) {nomer = 0;} else {nomer = nomer + 1;}
        
        $('.slides div:eq('+nomer+')').addClass('prev');
        console.log(nomer);
        
    });
    
    $('.back').click(function(){
        
        nomer = $('.prev').index();
        $('.prev').removeClass("prev");
        nomer = nomer - 1;
        
        $('.slides div:eq('+nomer+')').addClass('prev');
        console.log(nomer);
        
    });
    
    });