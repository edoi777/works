 $(document).ready(function(){
      var peram = 0;
     $('.arrow_left').click(function(){
       
         if ($('.newsperekluchatel div').index($('.shownewsblock')) == 0) {
             $('.shownewsblock').removeClass('shownewsblock');
             $('.newsperekluchatel div').last().addClass('shownewsblock');
         } else {
             peram = $('.newsperekluchatel div').index($('.shownewsblock'));
             console.log(peram);
             peram = peram - 1;
             console.log(peram);
             $('.shownewsblock').removeClass('shownewsblock');
             $('.newsperekluchatel div:eq(' + peram + ')').addClass('shownewsblock');
         }
     });
     $('.arrow_right').click(function(){
         if ($('.newsperekluchatel div').index($('.shownewsblock')) == $('.newsperekluchatel div').last().index()) {
             $('.shownewsblock').removeClass('shownewsblock');
             $('.newsperekluchatel div').first().addClass('shownewsblock');
         } else {
             peram = $('.newsperekluchatel div').index($('.shownewsblock'));
             console.log(peram);
             peram = peram + 1;
             console.log(peram);
             $('.shownewsblock').removeClass('shownewsblock');
             $('.newsperekluchatel div:eq(' + peram + ')').addClass('shownewsblock');
         }
     });
 });