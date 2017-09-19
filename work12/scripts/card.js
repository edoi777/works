 $(document).ready(function(){
     var a,b;
     $('.left_arrow').click(function() {
         a = $('.gib_img .show_galery');
         b = $('.gib_img .show_galery').next();

         
         if ($('.gib_img img:last').attr('class') == 'show_galery') {
             $('.gib_img img:first').attr("class","show_galery");
             a.attr("class"," ");

         } 
         else {
           b.attr("class","show_galery");
             a.attr("class"," ");

         }
         
         
         
     });    
     
     $('.right_arrow').click(function() {
         a = $('.gib_img .show_galery');
         b = $('.gib_img .show_galery').prev();

         
         if ($('.gib_img img:first').attr('class') == 'show_galery') {
             $('.gib_img img:last').attr("class","show_galery");
             a.attr("class"," ");

         } 
         else {
           b.attr("class","show_galery");
             a.attr("class"," ");

         }
         
         
         
     });
  });