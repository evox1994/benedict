$(document).ready(function(){
	$('.mobile-btn').click(function(){
        if ( $('.mobile-btn').hasClass("active") ) {
            $('.mobile-menu').removeClass("active");
            $('.mobile-btn').removeClass("active");
            $('body').removeClass('active');
        } else {
            $('.mobile-btn').addClass("active");
            $('.mobile-menu').addClass("active");
            $('body').addClass('active');
        }
    });
    var d = new Date();
    $('.date-span').text(d.getFullYear());
    $('input[type="tel"]').inputmask('+7 999 999 99 99');
});