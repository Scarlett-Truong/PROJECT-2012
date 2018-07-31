jQuery(function($){
	
	var adpacksstyles = {
		commonStyle	: '\
		#codrops-ad-wrapper{display:block; text-align:center; width:196px; height:125px;right:4px; top:32px; opacity:0.8; position:fixed; z-index:1000000;}\
		#codrops-ad-wrapper .one .bsa_it_ad{padding:10px;}\
		#codrops-ad-wrapper .one .bsa_it_ad .bsa_it_i{margin:0px;float:none;}\
		.one span.bsa_it_p{display:none;}\
		#codrops-ad-wrapper:hover{opacity:1.0;}\
		#codrops-ad-wrapper .adhere {width: 175px;height: 125px;display: block;background: rgba(255, 255, 255, 0.5);margin: 15px 0px 24px 26px;box-shadow: 1px 1px 2px rgba(0,0,0,0.3);line-height: 100px;text-align: center;font-size: 11px;font-family: Arial;font-style: italic;color: #333;text-shadow: 1px 0px 1px rgba(255,255,255,0.6);}\
		#codrops-ad-wrapper .bsap_adhere a{position: absolute;bottom: 4px;left: 8px;font-size: 9px;font-family: arial;text-transform: uppercase;text-decoration: none;color: #4186a9;}\
		#codrops-ad-wrapper .bsap_adhere a:hover{color:#296a8b;}\
		#codrops-ad-wrapper .one .bsa_it_ad a{text-transform:none;letter-spacing:0px;}\
		#codrops-ad-wrapper .bsap_backfillframe{margin:10px 0px 20px 32px; height:125px;}\
		@media screen and (max-width: 800px){ #codrops-ad-wrapper{width: 100%; height: auto; right: 0px; top: auto; bottom: 0px;} #codrops-ad-wrapper .one .bsa_it_ad .bsa_it_i{top: auto; bottom: 2px;} #codrops-ad-wrapper .one .bsa_it_ad{} #adpack-remove{width:18px;height:18px;} }\
	    '
	};
	prependStyle(adpacksstyles["commonStyle"]);
	//prependStyle(adpacksstyles[ADPACKSSTYLE]);

	$('body').prepend('<div id="codrops-ad-wrapper">\
    	<div id="bsap_1273220" class="bsarocks bsap_af25dfd2f1908889af7a1aa5f4dcbd9e"></div>\
	</div>');
	
	$('<a>').attr('href','').attr('id','adpack-remove').bind('click',function(){
		$(this).parent().remove();
		return false;
	}).appendTo('#codrops-ad-wrapper');
	
	(function(){
	  var bsa = document.createElement('script');
		 bsa.type = 'text/javascript';
		 bsa.async = true;
		 bsa.src = '//s3.buysellads.com/ac/bsa.js';
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
	})();
		
	function prependStyle(str){
		var style = document.createElement('style');
		style.setAttribute("type", "text/css");
		if (style.styleSheet) { 
			style.styleSheet.cssText = str;
		} else {                
			style.appendChild(document.createTextNode(str));
		}
		jQuery('head').append(style);
	}
});