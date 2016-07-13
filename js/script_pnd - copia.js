// JavaScript Document
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/main.css'/>");
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/buttons.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/normalize.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/transitions.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/objetiv-pages.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/hover-effects.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/loader.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/navi-vertical.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/navi-side-menu-style.css'/>"); 
document.write("<link rel='stylesheet' type='text/css' href='http://172.22.75.89/work/models/PTP/programas/pnd/css/jquery.dataTables.min.css'/>"); 

document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/jquery-2.1.0.js'></script>");
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/modernizr_2.8.2.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/loader.pnd.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/modernizr-custom.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/classie.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/main.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/navi-side-menu.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/jquery.csv.js'></script>"); 
document.write("<script type='text/javascript' src='http://172.22.75.89/work/models/PTP/programas/pnd/js/jquery.dataTables.min.js'></script>"); 

         (function() {
         	var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
         		currentPage = 0,
         		antPage = 0,
         		revealerOpts = {
         			// the layers are the elements that move from the sides
         			nmbLayers : 9,
         			nmbTransitions : 1,
         			// bg color of each layer
         			bgcolor : ['#462b60','#24AF85', '#B297C7', '#6FBA69','#EE7436', '#118889', '#5BA199','#BCCF02', '#E84040'],
         			bgImages : ['http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_paz_blan.png',
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_paz_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_inclu_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_edu_blan.png',
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_pros_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/mex_global_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/democra_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/cerca_moder_blan.png', 
         					'http://172.22.75.89/work/models/PTP/programas/pnd/images/Botones/genero_blan.png'],
         			bgTitles : ['Plan Nacional de Desarrollo',
         				'México en Paz',
         				'México Incluyente',
         				'México con Educación de Calidad',
         				'México Próspero',
         				'México con Responsabilidad Global',
         				'Democratizar la Productividad',
         				'Gobierno Cercano y Moderno',
         				'Perspectiva de Género'],
         			// effect classname
         			effect : 'anim--effect-1',
         			onStart : function(direction) {
         				// next page gets class page--animate-[direction]
         				var nextPage = pages[currentPage];
         				classie.add(nextPage, 'page--animate-' + direction);
         			},
         			onEnd : function(direction, prevPage) {
         				// remove class page--animate-[direction] from next page
         				var nextPage = pages[prevPage];
         				nextPage.className = 'page';
         			}
         		};
         
         	revealer = new Revealer(revealerOpts);
         
         	function searchAntPage(){
         		var ide = 0;
         		$( ".page" ).each( function( index, element ){
         		if( $(element).hasClass('page--current') ){
         			ide = parseInt(element.getAttribute("ide"));
         		}
         		});
         		return ide;
         	};
         
         	// clicking the page nav buttons
         	$(".inicioIcon").click(function(){
         		reveal('bottom', '0', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","hidden");
         		$("#id-side-menu").css("visibility","hidden");
         		return false;
         	});
         	$("#pazIcon").click(function(){
         		reveal('bottom', '1', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#incluyenteIcon").click(function(){
         		reveal('bottom', '2', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#educacionIcon").click(function(){
         		reveal('bottom', '3', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#prosperoIcon").click(function(){
         		reveal('bottom', '4', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#globalIcon").click(function(){
         		reveal('bottom', '5', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#productividadIcon").click(function(){
         		reveal('bottom', '6', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#cercanoIcon").click(function(){
         		reveal('bottom', '7', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         	$("#generoIcon").click(function(){
         		reveal('bottom', '8', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","visible");
         		$("#id-side-menu").css("visibility","visible");
         		return false;
         	});
         
         	// triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
         	function reveal(direction, ide, antIde, descProg) {
         		var callbackTime = 750,
         			callbackFn = function() {
         				classie.remove(pages[currentPage], 'page--current');
         				antPage = antIde;
         				currentPage = ide;
         				classie.add(pages[ide], 'page--current');	
         			};
         
         		if(ide === '0'){
         			$("#cd-vertical-nav").css("visibility","hidden");
         			$("#id-side-menu").css("visibility","hidden");
         		}else{
         			$("#cd-vertical-nav").css("visibility","visible");
         			$("#id-side-menu").css("visibility","visible");
         		}
         		revealer.reveal(direction, callbackTime, callbackFn, ide, currentPage, descProg);
         	}
         
         	//Eventos de click de Navegador Lateral
         	$("#navidotIni").click(function(){
         		reveal('bottom', '0', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","hidden");
         		$("#id-side-menu").css("visibility","hidden");
         		return false;
         	});
         	$("#navidotPaz").click(function(){
         		if(searchAntPage() === 1){
         			return;
         		}else{
         			reveal('bottom', '1', searchAntPage());
         			return false;
         		}
         	});
         	$("#navidotInclu").click(function(){
         		if(searchAntPage() === 2){
         			return;
         		}else{
         		reveal('bottom', '2', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotEdu").click(function(){
         		if(searchAntPage() === 3){
         			return;
         		}else{
         		reveal('bottom', '3', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotPros").click(function(){
         		if(searchAntPage() === 4){
         			return;
         		}else{
         		reveal('bottom', '4', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotGlob").click(function(){
         		if(searchAntPage() === 5){
         			return;
         		}else{
         		reveal('bottom', '5', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotDemoc").click(function(){
         		if(searchAntPage() === 6){
         			return;
         		}else{
         		reveal('bottom', '6', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotCerca").click(function(){
         		if(searchAntPage() === 7){
         			return;
         		}else{
         		reveal('bottom', '7', searchAntPage());
         		return false;
         		}
         	});
         	$("#navidotGene").click(function(){
         		if(searchAntPage() === 8){
         			return;
         		}else{
         		reveal('bottom', '8', searchAntPage());
         		return false;
         		}
         	});
         
         	function goToByScroll(id){
         // Reove "link" from the ID
         id = id.replace("link", "");
         // Scroll
         $('html,body').animate({
         scrollTop: $("#"+id).offset().top
         }, 'slow');
         }
         
         $("figure.effect-chico").click(function(e) { 
         // Prevent a page reload when a link is pressed
         e.preventDefault(); 
         $("#loading").fadeIn(500);
         // Call the scroll function++
         goToByScroll($(this).attr("ide"));           
         });
         
         $("#loading-center").click(function() {
         		$("#loading").fadeOut(500);
         	});
         
         	$("#loading").fadeOut(0);
         
         
         	$("#side_menu_0").click(function(){
         		reveal('bottom', '0', searchAntPage());
         		$("#cd-vertical-nav").css("visibility","hidden");
         		$("#id-side-menu").css("visibility","hidden");
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         	});
         	$("#side_menu_1").click(function(){
         		if(searchAntPage() === 1){
         			return;
         		}else{
         		reveal('bottom', '1', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_2").click(function(){
         		if(searchAntPage() === 2){
         			return;
         		}else{
         		reveal('bottom', '2', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_3").click(function(){
         		if(searchAntPage() === 3){
         			return;
         		}else{
         		reveal('bottom', '3', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_4").click(function(){
         		if(searchAntPage() === 4){
         			return;
         		}else{
         		reveal('bottom', '4', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_5").click(function(){
         		if(searchAntPage() === 5){
         			return;
         		}else{
         		reveal('bottom', '5', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_6").click(function(){
         		if(searchAntPage() === 6){
         			return;
         		}else{
         		reveal('bottom', '6', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_7").click(function(){
         		if(searchAntPage() === 7){
         			return;
         		}else{
         		reveal('bottom', '7', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         	$("#side_menu_8").click(function(){
         		if(searchAntPage() === 8){
         			return;
         		}else{
         		reveal('bottom', '8', searchAntPage());
         		$('ul.side-menu').removeClass('open-side-menu');
         	$('body').removeClass('open-side-menu');
         	// Reset menu on close
         	$('ul.side-menu li').css("top", "100%");
         	    $('ul.side-menu h2').css("top", "-60px");
         		return false;
         		}
         	});
         
         	var mapColums = new Object();
         	var mapValues = [];
         	var mapColores = new Object();
         	mapColores['1'] = "bg-paz";
         	mapColores['2'] = "bg-incluyente";
         	mapColores['3'] = "bg-educacion";
         	mapColores['4'] = "bg-prospero";
         	mapColores['5'] = "bg-global";
         	mapColores['6'] = "bg-democra";
         	mapColores['7'] = "bg-cercano";
         	mapColores['8'] = "bg-genero";
         	mapColores['0'] = "bg-inicio";
         	var mapBtnColores = new Object();
         	mapBtnColores['1'] = "btn-paz";
         	mapBtnColores['2'] = "btn-incluyente";
         	mapBtnColores['3'] = "btn-educacion";
         	mapBtnColores['4'] = "btn-prospero";
         	mapBtnColores['5'] = "btn-global";
         	mapBtnColores['6'] = "btn-democra";
         	mapBtnColores['7'] = "btn-cercano";
         	mapBtnColores['8'] = "btn-genero";
         	mapBtnColores['0'] = "btn-inicio";
         	var idProgDeriv = 0;
         	var idMetaNac = -1;
         	var data = "";
         
         	var table_prog = $('#programas_table').DataTable({
         		"columns": [
         { "data": "DESC_ID_PROGRAMA_DERIVADO" },
         { "data": "TIPO_PROGRAMA_DERIVADO" }
         ]
         
         	});
         
         	$.ajax({
         		//url : 'http://172.22.75.89/work/models/PTP/programas/pnd/files/file.txt',
         		url : 'http://172.22.75.89/work/models/PTP/programas/pnd/files/BD_PND.csv',
         		dataType : 'text',
         		async: true,
         		success : function load(d) {
         			data = $.csv.toArrays(d);
         			
         			generateTable(data);
         			/**************************
         			var html = generateTable(data);
         		$('#programas_table').empty();
         		$('#programas_table').html(html);
         		/**************************/
         		}
         	});
         
         
         $('#programas_table tbody').on( 'click', 'tr', function () {
         if ( $(this).hasClass('selected') ) {
         $(this).removeClass('selected');
         }else {
         table_prog.$('tr.selected').removeClass('selected');
         $(this).addClass('selected');
         }
         
         idProgDeriv = $(this).attr('ide_prog_deriv');
         
         $.each(mapValues, function(i, v) {
         		if(v.ID_PROGRAMA_DERIVADO === idProgDeriv){
         			reveal('bottom', v.ID_META_NACIONAL, searchAntPage(), v.DESC_ID_PROGRAMA_DERIVADO);
         			
         			idMetaNac = v.ID_META_NACIONAL;
         			$("div.page[ide="+idMetaNac+"]").append("<div class='header-wrap "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
         			return;
         		}
         		});
         
         		var stringDivObj = '<div class="container-obj"><h1 class="title">Objetivos</h1><div class="content">';
         
         		var mapObjetivos = [];
         		var totalObjetivos = 0;
         		for(var row in data) {
         	if(row > 0){
         		if(data[row][getValueColumn("ID_META_NACIONAL")] == idMetaNac){
         				if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv){
         	          			var itemMap = {};
         		          		var exist = false;	
         		          		itemMap["ID_OBJETIVO"] = data[row][getValueColumn("ID_OBJETIVO")];
         		          		itemMap["DESC_OBJETIVO"] = data[row][getValueColumn("DESC_OBJETIVO")];
         
         		          		$.each(mapObjetivos, function(i, v) {
         			          		if(v.ID_OBJETIVO === itemMap["ID_OBJETIVO"]){
         			          			exist = true;
         			          			return;
         			          		}
         						});
         
         						if(!exist){
         							totalObjetivos++;
         			          		mapObjetivos.push(itemMap);
         			          	}
         
         	          		}
         		}
         	}
         }
         
         if(totalObjetivos < 4){
         		stringDivObj+='<div class="grid">';
         		$.each(mapObjetivos, function(i, v) {
         			stringDivObj+='<figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/mira.png" class="mira" /></figcaption></figure>';
         			});
         		stringDivObj+='</div>';
         }else{
         	var cellByRow = totalObjetivos/2;
         	if(totalObjetivos%2 != 0){
         		cellByRow = Math.round(cellByRow);
         	}
         		stringDivObj+='<div class="grid">';
         		$.each(mapObjetivos, function(i, v) {
         			
         			if(cellByRow == i){
         				stringDivObj+='</div><div class="grid"><figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/mira.png" class="mira" /></figcaption></figure>';
         			}else{
         				stringDivObj+='<figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/mira.png" class="mira" /></figcaption></figure>';
         			}
         			});
         		stringDivObj+='</div>';
         
         }
         stringDivObj+="</div>";
         
         
         stringDivObj+='<div class="content-buttons"><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-search">Programa</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-search">Decreto</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Logros (LD)</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Datos abiertos</button></div>';
         
         stringDivObj+='<div class="content-buttons"><button class="btn '+getColorsMeta(idMetaNac)+' btn-3e"><span>11</span> Instituciones Participantes</button><button class="btn '+getColorsMeta(idMetaNac)+' btn-1b">Descarga la <span>Guía Rápida</span> del Programa<img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/guia_ciu.png"></button></div>';
         
         
         stringDivObj+="</div>";
         
         
         		$("div.page[ide="+idMetaNac+"]").append(stringDivObj);
         });
         
         	function generateTable(data) {
         
         if(typeof(data[0]) === 'undefined') {
         return null;
         }
         
         if(data[0].constructor === Array) {
         for(var item in data[0]) {
         mapColums[""+data[0][item]+""] = item;
         }
         }
         
         if(data[0].constructor === Array) {
         	
         for(var row in data) {
         if(row > 0){
         	var itemMap = {};
         	var exist = false;
         	itemMap["ID_META_NACIONAL"] = data[row][getValueColumn("ID_META_NACIONAL")];
         	itemMap["ID_PROGRAMA_DERIVADO"] = data[row][getValueColumn("ID_PROGRAMA_DERIVADO")];
         	itemMap["DESC_ID_PROGRAMA_DERIVADO"] = data[row][getValueColumn("DESC_ID_PROGRAMA_DERIVADO")];
         	itemMap["TIPO_PROGRAMA_DERIVADO"] = data[row][getValueColumn("TIPO_PROGRAMA_DERIVADO")];
         	
         	$.each(mapValues, function(i, v) {
         		if(v.ID_PROGRAMA_DERIVADO === itemMap["ID_PROGRAMA_DERIVADO"]){
         
         			/*var idsMetasValues = String(v.ID_META_NACIONAL).split('#');
         			var idsMetasBd = String(itemMap["ID_META_NACIONAL"]).split('#');
         			$.each(idsMetasBd, function(k, valueBD) {
         				$.each(idsMetasValues, function(j, valueMap) {
         					if(valueBD === valueMap){
         						itemMap["ID_META_NACIONAL"]+="#"+valueBD;
         						return;
         					}else{
         						return;
         					}
         				});	
         			});*/
         
         			exist = true;
         			return;
         		}
         			});
         
         	if(!exist){
         		var rowProg = table_prog.row.add(itemMap).draw();
         		table_prog.rows(rowProg).nodes().to$().attr("ide_prog_deriv", itemMap["ID_PROGRAMA_DERIVADO"]);
         		mapValues.push(itemMap);
         	}
         			
         }
         
         }
         //console.log(JSON.stringify(mapValues));
         //table_prog.rows.add(mapValues).draw();
         }
         
         }
         
         function getValueColumn(k) {
         	return mapColums[k];
         	}
         
         	function getColorsMeta(k) {
         	return mapColores[k];
         	}
         
         	function getBtnColorsMeta(k) {
         	return mapBtnColores[k];
         	}
         
         })();