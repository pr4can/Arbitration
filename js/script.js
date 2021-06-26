$(document).ready(function() {
	// 
	$(".header_burger").click(function() {
		$('.sidenav').addClass('open');
	});
	// 
	$(".sidenav_close").click(function() {
		$('.sidenav').removeClass('open');
	});
	// 
	$(".consultation_item").click(function() {
		if ($(this).attr("opened") == "false") {
			$(this).addClass('open');
			$(this).attr("opened","true");
		}
		else {
			$(this).removeClass('open');
			$(this).attr("opened","false");
		}
		$(this).find(".consultation_item_description").slideToggle();
	});
	// 
	$(".footer_order-call, .header_order-call").click(function() {
		$(".overlay").fadeIn(500);
		setTimeout(function() {
			$(".modal-window").fadeIn(500);
		}, 500);
	});
	$(".overlay").click(function() {
		$(".modal-window").fadeOut(500);
		setTimeout(function() {
			$(".overlay").fadeOut(500);
			$("#f-modal").slideToggle();
			$(".modal_window_title").text("Оставить заявку на звонок");
		}, 500);
	});



	$(".header_menu_search").click(function() {
		$(".header_menu_item:not(.header_burger)").each(function() {
			$(this).css("transform", "scaleX(0)");
			$(this).fadeOut();		
		});
		$(".header_menu").css("justify-content", "flex-end");
		$(".header_search_form").css("width", "100%");
		setTimeout(function() {
			$(".header_search_close").fadeIn();
			setTimeout(function() {
				$(".header_search_input").fadeIn();
				$(".header_search_input").css("width", "100%");
			}, 300);	
		}, 300);					
	});

	$(".header_search_close").click(function() {
		$(".header_search_input").css("width", "0%");
		$(".header_search_input").fadeOut();
		setTimeout(function() {
			$(".header_search_close").fadeOut();
		}, 300);		
		$(".header_search_form").css("width", "auto");
		setTimeout(function() {
			$(".header_menu_item:not(.header_burger)").each(function() {
				$(this).fadeIn(300);
			});
			$(".header_menu").css("justify-content", "space-between");
			setTimeout(function() {
				$(".header_menu_item:not(.header_burger)").each(function() {
					$(this).css("transform", "scaleX(1)");
				});
			}, 300);			
		}, 500);		
	});
});