// JavaScript Document
/************************************************************************************/
/* Cache elements/*
/************************************************************************************/

$(window).on('beforeunload', function(){
  $("body, html").scrollTop(0);
});

$(document).ready(function () {	
	$nextProject = $('.nextProject'); 
	$projectVisual = $('#projectVisual'); 
	$left = $('.left'); 
	$right = $('.right');
	$viewProject = $('.viewProject');
	$viewProject2 = $('.viewProject2');
	$arrow = $('.arrow');
	$projectImage = $('.projectImage');
	$wrapper = $('.wrapper');
	$navContainer= $('.navContainer');
	$mainContainer= $('#mainContainer');
	$copy = $('#copy'); 
	$nextProjectWrapper= $('.nextProjectWrapper');
	$whiteDot= $('.whiteDot');
	$viewProjectWrapper =$('.viewProjectWrapper');
	$block= $('.block');
	$viewText = $('#viewText');	
	$navLine= $('#navLine');
	$siteLoader= $('.siteLoader');
	$topNav= $('.topNav');
	$project=$(".project");
	$loaderText=$(".loaderText");
	$loaderTextAnmount=$(".loaderTextAnmount");
	$diagLine=$(".diagLine");
	$rightBorder = $(".rightBorder");
	$burger = $(".burger");
	
	$logo = $(".logo");
	$copyright = $(".copyright");
	
	//$audioToggle = $(".audioToggle");
	//$companyNameType = $(".companyNameType");
	var glitch = new Glitch();
	var projectOpen = 0;
	var activeProjectNumber = 1;
	var nextProject = 0;
	var mouseInsideNav = 0;
	var perc2=0;
	$scrollDistance = 0; 
	var client;
	var allowClickNow=1;
	var i=1;
	var expand=0;
	var shitter = 20;
	var flipAnimationInProgress = 0;
	var myTimeout1;
	var myTimeout2;
	var myTimeout3;	
	
	$anim1 = $(".anim1");
	$anim2 = $(".anim2");
	$anim3 = $(".anim3");
	$anim4 = $(".anim4");
	$anim5 = $(".anim5");
	$anim6 = $(".anim6");
	$anim7 = $(".anim7");
	$anim8 = $(".anim8");
	
	//$audioToggle.css("visibility", "hidden");
	
	
	
		
/***************************************************/

var Model = {isLoaded: false,
			items: [
			// project header images
			"IMG/poo2.jpg",
			"IMG/C&Aheader.jpg",
			"IMG/diadoraHeading.jpg",
			"IMG/inboard.jpg",
			"IMG/youtubeHeader.jpg",
			// project01
			"IMG/swiss01.jpg",
			"IMG/swiss02.jpg",
			"IMG/swiss03.jpg",
			"IMG/swiss04.jpg",
			"IMG/swiss05.jpg",
			// project02
			"IMG/C&A01.jpg",
			"IMG/C&A02.jpg",
			"IMG/C&A03.jpg",
			"IMG/C&A04.jpg",
			// project03
			"IMG/diadora01.jpg",
			"IMG/diadora04.jpg",
			"IMG/diadora03.jpg",
			"IMG/diadora05.jpg",
			// project04
			"IMG/inboard01.jpg",
			"IMG/inboard03.jpg",
			// project05
			"IMG/youtube01.jpg",
			"IMG/youtube02.jpg",
			"IMG/youtube03.jpg",
			"IMG/youtube04.jpg",
			"IMG/youtube05.jpg",
			]};

var numberOfImagesPerProject = [5,4,4,2,5]; 
var headerBackgroundColor = ["#1e232f","#e5cebb","#ffe102","#fe0034","#0e0a21"];
var imagePosition = [/*project 02*/ "left","centre","left","right","left",/*project 01*/"left","centre","right","centreBottom",/*project 03*/"left","centre","left","right",/*project 04*/"left","centre",/*project 05*/"left","right","left","right","left"];
var fullwidthBackgroundColor = ["#131721","#e5cebb","#e5cebb", "#ffe500", "#1b1a1e"]


var bodyColor = ["#fff","#f8f8f8","#fff","#fff","#160726"];
$projectImage.css("background-color",headerBackgroundColor[0]); 

	/***************************************************/
	$navLine.stop(true, true).toggleClass("slide");
	function animateInFirstTime(){
	$block.addClass("animIn");
	}
	setTimeout(animateInFirstTime, 800);
	/***************************************************/
	
	$(".nextProject1").parent().find(".whiteDot").css({ opacity: 1 });
	$(".nextProject1").parent().find(".navNum").css({ 'color': '#161921' }); 
		

function updateInfo(){
		$(".projectNumber").replaceWith('<h1 class="projectNumber">0'+activeProjectNumber+"</h1>");
		$(".client").replaceWith('<h2 class="client">'+client+"</h2>");
	}


function swapImage(){
			$(".headerWrapper").css("visibility","hidden"); 
			$(".headerWrapper"+parseInt(activeProjectNumber-1)).css("visibility", "visible");
			updateGlitchImage();
}
	
function updateGlitchImage() {
	var wrapper = $(".headerWrapper" + parseInt(activeProjectNumber - 1));
	// Update the glitch image for the selected project.
	var image = wrapper.data('image');
	glitch.setImagePath(image);
	// Add the glitch element to the current header.
	wrapper.find('.largeHeader').append(glitch.domElement);
}

function allowClick(){
 			$projectVisual.removeClass( "flip");
 			nextProject=0;
			$block.addClass("animIn");
			flipAnimationInProgress=0;
			allowClickNow=1;
			if (mouseInsideNav==0) {
			 $projectImage.removeClass("animateBorder"); 	 
			}
			
		
}



/***************************************************/
$nextProjectWrapper.hover(
  function() {
	
	  //$(this).find(".whiteDot").addClass("over");
	  //clearTimeout(expandLine);
	  setTimeout(expandLine, 200);
      $(this).find(".nextProject").addClass("over");
	  $(this).find(".navNum").addClass("over");
	
	 
  }, function() {
	 
	// $(this).find(".whiteDot").removeClass("over");
	 //clearTimeout(expandLine);
	 setTimeout(expandLine, 200);
     $(this).find(".nextProject").removeClass("over");
	 $(this).find(".navNum").removeClass("over");
	  
	 
  }
);



var burgerMenuOpen = 0;
$burger.click(function() {
	if (burgerMenuOpen ==0) {
		
		 $("body, html").animate({ scrollTop: "-200px" },{
        	complete : function(){
			handleClicks(0);
			burgerMenuOpen=1; 
        	}
		});
		
	} else if(burgerMenuOpen ==1) {
		handleClicks(1);
		burgerMenuOpen=0;
	}
	
});

$(".projMenu").on('tap', function(e) { 
    num = $(this).data('num');
	client = $(this).data('client');
	updateProject(num, client);
});



$(".projMenu").click(function() {
	num = $(this).data('num');
	client = $(this).data('client');
	updateProject(num, client);
});

function updateProject(num, client) {
	$("body, html").scrollTop(-200);
	activeProjectNumber = num;
	if (num==0){
		handleClicks(1);
		$left.attr("style", "display: none !important");
		$right.attr("style", "display: block !important");
		$right.attr("style", "visibility: visible");
		$(".project").hide();
		$("body").css("overflow-y", 'hidden');
		$("body").css("overflow-x", 'hidden');
	
	}else {
	handleClicks(1);
	$left.attr("style", "display: block !important");
	$right.css("display","none");
	updateInfo();
	swapImage();
	$(".project").css("display","none");
	
    var originalSrc = $(".project"+parseInt(activeProjectNumber)).css('backgroundColor');
    $(".project"+parseInt(activeProjectNumber)).attr("style", "display: block !important;" + "background-color:"+originalSrc);    

	
	$("body").css("overflow-y", 'scroll');
	$("body").css("overflow-x", 'hidden');
	$("body").css("height", 'auto');
	}	
}

$(window).on('resize', function(){
      var win = $(this); //this = window
	  
	 
	 
		
		
		
	  if (win.width() <= 800) {
			$burger.css("display","block");
			$(".project").hide();
			//$(".project").css("display","hidden");
			
		}else {
			$burger.css("display","none");
		}
      if (win.width() >= 800) {
		   $navLine.css('top',54);
		   
		   
		   
		   $viewProjectWrapper.removeClass("dockHome");
		   $viewText.removeClass("dockHome");
		   projectOpen=0;
		    $left.css({cursor:"pointer"});
		   
		   $(".whiteDot").css({ opacity: 0 });
		   $(".navNum").css({ 'color': '#999' });
		   
		   $(".whiteDot1").css({ opacity: 1 });
		   $(".navNum1").css({ 'color': '#161921' });
		   
		   activeProjectNumber=1;
	 	 	$(".projectNumber").replaceWith('<h1 class="projectNumber">01'+"</h1>");
	 		client = $(".startProj").data('client');
	  		$(".client").replaceWith('<h2 class="client">'+client+"</h2>");
			
		  	$("body").removeClass("menuOpen");
			$right.removeClass("rightOut");
			$left.removeClass("rightOut");
			$(".project").removeClass("rightOut");
			$(".projMenu0").removeClass("nav0");
			$(".projMenu1").removeClass("nav1");
			$(".projMenu2").removeClass("nav2");
			$(".projMenu3").removeClass("nav3");
			$(".projMenu4").removeClass("nav4");
			$(".projMenu5").removeClass("nav5");
			$(".projMenu6").removeClass("nav6");
			$burger.removeClass("open");
			$(".menuOverlay").removeClass("menuOut");
			$(".topNav").removeClass("fadeNav");
			$right.css("display" ,"block");
			$left.removeClass("expand");
			$right.removeClass("expand");
			$navContainer.removeClass("expand");
			$("body").css("overflow-y", 'hidden');
			$("body").css("overflow-x", 'hidden');
			$("#copy").removeClass("expand");
			animateAboutTextIn();
			activeProjectNumber=1;
			
			updateInfo()
			swapImage()
		
		  /* ... */ }
		  

     
});



/*$burger.on('click', handleClicks);*/

$burger.on('tap', function(e) { 
    handleClicks(); 
});


	function handleClicks(num) {
		if (num ==0) {
			$(".menuOverlay").addClass("menuOut");
			$right.addClass("rightOut");
			$left.addClass("rightOut");
			$(".project").addClass("rightOut");
			$("body").addClass("menuOpen");
			$(".projMenu0").addClass("nav0");
			$(".projMenu1").addClass("nav1");
			$(".projMenu2").addClass("nav2");
			$(".projMenu3").addClass("nav3");
			$(".projMenu4").addClass("nav4");
			$(".projMenu5").addClass("nav5");
			$(".projMenu6").addClass("nav6");
			$burger.addClass("open");
			$(".topNav").addClass("fadeNav");
			
	}if(num ==1) {
			
			$("body").removeClass("menuOpen");
			$right.removeClass("rightOut");
			$left.removeClass("rightOut");
			$(".menuOverlay").removeClass("menuOut");
			$(".project").removeClass("rightOut");
			$(".projMenu0").removeClass("nav0");
			$(".projMenu1").removeClass("nav1");
			$(".projMenu2").removeClass("nav2");
			$(".projMenu3").removeClass("nav3");
			$(".projMenu4").removeClass("nav4");
			$(".projMenu5").removeClass("nav5");
			$(".projMenu6").removeClass("nav6");
			$burger.removeClass("open");
			
			$(".topNav").removeClass("fadeNav");
			
	
}
}



$nextProjectWrapper.click(function() {
	
	$(".whiteDot").css({ opacity: 0 });
	$(".navNum").css({ 'color': '#999' });
	
	$(this).find(".whiteDot").css({ opacity: 1 });
	$(this).find(".navNum").css({ 'color': '#161921' });
	
if (allowClickNow ==1) {
	allowClickNow=0;
	$("body, html").scrollTop(0);
	$scrollDistance = 0;
    $block.removeClass("animIn");
    flipAnimationInProgress=1;
	var num = $(this).find(".nextProject").data('num');
	client = $(this).find(".nextProject").data('client');
	if(num !==activeProjectNumber) {
		activeProjectNumber = num;
		$navLine.stop(true, true).addClass("slide");
	  	 var poo = $(this).offset().top - $navContainer.offset().top+54+"px";
	    $navLine.css('top',poo);
		
		if (projectOpen==1) {
			$(".project").hide();
			$(".project"+parseInt(activeProjectNumber)).show();
		}
			i++
			nextProject=1;
  			$projectVisual.addClass( "flip");
		if(i>2) {
			i=1;
			
		}
	}
	
		clearTimeout(myTimeout1);
		clearTimeout(myTimeout2);
		clearTimeout(myTimeout3);
		myTimeout1 = setTimeout(allowClick, 800);
		myTimeout2 = setTimeout(swapImage, 160);
		myTimeout3 = setTimeout(updateInfo, 160);
		
	
	}
});



$navContainer
  .mouseover(function() {
	  mouseInsideNav = 1;
	  if (flipAnimationInProgress==0) {
   	  $projectImage.addClass("animateBorder");
	  
	    }
  })
  .mouseout(function() {
	   mouseInsideNav = 0;
	   
	   if (flipAnimationInProgress==0) {
		    $projectImage.removeClass("animateBorder");
	   }
  });
  
  
 








/***************************************************/

function expandLine(){
	// $(this).find(".whiteDot").toggleClass("over");
}

/***************************************************/
$viewProjectWrapper.css( 'pointer-events', 'none' );


/***************************************************/
$left.mouseover(function() {
	  if(projectOpen==0) {
		  
    $projectImage.addClass("animateBorder");
	$viewProjectWrapper.find(".viewProject2").addClass("over");
	$viewProjectWrapper.find(".viewProject").addClass("over");
	$viewProjectWrapper.addClass("over");
	  }
 })
  .mouseleave(function() {
	 
    $projectImage.removeClass("animateBorder");
	$viewProjectWrapper.find(".viewProject2").removeClass("over");
  	$viewProjectWrapper.find(".viewProject").removeClass("over");
	$viewProjectWrapper.removeClass("over"); 
  }
);


  $navContainer
  .mouseenter(function() {
	  
	  $scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
	 
	  
	 if (projectOpen == 1) {
	  //$project.css('margin-top', $scrollDistance+"px");
	  $project.css({"transform": "translate3d(0px, " + $scrollDistance + "px, 0px)"});
	  }
  })
  .mouseleave(function() {
	  if (projectOpen == 1) {
		   //$project.css('margin-top', "0px");
		    $project.css({"transform": "translate3d(0px, " + 0 + "px, 0px)"});
	  }
  });
  
  
  

 $viewProjectWrapper.hover(
  function() {
	  if(projectOpen==1) {
		  
     $(this).addClass("animateBorder");
	 $(this).find(".viewProject2").addClass("over");
	 $(this).find(".viewProject").addClass("over");
	 $(this).addClass("over");
	  }
  }, function() {
	  if(projectOpen==1) {
     $(this).removeClass("animateBorder");
	 $(this).find(".viewProject2").removeClass("over");
  	 $(this).find(".viewProject").removeClass("over");
	 $(this).removeClass("over"); 
	  }
  }
);





/***************************************************/

/*$viewProjectWrapper.click(function() {*/	

$left.click(function() {	
  // $("body, html").scrollTop(0);
if (projectOpen == 0) {
	projectOpen = 1
	$left.css({cursor:"default"});
	$projectImage.removeClass("animateBorder");
	$viewText.text("Back Home");
	$viewProjectWrapper.addClass("dockHome");
	$viewText.addClass("dockHome");
	$("body").css("overflow-y", 'scroll');
	$("body").css("overflow-x", 'hidden');
	$navContainer.addClass("expand");
	$left.addClass("expand");
	$right.addClass("expand");
	$(".viewProject").removeClass("over");
	$(".viewProject2").removeClass("over");
	$viewProjectWrapper.removeClass("over");
	$copy.addClass("expand");
	$viewProjectWrapper.css( 'pointer-events', 'auto' );
	
	$(".project").hide();
	$(".project"+parseInt(activeProjectNumber)).show();
	animateAboutTextOut();
	}
});


function animateAboutTextIn () {
	setTimeout(function(){$anim1.addClass("slidein");}, 500);
	//setTimeout(function(){$anim2.addClass("slidein");}, 550);
	setTimeout(function(){$anim3.addClass("slidein");}, 600);
	setTimeout(function(){$anim4.addClass("slidein");}, 650);
	setTimeout(function(){$anim5.addClass("slidein");}, 700);
	setTimeout(function(){$anim6.addClass("slidein");}, 750);
	setTimeout(function(){$anim7.addClass("slidein");}, 800);
	setTimeout(function(){$anim8.addClass("slidein");}, 850);
}

function animateAboutTextOut () {
	
	//$anim2.removeClass("slidein");
	$anim3.removeClass("slidein");
	$anim4.removeClass("slidein");
	$anim5.removeClass("slidein");
	$anim6.removeClass("slidein");
	$anim7.removeClass("slidein");
	$anim8.removeClass("slidein");

}




$viewProjectWrapper.click(function() {	

$("#copywrapper").animate({ scrollTop:0 });
if (projectOpen == 1) {
	 projectOpen = 0
	$(".viewProject").removeClass("over");
	$(".viewProject2").removeClass("over");
	$viewProjectWrapper.css( 'pointer-events', 'none' );
	 $projectImage.addClass("animateBorder");
	 $left.css({cursor:"pointer"});
	if (  $("body, html").scrollTop()>0) {
		 $("body, html").animate({ scrollTop:0 }, {
		 complete : function(){	 	
       
		$viewText.text("View Project");
		$viewProjectWrapper.removeClass("dockHome");
		$viewText.removeClass("dockHome");
		$("body").css("overflow-y", 'hidden');
		$("body").css("overflow-x", 'hidden');
		$navContainer.removeClass("expand");
		$left.removeClass("expand");
		$right.removeClass("expand");
		$viewProject.removeClass("expand");
		$copy.removeClass("expand");
		animateAboutTextIn();
        },
            duration: 400,
            easing: "easeInOutExpo"
        });
	}else {
		projectOpen = 0
		$viewText.text("View Project");
		$viewProjectWrapper.removeClass("dockHome");
		$viewText.removeClass("dockHome");
		$("body").css("overflow-y", 'hidden');
		$("body").css("overflow-x", 'hidden');
		$navContainer.removeClass("expand");
		$left.removeClass("expand");
		$right.removeClass("expand");
		$viewProject.removeClass("expand");
		$copy.removeClass("expand");
		animateAboutTextIn();
}

	 $("body, html").animate({ scrollTop: "0px" },{
        complete : function(){ 
        }
		
    }
);	
	
}
	$(".project").hide();
	$(".project"+parseInt(activeProjectNumber)).show();
	

 });
		


var t=1;
var arrayNumber = 0;
var f=0;
var j=0;
var a=0;
var switchClass = 0;
var totalImages = 6;
var lastImage = "image" + (totalImages-1);
var imagesLoadedCount = 0;
console.log(lastImage);

function CreateElement() {
	for (var i = 0; i < 6; i++) {
		
		// add all the project header images first
		
		if(i<numberOfImagesPerProject.length) {
			var imgHeader =  document.createElement("IMG");	
			imgHeader.class = "imageHeader";	
			imgHeader.src =  Model.items[i];
			
			$projectImage.append('<div class ="headerWrapper headerWrapper'+parseInt(i)+'"><div class ="largeHeader" id="imageHeader'+parseInt(i)+'"></div></div>');
			
			var $wrapper = $('.headerWrapper' + parseInt(i));
			$wrapper.css("width", "100%"); 
			$wrapper.css("height","100%");
			$wrapper.css("position","absolute");  
			$wrapper.css("top","0px"); 
			$wrapper.css("left","0px");
			$wrapper.css("background-color",headerBackgroundColor[i]); 
			$(".project"+parseInt(i+1)).css("background-color",bodyColor[parseInt(i)]);
			$wrapper.data('image', Model.items[i]);
			// $("#imageHeader"+parseInt(i)).css("background-image", "url("+Model.items[i]+")"); 
			$wrapper.css("visibility","hidden"); 
			$('.largeHeader').css("z-index","1");

			$mainContainer.css("visibility","hidden"); 
			
	} else {
			var img =  document.createElement("IMG");	
			img.id = "image"+i;	
			
	
			if (imagePosition[a]=="left") {
				img.class = "projectImages";
				img.src =  Model.items[i];
				$proj = $(".project"+t);
				$proj.find(".imagesWrapper").append(img);
				$("#image"+i).addClass(img.class);	
			}else if(imagePosition[a]=="right") {
				img.class = "projectImages2";
				img.src =  Model.items[i];
				$proj = $(".project"+t);
				$proj.find(".imagesWrapper").append(img);
				$("#image"+i).addClass(img.class);
			}else if(imagePosition[a]=="centre") {
				img.class = "projectImages3";
				img.src =  Model.items[i];
				$proj = $(".project"+t);
				$proj.find(".imagesWrapper").append('<div class="fullwidth'+j+'"></div>');
				$proj.find(".imagesWrapper").find(".fullwidth"+j).append(img);
				$(".fullwidth"+j).addClass("fullwidth");
				$(".fullwidth"+j).css("background-color",fullwidthBackgroundColor[j]); 	
				$("#image"+i).addClass(img.class);
				j++;
			}else if(imagePosition[a]=="centreBottom") {
				img.class = "projectImages3";
				img.src =  Model.items[i];
				$proj = $(".project"+t);
				$proj.find(".imagesWrapper").append('<div class="fullwidth'+j+'"></div>');
				$proj.find(".imagesWrapper").find(".fullwidth"+j).append(img);
				$(".fullwidth"+j).addClass("fullwidthBottom");
				$(".fullwidth"+j).css("background-color",fullwidthBackgroundColor[j]); 	
				$("#image"+i).addClass(img.class);
				j++;	

			}

			// create the project images and add them to the canvas
			f++
			a++;
			
			if (f>= numberOfImagesPerProject[(arrayNumber)]) {
				numberOfImagesPerProject[(arrayNumber)]
				t++
				arrayNumber++
				//switchClass=0;
				f=0;
				
			}
			 
		}	
			
	}
			
}

CreateElement();

var companyName = [
"<a href='#0' id='pazIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a>",
"<a href='#0' id='pazIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' id='incluyenteIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a>",
"<a href='#0' id='pazIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' id='incluyenteIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' id='educacionIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a>",
"<a href='#0' id='pazIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' id='incluyenteIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' id='educacionIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' id='prosperoIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a>",
"<a href='#0' id='pazIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' id='incluyenteIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' id='educacionIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' id='prosperoIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' id='globalIcon'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>"
]
var companyBuildUp="";
var showLetter="";

function update() {
	requestAnimationFrame(update);
	if (document.getElementById(lastImage).complete && !Model.isLoaded) {
		
		console.log("loaded");
		for (var i = 0; i < 7; i++) {
			
			(function(p) {
				setTimeout(function(){
					imagesLoadedCount++;
					
					showLetter = companyName[parseInt(imagesLoadedCount/6*13)];
					
					percentage = parseInt(imagesLoadedCount/6*100);
					
					
					
					$loaderText.html(showLetter);
					
					$loaderTextAnmount.text(imagesLoadedCount+"/"+6+" images");
					
					console.log(imagesLoadedCount + " | " + percentage);
					
					$siteLoader.css({"transform": "translate3d(" + percentage + "%, 0px, 0px)"});
					
					if(imagesLoadedCount==7){
						$siteLoader.css({"transform": "translate3d(60%, 0px, 0px)"});
						
						setTimeout(delayCollapseLoader, 400);
					}
				}, 350 * p);
			})(i);
		}
		Model.isLoaded = true;
		$('.headerWrapper0').css("visibility","visible");
		return;
	}
}
update();



function delayCollapseLoader(){
	if ($(window).width()<800) {
		$burger.css("display","block");
		/*$left.on('mouseover', function() { return false; });*/
	}
	 	$left.css("visibility", "visible");
		$right.css("visibility", "visible");
		$copyright.css("visibility", "visible");
		$logo.css("visibility", "visible");
		$navContainer.css("visibility", "visible");
		$topNav.css("visibility", "visible");
		$mainContainer.css("visibility","visible");
		$siteLoader.addClass("animateOff");
		$siteLoader.css({"transform": "translate3d(" + 200 + "%, 0px, 0px)"});
		$left.css("display","table-cell"); 
		$rightBorder.css("display","block");
		// Set initial glitch image in next render.
		setTimeout(updateGlitchImage, 0);
		//addAudio();
		animateAboutTextIn();
		
		}

/***************************************************/


 $(window).scroll(function(){	
	if(  document.documentElement.scrollTop || document.body.scrollTop >100) {
		glitch.disable();
		$viewText.css("color", "#000");	
		$viewProject.css("background-color", "#000");
		$viewProject2.css("background-color", "#000");
		$projectImage.addClass('scrolled');
	}else {
		glitch.enable();
		$viewText.css("color", "#fff");
		$viewProject.css("background-color", "#fff");
		$viewProject2.css("background-color", "#fff");
		 $projectImage.removeClass('scrolled');
	}
});





});