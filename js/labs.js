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
