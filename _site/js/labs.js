$(document).ready(function(){
	semLabs.initMenu();
	$("#homepage").parent().attr("id", "homepagebody");
	
	$("#hamMenu").click(function(){
		$("#nav").css("max-height","999px");
	});
	
	$("#homepage ul.nav-footer").append("<br class='clear'/>");
	
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
