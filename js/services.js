/*!function(e,i){
	function a(){
		n=e(".services-sec");
		var a=n.find(".menu"),
		v=i.location.hash;
		o=a.find("a"),
		c=n.find(".section").hide(),
		t=n.find(".sections"),
		v&&(l=c.index(c.filter(v)),-1==l&&(l=0)),
		o.eq(l).addClass("active"),
		c.eq(l).show(),
		a.on("click","a",s)
	}
	function s(i){
		i.preventDefault();
		var a=e(this);
		if(!a.hasClass("active")){
			var s=o.index(this);
			o.eq(l).removeClass("active"),
			a.addClass("active"),
			c.eq(l).addClass("moving").velocity({
				opacity:0
			},{
				display:"none",
				complete:function(i){
					e(i).removeClass("moving")
				}
			}),
			c.eq(s).show().velocity({opacity:[1,0]}),
			t.velocity("scroll",{duration:400,easing:"easeInCubic",offset:-54}),l=s}
		}
		var n,o,t,c,l=(e(i),0);
		e(a)
}(jQuery,window);*/
$(document).ready(function(){
	function filter(){
		if (location.hash) {
			var block = location.hash;
			/*var block_str = location.hash.slice(1);*/
			$('.menu li a').each(function(){
				if ( $(this).attr('href') == block ) {
					$(this).addClass('active');
				}
			});
			$(block).css('display','block');
			$(block).animate({opacity: 1}, 300);
		}
	}
	function pred(){
		$('.section').css({
			'display': 'none',
			'opacity': 0,
		});
		$('.menu li a').removeClass('active');
	}
	pred();
	filter();

	$('.menu a').click(function(){
		var block = $(this).attr('href');
		location.hash = block;
		setTimeout(function(){var st = $(block).offset().top;$('html,body').animate({scrollTop: st - 100}, 300)});
		return false;
	});

	$(window).on('hashchange',function(){
		pred();
		filter();
	});
});