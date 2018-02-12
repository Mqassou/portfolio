
	$('body').hide();
	$("#etoile").hide();
	$(".nav_bis").hide();
	$('#bloc1').hide();
	$('#loading').show();

	
	

	
	
	
	/* |||||| READY ||||||*/
	
	$(document).ready(function() {
	

	$('#loading').hide();
	
	 $(".fancybox").fancybox();
	
	$('body').fadeIn(500);
	
	 $( "#draggable" ).click(function(){
	 $('.meteor, .meteor2, .meteor3, #fusee, #mars img').removeAttr('style');
	 fusee();
	});
	
	truc=$("#toggle img").attr("src");
	
	$("#toggle2").hide();
	 $("#toggle").animate({width:'126px'}, 600);
	
	 $("#toggle").click(function(){
	  $(".nav_bis").toggle();
		$("#toggle img").toggle();
	 });
	
	 
	 
	 
	 
	
	 $(".nav_bis a").click(function(){
	 $(".nav_bis").hide();
	 $("#toggle img").toggle();
	 });
	

	 $( "#draggable" ).css({'cursor':'pointer'}).draggable({ containment: "#container1", scroll: false, revert: true });

		
		$('#bouton_fleche, #container1').waypoint(function() {
			$('#container0').stop(true,true).animate({'background-color':'rgba(255,255,255,0.6)'}, 400 );
			$('.padding, #nav_contact').stop(true,true).animate({'color':'rgba(0,0,0,0.7)'}, 400 );
			$('#nav2,#nav3, #nav_contact').css({'text-decoration':'none'});
			$('#nav1').css({'text-decoration':'underline'});
			/*animate({'display':'block'}, 1000 );*/
		});
		
		$('#container2, #bloc2_agence , #rect, #rect1,#rect2,#rect5,#last').waypoint(function() {
			$('#container0').stop(true,true).animate({'background-color':'rgba(9,15,16,0.6)'}, 400 );
			$('.padding, #nav_contact').stop(true,true).animate({'color':'rgba(255,255,255,0.9)'}, 400 );
			$('#nav1,#nav3, #nav_contact').css({'text-decoration':'none'});
			$('#nav2').css({'text-decoration':'underline'});
			/*animate({'display':'block'}, 1000 );*/
		});
		
		$('#container3, #bloc3_cv').waypoint(function() {
			$('#container0').stop(true,true).animate({'background-color':'rgba(255,255,255,0.8)'}, 300 );
			$('.padding, #nav_contact').stop(true,true).animate({'color':'rgba(0,0,0,0.7)'}, 300 );
			$('#nav2,#nav1, #nav_contact').css({'text-decoration':'none'});
			$('#nav3').css({'text-decoration':'underline'});
			/*animate({'display':'block'}, 1000 );*/
		});
		
		
		$('#container4, #cv_image').waypoint(function() {
			$('#nav2,#nav3, #nav1').css({'text-decoration':'none'});
			$('#nav_contact').css({'text-decoration':'underline'});
			/*animate({'display':'block'}, 1000 );*/
		});
		
		$('.grid1.rect0').mouseover(function(){  
		 $(this).find('div.contenu').stop(true,true).animate({'opacity':'0.1',}, 400 );
		  $(this).find('div.contenu span').stop(true,true).animate({'opacity':'0',}, 400 );
		  $(this).find('div.contenu span').hide();
		}); 
		
		
		$('.grid1.rect0').mouseout(function(){  
		 $(this).find('div.contenu').stop(true,true).animate({'opacity':'1'}, 400 );
		 $(this).find('div.contenu span').stop(true,true).animate({'opacity':'1',}, 400 );
		 $(this).find('div.contenu span').show();
		}); 
	
		$('#form_envoyer').mouseover(function(){  
		$('#form_envoyer').stop(true,true).animate({
			'background-color':'rgba(9,15,16,0.9)', 
			'color':'white'
			}, 400 );
	
		});
		
		$('#form_envoyer').mouseout(function(){  
		$('#form_envoyer').stop(true,true).animate({
			'background-color':'rgba(9,15,16,0.8)', 
			'color':'rgba(255,255,255,0.6)'
			}, 400 );
	
		});
	
	
	  $('#container0 a').mouseover(function(){  
	   $(this).stop(true,true).animate({'font-size':'1.05em'}, 300 );
	  });  
	  
	    $('#container0 a').mouseout(function(){  
	   $(this).stop(true,true).animate({'font-size':'1em'}, 300 );
	  });  
	  
	  
    $('a').click(function(){  
	
        var key = $(this).attr("href");
        $('html, body').animate({scrollTop:$(key).offset().top}, 550);  
     return false;
    });  
	$('#bloc1').fadeIn(1200);
	

		move();
	
		
});  	
		/* ||||||  END READY ||||||*/
	
	function move(){
		  $('#bouton_fleche').delay(50).animate({top:'178px'}, 300).delay(50).animate({top:'164px'}, 300, function(){
		setTimeout(move, 0);
		}); 
		
		 $('#cv_image').delay(50).animate({top:'14px'}, 400).delay(50).animate({top:'0px'}, 400, function(){
		setTimeout(move, 0);
		}); 
		}
		
	function fusee(){
					$("#etoile").fadeIn(500);
					$('.meteor.m1').animate({'top':'90', 'left':'-60'}, 8000);
					$('.meteor.m2').animate({'top':'290', 'left':'-60'}, 5500);
					$('.meteor.m3').animate({'top':'390', 'left':'-60'}, 4150);
					$('.meteor.m4').animate({'top':'190', 'left':'-60'}, 6000);
					$('.meteor.m5').animate({'top':'490', 'left':'-60'}, 7000);
					
					
					$('.meteor2.m1').animate({'top':'490', 'left':'-60'}, 8000);
					$('.meteor2.m2').animate({'top':'20', 'left':'-60'}, 5500);
					$('.meteor2.m3').animate({'top':'60', 'left':'-60'}, 4750);
					$('.meteor2.m4').animate({'top':'590', 'left':'-60'}, 6000);
					$('.meteor2.m5').animate({'top':'890', 'left':'-60'}, 7000);
					
					
					$('.meteor3.m1').animate({'top':'490', 'left':'-60'}, 8000);
					$('.meteor3.m2').animate({'top':'590', 'left':'-60'}, 5500);
					$('.meteor3.m3').animate({'top':'890', 'left':'-60'}, 4750);
					$('.meteor3.m4').animate({'top':'690', 'left':'-60'}, 6000);
					$('.meteor3.m5').animate({'top':'90', 'left':'-60'}, 7000);
					$('#fusee ').animate({'width':'100px','top':'5px', 'right':'5px'}, 7000);
					$('#mars img ').animate({'width':'450px'}, 9000, function(){
						 $("#etoile").fadeOut(300); 
						 
						  $('html, body').scrollTop(0);
						}); 
						}
	

	




