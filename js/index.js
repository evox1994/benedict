!function(){function n(){i=$("#order-form"),i.on("submit",e)}function e(n){n.preventDefault(),Popup.open("pop-thanks")}var i;$(n)}(jQuery),function(n){function e(){o=n(".stat-section");var e=o.find(".svg");e.each(function(){var e=SVG(this);e.circle().radius(72).move(0,0).fill("#cee6e5");var i=parseInt(n(this).data("angle")),o=t(i),a=i>180?"1":"0",l=e.path([["M",6,72],["A",66,66,0,a,1,o.x,o.y]]).stroke({width:12,color:"#038f75"}).fill("none").addClass("count-line"),r=l.length();l.stroke({dasharray:[r,r],dashoffset:r})}),ScrollWatcher.add({el:o.find(".stats")[0],onEnter:i,once:!0})}function i(){var e=o.find(".stat");e.each(function(){var e=n(this),i=e.find(".num"),t=parseInt(i.text());e.find(".count-line").velocity({"stroke-dashoffset":0,tween:100},{duration:3e3,progress:function(n,e,o,a,l){i.text(Math.round(l/100*t))}})})}function t(n){var e=n*Math.PI/180;return{x:a.x+-Math.round(l*Math.cos(e)*100)/100,y:a.y+-Math.round(l*Math.sin(e)*100)/100}}var o=n(".stat-section"),a={x:72,y:72},l=66;n(e)}(jQuery),function(n,e){function i(){if(o=n(".learner-section .svg"),o.length){var e=SVG(o[0]),i={x:102,y:118},a={line1S:{x:82,y:90},line1E:{x:852},line2S:{y:326},line2E:{x:108},line3S:{y:564},line3E:{x:444}};a.line1E.y=a.line1S.y,a.line2S.x=a.line1E.x,a.line2E.y=a.line2S.y,a.line3S.x=a.line2E.x,a.line3E.y=a.line3S.y;var l=[["M",a.line1S.x,a.line1S.y],["L",a.line1E.x,a.line1E.y],["A",i.x,i.y,0,0,1,a.line2S.x,a.line2S.y],["L",a.line2E.x,a.line2E.y],["A",i.x,i.y,0,0,0,a.line3S.x,a.line3S.y],["L",a.line3E.x,a.line3E.y]],r=e.path(l).stroke({width:11,color:"#cee6e5",linecap:"round"}).fill("none"),c=r.length();e.path(l).stroke({width:11,color:"#038f75",linecap:"round",dasharray:[c,c],dashoffset:c}).fill("none").addClass("large-line");var s=o.find(".round");s.each(function(){var i=n(this).position();e.circle(66).move(i.left-10,i.top-10).fill("#cee6e5"),e.circle(44).move(i.left+1,i.top+1).fill("#038f75").addClass("round-bg")}),ScrollWatcher.add({el:o[0],onEnter:t,offTop:100,offBottom:-100,once:!0})}}function t(){var e=14e3,i=o.find(".round"),t=o.find(".round-bg"),a=[3,13,22,45,56,65,90,99],l=0,r=o.find(".man"),c=[804,82,420],s=[.55*e,.2*e,.075*e],f=[0,40,88],d=0;o.find(".large-line").velocity({"stroke-dashoffset":0,tween:100},{easing:"easeInQuad",duration:e,progress:function(e,o,u,y,h){a[l]&&h>a[l]&&(i.eq(l).addClass("active"),t.eq(l).velocity({rx:33,ry:33},{duration:400}),l++),r.eq(d)&&h>f[d]&&(r.eq(d).velocity({left:c[d]},{begin:function(e){n(e).velocity({opacity:1},{easing:"linear",duration:100,queue:!1})},complete:function(e){n(e).velocity({opacity:0},{easing:"linear",duration:100,queue:!1})},duration:s[d],easing:"easeInQuad"}),d++)}})}var o;n(i)}(jQuery);