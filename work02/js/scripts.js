 $(document).ready(function(){
     
var shirinabloka ;//ширина слайда= $('.one_slidshow .slides div:first').width() + 50
     var minus = 0;
 var i = 0;
     var a = 0;
     var b = 1;
     $('.one_slidshow .slides > div:first').addClass('show');
     
     $(window).resize(function() {
          
          
        
                $('.show').css({'margin':'0px 25px 0px 25px'});
         $('.slides .show').removeClass('show');
         $('.one_slidshow .slides > div:first').addClass('show');
         
         
         
        setTimeout(function(){ $('.one_slidshow .slides > div').css({'max-width':(($('.one_slidshow').width() / 100) * 80) + 'px'}); a = 0; }, 300);
         
          setTimeout(function(){ $('.show').css({'margin':' 0px -' + (($('.one_slidshow .slides div:first').width() / 2) - 25) + 'px'}); },400);
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
       setTimeout(function(){ minus = (($('.one_slidshow').width() - $('.one_slidshow .slides > div:first').width()) / 2) + (($('.one_slidshow .slides div:first').width() / 2) - 25); }, 500);
         setTimeout(function(){shirinabloka = $('.one_slidshow .slides > div:first').width()  ; }, 600);
         
       
          setTimeout(function(){$('.one_slidshow .slides').css({'left':((($('.one_slidshow').width() - $('.one_slidshow .slides > div:first').width()) / 2) + (($('.one_slidshow .slides div:first').width() / 2) - 25)) + 'px' }); }, 700);
         
        
     });

     setTimeout(function(){
         
        
         
         $('.one_slidshow .slides > div').css({'max-width':(($('.one_slidshow').width() / 100) * 80) + 'px'});//адаптивные размеры слайдов
         $('.show').css({'margin':' 0px -' + (($('.one_slidshow .slides div:first').width() / 2) - 25) + 'px'});
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
        
         minus = (($('.one_slidshow').width() - $('.one_slidshow .slides > div:first').width()) / 2) + (($('.one_slidshow .slides div:first').width() / 2) - 25);//перелистывание
         shirinabloka = $('.one_slidshow .slides > div:first').width()  ;//перелистывание
         
          $('.one_slidshow .slides').css({'left':((($('.one_slidshow').width() - $('.one_slidshow .slides > div:first').width()) / 2) + (($('.one_slidshow .slides div:first').width() / 2) - 25)) + 'px' });
         
     
     }, 100);
///////////////////////////////////////
     $('.arrow_left').click(function() { 
         
       
         a = a - 1;
         b = $('.slides > div:eq(' + $('.slides > div:first').index() + ')').index();
         if (a < b ) { 
            a = a + 1;
         }
         else {
       $('.show').css({'margin':'0px 25px 0px 25px'});
         $('.slides .show').removeClass('show');
         $('.slides > div:eq(' + a + ')').addClass('show');
              $('.show').css({'margin':' 0px -' + (($('.one_slidshow .slides div:first').width() / 2) - 25) + 'px'});
             minus = minus + shirinabloka + 50;
          

         $('.one_slidshow .slides').css({'left':minus + 'px'});
         }
console.log(a + ' ' + b);
         
     });//конец клика    
     
//////////////////////////////////////////     
     $('.arrow_right').click(function() { 
       
         a = a + 1;
         b = $('.slides > div:eq(' + $('.slides > div:last').index() + ')').index();
         if (a > b ) { 
            a = a - 1;
         }
         else {
       $('.show').css({'margin':'0px 25px 0px 25px'});
         $('.slides .show').removeClass('show');
         $('.slides > div:eq(' + a + ')').addClass('show');
              $('.show').css({'margin':' 0px -' + (($('.one_slidshow .slides div:first').width() / 2) - 25) + 'px'});
             minus = minus - shirinabloka - 50;
          

         $('.one_slidshow .slides').css({'left':minus + 'px'});
         }
console.log(a + ' ' + b);
         
     });//конец клика 
     
    /*----------------------------------------////////////////////////////////////////GALERY 2*/ 
     
     var shirinabloka2 ;//ширина слайда= $('.one_slidshow .slides div:first').width() + 50
     var minus2 = 0;
 var i2 = 0;
     var a2 = 0;
     var b2 = 1;
     $('.one_slidshow2 .slides2 > div:first').addClass('show2');
     $('.circle input:eq('+a2+')').prop("checked", true);
     
     $(window).resize(function() {
          
          
        
                $('.show2').css({'margin':'0px 25px 0px 25px'});
         $('.slides2 .show2').removeClass('show2');
         $('.one_slidshow2 .slides2 > div:first').addClass('show2');
         
         
         
        setTimeout(function(){ $('.one_slidshow2 .slides2 > div').css({'max-width':(($('.one_slidshow2').width() / 100) * 80) + 'px'}); a2 = 0; }, 300);
         
          setTimeout(function(){ $('.show2').css({'margin':' 0px -' + ($('.one_slidshow2 .slides2 div:first').width() - 50) + 'px'}); },400);
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
       setTimeout(function(){ minus2 = (($('.one_slidshow2').width() - $('.one_slidshow2 .slides2 > div:first').width()) / 2) + ($('.one_slidshow2 .slides2 div:first').width() - 50); }, 500);
         setTimeout(function(){shirinabloka2 = $('.one_slidshow2 .slides2 > div:first').width()  ; }, 600);
         
       
          setTimeout(function(){$('.one_slidshow2 .slides2').css({'left':((($('.one_slidshow2').width() - $('.one_slidshow2 .slides2 > div:first').width()) / 2) + ($('.one_slidshow2 .slides2 div:first').width() - 50)) + 'px' }); }, 700);
         
        
     });

     setTimeout(function(){
         
        
         
         $('.one_slidshow2 .slides2 > div').css({'max-width':(($('.one_slidshow2').width() / 100) * 80) + 'px'});//адаптивные размеры слайдов
         $('.show2').css({'margin':' 0px -' + ($('.one_slidshow2 .slides2 div:first').width() - 50) + 'px'});
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
        
         minus2 = (($('.one_slidshow2').width() - $('.one_slidshow2 .slides2 > div:first').width()) / 2) + ($('.one_slidshow2 .slides2 div:first').width() - 50);//перелистывание
         shirinabloka2 = $('.one_slidshow2 .slides2 > div:first').width()  ;//перелистывание
         
          $('.one_slidshow2 .slides2').css({'left':((($('.one_slidshow2').width() - $('.one_slidshow2 .slides2 > div:first').width()) / 2) + ($('.one_slidshow2 .slides2 div:first').width() - 50)) + 'px' });
         
     
     }, 100);
///////////////////////////////////////
     $('.arrow_left2').click(function() { 
         
       
         a2 = a2 - 1;
         b2 = $('.slides2 > div:eq(' + $('.slides2 > div:first').index() + ')').index();
         if (a2 < b2 ) { 
            a2 = a2 + 1;
         }
         else {
             $('.circle input:eq('+a2+')').prop("checked", true);
       $('.show2').css({'margin':'0px 25px 0px 25px'});
         $('.slides2 .show2').removeClass('show2');
         $('.slides2 > div:eq(' + a2 + ')').addClass('show2');
              $('.show2').css({'margin':' 0px -' + ($('.one_slidshow2 .slides2 div:first').width() - 50) + 'px'});
             minus2 = minus2 + shirinabloka2 + 50;
          

         $('.one_slidshow2 .slides2').css({'left':minus2 + 'px'});
         }
console.log(a2 + ' ' + b2);
         
     });//конец клика    
     
//////////////////////////////////////////     
     $('.arrow_right2').click(function() { 
       
         a2 = a2 + 1;
         b2 = $('.slides2 > div:eq(' + $('.slides2 > div:last').index() + ')').index();
         if (a2 > b2 ) { 
            a2 = a2 - 1;
         }
         else {
             $('.circle input:eq('+a2+')').prop("checked", true);

       $('.show2').css({'margin':'0px 25px 0px 25px'});
         $('.slides2 .show2').removeClass('show2');
         $('.slides2 > div:eq(' + a2 + ')').addClass('show2');
              $('.show2').css({'margin':' 0px -' + ($('.one_slidshow2 .slides2 div:first').width() - 50) + 'px'});
             minus2 = minus2 - shirinabloka2 - 50;
          

         $('.one_slidshow2 .slides2').css({'left':minus2 + 'px'});
         }
console.log(a2 + ' ' + b2);
         
     });//конец клика 
/*////////////////////////////////////////////////GALERY 3*/
          
var shirinabloka3 ;//ширина слайда= $('.one_slidshow .slides div:first').width() + 50
     var minus3 = 0;
 var i3 = 0;
     var a3 = 0;
     var b3 = 1;
     $('.one_slidshow3 .slides3 > div:first').addClass('show3');
     
     $(window).resize(function() {
          
          
        
                $('.show3').css({'margin':'0px 25px 0px 25px'});
         $('.slides3 .show3').removeClass('show3');
         $('.one_slidshow3 .slides3 > div:first').addClass('show3');
         
         
         
        setTimeout(function(){ $('.one_slidshow3 .slides3 > div').css({'max-width':(($('.one_slidshow3').width() / 100) * 80) + 'px'}); a3 = 0; }, 300);
         
          setTimeout(function(){ $('.show3').css({'margin':' 0px -' + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0) + 'px'}); },400);
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
       setTimeout(function(){ minus3 = (($('.one_slidshow3').width() - $('.one_slidshow3 .slides3 > div:first').width()) / 2) + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 25); }, 500);
         setTimeout(function(){shirinabloka3 = $('.one_slidshow3 .slides3 > div:first').width()  ; }, 600);
         
       
          setTimeout(function(){$('.one_slidshow3 .slides3').css({'left':((($('.one_slidshow3').width() - $('.one_slidshow3 .slides3 > div:first').width()) / 2) + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0)) + 'px' }); }, 700);
         
        
     });

     setTimeout(function(){
         
        
         
         $('.one_slidshow3 .slides3 > div').css({'max-width':(($('.one_slidshow').width() / 100) * 80) + 'px'});//адаптивные размеры слайдов
          $('.show3').css({'margin':' 0px -' + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0) + 'px'});
         //$('.one_slidshow .slides').css({'left':(($('.one_slidshow').width() - ($('.one_slidshow .slides > div:first').width() + 50) ) / 2) + ($('.one_slidshow .slides div:first').width() / 2) + 'px' });
        
        
         minus3 = (($('.one_slidshow3').width() - $('.one_slidshow3 .slides3 > div:first').width()) / 2) + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0);//перелистывание
         shirinabloka3 = $('.one_slidshow3 .slides3 > div:first').width()  ;//перелистывание
         
          $('.one_slidshow3 .slides3').css({'left':((($('.one_slidshow3').width() - $('.one_slidshow3 .slides3 > div:first').width()) / 2) + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0)) + 'px' });
         
     
     }, 300);
///////////////////////////////////////
     $('.arrow_left3').click(function() { 
         
       
         a3 = a3 - 1;
         b3 = $('.slides3 > div:eq(' + $('.slides3 > div:first').index() + ')').index();
         if (a3 < b3 ) { 
            a3 = a3 + 1;
         }
         else {
       $('.show3').css({'margin':'0px 25px 0px 25px'});
         $('.slides3 .show3').removeClass('show3');
         $('.slides3 > div:eq(' + a3 + ')').addClass('show3');
              $('.show3').css({'margin':' 0px -' + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0) + 'px'});
             minus3 = minus3 + shirinabloka3 + 35;
          

         $('.one_slidshow3 .slides3').css({'left':minus3 + 'px'});
         }
console.log(a3 + ' ' + b3);
         
     });//конец клика    
     
//////////////////////////////////////////     
     $('.arrow_right3').click(function() { 
       
         a3 = a3 + 1;
         b3 = $('.slides3 > div:eq(' + $('.slides3 > div:last').index() + ')').index();
         if (a3 > b3 ) { 
            a3 = a3 - 1;
         }
         else {
       $('.show3').css({'margin':'0px 25px 0px 25px'});
         $('.slides3 .show3').removeClass('show3');
         $('.slides3 > div:eq(' + a3 + ')').addClass('show3');
              $('.show3').css({'margin':' 0px -' + (($('.one_slidshow3 .slides3 div:first').width() / 2) - 0) + 'px'});
             minus3 = minus3 - shirinabloka3 - 35;
          

         $('.one_slidshow3 .slides3').css({'left':minus3 + 'px'});
         }
console.log(a3 + ' ' + b3);
         
     });//конец клика 
     

  });