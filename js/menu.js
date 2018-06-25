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
});