var i = 0;
// var A = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 130;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();
$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });


// function deltxt() {
// 			if (A <= txt.length) {
		// 	    document.getElementById("text").innerHTML = txt.slice(0, -A);
		// 	    A++;
		// 	    setTimeout(deltxt, 50);
		// 	  }
		// }
		// var backward = speed * txt.length + 1000		;
		// // console.log(backward);
		// setTimeout( function () {
		// 	deltxt();
		// },backward);