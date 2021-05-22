MAIN = {
	
	init : function () {
		
		// Calculate
		$("#calculate-input").on("change", function () {
		    var $this = $(this),
		        value = $this.prop("value");
		    
		    $('.cr-text.cr-1 span').text(value);
			
			calculatePrice(value);
		    
		});
		
		function calculatePrice(value) {
			
			var price = value;
			var our_commission_fee = 6;
			var our_commission = ((value * 12) * our_commission_fee / 100);
			var percentage = 25;
			var calcPrice = (our_commission * percentage / 100);
			
			$('.cr-text.cr-2 span').text(calcPrice);
			
		}
		
		// Mobile Menu
		$('.navbar-toggle.collapsed').click(function () {
			
			if ($(this).hasClass('collapsed')) {
			
				$('#header').addClass('menu-open');	
				
			} else {
				
				setTimeout(function () {
					
					$('#header').removeClass('menu-open');	
					
				}, 500);
				
			}
	
		});
		
		// Sticky Header
		$(window).scroll(function() {
		    if ($(this).scrollTop() > 0) { 
		    
		        $('#header').addClass('sticky');	
		    
		    } else {
		    
		    	$('#header').removeClass('sticky');	
		    
		    }
		});
		
		
	}
}


$(document).ready(function () {
	
	
	if ($(this).scrollTop() > 0) { 
	
	    $('#header').addClass('sticky');	
	
	} else {
	
		$('#header').removeClass('sticky');	
	
	}
	
	$('[data-toggle="tooltip"]').tooltip();
	
	//Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);
        

    });
});


function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$(function () {
	
	MAIN.init();
	
});


