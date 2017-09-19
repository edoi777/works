/*******************************************************/
//          Переключение языка
/*******************************************************/
document.addEventListener('DOMContentLoaded', function(){ 
    document.getElementsByClassName('header__toggle-language__en')[0].onclick = function() {
        document.getElementsByTagName('body')[0].classList.remove('cn');
        document.getElementsByTagName('body')[0].classList.add('en');
        this.classList.add('active');
        document.getElementsByClassName('header__toggle-language__cn')[0].classList.remove('active');
    };
    document.getElementsByClassName('header__toggle-language__cn')[0].onclick = function() {
        document.getElementsByTagName('body')[0].classList.remove('en');
        document.getElementsByTagName('body')[0].classList.add('cn');
        this.classList.add('active');
          document.getElementsByClassName('header__toggle-language__en')[0].classList.remove('active');
    };
});


/*******************************************************/
//          Счетчик
/*******************************************************/
var currentSetup;
var setups = [
  {
    text:'Token Launch Phase 1.1: <font color="#ffb100">40% Discount</font> <br> {{countdown}} remaining',
        date: new Date("Sep 08, 2017 00:00:00").getTime()
  },
    {
    text:'Token Launch Phase 1.2 will start <br> in {{countdown}}',
    date: new Date("Sep 19, 2017 00:00:00").getTime()
  },{
    text:'Expired',
    date: new Date("Aug 15, 3000 23:59:59").getTime()
  }
]
function pluralize(word, number, suffex){
  if(number!==1){
    return word+(suffex || 's')
  }else{
    return word;
  }
}
function startCountdown(){
	var x = setInterval(function(){
		// Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      for(var i=0; i<setups.length; i++){
	      var distance = setups[i].date - now;    
        	if(distance>0){
              currentSetup = setups[i];
              break;
            }
      }

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      var countDownLine = days +' '+ pluralize('day',days) + ' ' + hours + ' ' + pluralize('hour', hours)+' '+ minutes+ ' ' + pluralize('minute', minutes)+' '+ seconds +' '+pluralize('second', seconds);
      var textLine = currentSetup.text.replace('{{countdown}}',countDownLine);
      
      document.getElementById('countdownText').innerHTML=textLine;      
      
	},1000)
}
$(document).ready(function() {
    $('.header_fixed__item, .header_fixed__logo').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
    });
});
