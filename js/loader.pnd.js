// JavaScript Document
/************************************************************************************/
/* Cache elements/*
/************************************************************************************/

$(document).ready(function () {	
	$left = $('.left'); 
	$right = $('.right');
	$projectImage = $('.projectImage');
	$wrapper = $('.wrapper');
	$navContainer= $('.navContainer');
	$mainContainer= $('#mainContainer');
	$block= $('.block');
	$navLine= $('#navLine');
	$siteLoader= $('.siteLoader');
	$topNav= $('.topNav');
	$loaderText=$(".loaderText");
	$loaderTextAnmount=$(".loaderTextAnmount");
	$rightBorder = $(".rightBorder");
	$burger = $(".burger");
	

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

	var Model = {isLoaded: false,
			items: [
			// project header images
			"images/Botones/autonomo_blan.png",
			"images/Botones/autonomo_color.png",
			"images/Botones/cerca_moder_mor.png",
			"images/Botones/cerca_moder_color.png",
			"images/Botones/mex_paz_color.png",
			// project01
			"images/Botones/mex_paz_blan.png",
			"images/Botones/mex_pros_color.png",
			"images/Botones/mex_pros_blan.png",
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
		
	function updateGlitchImage() {
		var wrapper = $(".headerWrapper" + parseInt(activeProjectNumber - 1));
		// Update the glitch image for the selected project.
		var image = wrapper.data('image');
		glitch.setImagePath(image);
		// Add the glitch element to the current header.
		wrapper.find('.largeHeader').append(glitch.domElement);
	}

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

	var t=1;
	var arrayNumber = 0;
	var f=0;
	var j=0;
	var a=0;
	var switchClass = 0;
	var totalImages = 6;
	var lastImage = "image" + (totalImages-1);
	var imagesLoadedCount = 0;

	function CreateElement() {
		for (var i = 0; i < 6; i++) {
			
			// add all the project header images first
			if(i<numberOfImagesPerProject.length) {
				// var imgHeader =  document.createElement("IMG");	
				// imgHeader.class = "imageHeader";	
				// imgHeader.src =  Model.items[i];
				
				// $projectImage.append('<div class ="headerWrapper headerWrapper'+parseInt(i)+'"><div class ="largeHeader" id="imageHeader'+parseInt(i)+'"></div></div>');
				
				// var $wrapper = $('.headerWrapper' + parseInt(i));
				// $wrapper.css("width", "100%"); 
				// $wrapper.css("height","100%");
				// $wrapper.css("position","absolute");  
				// $wrapper.css("top","0px"); 
				// $wrapper.css("left","0px");
				// $wrapper.css("background-color",headerBackgroundColor[i]); 
				// $(".project"+parseInt(i+1)).css("background-color",bodyColor[parseInt(i)]);
				// $wrapper.data('image', Model.items[i]);
				// // $("#imageHeader"+parseInt(i)).css("background-image", "url("+Model.items[i]+")"); 
				// $wrapper.css("visibility","hidden"); 
				// $('.largeHeader').css("z-index","1");

				// $mainContainer.css("visibility","hidden"); 
				
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
	"<a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>",
	"<a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>",
	"<a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>",
	"<a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>",
	"<a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México en Paz</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Incluyente</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con educación de calidad</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México Próspero</span></div></a><a href='#0' ><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>México con Responsabilidad Global</span></div></a>"
	]
	var companyBuildUp="";
	var showLetter="";

	function update() {
		
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
		$navContainer.css("visibility", "visible");
		$topNav.css("visibility", "visible");
		$mainContainer.css("visibility","visible");
		$siteLoader.addClass("animateOff");
		$siteLoader.fadeOut( "slow", function() {});
		$left.css("display","table-cell"); 
		$rightBorder.css("display","block");
		// Set initial glitch image in next render.
		setTimeout(updateGlitchImage, 0);
		//addAudio();
		animateAboutTextIn();
			
	}
		
});