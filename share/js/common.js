// JavaScript Document

/*-------------------------------responsive----------------------------------------*/

//googlefont 運行於 IE9 或以上
if (navigator.appVersion.indexOf("MSIE 8.")!=-1) {
		} else {

			//load google font
			googleFontLoad();

}




//Google Font
function googleFontLoad() {

	WebFontConfig = {
		google: { families: [ 'Lato:300,700:latin' ] }
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.useso.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	  })();


}

/*----------------------------------Language Switch-------------------------------------------*/
function switchlang(langVal) {
	var loc = window.location.href;
	loc = loc.replace(/\/eng\/|\/tch\/|\/sch\//g, '/'+langVal+'/');
	window.location.href=loc;
};


