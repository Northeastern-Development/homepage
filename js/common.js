$(document).ready(function(){
    var inMotion = false;
    var windowWidth = $(window).width() * -1;
    var offset = 0;
    var currentPanel = 0;
    var panelCount = 3;
    var aspeeds = 1500;
    var wi = $(window).width();
    var myPanels = document.getElementById('nu__panels');
//
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myPanels);


$('body').addClass('nu-js');//adds js class to body if js is enabled


if (wi >= 900){
  $('#next').fadeIn(200);//fades in the next panel button if js is enabled
}else {
  $('#next').fadeOut(200);//fades in the next panel button if js is enabled
}
//-----------------------------------------------------
  // Sliding Panel scroll, swipe, keydown, and click.
//-----------------------------------------------------



    $("body").mousewheel(function(event, delta){

      if (!inMotion){
        //console.log(delta);
        if (delta < 0){
          event.preventDefault();
          slidePanels('Left');
          inMotion = true;
        }else if (delta > 0){
          event.preventDefault();
          slidePanels('Right');
          inMotion = true;
        }
      }

   });


  // this is the brain for all that is happening
  function slidePanels(a){
    if (wi >= 900){
      mc.stop();

      $('main').css({'pointer-events':'none'});//disables hover of tiles until animation to the next screen stops
      if(a === 'Left' && currentPanel < panelCount -1){//this moves the panels to the right
        offset += windowWidth;
        currentPanel++;
        if(currentPanel == panelCount -1){
          $("#next").css({'display':'none'});
        }else {
          $("#next").css({'display':'block'});
          $("#prev").css({'display':'block'});
        }
        $('.nu__home-panels').animate({"margin-left":  offset }, aspeeds, function() {
          inMotion = false;
          $('main').css({'pointer-events':'auto'});//enables hover of tiles until animation to the next screen stops
        });
      }else if (a === 'Right' && currentPanel > 0){//this moves the panels to the left
        //console.log('bck');
        offset -= windowWidth
        currentPanel--;
        if(currentPanel == panelCount -1){
          $("#next").css({'display':'block'});
        }else if(currentPanel == 0) {
          $("#prev").css({'display':'none'});
          $("#next").css({'display':'block'});
        }else {
          $("#next").css({'display':'block'});
        }
        $('.nu__home-panels').animate({"margin-left":  offset }, aspeeds, function() {
          inMotion = false;
          $('main').css({'pointer-events':'auto'});//enables hover of tiles until animation to the next screen stops
        });
      }
    }
  }


  // Next / Prev arrow click functions
  $('body').on("click","#next", function (e) {
    inMotion = true;
    slidePanels('Left');
    //console.log('dasf');
  });

  $('body').on("click","#prev", function (e) {
    inMotion = true;
    slidePanels('Right');
  });

  // arrow keys
  $(document).keydown(function(e){
      switch (e.which){
      case 37:    //left arrow key
        slidePanels('Right');
          break;
      case 38:    //up arrow key
          slidePanels('Right');
          break;
      case 39:    //right arrow key
          slidePanels('Left');
          break;
      case 40:    //bottom arrow key
          slidePanels('Left');
          break;
      }
  });


  // hammer js swipe left and right.
  mc.on("panleft", function(ev) {
    //inMotion = true;
    slidePanels('Left');

  });
  mc.on("panright", function(ev) {
    //inMotion = true;
    slidePanels('Right');
  });






//-----------------------------------------------------
	//Image Rotator
//-----------------------------------------------------

var cnt = 0;
var images = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];
var captions = ["caption 1", "caption 2", "caption 3", "caption 4"]
var n = images.length - 1;
// Next / Prev arrow click

$('.slider_next, .slider_prev').fadeIn(200);//if js is enabled then the rotator arrows will load

$('body').on("click",".slider_next", function () {


  //Nextloop
  if(cnt >= n ){
    cnt = 0;
  }else{
    cnt++;
  }
  //Swaps Images of the slides
  var p = $(this).parent();

  p.find('a').fadeOut("200", function () {
    $(this).css("background-image", "url(images/" + images[cnt] + ")");
    $(this).fadeIn("200");
  });
    //Swaps captions of the slides
  p.find('h2').fadeOut("200", function () {
    $(this).html(captions[cnt]);
    $(this).fadeIn("200");
  });
});

// Next / Prev arrow click functions
$('body').on("click",".slider_prev", function () {
  //previous loop
  if(cnt <= 0 ){
    this.cnt = n;
  }else{
    this.cnt--;
  }
  //Swaps Images of the slides
  var p = $(this).parent();
  p.find('a').fadeOut("200", function () {
    $(this).css("background-image", "url(images/" + images[cnt] + ")");
    $(this).fadeIn("200");
  });
  //Swaps captions of the slides
  p.find('h2').fadeOut("200", function () {
    $(this).html(captions[cnt]);
    $(this).fadeIn("200");
  });
});


















//-----------------------------------------------------
	// FOR TESTING MOBILE RESPONSE SIZES
//-----------------------------------------------------
		var ww = $(window).width();
		$("p.testp").text('Initial screen width is currently: ' + ww + 'px.');



//-----------------------------------------------------
	// WINDOW RESIZE FUNCTION
//-----------------------------------------------------
		$(window).resize(function() {



			var ww = $(window).width();

      if (ww >= 900){
        $('#next').fadeIn(200);//fades in the next panel button if js is enabled
      }else {
        $('#next').fadeOut(200);
      }



      //onsole.log(windowWidth);

			$("p.testp").text('Initial screen width is currently: ' + ww + 'px.');
			if (ww <= 576){
				$("p.testp").text('Screen width is less than or equal to 576px. Width is currently: ' + ww + 'px.');
				}
			else if (ww <= 680){
				$("p.testp").text('Screen width is between 577px and 680px. Width is currently: ' + ww + 'px.');
				}
			else if (ww <= 1024){
				$("p.testp").text('Screen width is between 681px and 1024px. Width is currently: ' + ww + 'px.');
				}
			else if (ww <= 1500){
				$("p.testp").text('Screen width is between 1025px and 1499px. Width is currently: ' + ww + 'px.');
				}
			else {
				$("p.testp").text('Screen width is greater than 1500px. Width is currently: ' + ww + 'px.');
				}
		});


});
