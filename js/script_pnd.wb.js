
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
         bgImages : ['/work/models/PTP/programas/pnd/images/Botones/home-icon.jpg',
               '/work/models/PTP/programas/pnd/images/Botones/mex_paz_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/mex_inclu_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/mex_edu_blan.png',
               '/work/models/PTP/programas/pnd/images/Botones/mex_pros_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/mex_global_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/democra_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/cerca_moder_blan.png', 
               '/work/models/PTP/programas/pnd/images/Botones/genero_blan.png'],
         bgTitles : ['Plan Nacional de Desarrollo',
            'M&eacute;xico en Paz',
            'M&eacute;xico Incluyente',
            'M&eacute;xico con Educaci&oacute;n de Calidad',
            'M&eacute;xico Pr&oacute;spero',
            'M&eacute;xico con Responsabilidad Global',
            'Democratizar la Productividad',
            'Gobierno Cercano y Moderno',
            'Perspectiva de G&eacute;nero'],
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
      //addFilterTable('6');

      $.each(mapValues, function(i, v) {
        var arrMetasFilter = String(v.ID_PND).split(',');
        for(var l in arrMetasFilter){
           if(arrMetasFilter[l] == 6){
            idProgDeriv = v.ID_PROGRAMA_DERIVADO;
            idMetaNac = arrMetasFilter[l];
            return false;
           }
        }
      });
      
      coreProgramas(idProgDeriv, 1);

      goToByScroll('header-prog-'+idProgDeriv);
      
      return false;
   });
   $("#cercanoIcon").click(function(){
      //addFilterTable('7');
      $.each(mapValues, function(i, v) {
        var arrMetasFilter = String(v.ID_PND).split(',');
        for(var l in arrMetasFilter){
           if(arrMetasFilter[l] == 7){
            idProgDeriv = v.ID_PROGRAMA_DERIVADO;
            idMetaNac = arrMetasFilter[l];
            return false;
           }
        }
      });
      
      coreProgramas(idProgDeriv, 1);

      goToByScroll('header-prog-'+idProgDeriv);

      return false;
   });
   $("#generoIcon").click(function(){
      //addFilterTable('8');
      $.each(mapValues, function(i, v) {
        var arrMetasFilter = String(v.ID_PND).split(',');
        for(var l in arrMetasFilter){
           if(arrMetasFilter[l] == 8){
            idProgDeriv = v.ID_PROGRAMA_DERIVADO;
            idMetaNac = arrMetasFilter[l];
            return false;
           }
        }
      });
      
      coreProgramas(idProgDeriv, 1);

      goToByScroll('header-prog-'+idProgDeriv);

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
                  var arrMetasFilter = String(table_prog.row(iDataIndex).data().ID_PND).split(',');
                  for(var l in arrMetasFilter){
                     if(arrMetasFilter[l] == meta_selected){
                        return true;
                     }
                  }
                  return false;
              }
         );

         table_prog.draw();
         if(meta_selected == '1'){
          $("th.programas").css("background-color","rgba(36,175,133,1.0)");
          $("th.tipo").css("background-color","rgba(36,175,133,0.8)");
          $("th.btn-table").css("background-color","rgba(36,175,133,1.0)");
          //$("tr.odd").css("background-color","rgba(36,175,133,0.2)");
          //$("tr.even").css("background-color","rgba(36,175,133,0.1)");
         }else if(meta_selected == '2'){
          $("th.programas").css("background-color","rgba(178,151,199,1.0)");
          $("th.tipo").css("background-color","rgba(178,151,199,0.8)");
          $("th.btn-table").css("background-color","rgba(178,151,199,1.0)");
          //$("tr.odd").css("background-color","rgba(178,151,199,0.2)");
          //$("tr.even").css("background-color","rgba(178,151,199,0.1)");
         }else if(meta_selected == '3'){
          $("th.programas").css("background-color","rgba(111,186,105,1.0)");
          $("th.tipo").css("background-color","rgba(111,186,105,0.8)");
          $("th.btn-table").css("background-color","rgba(111,186,105,1.0)");
          //$("tr.odd").css("background-color","rgba(111,186,105,0.2)");
          //$("tr.even").css("background-color","rgba(111,186,105,0.1)");
         }else if(meta_selected == '4'){
          $("th.programas").css("background-color","rgba(238,116,54,1.0)");
          $("th.tipo").css("background-color","rgba(238,116,54,0.8)");
          $("th.btn-table").css("background-color","rgba(238,116,54,1.0)");
          //$("tr.odd").css("background-color","rgba(238,116,54,0.2)");
          //$("tr.even").css("background-color","rgba(238,116,54,0.1)");
         }else if(meta_selected == '5'){
          $("th.programas").css("background-color","rgba(17,136,137,1.0)");
          $("th.tipo").css("background-color","rgba(17,136,137,0.8)");
          $("th.btn-table").css("background-color","rgba(17,136,137,1.0)");
          //$("tr.odd").css("background-color","rgba(17,136,137,0.2)");
          //$("tr.even").css("background-color","rgba(17,136,137,0.1)");
         }
      }else{
        $("th.programas").css("background-color","rgba(70,43,96,1.0)");
        $("th.tipo").css("background-color","rgba(70,43,96,0.8)");
        $("th.btn-table").css("background-color","rgba(70,43,96,1.0)");
        //$("tr.odd").css("background-color","rgba(70,43,96,0.2)");
        //$("tr.even").css("background-color","rgba(70,43,96,0.1)");
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
   var mapTitlesColores = new Object();
  mapTitlesColores['1'] = "t-paz";
  mapTitlesColores['2'] = "t-incluyente";
  mapTitlesColores['3'] = "t-educacion";
  mapTitlesColores['4'] = "t-prospero";
  mapTitlesColores['5'] = "t-global";
  mapTitlesColores['6'] = "t-democra";
  mapTitlesColores['7'] = "t-cercano";
  mapTitlesColores['8'] = "t-genero";
  mapTitlesColores['0'] = "t-inicio";
   var mapIcons = new Object();
   mapIcons['1'] = "/work/models/PTP/programas/pnd/images/Botones/mex_paz_color.png";
   mapIcons['2'] = "/work/models/PTP/programas/pnd/images/Botones/mex_inclu_color.png";
   mapIcons['3'] = "/work/models/PTP/programas/pnd/images/Botones/mex_edu_color.png";
   mapIcons['4'] = "/work/models/PTP/programas/pnd/images/Botones/mex_pros_color.png";
   mapIcons['5'] = "/work/models/PTP/programas/pnd/images/Botones/mex_global_color.png";
   mapIcons['6'] = "/work/models/PTP/programas/pnd/images/Botones/democra_color.png";
   mapIcons['7'] = "/work/models/PTP/programas/pnd/images/Botones/cerca_moder_color.png";
   mapIcons['8'] = "/work/models/PTP/programas/pnd/images/Botones/genero_color.png";
   mapIcons['0'] = "btn-inicio";
   var idProgDeriv = '0';
   var idMetaNac = -1;
   var data = "";

   $('#programas_table thead th').each( function () {
        var titleComp = $(this).html();
        var title = $(this).text();
        
        if(title!="Limpiar"){
         $(this).html( '<p>'+titleComp+'&nbsp;'+'<input type="text" placeholder="Buscar por '+title+'" /></p>' );
        }
    });
   var table_prog = $('#programas_table').DataTable({
      "ordering" : false,
      "columns": [
            { "data": "DESC_ID_PROGRAMA_DERIVADO" },
            { "data": "TIPO_PROGRAMA_DERIVADO" },
            { "data": "ESPACIO"}
        ],
        "rowCallback": function( row, data, index ) {
            if(index%2 == 0){
                $(row).css('background-color', 'rgba(70,43,96,0.2)');
            }else{
                 $(row).css('background-color', 'rgba(70,43,96,0.1)');
            }
        }
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
      url : '/work/models/PTP/programas/pnd/files/BD_PND.csv',
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
        
        var totalActives = 0;
        $("div.mix").each(function(index, el) {
      var ideMetaIcon = el.getAttribute('ideMetaIcon');
      if(ideMetaIcon != undefined){
        if($(el).hasClass('item')){
          totalActives++;
          idMetaNac = ideMetaIcon;
        }
      }
    });

        coreProgramas(idProgDeriv, totalActives);

        goToByScroll('header-prog-'+idProgDeriv);

    });
  
  function coreProgramas(idProgDeriv, totalActives) {
        
        var arrMetasFilt = [];
        $.each(mapValues, function(i, v) {
          if(v.ID_PROGRAMA_DERIVADO === idProgDeriv){

            if(totalActives === 1 && idMetaNac != -1){
              arrMetasFilt = String(v.ID_PND).split(',');
              reveal('bottom', idMetaNac, searchAntPage(), v.DESC_ID_PROGRAMA_DERIVADO);

              $("div.page[ide="+idMetaNac+"]").append("<div id='header-prog-"+idProgDeriv+"' class='header-wrap "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
        }else{
          arrMetasFilt = String(v.ID_PND).split(',');
              var item = arrMetasFilt[Math.floor(Math.random()*arrMetasFilt.length)];
              if(item != 0){
                reveal('bottom', item, searchAntPage(), v.DESC_ID_PROGRAMA_DERIVADO);
              
                idMetaNac = item;
                $("div.page[ide="+idMetaNac+"]").append("<div id='header-prog-"+idProgDeriv+"' class='header-wrap "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
              }
        }

            return false;
          }
    });
        
    var stringDivObj = '<div class="container-obj"><div id="btn-return" class="home-top"><li class="fa fa-home fa-4x" aria-hidden="true"></li><p class="p-home-top">Regresar a PND</p></div><h1 class="title">Objetivos</h1><div class="content">';
    
    var mapObjetivos = [];
    var totalObjetivos = 0;
    for(var row in data) {
            if(row > 0){
              if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv){
                    var arrMetas = String(data[row][getValueColumn("ID_PND")]);
                    var itemMap = {};
                    var exist = false;
                    var includes = false;  
                    itemMap["ID_OBJETIVO_PND"] = data[row][getValueColumn("ID_OBJETIVO_PND")];
                    itemMap["OBJETIVO_PND"] = data[row][getValueColumn("OBJETIVO_PND")];

                    if(arrMetas.search(''+idMetaNac) != -1){
                      itemMap["THIS_META"] = true;  
                    }else{
                      itemMap["THIS_META"] = false;
                      itemMap["ARR_METAS"] = arrMetas;
                    }
                    
                    $.each(mapObjetivos, function(i, v) {
                      if(v.ID_OBJETIVO_PND === itemMap["ID_OBJETIVO_PND"]){
                        exist = true;
                        return false;
                      }
              });

              if(!exist){
                totalObjetivos++;
                      mapObjetivos.push(itemMap);
                    }
              }
            }
        }
        var mapSortObjetives = [];
        var keys = [];
        $.each(mapObjetivos, function(i, v) {
            keys.push(v.ID_OBJETIVO_PND);
        });

        keys.sort(function(a, b){return parseInt(a)-parseInt(b)});

        for(var i in keys){
          $.each(mapObjetivos, function(id, v) {
            if(v.ID_OBJETIVO_PND == keys[i]){
              mapSortObjetives.push(v);
            }
          });
        }

        if(totalObjetivos < 4){
        stringDivObj+='<div class="grid">';
        $.each(mapSortObjetives, function(i, v) {
          if(v.THIS_META){
            stringDivObj+='<figure class="effect-winston" ide="obj-'+(v.ID_OBJETIVO_PND)+'"><img src="/work/models/PTP/programas/pnd/images/meta-'+idMetaNac+'.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
          }else{
            stringDivObj+='<figure class="effect-winston" arr-metas-obj="'+(v.ARR_METAS)+'"><img src="/work/models/PTP/programas/pnd/images/no_disponible.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
          }
      });
        stringDivObj+='</div>';
        }else{
          var cellByRow = totalObjetivos/2;
          if(totalObjetivos%2 != 0){
            cellByRow = Math.round(cellByRow);
          }
        stringDivObj+='<div class="grid">';
        $.each(mapSortObjetives, function(i, v) {
          
          if(cellByRow == i){
            if(v.THIS_META){
              stringDivObj+='</div><div class="grid"><figure class="effect-winston" ide="obj-'+(v.ID_OBJETIVO_PND)+'"><img src="/work/models/PTP/programas/pnd/images/meta-'+idMetaNac+'.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
            }else{
              stringDivObj+='</div><div class="grid"><figure class="effect-winston" arr-metas-obj="'+(v.ARR_METAS)+'"><img src="/work/models/PTP/programas/pnd/images/no_disponible.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
            }
          }else{
            if(v.THIS_META){
              stringDivObj+='<figure class="effect-winston" ide="obj-'+(v.ID_OBJETIVO_PND)+'"><img src="/work/models/PTP/programas/pnd/images/meta-'+idMetaNac+'.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
            }else{
              stringDivObj+='<figure class="effect-winston" arr-metas-obj="'+(v.ARR_METAS)+'"><img src="/work/models/PTP/programas/pnd/images/no_disponible.png" /><figcaption><h2>'+v.OBJETIVO_PND+'</h2><p><a href="#"><i class="fa fa-arrow-down faa-vertical animated"></i></a></p></figcaption></figure>';
            }
          }
      });
        stringDivObj+='</div>';

        }
        stringDivObj+="</div>";

        if(idMetaNac != 6 && idMetaNac != 7 && idMetaNac != 8){
          if(arrMetasFilt.length > 1){
            if (arrMetasFilt.length == 2) {
              stringDivObj+='<h2 class="title">Consulta los objetivos en la siguiente meta...</h2><ul class = "metas-icons">';
            }else{
              stringDivObj+='<h2 class="title">Consulta los objetivos en las siguientes metas...</h2><ul class = "metas-icons">';
            };
            for(var i in arrMetasFilt){
              if(arrMetasFilt[i] != '0'){
                stringDivObj+='<li class="go-meta" index-meta="'+arrMetasFilt[i]+'"><img src="'+getIcon(arrMetasFilt[i])+'" style="max-width: 50px;"></li>';
              }
            }
            stringDivObj+='</ul>';  
          }
        }
        
        var urlDownPrograma = '';
        var urlDownDecreto = '';
        var urlLogros2013 = '';
        var urlLogros2014 = '';
        var urlLogros2015 = '';
        var urlLogros2016 = '';
        var urlLogros2017 = '';
        var urlLogros2018 = '';
        var noInstituPart = '';
        var URCoord = '';
        var desc_pp_vinculado = '';
        var url_pp_vinculado = '';

        for(var row in data) {
          if(row > 0){
              if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv){
                urlDownPrograma = data[row][getValueColumn("URL_DOF_PPND")];
                urlDownDecreto = data[row][getValueColumn("URL_DOF_DECRETO")];
                urlLogros2013 = data[row][getValueColumn("URL_LOGROS_2013")];
                urlLogros2014 = data[row][getValueColumn("URL_LOGROS_2014")];
                urlLogros2015 = data[row][getValueColumn("URL_LOGROS_2015")];
                urlLogros2016 = data[row][getValueColumn("URL_LOGROS_2016")];
                urlLogros2017 = data[row][getValueColumn("URL_LOGROS_2017")];
                urlLogros2018 = data[row][getValueColumn("URL_LOGROS_2018")];
                noInstituPart = data[row][getValueColumn("NO_UR_PARTICIPANTES")];
                URCoord = data[row][getValueColumn("DESC_UR")];
                desc_pp_vinculado = data[row][getValueColumn("DESC_ID_PP_VINCULADO")];
                url_pp_vinculado = data[row][getValueColumn("PP_VINCULADO_URL")];
              }
          }
        }

        stringDivObj+='<div class="content-buttons">';
        
        if(urlDownPrograma != undefined && urlDownPrograma != ''){
          stringDivObj+='<a href="'+urlDownPrograma+'" target="_blank" class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-link">Programa</a>';
        }
        if(urlDownDecreto != undefined && urlDownDecreto != ''){
          stringDivObj+='<a href="'+urlDownDecreto+'" target="_blank" class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-link">Decreto</a>';
        }
        if (urlLogros2013 != undefined && urlLogros2013 != '' ||
            urlLogros2014 != undefined && urlLogros2014 != '' ||
            urlLogros2015 != undefined && urlLogros2015 != '' ||
            urlLogros2016 != undefined && urlLogros2016 != '' ||
            urlLogros2017 != undefined && urlLogros2017 != '' ||
            urlLogros2018 != undefined && urlLogros2018 != '') {
          stringDivObj+='<ul class="menulogros" style="margin: 0px 1%;"><li><a class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3a icon-cloud-download" style="padding-right:50px;">Logros</a><ul class="anios">';
            if(urlLogros2013 != undefined && urlLogros2013 != ''){
              stringDivObj+='<a href="'+urlLogros2013+'" target="_blank">2013</a>'
            }
            if(urlLogros2014 != undefined && urlLogros2014 != ''){
              stringDivObj+='<a href="'+urlLogros2014+'" target="_blank">2014</a>'
            }
            if(urlLogros2015 != undefined && urlLogros2015 != ''){
              stringDivObj+='<a href="'+urlLogros2015+'" target="_blank">2015</a>'
            }
            if(urlLogros2016 != undefined && urlLogros2016 != ''){
              stringDivObj+='<a href="'+urlLogros2016+'" target="_blank">2016</a>'
            }
            if(urlLogros2017 != undefined && urlLogros2017 != ''){
              stringDivObj+='<a href="'+urlLogros2017+'" target="_blank">2017</a>'
            }
            if(urlLogros2018 != undefined && urlLogros2018 != ''){
              stringDivObj+='<a href="'+urlLogros2018+'" target="_blank">2018</a>'
            }
          }
          stringDivObj+='</ul></li></ul>';

          
          desc_pp_vinculado = String(desc_pp_vinculado).split('#');
          url_pp_vinculado = String(url_pp_vinculado).split(',');
          var totalVinculado = desc_pp_vinculado.length;
          
          if(desc_pp_vinculado != 0){
              stringDivObj+='<div class="question-container btn '+getBtnColorsMeta(idMetaNac)+'" style="padding: 5px 12px;"><p style="margin: 0px; font-size: 28px;">'+totalVinculado+'</p>Programas Presupuestarios Vinculados</div></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

              for(var x in desc_pp_vinculado){
                if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                  stringDivObj+='<li>'+desc_pp_vinculado[x]+'</li>';
                }else{
                  stringDivObj+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                }
              }
              stringDivObj+='</ul></div>';
          }

          stringDivObj+="</div>";

        //stringDivObj+='<div class="dropdown-logros"><button id="logrosBtn" class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Logros (LD)<div id="YearsList" class="dropdown-content-logros"><a href="#">2015</a><a href="#">2014</a><a href="#">2013</a></div></button></div></div>';
        /*Boton de Datos Abiertos--> <a href="#" target="_blank" class="btn '+getBtnColorsMeta(idMetaNac)+' btn-3b icon-cloud-download">Datos abiertos</a>*/
        
        if (isNaN(noInstituPart/2)) {
          if (noInstituPart === 'Transversal') {
            stringDivObj+='<div class="content-buttons"><div class="div-coordina '+getColorsMeta(idMetaNac)+'"><div class="nourcoordina"><span>'+noInstituPart+'</span><br><p style="font-size:15px;">Las unidades responsables participantes son toda la Administraci&oacute;n P&uacute;blica Federal.</p></div><div class="arrow-coordina"><img src="/work/models/PTP/programas/pnd/images/arrow.png"></div><div class="urcoordina">Coordinadas por:<br><b>'+URCoord+'</b></div></div></div>';
          }else{
            stringDivObj+='<div class="content-buttons"><div class="div-coordina '+getColorsMeta(idMetaNac)+'"><div class="nourcoordina"><span>'+noInstituPart+'</span><br><p style="font-size:15px;">Las unidades responsables participantes son todas las agrupadas en el sector correspondiente.</p></div><div class="arrow-coordina"><img src="/work/models/PTP/programas/pnd/images/arrow.png"></div><div class="urcoordina">Coordinadas por:<br><b>'+URCoord+'</b></div></div></div>';
          };
        }
        else{
          if (noInstituPart > 1) {
            stringDivObj+='<div class="content-buttons"><div class="div-coordina '+getColorsMeta(idMetaNac)+'"><div class="nourcoordina"><span>'+noInstituPart+'</span><br> Instituciones Participantes</div><div class="arrow-coordina"><img src="/work/models/PTP/programas/pnd/images/arrow.png"></div><div class="urcoordina">Coordinadas por:<br><b>'+URCoord+'</b></div></div></div>';
          }else{
            stringDivObj+='<div class="content-buttons"><div class="div-coordina '+getColorsMeta(idMetaNac)+'"><div class="nourcoordina">Institución Participante</div><div class="arrow-coordina"><img src="/work/models/PTP/programas/pnd/images/arrow.png"></div><div class="urcoordina"><b>'+URCoord+'</b></div></div></div>';
          };
        };
        
        /*Boton de Guía Ciudadana--> <button class="btn '+getColorsMeta(idMetaNac)+' btn-1b">Descarga la <span>Gu&iacute;a R&aacute;pida</span> del Programa<img src="/work/models/PTP/programas/pnd/images/guia_ciu.png"></button>*/
        
        /* cerrar container-obj*/
        stringDivObj+="</div>";

    $("div.page[ide="+idMetaNac+"]").append(stringDivObj);

    $(".scroll-list").fadeOut();
    $(".scroll-list").css({"transform": "translateY(-150px)"});

    $(".question-container").click(function(event) {
        if($(".scroll-list").is(":visible")){
          $(".scroll-list").fadeOut('slow');
          $(".scroll-list").css({"transform": "translateY(-150px)"});
          $('main').append('<style>.question-container:after{ border-top: solid 30px transparent; }</style>');
        }else{
          $(".scroll-list").fadeIn('slow');
          $(".scroll-list").css({"transform": "translateY(0px)"});
          $('main').append('<style>.question-container:after{ border-top: solid 30px '+$('div.header-wrap').css('backgroundColor')+'; }</style>');
        }
    });

    $.each(mapValues, function(i, v) {
          if(v.ID_PROGRAMA_DERIVADO === idProgDeriv){
            $("div.page[ide="+idMetaNac+"]").append("<div class='hero "+getColorsMeta(idMetaNac)+"'><h2>"+v.DESC_ID_PROGRAMA_DERIVADO+"</h2></div>");
            return false;
          }
    });

    $('main').append('<style>.hero:after{ border-top: solid 30px transparent; }</style>');

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
      $('.arrowtotop').remove();
      $('.content-buttons').remove();
      $('h2.title').remove();
      $('.metas-icons').remove();
      return false;
    });

    $('.menulogros').dropit();

    $("li.go-meta").click(function(){
      var idMetaNacTMP = $(this).attr('index-meta');
      if(idMetaNacTMP != undefined && idMetaNacTMP != '' && idMetaNac != idMetaNacTMP){
        idMetaNac = idMetaNacTMP;

        $('.footer-wrap').remove();
        $('.hero').remove();
        $('.container-obj').remove();
        $('.header-wrap').remove();
        $('.kontext').remove();
        $('.footer-wrap').remove();
        $('.bullets').remove();
        $('.final').remove();
        $('.arrowtotop').remove();
        $('.content-buttons').remove();
        $('h2.title').remove();
        $('.metas-icons').remove();

        coreProgramas(idProgDeriv, 1);

        goToByScroll('header-prog-'+idProgDeriv);
      }else{
        return false; 
      }
      
    });

    $("figure.effect-winston").click(function(e) {

        if($(this).attr("ide")){

          e.preventDefault(); 
          $("#loading").fadeIn(200);
          $('.kontext').remove();
          $('.footer-wrap').remove();
          $('.bullets').remove();
          $('.final').remove();
          $('.arrowtotop').remove();

          $('main').append('<style>.hero:after{ border-top: solid 30px '+$('div.header-wrap').css('backgroundColor')+'; }</style>');

          var idObjetivo = $(this).attr("ide").replace('obj-','');
          var descObj = $(this).find('h2').text();
          
          $("div.page[ide="+idMetaNac+"]").append('<div id="obj-'+idObjetivo+'" class="footer-wrap bg-inicio"><h2><span>Objetivo '+idObjetivo+'</span> '+descObj+'</h2></div>');
          var arrIdsGraficas = [];
          var stringIndicadores = '<article class="kontext">';
          var firstInd = false;
          for(var row in data) {
              if(row > 0){
                if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv &&
                  data[row][getValueColumn("ID_OBJETIVO_PND")] == idObjetivo){
                  var idIndicador = data[row][getValueColumn("ID_INDICADOR")];
                  var descIndicador = data[row][getValueColumn("DESC_INDICADOR")];
                  var fuente = data[row][getValueColumn("FUENTE")];
                  var url_fuente = data[row][getValueColumn("URL_FUENTE")];
                  var calculoIndicador = data[row][getValueColumn("METODO_CALCULO")];
                  var frecuencia = data[row][getValueColumn("FRECUENCIA")];
                  var urIndicador = data[row][getValueColumn("DESC_UR_INDICADOR")];
                  var desc_pp_vinculado = data[row][getValueColumn("DESC_ID_PP_VINCULADO")];
                  var url_pp_vinculado = data[row][getValueColumn("PP_VINCULADO_URL")];
                  arrIdsGraficas.push(row);

                  if (idProgDeriv === '38pe_ciencia' || idProgDeriv === '38pi_conacyt' && idObjetivo == 3) {
                      var idsubIndicador = String(idIndicador).split('.');
                      var nivelIndicador = idsubIndicador.length;
                      if (nivelIndicador == 3) {
                        if (idProgDeriv === '38pe_ciencia' && idsubIndicador[2] == 1) {
                          stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                          stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> &Iacute;ndice de capacidades cient&iacute;ficas y de innovaci&oacute;n 2014</h2></div>';

                          stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                          stringIndicadores+='<iframe width="100%" height="520" frameborder="0" src="https://transparencia-presupuestaria.carto.com/viz/2946354e-5412-11e6-88dd-0ef7f98ade21/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';

                          stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                          stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                          /*desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                          url_pp_vinculado = String(url_pp_vinculado).split(',');
                          var totalVinculado = desc_pp_vinculado.length;

                          if(desc_pp_vinculado != 0){
                              stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                              for(var x in desc_pp_vinculado){
                                if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                                  stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                                }else{
                                  stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                                }
                              }
                              stringIndicadores+='</ul></div>';
                          }*/

                          stringIndicadores+='</div></section>';

                          stringIndicadores+='</div></section>';
                        }else if(idProgDeriv === '38pe_ciencia' && idsubIndicador[2] == 2){
                          stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                          stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> &Iacute;ndice de capacidades cient&iacute;ficas y de innovaci&oacute;n 2015</h2></div>';

                          stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                          stringIndicadores+='<iframe width="100%" height="520" frameborder="0" src="https://transparencia-presupuestaria.carto.com/viz/267d909a-5413-11e6-8207-0ef24382571b/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';

                          stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                          stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                          desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                          url_pp_vinculado = String(url_pp_vinculado).split(',');
                          var totalVinculado = desc_pp_vinculado.length;

                          if(desc_pp_vinculado != 0){
                              stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                              for(var x in desc_pp_vinculado){
                                if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                                  stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                                }else{
                                  stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                                }
                              }
                              stringIndicadores+='</ul></div>';
                          }

                          stringIndicadores+='</div></section>';

                          stringIndicadores+='</div></section>';
                        }else if(idProgDeriv === '38pi_conacyt' && idsubIndicador[2] == 1){
                          stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                          stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> &Iacute;ndice de programas CONACYT para el fortalecimiento de capacidades estatales 2014</h2></div>';

                          stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                          stringIndicadores+='<iframe width="100%" height="520" frameborder="0" src="https://transparencia-presupuestaria.carto.com/viz/69c6c884-5414-11e6-ab8b-0e98b61680bf/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';

                          stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                          stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                          /*desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                          url_pp_vinculado = String(url_pp_vinculado).split(',');
                          var totalVinculado = desc_pp_vinculado.length;

                          if(desc_pp_vinculado != 0){
                              stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                              for(var x in desc_pp_vinculado){
                                if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                                  stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                                }else{
                                  stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                                }
                              }
                              stringIndicadores+='</ul></div>';
                          }*/

                          stringIndicadores+='</div></section>';

                          stringIndicadores+='</div></section>';
                        }else if(idProgDeriv === '38pi_conacyt' && idsubIndicador[2] == 2){
                          stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                          stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> &Iacute;ndice de programas CONACYT para el fortalecimiento de capacidades estatales 2015</h2></div>';

                          stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                          stringIndicadores+='<iframe width="100%" height="520" frameborder="0" src="https://transparencia-presupuestaria.carto.com/viz/62188ebe-5415-11e6-ad18-0e98b61680bf/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';

                          stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                          stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                          /*desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                          url_pp_vinculado = String(url_pp_vinculado).split(',');
                          var totalVinculado = desc_pp_vinculado.length;

                          if(desc_pp_vinculado != 0){
                              stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                              for(var x in desc_pp_vinculado){
                                if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                                  stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                                }else{
                                  stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                                }
                              }
                              stringIndicadores+='</ul></div>';
                          }*/

                          stringIndicadores+='</div></section>';

                          stringIndicadores+='</div></section>';
                        }else{
                        };
                      }else{
                        stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                        stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> '+descIndicador+'</h2></div>';

                        stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                        stringIndicadores+='<div id="grafica-container-'+row+'" class="grafica-high"></div>';

                        stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                        stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                        /*desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                        url_pp_vinculado = String(url_pp_vinculado).split(',');
                        var totalVinculado = desc_pp_vinculado.length;

                        if(desc_pp_vinculado != 0){
                            stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                            for(var x in desc_pp_vinculado){
                              if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                                stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                              }else{
                                stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                              }
                            }
                            stringIndicadores+='</ul></div>';
                        }*/

                        stringIndicadores+='</div></section>';

                        stringIndicadores+='</div></section>';
                      };
                  }else{
                    stringIndicadores+=(!firstInd ? '<section class="layer show">' : '<section class="layer">');
                    stringIndicadores+='<div class="container-ind"><div class="arrows"><li class="fa fa-arrow-left fa-4x faa-horizontal animated" aria-hidden="true"></li><li class="fa fa-arrow-right fa-4x faa-horizontal animated" aria-hidden="true"></li><br><p class="p-arrow-left">Anterior</p><p class="p-arrow-right">Siguiente</p></div><div class="selectdiv"><h2><span>Indicador '+idIndicador+'</span> '+descIndicador+'</h2></div>';

                    stringIndicadores+='<section class="container-divs"><div class="left-graf">';

                    stringIndicadores+='<div id="grafica-container-'+row+'" class="grafica-high"></div>';

                    stringIndicadores+='<div class="fuente"><h2 class="'+getColorTitles(idMetaNac)+'">Fuente: <span>'+(fuente == undefined || fuente == '' ? 'Informaci&oacute;n no disponible' : fuente)+'</span></h2> <h3 class="t-inicio">'+(url_fuente == undefined || url_fuente == '' ? '' : '<a href="'+url_fuente+'" target="_blank">Ir a la fuente de la informaci&oacute;n</a>')+'</h3></div></div>';

                    stringIndicadores+='<div class="right-desc"><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;C&oacute;mo se mide?</h2><p class="scroll-answer-mide">'+(calculoIndicador == undefined || calculoIndicador == '' ? 'Informaci&oacute;n no disponible' : calculoIndicador)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">&iquest;Cada cu&aacute;ndo?</h2><p>'+(frecuencia == undefined || frecuencia == '' ? 'Informaci&oacute;n no disponible' : frecuencia)+'</p></div><hr><div class="question"><h2 class="'+getColorTitles(idMetaNac)+'">Reportado por:<h2><p>'+(urIndicador == undefined || urIndicador == '' ? 'Informaci&oacute;n no disponible' : urIndicador)+'</p></div>';

                    /*desc_pp_vinculado = String(desc_pp_vinculado).split('#');
                    url_pp_vinculado = String(url_pp_vinculado).split(',');
                    var totalVinculado = desc_pp_vinculado.length;

                    if(desc_pp_vinculado != 0){
                        stringIndicadores+='<div class="question"><h1 class="'+getColorTitles(idMetaNac)+'">'+totalVinculado+'</h1></div><div class="questionc"><h2 class="'+getColorTitles(idMetaNac)+'">Programas Presupuestarios Vinculados</h2></div><div class="scroll-list '+getColorsMeta(idMetaNac)+'"><ul>';

                        for(var x in desc_pp_vinculado){
                          if(url_pp_vinculado[x] == undefined || url_pp_vinculado[x] == ''){
                            stringIndicadores+='<li>'+desc_pp_vinculado[x]+'</li>';
                          }else{
                            stringIndicadores+='<li><a href="'+url_pp_vinculado[x]+'">'+desc_pp_vinculado[x]+'</a></li>';
                          }
                        }
                        stringIndicadores+='</ul></div>';
                    }*/

                    stringIndicadores+='</div></section>';

                    stringIndicadores+='</div></section>';
                  };

            firstInd=true;
                }
              }
          }
          stringIndicadores+='</article><ul class="bullets"></ul><div class="arrowtotop"><li class="fa fa-arrow-up fa-4x faa-float animated" aria-hidden="true"></li><br><p class="p-arrow-up">Regresar a Objetivos</p></div><hr class="final">';
          
          /*Boton de ScrollToTop--> <hr class="final"><div class="scrollToObj"><img src="/work/models/PTP/programas/pnd/images/scrollup.png"></img></div>*/
          $("div.page[ide="+idMetaNac+"]").append(firstInd ? stringIndicadores : '<article class="kontext"><section class="layer show"><div class="container-ind"><br><h1 class="title">Actualmente no existe informaci&oacute;n de los indicadores.</h1></div></section></article>');

          if(firstInd){

            init_kontext();

            

            for(var row in data) {
              if(row > 0){
                if(data[row][getValueColumn("ID_PROGRAMA_DERIVADO")] == idProgDeriv &&
                  data[row][getValueColumn("ID_OBJETIVO_PND")] == idObjetivo){
                  var valLineaBase = data[row][getValueColumn("LINEA_BASE")];
                  var anoLineaBase = data[row][getValueColumn("CICLO_LINEA_BASE")];
                  var unidadMedida = data[row][getValueColumn("UNIDAD_MEDIDA")];
                  var descIndicador = data[row][getValueColumn("DESC_INDICADOR")];

                  var anos = ['2013', '2014', '2015', '2016', '2017', '2018'];
                  if(isNaN(anoLineaBase)){
                    console.log("Error al insertar el ano linea base no es numero.");
                  }else{
                    if(parseInt(anoLineaBase) < 2013 || parseInt(anoLineaBase) > 2018){
                      anos.push(anoLineaBase);  
                      anos.sort(function(a, b){return parseInt(a)-parseInt(b)});
                    }
                  }
                  
                  var mapCategorias = [];
                  var mapValuesInd = [];
                  var mapValuesMetas = [];
                  var mapLineaBase = [];

                  for(var index in anos){
                    var ano = anos[index];

                    var tmpMeta = isNaN(data[row][getValueColumn("META_"+ano)]) ? null : parseFloat(data[row][getValueColumn("META_"+ano)]);
                    var tmpInd = isNaN(data[row][getValueColumn("INDICADOR_OBS_"+ano)]) ? null : parseFloat(data[row][getValueColumn("INDICADOR_OBS_"+ano)]);
                    var tmpValLB = anoLineaBase == ano ? (isNaN(valLineaBase) ? null : parseFloat(valLineaBase)) : null;

                    if(!((tmpMeta == null || isNaN(tmpMeta)) && (tmpInd == null || isNaN(tmpInd)) && (tmpValLB == null || isNaN(tmpValLB)))){
                      mapValuesInd.push(isNaN(tmpInd) ? null : tmpInd);
                      mapValuesMetas.push(isNaN(tmpMeta) ? null : tmpMeta);
                      mapLineaBase.push(isNaN(tmpValLB) ? null : tmpValLB);
                      mapCategorias.push(ano);

                    }
                  }

                $('#grafica-container-'+row).highcharts({
                  chart: {
                      width: undefined
                  },
                  title: {
                      text: ''+descIndicador,
                      useHTML: Highcharts.hasBidiBug
                  },
                  xAxis: {
                      categories: mapCategorias
                  },
                  yAxis: {
                      labels: {
                          format: '{value}',
                          style: {
                              color: $('div.footer-wrap').css('backgroundColor')
                          }
                      },
                      title: {
                          text: ''+unidadMedida,
                          useHTML: Highcharts.hasBidiBug,
                          style: {
                              color: $('div.footer-wrap').css('backgroundColor')
                          }
                      },
                      plotBands: { // Light air
                        from: 0.0,
                        to: isNaN(valLineaBase) ? 0.0 : parseFloat(valLineaBase),
                        borderColor: $('div.footer-wrap').css('backgroundColor'),
                        color: 'rgba(68, 170, 213, 0.1)',
                        label: {
                            text: '',
                            verticalAlign: 'top',
                            y: -15,
                            style: {
                                color: $('div.header-wrap').css('backgroundColor')
                            }
                        }
                    }
                  },
                  legend: {
                    useHTML: Highcharts.hasBidiBug
                  },    
                  series: [{
                      type: 'column',
                      name: 'Observado',
                      data: mapValuesInd,
                      color: $('div.header-wrap').css('backgroundColor')
                  }, {
                      type: 'spline',
                      name: 'Meta',
                      data: mapValuesMetas,
                      marker: {
                          lineWidth: 2,
                          lineColor: $('div.footer-wrap').css('backgroundColor')
                      },
                      color: $('div.footer-wrap').css('backgroundColor')
                  }, {
                      name: 'L'+decodeURIComponent('%C3%AD')+'nea Base',
                      marker: {
                          symbol: 'diamond',
                          radius: 8
                      },
                      data: mapLineaBase
                  }]
              });

                }
              }
          }

           /**************** En caso de usar el boton ScrolltoTop ****************/
            $('.fa-arrow-up').click(function(event) {
                goToByScroll('header-prog-'+idProgDeriv);
            });

           /* $('.scrollToObj').fadeIn();*/
          }
          
          goToByScroll('obj-'+idObjetivo); 
          
          $("#loading").fadeOut(400);
          
          $('ul.bullets li').click(function(event){
            for(var id in arrIdsGraficas){
              if ($("div#grafica-container-"+arrIdsGraficas[id]).length) {
                $("div#grafica-container-"+arrIdsGraficas[id]).highcharts().reflow();
              }  
            }
            goToByScroll('obj-'+idObjetivo);
          });

          $(".fa-arrow-right").click(function(event) {
              for(var id in arrIdsGraficas){
                  if ($("div#grafica-container-"+arrIdsGraficas[id]).length) {
                    $("div#grafica-container-"+arrIdsGraficas[id]).highcharts().reflow();
                  }  
                }
            });

            $(".fa-arrow-left").click(function(event) {
              for(var id in arrIdsGraficas){
                  if ($("div#grafica-container-"+arrIdsGraficas[id]).length) {
                    $("div#grafica-container-"+arrIdsGraficas[id]).highcharts().reflow();
                  }  
                }
            });

        }else if($(this).attr("arr-metas-obj")){
          var arrMetasTMP = $(this).attr("arr-metas-obj").split(',');
          for(var i in arrMetasTMP){
            $("li[index-meta="+arrMetasTMP[i]+"]").animate({ 'zoom': 1.5, 'opacity': 1 }, 400);
            /*$("li[index-meta="+arrMetasTMP[i]+"]").css({
                '-moz-transform': 'scale(1.5)',
                '-o-transform': 'scale(1.5)',
                '-webkit-transform': 'scale(1.5)',
                'transform': 'scale(1.5)'
            });*/
          }
          for(var i in arrMetasTMP){
            //$("li[index-meta="+arrMetasTMP[i]+"]").animate({ 'transform': 'scale(1.5)', 'opacity': 0.5 }, 400);
            /*$("li[index-meta="+arrMetasTMP[i]+"]").css({
                '-moz-transform': 'scale(1)',
                '-o-transform': 'scale(1)',
                '-webkit-transform': 'scale(1)',
                'transform': 'scale(1)'
            });*/
            $("li[index-meta="+arrMetasTMP[i]+"]").animate({ 'zoom': 1, 'opacity': 0.5 }, 400);
          }
        }


      });

    };

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
            itemMap["ID_PND"] = data[row][getValueColumn("ID_PND")];
            itemMap["ID_PROGRAMA_DERIVADO"] = data[row][getValueColumn("ID_PROGRAMA_DERIVADO")];
            itemMap["DESC_ID_PROGRAMA_DERIVADO"] = data[row][getValueColumn("DESC_ID_PROGRAMA_DERIVADO")];
            itemMap["TIPO_PROGRAMA_DERIVADO"] = data[row][getValueColumn("TIPO_PROGRAMA_DERIVADO")];
            itemMap["ESPACIO"] = "";
            
            $.each(mapValues, function(i, v) {
               if(v.ID_PROGRAMA_DERIVADO === itemMap["ID_PROGRAMA_DERIVADO"]){

                  var idsMetasValues = String(v.ID_PND).split(',');
                  var idsMetasBd = String(itemMap["ID_PND"]).split(',');

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
                        v.ID_PND+=","+valueBD;
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
        $("th.programas").css("background-color","rgba(70,43,96,1.0)");
        $("th.tipo").css("background-color","rgba(70,43,96,0.8)");
        $("th.btn-table").css("background-color","rgba(70,43,96,1.0)");
        var meta_prev = getUrlParameter('meta');
        var programa_param = getUrlParameter('programa');
       if(meta_prev == 'mexico-en-paz'){
         addFilterTable('1');
         goToByScroll('mainContainer');
       }else if(meta_prev == 'mexico-incluyente'){
         addFilterTable('2');
         goToByScroll('mainContainer');
       }else if(meta_prev == 'mexico-con-educacion-de-calidad'){
         addFilterTable('3');
         goToByScroll('mainContainer');
       }else if(meta_prev == 'mexico-prospero'){
         addFilterTable('4');
         goToByScroll('mainContainer');
       }else if(meta_prev == 'mexico-con-responsabilidad-global'){
         addFilterTable('5');
          goToByScroll('mainContainer');
       }else if(meta_prev == 'democratizar-la-productividad'){
          $('.siteLoader').css('visibility', 'hidden');
          $('.navbar-fixed-top').css('visibility', 'visible');
          $('.navbar-fixed-bottom').css('visibility', 'visible');
          $('.site-footer').css('visibility', 'visible');

          $.fn.dataTableExt.afnFiltering.push(
              function( oSettings, aData, iDataIndex ) {
                  var arrMetasFilter = String(table_prog.row(iDataIndex).data().ID_PND).split(',');
                  for(var l in arrMetasFilter){
                     if(arrMetasFilter[l] == 6){
                      idProgDeriv = table_prog.row(iDataIndex).data().ID_PROGRAMA_DERIVADO;
                      idMetaNac = arrMetasFilter[l];
                     }
                  }

                  return true;
              }
          );
          table_prog.draw();
          
          coreProgramas(idProgDeriv, 1);

          goToByScroll('header-prog-'+idProgDeriv);
          
          return false;
        }else if(meta_prev == 'gobierno-cercano-y-moderno'){
          $('.siteLoader').css('visibility', 'hidden');
          $('.navbar-fixed-top').css('visibility', 'visible');
          $('.navbar-fixed-bottom').css('visibility', 'visible');
          $('.site-footer').css('visibility', 'visible');

          $.fn.dataTableExt.afnFiltering.push(
              function( oSettings, aData, iDataIndex ) {
                  var arrMetasFilter = String(table_prog.row(iDataIndex).data().ID_PND).split(',');
                  for(var l in arrMetasFilter){
                     if(arrMetasFilter[l] == 7){
                      idProgDeriv = table_prog.row(iDataIndex).data().ID_PROGRAMA_DERIVADO;
                      idMetaNac = arrMetasFilter[l];
                     }
                  }

                  return true;
              }
          );
          table_prog.draw();
          
          coreProgramas(idProgDeriv, 1);

          goToByScroll('header-prog-'+idProgDeriv);

          return false;
        }else if(meta_prev == 'perspectiva-de-genero'){
          $('.siteLoader').css('visibility', 'hidden');
          $('.navbar-fixed-top').css('visibility', 'visible');
          $('.navbar-fixed-bottom').css('visibility', 'visible');
          $('.site-footer').css('visibility', 'visible');

          $.fn.dataTableExt.afnFiltering.push(
              function( oSettings, aData, iDataIndex ) {
                  var arrMetasFilter = String(table_prog.row(iDataIndex).data().ID_PND).split(',');
                  for(var l in arrMetasFilter){
                     if(arrMetasFilter[l] == 8){
                      idProgDeriv = table_prog.row(iDataIndex).data().ID_PROGRAMA_DERIVADO;
                      idMetaNac = arrMetasFilter[l];
                     }
                  }

                  return true;
              }
          );
          table_prog.draw();
          
          coreProgramas(idProgDeriv, 1);

          goToByScroll('header-prog-'+idProgDeriv);

          return false;
        }else if(programa_param != undefined && programa_param != ''){
          if($("#programas_table tbody tr[ide_prog_deriv="+programa_param+"]").length){
            $('.siteLoader').css('visibility', 'hidden');
            $('.navbar-fixed-top').css('visibility', 'visible');
            $('.navbar-fixed-bottom').css('visibility', 'visible');
            $('.site-footer').css('visibility', 'visible');

            idProgDeriv = programa_param;
        
            var totalActives = 0;
            $("div.mix").each(function(index, el) {
            var ideMetaIcon = el.getAttribute('ideMetaIcon');
              if(ideMetaIcon != undefined){
                if($(el).hasClass('item')){
                  totalActives++;
                  idMetaNac = ideMetaIcon;
                }
              }
            });
            coreProgramas(idProgDeriv, totalActives);

            goToByScroll('header-prog-'+idProgDeriv);

          }
        }else{
          goToByScroll('mainContainer');
        }

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

   function getColorTitles(k) {
      return mapTitlesColores[k];
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
      if(k.getTotal() > 1){
        for( var i = 0, len = k.getTotal(); i < len; i++ ) {
           var bullet = document.createElement( 'li' );
           var coverTitle = $('<span class="bulletTitle"></span>').appendTo(bullet);
           bullet.className = i === 0 ? 'active' : '';
           bullet.setAttribute( 'index', i );
           bullet.onclick = function( event ) { k.show(event.target.getAttribute('index')) };
           //bullet.ontouchstart = function( event ) { k.show( event.target.getAttribute( 'index' ) ) };
           bulletsContainer.appendChild( bullet );
        }
      }
      
      // Update the bullets when the layer changes
      k.changed.add( function( layer, index ) {
         var bullets = document.body.querySelectorAll( '.bullets li' );
         for( var i = 0, len = bullets.length; i < len; i++ ) {
            bullets[i].className = i === index ? 'active' : '';
         }
      } );
      if(k.getTotal() === 1){
        $(".arrows").remove();
      }
      if(k.getTotal() > 1){

        $(".fa-arrow-right").click(function(event) {
          event.preventDefault();
          k.next();
        });

        $(".fa-arrow-left").click(function(event) {
          event.preventDefault();
          k.prev();
        });
      }
   }

   $('[data-toggle="tooltip"]').tooltip();

   var getUrlParameter = function getUrlParameter(sParam) {
       var sPageURL = decodeURIComponent(window.location.search.substring(1)),
           sURLVariables = sPageURL.split('&'),
           sParameterName,
           i;

       for (i = 0; i < sURLVariables.length; i++) {
           sParameterName = sURLVariables[i].split('=');

           if (sParameterName[0] === sParam) {
               return sParameterName[1] === undefined ? true : sParameterName[1];
           }
       }
   };

})();