$(document).ready(function(){function t(t){o.stop(),"Left"===t&&s<a-1?(i+=n,s++,s==a-1?$("#next").css({display:"none"}):($("#next").css({display:"block"}),$("#prev").css({display:"block"})),$(".nu__home-panels").animate({"margin-left":i},c,function(){e=!1})):"Right"===t&&s>0&&(i-=n,s--,s==a-1?$("#next").css({display:"block"}):0==s?($("#prev").css({display:"none"}),$("#next").css({display:"block"})):$("#next").css({display:"block"}),$(".nu__home-panels").animate({"margin-left":i},c,function(){e=!1}))}var e=!1,n=-1*$(window).width(),i=0,s=0,a=3,c=1500,d=$(window).width(),p=document.getElementById("nu__panels"),o=new Hammer(p);d>=1200&&($("body").mousewheel(function(n,i){e||(i<0?(n.preventDefault(),t("Left"),e=!0):i>0&&(n.preventDefault(),t("Right"),e=!0))}),$("body").on("click","#next",function(n){e=!0,t("Left")}),$("body").on("click","#prev",function(n){e=!0,t("Right")}),$(document).keydown(function(e){switch(e.which){case 37:t("Right");break;case 38:t("Right");break;case 39:t("Left");break;case 40:t("Left");break}}),o.on("panleft",function(e){t("Left")}),o.on("panright",function(e){t("Right")}));var r=0,h=["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg"],l=["caption 1","caption 2","caption 3","caption 4"],u=h.length-1;$("body").on("click",".slider_next",function(){r>=u?r=0:r++;var t=$(this).parent();t.find("a").fadeOut("200",function(){$(this).css("background-image","url(images/"+h[r]+")"),$(this).fadeIn("200")}),t.find("h2").fadeOut("200",function(){$(this).html(l[r]),$(this).fadeIn("200")})}),$("body").on("click",".slider_prev",function(){r<=0?this.cnt=u:this.cnt--;var t=$(this).parent();t.find("a").fadeOut("200",function(){$(this).css("background-image","url(images/"+h[r]+")"),$(this).fadeIn("200")}),t.find("h2").fadeOut("200",function(){$(this).html(l[r]),$(this).fadeIn("200")})});var f=$(window).width();$("p.testp").text("Initial screen width is currently: "+f+"px."),$(window).resize(function(){var t=$(window).width();$("p.testp").text("Initial screen width is currently: "+t+"px."),t<=576?$("p.testp").text("Screen width is less than or equal to 576px. Width is currently: "+t+"px."):t<=680?$("p.testp").text("Screen width is between 577px and 680px. Width is currently: "+t+"px."):t<=1024?$("p.testp").text("Screen width is between 681px and 1024px. Width is currently: "+t+"px."):t<=1500?$("p.testp").text("Screen width is between 1025px and 1499px. Width is currently: "+t+"px."):$("p.testp").text("Screen width is greater than 1500px. Width is currently: "+t+"px.")})});