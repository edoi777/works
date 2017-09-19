   $(document).ready(function(){
       
       function allH() {
//           $('.menu .item').each(function(){
//               if($(this).hasClass('do') == false) {$(this).css({'height':($(window).innerHeight()-$('header').innerHeight())+'px'});}
//           });
           $('.menu .item').css({'height':($(window).innerHeight()-$('header').innerHeight())+'px','width':'33.33%'});
       };
       
        $(window).resize(function(){
            if(document.getElementById('nav_to_home_screen').checked != false) { allH();  } 
        });
       
        
     $('#label_home_screen').on('click', function() {
             if(document.getElementById('nav_to_home_screen').checked == false) {
                allH();       
             } 
             else {  
                      $('.menu .item').each(function() {
                                                     
                                                        $(this).removeAttr('style');
                                       });
             }
     });
       
    $('.menu .item').on('click', function() {
        $('.do').removeClass('do');
        $('.menu .item').each(function() {
                                                    if($(this).hasClass('do') == false) {  $(this).removeAttr('style');}
                                       });
        
       $(this).addClass('do'); 
        document.getElementById('nav_to_home_screen').checked = false;
    });
       
    $('.logo_a').on('click',function(){
        $('.do').removeClass('do');
         document.getElementById('nav_to_home_screen').checked = false;
 
                      $('.menu .item').each(function() {
                                                     
                                                        $(this).removeAttr('style');
                                       });
             
    });    
    });