
(function() {
	
   console.log("*********************************** Yo soy el chido ******************************");

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
   $("#pazIcon").click(function(){
      addFilterTable('1');
      return false;
   });
   $("#incluyenteIcon").click(function(){
      addFilterTable('2');
      return false;
   });
   $("#educacionIcon").click(function(){
      addFilterTable('3');
      return false;
   });
   $("#prosperoIcon").click(function(){
      addFilterTable('4');
      return false;
   });
   $("#globalIcon").click(function(){
      addFilterTable('5');
      return false;
   });
   $("#productividadIcon").click(function(){
      addFilterTable('6');
      return false;
   });
   $("#cercanoIcon").click(function(){
      addFilterTable('7');
      return false;
   });
   $("#generoIcon").click(function(){
      addFilterTable('8');
      return false;
   });

   function addFilterTable(meta_selected){
      $.fn.dataTableExt.afnFiltering.length = 0;
      table_prog.draw();

      var initial = false;
      var desactiveAll = true;
      var sinFiltro = false;
      $("div.mix").each(function(index, el) {
         var ideMetaIcon = el.getAttribute('ideMetaIcon');
         if(ideMetaIcon != undefined && meta_selected != ideMetaIcon){
            if($(el).hasClass('item')){
               initial = true;
            }else{
               initial = false;
               return false;
            }
         }
      });

      $("div.mix").each(function(index, el) {
         var ideMetaIcon = el.getAttribute('ideMetaIcon');
         if(ideMetaIcon != undefined && meta_selected != ideMetaIcon){
            if($(el).hasClass('item')){
               desactiveAll = false;
            }else{
               desactiveAll = true;
               return false;
            }
         }
      });

      if(initial && $("div.mix[ideMetaIcon="+meta_selected+"]").hasClass('item')){
         $("div.mix").each(function(index, el) {
            var ideMetaIcon = el.getAttribute('ideMetaIcon');
            if(ideMetaIcon != undefined && meta_selected != ideMetaIcon){
               if(parseInt(ideMetaIcon) < 6){
                  $(el).addClass('item_active');
                  $(el).removeClass('item');
               }else if(parseInt(ideMetaIcon) > 5){
                  $(el).addClass('item_active_inverse');
                  $(el).removeClass('item');
               }
            }
         });
      }else if(desactiveAll && $("div.mix[ideMetaIcon="+meta_selected+"]").hasClass('item')){
         $("div.mix").each(function(index, el) {
            var ideMetaIcon = el.getAttribute('ideMetaIcon');
            if(ideMetaIcon != undefined && meta_selected != ideMetaIcon){
               if(parseInt(ideMetaIcon) < 6){
                  $(el).addClass('item');
                  $(el).removeClass('item_active');
               }else if(parseInt(ideMetaIcon) > 5){
                  $(el).addClass('item');
                  $(el).removeClass('item_active_inverse');
               }
            }
         });
         sinFiltro = true;
      }else if(desactiveAll && !$("div.mix[ideMetaIcon="+meta_selected+"]").hasClass('item')){
         $("div.mix").each(function(index, el) {
            var ideMetaIcon = el.getAttribute('ideMetaIcon');
            if(ideMetaIcon != undefined){
               if($(el).hasClass('item') && meta_selected != ideMetaIcon){
                  if(parseInt(ideMetaIcon) < 6){
                     $(el).addClass('item_active');
                     $(el).removeClass('item');
                  }else if(parseInt(ideMetaIcon) > 5){
                     $(el).addClass('item_active_inverse');
                     $(el).removeClass('item');
                  }
               }else if(!$(el).hasClass('item') && meta_selected == ideMetaIcon){
                  if(parseInt(ideMetaIcon) < 6){
                     $(el).addClass('item');
                     $(el).removeClass('item_active');
                  }else if(parseInt(ideMetaIcon) > 5){
                     $(el).addClass('item');
                     $(el).removeClass('item_active_inverse');
                  }
               }
            }
         });
      }
      
      if(!sinFiltro){
         $.fn.dataTableExt.afnFiltering.push(
               function( oSettings, aData, iDataIndex ) {
                  var arrMetasFilter = String(table_prog.row(iDataIndex).data().ID_META_NACIONAL).split('#');
                  for(var l in arrMetasFilter){
                     if(arrMetasFilter[l] == meta_selected){
                        return true;
                     }
                  }

                  return false;
              }
         );

         table_prog.draw();
      }
   }

   // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
   function reveal(direction, ide, antIde, descProg) {
      var callbackTime = 750,
         callbackFn = function() {
            classie.remove(pages[currentPage], 'page--current');
            antPage = antIde;
            currentPage = ide;
            classie.add(pages[ide], 'page--current'); 
         };
      revealer.reveal(direction, callbackTime, callbackFn, ide, currentPage, descProg);
   }

   function goToByScroll(id){
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top
        }, 'slow');
    }

    $("#loading-center").click(function() {
      $("#loading").fadeOut(500);
   });

   $("#loading").fadeOut(0);

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
   var mapIcons = new Object();
   mapIcons['1'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/mex_paz_color.png";
   mapIcons['2'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/mex_inclu_color.png";
   mapIcons['3'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/mex_edu_color.png";
   mapIcons['4'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/mex_pros_color.png";
   mapIcons['5'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/mex_global_color.png";
   mapIcons['6'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/democra_color.png";
   mapIcons['7'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/cerca_moder_color.png";
   mapIcons['8'] = "http://172.22.75.89/work/models/PTP/programas/pnd/images/genero_color.png";
   mapIcons['0'] = "btn-inicio";
   var idProgDeriv = 0;
   var idMetaNac = -1;
   var data = "";

   $('#programas_table thead th').each( function () {
        var title = $(this).text();
        if(title!="Limpiar"){
         $(this).html( '<p>'+title+'&nbsp;'+'<input type="text" placeholder="Buscar por '+title+'" /></p>' );
        }
    });

   var table_prog = $('#programas_table').DataTable({
      "ordering" : false,
      "columns": [
            { "data": "DESC_ID_PROGRAMA_DERIVADO" },
            { "data": "TIPO_PROGRAMA_DERIVADO" },
            { "data": "ESPACIO"}
        ]

   });

   // Apply the search
    table_prog.columns().every( function () {
        var that = this;
        $( 'input', this.header() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );

   $.ajax({
      //url : 'files/file.txt',
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

   $('#btn-limp').on('click', function(){
      table_prog.search( '' ).columns().search( '' ).draw();
      $('input').val("");
   });

    $('#programas_table tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }else {
            table_prog.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }

        idProgDeriv = $(this).attr('ide_prog_deriv');
        var arrMetasFilt = [];
        $.each(mapValues, function(i, v) {
            if(v.ID_PROGRAMA_DERIVADO === idProgDeriv){

               arrMetasFilt = String(v.ID_META_NACIONAL).split('#');
               var item = arrMetasFilt[Math.floor(Math.random()*arrMetasFilt.length)];
               if(item != 0){
                  reveal('bottom', item, searchAntPage(), v.DESC_ID_PROGRAMA_DERIVADO);
               
                  idMetaNac = item;
                  $("div.page[ide="+idMetaNac+"]").append("<div class='header-wrap "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
               }
               return;
            }
      });
        
      var stringDivObj = '<div class="container-obj"><h1 class="title">Objetivos</h1><div class="head-button3"><a id="btn-return" class="viewWork2">Regresar a Menú</a></div><div class="content">';
      
      var mapObjetivos = [];
      var totalObjetivos = 0;
      for(var row in data) {
            if(row > 0){
               if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv){
               var arrMetas = String(data[row][getValueColumn("ID_META_NACIONAL")]).split('#');
               for(var x in arrMetas){
                  if(arrMetas[x] == idMetaNac){

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
        }

        if(totalObjetivos < 4){
         stringDivObj+='<div class="grid">';
         $.each(mapObjetivos, function(i, v) {
            stringDivObj+='<figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p></figcaption></figure>';
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
               stringDivObj+='</div><div class="grid"><figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p></figcaption></figure>';
            }else{
               stringDivObj+='<figure class="effect-chico" ide="obj-'+(i+1)+'"><img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/1.jpg" /><figcaption><h2><span>'+(i+1)+'</span></h2><p>'+v.DESC_OBJETIVO+'</p></figcaption></figure>';
            }
         });
         stringDivObj+='</div>';

        }
        stringDivObj+="</div>";


        stringDivObj+='<div class="content-buttons"><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-cloud-download">Programa</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-cloud-download">Decreto</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Logros (LD)</button><button class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Datos abiertos</button></div>';

        stringDivObj+='<div class="content-buttons"><button class="btn '+getColorsMeta(idMetaNac)+' btn-3e"><span>11</span> Instituciones Participantes</button><button class="btn '+getColorsMeta(idMetaNac)+' btn-1b">Descarga la <span>Guía Rápida</span> del Programa<img src="http://172.22.75.89/work/models/PTP/programas/pnd/images/guia_ciu.png"></button></div>';

        if(arrMetasFilt.length > 1){
         stringDivObj+='<h2 class="title">Este programa también está incluido en las siguientes metas...</h2><ul class = "metas-icons">';
         for(var i in arrMetasFilt){
            if(arrMetasFilt[i] != idMetaNac && arrMetasFilt[i] != 0){
               stringDivObj+='<li class="" index="'+arrMetasFilt[i]+'"><img src="'+getIcon(arrMetasFilt[i])+'"></li>';
            }
           }
         stringDivObj+='</ul>';  
        }

        /* cerrar container-obj*/
        stringDivObj+="</div>";

      $("div.page[ide="+idMetaNac+"]").append(stringDivObj);

      $.each(mapValues, function(i, v) {
            if(v.ID_PROGRAMA_DERIVADO === idProgDeriv){
               $("div.page[ide="+idMetaNac+"]").append("<div class='hero "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
               return false;
            }
      });

      $("#btn-return").click(function(){
         reveal('bottom', '0', searchAntPage());
         $('.footer-wrap').remove();
         $('.hero').remove();
         $('.container-obj').remove();
         $('.header-wrap').remove();
         $('.kontext').remove();
           $('.footer-wrap').remove();
           $('.bullets').remove();
           $('.final').remove();
         return false;
      });

      $("figure.effect-chico").click(function(e) { 
           e.preventDefault(); 
           $("#loading").fadeIn(200);
           $('.kontext').remove();
           $('.footer-wrap').remove();
           $('.bullets').remove();
           $('.final').remove();

           var idObjetivo = $(this).attr("ide").replace('obj-','');
           var descObj = $(this).find('p').text();
           
           $("div.page[ide="+idMetaNac+"]").append('<div id="obj-'+idObjetivo+'" class="footer-wrap bg-inicio"><h2><span>Objetivo '+idObjetivo+'</span> '+descObj+'</h2></div>');

           var stringIndicadores = '<article class="kontext">';
           for(var row in data) {
               if(row > 0){
                  if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv &&
                     data[row][getValueColumn("ID_OBJETIVO")] == idObjetivo){
                     var idIndicador = data[row][getValueColumn("ID_INDICADOR")];
                     var descIndicador = data[row][getValueColumn("DESC_INDICADOR")];
                     stringIndicadores+=(idIndicador == '1' ? '<section class="layer show">' : '<section class="layer">');
                     stringIndicadores+='<div class="container-ind"><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> '+descIndicador+'</h2></div>';

                     stringIndicadores+='<section class="container-divs"><div class="left-graf"><div class="fuente"> <h2 class="t-paz">Fuente: <span>Encuesta Nacional de Cultura Política y Prácticas Ciudadanas (ENCUP)</span></h2> <h3 class="t-inicio"><a href="http://www.encup.gob.mx" target="_blank">http://www.encup.gob.mx</a></h3></div></div><div class="right-desc"><div class="question"> <h2 class="t-paz">¿Cómo se mide?</h2> <p>Mide el porcentaje de ciudadanos entrevistados que consideran que en el futuro tendrán más oportunidad</p></div><hr><div class="question"> <h2 class="t-paz">¿Cada cuándo?</h2> <p>Bienal</p></div><hr><div class="question"> <h2 class="t-paz">Unidad para el Desarrollo Político y Fomento Cívico (UDPyFC), Secretaría de Gobernación</h2></div><div class="question"> <h1 class="t-paz">8</h1></div><div class="question"> <h2 class="t-paz">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list bg-paz"> <ul> <li>text</li><li>text</li><li>text</li><li>text</li><li>text</li><li>text</li><li>text</li><li>text</li><li>text</li><li>text</li></ul></div></div></section>';

                  stringIndicadores+='</div></section>';
                  }
               }
           }
           stringIndicadores+='</article><ul class="bullets"></ul><hr class="final">';
           
           $("div.page[ide="+idMetaNac+"]").append(stringIndicadores);

           init_kontext();

           goToByScroll('obj-'+idObjetivo); 

           $("#loading").fadeOut(400);
       });

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
            itemMap["ESPACIO"] = "";
            
            $.each(mapValues, function(i, v) {
               if(v.ID_PROGRAMA_DERIVADO === itemMap["ID_PROGRAMA_DERIVADO"]){

                  var idsMetasValues = String(v.ID_META_NACIONAL).split('#');
                  var idsMetasBd = String(itemMap["ID_META_NACIONAL"]).split('#');

                  $.each(idsMetasBd, function(k, valueBD) {
                     exist = false;
                     $.each(idsMetasValues, function(j, valueMap) {
                        if(valueBD === valueMap){
                           exist = true;
                           return;
                        }else{
                           return;
                        }
                     });
                     if(!exist){
                        v.ID_META_NACIONAL+="#"+valueBD;
                     }
                  });

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

   function getIcon(k) {
      return mapIcons[k];
   }

   function init_kontext(){
      // Create a new instance of kontext
      var k = kontext( document.querySelector( '.kontext' ) );
      // API METHODS:
      // k.prev(); // Show prev layer
      // k.next(); // Show next layer
      // k.show( 3 ); // Show specific layer
      // k.getIndex(); // Index of current layer
      // k.getTotal(); // Total number of layers
      // DEMO-SPECIFIC:
      var bulletsContainer = document.body.querySelector( '.bullets' );
      // Create one bullet per layer
      for( var i = 0, len = k.getTotal(); i < len; i++ ) {
         var bullet = document.createElement( 'li' );
         var coverTitle = $('<span class="bulletTitle">Indicador '+(i+1)+'</span>').appendTo(bullet);
         bullet.className = i === 0 ? 'active' : '';
         bullet.setAttribute( 'index', i );
         bullet.onclick = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
         bullet.ontouchstart = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
         bulletsContainer.appendChild( bullet );
      }
      // Update the bullets when the layer changes
      k.changed.add( function( layer, index ) {
         var bullets = document.body.querySelectorAll( '.bullets li' );
         for( var i = 0, len = bullets.length; i < len; i++ ) {
            bullets[i].className = i === index ? 'active' : '';
         }
      } );
      document.addEventListener( 'keyup', function( event ) {
         if( event.keyCode === 37 ) k.prev();
         if( event.keyCode === 39 ) k.next();
      }, false );
      var touchX = 0;
      var touchConsumed = false;
      document.addEventListener( 'touchstart', function( event ) {
         touchConsumed = false;
         lastX = event.touches[0].clientX;
      }, false );
      document.addEventListener( 'touchmove', function( event ) {
         event.preventDefault();
         if( !touchConsumed ) {
            if( event.touches[0].clientX > lastX + 10 ) {
               k.prev();
               touchConsumed = true;
            }
            else if( event.touches[0].clientX < lastX - 10 ) {
               k.next();
               touchConsumed = true;
            }
         }
      }, false );
   }

})();