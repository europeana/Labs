$(document).ready(function(){
	semLabs.initMenu();
});

var semLabs = {
	initMenu:function(){
		$("nav a").removeClass("current");
		var baseUrl = $("a.logo").attr("href").toString();
		var currentUrl = window.location.pathname;
		
		$("nav a").each(function(){
			if(currentUrl.match($(this).attr("href"))){
				$(this).addClass("current");
			}
		});
		
		if($("nav a.current").length>1){
			$("nav a:first").removeClass("current");
		}	
	}
};
