$(window).scroll(function(){
		    if($(window).scrollTop() > 200){
		    	//if user has scrolled more than 200px -> show .goUp button
				$('.goUp').fadeIn();
			}
			else{
				//else -> hide .goUp button
				$('.goUp').fadeOut();
			}
		});

		$('.goUp').click(function(){
			//this code scrolls the page to the top:
	    	$('html, body').animate({scrollTop : 0}, 600);
	    });



		$(window).scroll(function(){
		    if($(window).scrollTop() > 100){
		    	//if user has scrolled more than 100px -> show .goUp button
				$('.navbar').addClass("fixOnTop");

			}
			else{
				//else -> hide .goUp button
				$('.navbar').removeClass("fixOnTop");	
			}
		});


		$(window).scroll(function(){
		    if($(window).scrollTop() > 100){
		    	//if user has scrolled more than 100px -> navigation color to pink mode
				$('.navbar-inverse').css("background-color", "#af5050"); 
				$('.navbar-inverse').css("border-color", "#af5050");
				$('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus'
									).css("background", "#cb4646"); 
				// #cb4646
				// rgb(203, 70, 70) none repeat scroll 0% 0%

				$('.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus'
									).css("background", "#cb4646");
				
				// $('.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus'
				// 					).css("background", "#cb4646");



				// $('.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus'
				// 					).css("background-color", "#cb4646");


				// $('.navbar-inverse .navbar-nav > .open > a:focus'
				// 					).css("background-color", "blue");			

			}
			else{
				// else -> navigation color to red mode
				$('.navbar-inverse').css("background-color", "red");
				$('.navbar-inverse').css("border-color", "red");
				$('.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus'
									).css("background", "#c51717");

				$('.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus'
									).css("background", "#c51717");

				// $('.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus'
				// 					).css("background", "#c51717");
				//rgb(197, 23, 23)
				//#c51717

				// $('.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus'
				// 					).css("background-color", "#c51717");


				// $('.navbar-inverse .navbar-nav > .open > a:focus'
				// 					).css("background-color", "red");
			}
		});


