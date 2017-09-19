 $(document).ready(function(){
     var a,b;
     $('.right_arrow_main_galery').click(function() {
         a = $('.main_galery .show_galery');
         b = $('.main_galery .show_galery').next();

         
         if ($('.main_galery img:last').attr('class') == 'show_galery') {
             $('.main_galery img:first').attr("class","show_galery");
             a.attr("class"," ");

         } 
         else {
           b.attr("class","show_galery");
             a.attr("class"," ");

         }
         
         
         
     });    
     
     $('.left_arrow_main_galery').click(function() {
         a = $('.main_galery .show_galery');
         b = $('.main_galery .show_galery').prev();

         
         if ($('.main_galery img:first').attr('class') == 'show_galery') {
             $('.main_galery img:last').attr("class","show_galery");
             a.attr("class"," ");

         } 
         else {
           b.attr("class","show_galery");
             a.attr("class"," ");

         }
         
         
         
     });
  });