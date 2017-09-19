$(document).ready(function() {
    if ($(window).width() < 768) {
    $('.service__toggle-content-wrapper > div').addClass('list');
    
    $('.service__wrapper__links__title').addClass('list__toggler');
    $('.service__price__title').addClass('list__toggler');
    $('.service__here__info__title').addClass('list__toggler');
}
list();
});
$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('.service__toggle-content-wrapper > div').addClass('list');

        $('.service__wrapper__links__title').addClass('list__toggler');
        $('.service__price__title').addClass('list__toggler');
        $('.service__here__info__title').addClass('list__toggler');
    }
});