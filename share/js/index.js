// JavaScript Document
// 當個別template需要於不同 responsive mode 下運行獨立的 javascript, 此 js 檔需要人手加到 html 頁內.


//當 template 設定為 1(預設是0), 轉 mode 時才會自動執行 desktopTemplate, tabletTemplate, mobileTemplate.
template = 1;


$("#tpl_css").attr("href", "../../share/css/index.css");

var mainSlider;

$(document).ready(function () {
            mainSlider = $("#mainSlider").sudoSlider({
                responsive: true,
                prevHtml:'<a href="#" class="prevBtn" title="Previous Slide">&#8249;</a>',
				nextHtml:'<a href="#" class="nextBtn" title="Next Slide">&#8250;</a>',
                numeric: true,
                continuous: true,
				touch: true,
                slideCount: 1
            });




			//fancybox
			$(".fancybox-button").fancybox({
					    	openEffect	: 'elastic',
							maxWidth	: 800,
							closeEffect	: 'elastic'
			});




});


$(window).load(function(){
	//fix sudoslider resize issue in Firefox when refresh.
	mainSlider.adjust();

});


function desktopTemplate() {
	$("#tpl_responsive_css").attr("href", "../../share/css/index_desktop.css");
	//$("#tpl_responsive_css_lang").attr("href", "../../share/css/index_desktop_tch.css");

	//fix Maximize button in Chrome
	setTimeout(function(){ mainSlider.adjust(); }, 200);

	$(".test .wrap").html("desktop content");

}

function tabletTemplate() {
	$("#tpl_responsive_css").attr("href", "../../share/css/index_tablet.css");
	//$("#tpl_responsive_css_lang").attr("href", "../../share/css/index_tablet_tch.css");

	//fix Maximize button in Chrome
	setTimeout(function(){ mainSlider.adjust(); }, 200);

	$(".test .wrap").html("tablet content");
}

function mobileTemplate() {
	$("#tpl_responsive_css").attr("href", "../../share/css/index_mobile.css");
	//$("#tpl_responsive_css_lang").attr("href", "../../share/css/index_mobile_tch.css");

	//fix Maximize button in Chrome
	setTimeout(function(){ mainSlider.adjust(); }, 200);

	$(".test .wrap").html("mobile content");

}
