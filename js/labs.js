$(document).ready(function(){
	
	semLabs.initMenu();
	
	try{
		convertEmails();
		}catch(e){
			//alert(e.message);
		}

	
		
	$("#homepage").parent().attr("id", "homepagebody");
	
	$("#hamMenu").click(function(){
		if($("#nav").hasClass("menu-opened")){
			$("#nav").css("max-height","0");
			$("#nav").removeClass("menu-opened");
		}else{
			
			$("#nav").css("max-height","999px");
			$("#nav").addClass("menu-opened");
		}
	});
	
	$("#homepage ul.nav-footer").append("<br class='clear'/>");
	
	if(document.referrer.indexOf("/search") != -1 && document.URL.indexOf("/search")==-1){
		$("#search").append("<a style='display:block; font-size:0.8em; text-align:center;' href='"+document.referrer+"'>Back to search results</a>");
		
		$("div.tabs ul").prepend("<li>"+"<a href='"+document.referrer+"'>← Back to search results</a>"+"</li>");
	}
	
	/*$("ul.tags li a").click(function(){
		alert("OK");
		$("ul.tags li a").removeClass("current-tag");
		$(this).addClass("current-tag");
		$("div.pagination-holder").jPages("destroy");
		$("ul.post-list li").removeClass("filtered-by-tag").hide();
		$("ul.post-list li."+$(this).attr("rel")).addClass("filtered-by-tag").show();
	});*/
	
	$("a.datasetstag-at-item").click(function(){
		$("ul.tags li a[rel='"+$(this).attr("rel")+"']").click();
	});	
	
	$(".obfuscate").each(function(){
		var currentMailto = $(this).attr("href");
		$(this).attr("href", currentMailto.replace("[at]","@"));
		
		var currentText = $(this).text();
		$(this).text(currentText.replace("[at]","@"));
	});
	
	$("div.startBtn a").click(function (event) {
	    event.preventDefault();
	    //calculate destination place
	    var dest = 0;
	    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
	        dest = $(document).height() - $(window).height();
	    } else {
	        dest = $(this.hash).offset().top;
	    }
	    //go to destination
	    $('html,body').animate({
	        scrollTop: dest
	    }, 2000, 'swing');
	});
	
	if($("#homepage").length <= 0){
		$("footer").attr("id", "nothomepagefooter");
	}
	
	//select gallery tag if selected
	var splitedGalleryUrl = window.location.pathname.split('/');
	if( splitedGalleryUrl.length>2){
		$("ul.tags li a[rel='"+splitedGalleryUrl[2]+"']").addClass("current-tag");
	}
	

});

function repageDatasets()
{
		$("div.pagination-holder").jPages({
	    	containerID : "SpacesList",
	    	perPage: 5
	    });;
		
}

function extractEmails (text)
{
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function GetUnique(inputArray)
{
    var outputArray = [];
    
    for (var i = 0; i < inputArray.length; i++)
    {
        if ((jQuery.inArray(inputArray[i], outputArray)) == -1)
        {
            outputArray.push(inputArray[i]);
        }
    }
   
    return outputArray;
}


function convertEmails() {
	
	var bodyHtml = $("body").html();	
	var emails = extractEmails($("body").html());
	
	$.each(emails, function( index, value ) {
	  bodyHtml = bodyHtml.replace("<a href=\"mailto:"+value+"\">"+value+"</a>", value);
	});
	
	var Uniqemails = GetUnique(emails);
	
	$.each(Uniqemails, function( index, value ) {
	  bodyHtml = bodyHtml.replace(value, "<a href='mailto:"+value+"'>"+value+"</a>");
	});
	
	$("body").html(bodyHtml);

}

var semLabs = {
	initMenu:function(){
		$("nav a").removeClass("current");
		
		var baseUrl = $("a.logo").attr("href").toString();
		var currentUrl = window.location.pathname;
		
		$("nav a").each(function(){
			if(currentUrl.match("^"+$(this).attr("href"))){
				$(this).addClass("current");
			}
		});
		
		if($("nav a.current").length>1){
			$("nav a:first").removeClass("current");
		}	
	}
};
