$(document).ready(function(){
	semLabs.initMenu();
	$("#homepage").parent().attr("id", "homepagebody");
	
	$("#hamMenu").click(function(){
		$("#nav").css("max-height","999px");
	});
	
	$("#homepage ul.nav-footer").append("<br class='clear'/>");
	
	if(document.referrer.indexOf("/search") != -1 && document.URL.indexOf("/search")==-1){
		$("#search").append("<a style='display:block; font-size:0.8em; text-align:center;' href='"+document.referrer+"'>Back to search results</a>");
	}
	
	$("ul.tags li a").click(function(){
		$("ul.post-list li").hide();
		$("ul.post-list li."+$(this).attr("rel")).show();
		
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
	
	
});



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
