$(document).ready(function(){function n(n){c>=900&&(f.stop(),$("main").css({"pointer-events":"none"}),"Left"===n&&a<s-1?(i+=t,a++,a==s-1?$("#next").css({display:"none"}):($("#next").css({display:"block"}),$("#prev").css({display:"block"})),$(".nu__home-panels").animate({"margin-left":i},o,function(){e=!1,$("main").css({"pointer-events":"auto"})})):"Right"===n&&a>0&&(i-=t,a--,a==s-1?$("#next").css({display:"block"}):0==a?($("#prev").css({display:"none"}),$("#next").css({display:"block"})):$("#next").css({display:"block"}),$(".nu__home-panels").animate({"margin-left":i},o,function(){e=!1,$("main").css({"pointer-events":"auto"})})))}var e=!1,t=-1*$(window).width(),i=0,a=0,s=3,o=1500,c=$(window).width(),d=document.getElementById("nu__panels"),f=new Hammer(d);$("body").addClass("nu-js"),c>=900?$("#next").fadeIn(200):$("#next").fadeOut(200),$("body").mousewheel(function(t,i){c>=900&&!e&&(i<0?(t.preventDefault(),n("Left"),e=!0):i>0&&0!=a&&(t.preventDefault(),n("Right"),e=!0))}),$("body").on("click","#next",function(t){e=!0,n("Left")}),$("body").on("click","#prev",function(t){e=!0,n("Right")}),$(document).keydown(function(t){if(c>=900&&!e)switch(t.which){case 37:n("Right");break;case 38:n("Right");break;case 39:n("Left");break;case 40:n("Left");break}}),f.on("panleft",function(e){n("Left")}),f.on("panright",function(e){n("Right")});var u=0,l=["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg"],r=["caption 1","caption 2","caption 3","caption 4"],h=l.length-1;$(".slider_next, .slider_prev").fadeIn(200),$("body").on("click",".slider_next",function(){u>=h?u=0:u++;var n=$(this).parent();n.find("a").fadeOut("200",function(){$(this).css("background-image","url(images/"+l[u]+")"),$(this).fadeIn("200")}),n.find("h2").fadeOut("200",function(){$(this).html(r[u]),$(this).fadeIn("200")})}),$("body").on("click",".slider_prev",function(){u<=0?this.cnt=h:this.cnt--;var n=$(this).parent();n.find("a").fadeOut("200",function(){$(this).css("background-image","url(images/"+l[u]+")"),$(this).fadeIn("200")}),n.find("h2").fadeOut("200",function(){$(this).html(r[u]),$(this).fadeIn("200")})});var p=$(window).width();$(window).resize(function(){$(window).width()>=900?(e=!1,i=0,a=0,s=3,o=1500,t=-1*$(window).width(),$("#next").fadeIn(200)):(e=!0,$("#next, #prev").fadeOut(200),$("#nu__panels").css({"margin-left":"0"}))})});