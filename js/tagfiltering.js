(function ($) {

    
    $.fn.listFilters = function(options) {

        var filters = this;
        var fil = "";
        var hs = "";
        var settings = {
            listid: "#filtered-list",
            filterOperator: "AND",
            paginationHolder: "div.pagination-holder",
            paginationContainerId: "list",
            activeTagClass: "active",
            modelNoPagination: true
        };

        if (options) {
            $.extend(settings, options);
        }

		//prepare copy of original tag text
		$("ul.tags li>a").each(function(){
			$(this).parent().attr("data-btntext", $(this).text());
		});
		
		
		setTimeout(function (){

             performFiltering();

         }, 500);
         
		
        
        
        //set up hash chnage detection 
        $(window).bind('hashchange', function (e) {
            performFiltering();
        });
        
        //click on tag inside list
         $("a.tag_alt").click(function(){
         	
	        	 var currentActiveFilterClass = $(this).attr("class").split(' ')[1];
	        	 $("a.tag."+currentActiveFilterClass).click();
	        	 
        });
        
        
        addShowMore();

        
        //Tag click event
        return filters.click(function () {
        	
			var elementsCount = parseInt($(this).parent().attr("data-count"));
         	 if(elementsCount>0){ 
        	
	            if ($(this).hasClass(settings.activeTagClass)) {
	                $(this).removeClass(settings.activeTagClass);
	            } else {
	                $(this).addClass(settings.activeTagClass);
	            }
            	createFilter();
             }
        });
        
        function addShowMore()
        {

        	        //add showmore and ALL tag
        	$("a.show-more-tags").remove();
        	$("ul.tags li").removeClass("othertags");
	        if($("ul.tags li").length>5){
	        	
	        	 $("ul.tags").parent().append("<a class=\"show-more-tags\">+show more</a>");
	        	 $("a.show-more-tags").click(function(){
	        	 	$("ul.tags li").slice(6, $("ul.tags li").length).addClass("othertags");
	        	 	$("ul.tags li.othertags").each(function(){
	        	 		if($(this).attr("data-count")>0){
	        	 			$(this).show();
	        	 		}	
	        	 	});
	        	 	
	        	 	$(this).remove();
	        	 });
	        }
        }
                
        function performFiltering() {
				
	            activateTagsByHashUrl();
	            createFilter();
	            performFilter();
	            performPagination();   
        }

        function activateTagsByHashUrl() {
            
            var hashUrl = document.URL.substr(document.URL.indexOf('#') + 1);
            var tagsSplited = hashUrl.split("&");
            $.each(tagsSplited, function(key, tag) {
                var tagValue = tag.split("=")[1];
                filters.each(function () {
                    if ($(this).hasClass(tagValue)) {
                        $(this).removeClass(settings.activeTagClass).addClass(settings.activeTagClass);
                    }
                });
            });
        }

        function createFilter() {
            hs = "";
            fil = "";
            
            $(filters).each(function () {

                if ($(this).hasClass(settings.activeTagClass)) {

                    if (hs.length > 0) {
                        hs = hs + "&";
                    }
                                       
                    var currentActiveFilterClass = $(this).attr("class").split(' ')[1];
                    
					if(settings.filterOperator==="AND"){
                    	fil = fil + "." + currentActiveFilterClass;
                   	}else{
                   		if(fil.length>0){
                   			fil=fil+", ";
                   		}
                   		fil = fil + "." + currentActiveFilterClass;
                   	}
                    hs = hs + "tag=" + currentActiveFilterClass;
                   
                }
            });
            
            location.hash = "#" + hs;
        }

        function performFilter() {
    	
            $(settings.listid + " li")
                .removeClass("not-filtered")
                .removeClass("filtered")
                .addClass("not-filtered");
		    
		    $("ul.tags li").removeClass("othertags");
				
                if(settings.modelNoPagination){
                	 $(settings.listid + " li.not-filtered").show();
                }                

			
              $(settings.listid + " li" + fil).removeClass("not-filtered").addClass("filtered");

              $("ul.tags a").parent().attr("data-count",0);
              
              /*Show other tags depend on results*/  
              var filteresListItems =$(settings.listid + " li.filtered"); 
              filteresListItems.each(function(){
	              	var classList = $(this).attr("class").split(/\s+/);
					for (var i = 0; i < classList.length; i++) {
						
						var tagButton = $("ul.tags a."+classList[i]);
											
						if(tagButton.parent().attr("data-count")!= undefined)
						{
							
								var tagHitsCount = $(tagButton).parent().attr("data-count");
								tagHitsCount++;
								$(tagButton).parent().attr("data-count", tagHitsCount);
								
						}else{
								
								$(tagButton).parent().attr("data-count", 1);							 
						}
					}
              });
              
              
              $("ul.tags li.show-all-tags").remove();
              
              $("ul.tags").prepend("<li class=\"show-all-tags\" data-count=\""+$(settings.listid + " li").length+"\"><a class=\"tag\">ALL ("+$(settings.listid + " li").length+")</a></li>");
              
              $("ul.tags li.show-all-tags").click(function(){
              		$("ul.tags li a").removeClass(settings.activeTagClass);
              		addShowMore();
              		$("ul.tags li").slice(6, $("ul.tags li").length).hide();
              		location.hash = "#"
              	});
              
              
              	//Sort and set text and counter
				$("ul.tags li").sort(sort_li).appendTo('ul.tags');
				
				$("ul.tags li a").each(function(){
					var btnParentLi = $(this).parent();
					if(btnParentLi.attr("data-btntext")!=undefined){
						$(this).text(btnParentLi.attr("data-btntext")+" ("+btnParentLi.attr("data-count")+")")
					}
				});
				
				$("ul.tags li").show();  
				$("ul.tags li").slice(6, $("ul.tags li").length).hide();
								
				if($("ul.tags a.current-tag").length<=0){
					$("ul li.show-all-tags").click();
				}
				
				$("ul.tags li").each(function(){
					if($(this).attr("data-count")<=0){
						$(this).hide();
					}
				});

        }

		function sort_li(a, b){
		    return ((parseInt($(b).attr("data-count"))) < (parseInt($(a).attr("data-count"))) ? -1 : 1);    
		}
		
		
        function performPagination() {
            try {
            	
                destroyPagination();
                
            } catch(e) {
               // alert(e.message);
            }
            //alert("OK");
                
            $(settings.paginationHolder).jPages({
                containerID: settings.paginationContainerId,
                perPage: 10
            });
        }

        function destroyPagination() {
            $(settings.paginationHolder).jPages("destroy");
        }
    };
}(jQuery));