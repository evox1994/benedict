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
;(function($) {
    $.lebnikLoad = function(selector, url, callback){ $(document.body).lebnikLoad(selector, url, callback, true); };
    $.fn.lebnikLoad = function(selector, url, callback, without_selector_document){
        var selector_document = this;
        var e = $('<iframe style="display:none" src="'+url+'"></iframe>');
        $(document.body).append( e );
        $(e).load(function(){
            var x = $(selector, e[0].contentWindow.document);
            if(callback){
                callback(x);
            }else if(without_selector_document != true){
                $(selector_document).html( $(x).html() );
            }
        });
    };
})(jQuery);

$(document).ready(function(){
	function filter(){
		/*if (location.hash) {
			var block = location.hash;
			//var block_str = location.hash.slice(1);
			$('.menu li a').each(function(){
				if ( $(this).attr('href') == block ) {
					$(this).addClass('active');
				}
			});
			$(block).css('display','block');
			$(block).animate({opacity: 1}, 300);
		} else {
			$('#section-1').css('display','block');
			$('#section-1').animate({opacity: 1}, 300);
		}*/
		if (location.hash) {
			$('.menu li a').removeClass('active');
			$('.menu li a').each(function(){
				if ( $(this).attr('href') == location.hash ) {
					$(this).addClass('active');
				}
			});
			var pg_str = location.hash.slice(1);
			pg_str = 'https://evox1994.github.io/benedict/'+pg_str;
			$('#section').lebnikLoad("#section", pg_str);
		}
	}
	/*function pred(){
		$('.section').css({
			'display': 'none',
			'opacity': 0,
		});
		$('.menu li a').removeClass('active');
	}
	pred();*/
	filter();

	$('.menu a').click(function(){
		var pg = $(this).attr('href');
		location.hash = pg;
		return false;
	});

	$(window).on('hashchange',function(){
		filter();
	});
});