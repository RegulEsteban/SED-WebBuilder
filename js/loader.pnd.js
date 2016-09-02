// JavaScript Document
/************************************************************************************/
/* Cache elements/*
/************************************************************************************/

$(document).ready(function () {	
	$mainContainer= $('#mainContainer');
	$block= $('.block');
	$navLine= $('#navLine');
	$siteLoader= $('.siteLoader');
	$loaderText=$(".loaderText");
	$navbartop = $('.navbar');
	$navbarbottom = $('.navbar-fixed-bottom');
	$footerptp = $('.site-footer');
	$shareButtons = $('#at4-share');

	var i=1;

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
			"/work/models/PTP/programas/pnd/images/Botones/democra_mor.png",		//11
			"/work/models/PTP/programas/pnd/images/Botones/democra_color.png",		//12
			"/work/models/PTP/programas/pnd/images/Botones/democra_blan.png",		//13
			"/work/models/PTP/programas/pnd/images/Botones/cerca_moder_mor.png",	//14
			"/work/models/PTP/programas/pnd/images/Botones/cerca_moder_color.png",	//15
			"/work/models/PTP/programas/pnd/images/Botones/cerca_moder_blan.png",	//16
			"/work/models/PTP/programas/pnd/images/Botones/genero_mor.png",		//17
			"/work/models/PTP/programas/pnd/images/Botones/genero_color.png",		//18
			"/work/models/PTP/programas/pnd/images/Botones/genero_blan.png",		//19
			"/work/models/PTP/programas/pnd/images/Botones/mex_paz_blan.png",		//1
			"/work/models/PTP/programas/pnd/images/Botones/mex_paz_color.png",		//2
			"/work/models/PTP/programas/pnd/images/Botones/mex_inclu_blan.png",	//3
			"/work/models/PTP/programas/pnd/images/Botones/mex_inclu_color.png",	//4
			"/work/models/PTP/programas/pnd/images/Botones/mex_edu_blan.png",		//5
			"/work/models/PTP/programas/pnd/images/Botones/mex_edu_color.png",		//6
			"/work/models/PTP/programas/pnd/images/Botones/mex_pros_blan.png",		//7
			"/work/models/PTP/programas/pnd/images/Botones/mex_pros_color.png",	//8
			"/work/models/PTP/programas/pnd/images/Botones/mex_global_blan.png",	//9
			"/work/models/PTP/programas/pnd/images/Botones/mex_global_color.png"	//10

			]};

	var numberOfImagesPerProject = [1]; 

	/***************************************************/
	$navLine.stop(true, true).toggleClass("slide");
	
	function animateInFirstTime(){
		$block.addClass("animIn");
	}
	setTimeout(animateInFirstTime, 800);
	/***************************************************/

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
	//var switchClass = 0;
	var totalImages = 18;
	var lastImage = "image" + (totalImages-1);
	var imagesLoadedCount = 0;

	function CreateElement() {
		for (var i = 0; i < totalImages; i++) {
			
			// add all the project header images first
			if(i<numberOfImagesPerProject.length) {
				$navbartop.css('position', 'relative');
				$mainContainer.css("visibility","hidden"); 
				
			} else {

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
	"<a href='#'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='/work/models/PTP/programas/pnd/images/Botones/mex_paz_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='/work/models/PTP/programas/pnd/images/Botones/mex_paz_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>M&eacute;xico en Paz</span></div></a>"+
	"<a href='#'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='/work/models/PTP/programas/pnd/images/Botones/mex_inclu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='/work/models/PTP/programas/pnd/images/Botones/mex_inclu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>M&eacute;xico Incluyente</span></div></a>"+
	"<a href='#'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='/work/models/PTP/programas/pnd/images/Botones/mex_edu_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='/work/models/PTP/programas/pnd/images/Botones/mex_edu_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>M&eacute;xico con educaci&oacute;n de calidad</span></div></a>"+
	"<a href='#'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='/work/models/PTP/programas/pnd/images/Botones/mex_pros_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='/work/models/PTP/programas/pnd/images/Botones/mex_pros_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>M&eacute;xico Pr&oacute;spero</span></div></a>"+
	"<a href='#'><div class='mix user-interface interactive item'><div class='workSquare'><div class='workContent'><div class='workTable'><div class='workCell'><img src='/work/models/PTP/programas/pnd/images/Botones/mex_global_blan.png' class='secondInnerIcon socarp-second-innner'/><img src='/work/models/PTP/programas/pnd/images/Botones/mex_global_color.png' class='innerIcons socarp-inner'></div></div></div></div><span class='caption'>M&eacute;xico con Responsabilidad Global</span></div></a>"
	]
	var companyBuildUp="";
	var showLetter="";

	function update() {
		$loaderText.html(companyName[0]);
		if (!Model.isLoaded) {
			
			for (var i = 0; i < (totalImages+1); i++) {
				
				(function(p) {
					setTimeout(function(){
						imagesLoadedCount++;
						
						percentage = parseInt(imagesLoadedCount/totalImages*100);
						
						$siteLoader.css({"transform": "translate3d(" + percentage + "%, 0px, 0px)"});
						
						if(imagesLoadedCount==(totalImages+1)){
							$siteLoader.css({"transform": "translate3d(60%, 0px, 0px)"});
							
							setTimeout(delayCollapseLoader, 400);
						}
					}, 200 * p);
				})(i);
			}
			Model.isLoaded = true;
			return;
		}
	}
	update();

	function delayCollapseLoader(){
		$mainContainer.css("visibility","visible");
		$siteLoader.addClass("animateOff");
		//$siteLoader.css({"transform": "translate3d(200%, 0px, 0px)"});
		$siteLoader.fadeOut(400, function() {});
		$navbarbottom.css('visibility', 'visible');
		$navbartop.css('visibility', 'visible');
		$footerptp.css('visibility', 'visible');
		$shareButtons.remove();

		//addAudio();
		animateAboutTextIn();
			
	}
		
});

//at-share-open-control at-share-open-control-left ats-transparent addthis-animated slideOutLeft at4-hide
//at-share-open-control at-share-open-control-left ats-transparent addthis-animated slideInLeft at4-show