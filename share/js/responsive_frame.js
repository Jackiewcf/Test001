// JavaScript Document

var lang;

var nua = navigator.userAgent;
var screenMode= 0;
var template = 0;
var device_width;
var responsive;


//設定轉換screenmode width
var triggerTablet = 1100;
var triggerMobile = 700;

//設定頁面 width (給 viewport 計算比例)
var desktopPageW = 1180;
var tabletPageW = 760;
var mobilePageW = 320;

//判斷是否移動裝置
var mDevice = 0;
if( nua.match(/(iPad|iPhone|android|BlackBerry|Nokia)/i) ){
	mDevice = 1;
}


//初始執行 viewportScale, responsiveTable
$(document).ready(function(){

		//判斷語言版本 (zh-hk:繁體 / zh-cn:簡體 / en-hk:英文 )
		lang = $("html").attr("lang");

		//setTimeout(function(){	viewportScale();}, 500);
		responsiveTable();

		$('.tableWrap').perfectScrollbar({ suppressScrollY:true });

		//init mobile menu
		$('#responsive-menu-button').sidr({
				name: 'sidr-main',
				side: 'right',
				onOpen : function() { $(".mobileMenuMask").fadeIn();},
				onClose : function() { $(".mobileMenuMask").fadeOut("fast", function(){ $("body").css("visibility","visible"); });},
				source: '#navigation'
    	});
		$( ".mobileMenuMask" ).on( 'click', function() {
			$.sidr('close', 'sidr-main');
		});


});





//轉換3套 CSS files 及執行兩個主要 responsive functions,
function triggerMode(modeNum){
	var tmpMode = modeNum;
	switch(tmpMode){
		case 1:
			screenMode = 1;
			$("#responsive_css").attr("href", "../../share/css/common_desktop.css");
			desktopFrame();
			break;
		case 2:
			screenMode = 2;
			$("#responsive_css").attr("href", "../../share/css/common_tablet.css");
			tabletFrame();
			break;
		case 3:
			screenMode = 3;
			$("#responsive_css").attr("href", "../../share/css/common_mobile.css");
			mobileFrame();
			break;
		default:
			screenMode = 0;
			$("#responsive_css").attr("href", "../../share/css/common_desktop.css");
	}
}

/*
function mobileMode(){
			screenMode = 3;
			$("#responsive_css").attr("href", "../../share/css/common_mobile.css");
			//$("#responsive_css_lang").attr("href", "../../share/css/common_mobile_tch.css");
			mobileFrame();
}

function tabletMode(){
			screenMode = 2;
			$("#responsive_css").attr("href", "../../share/css/common_tablet.css");
			//$("#responsive_css_lang").attr("href", "../../share/css/common_tablet_tch.css");
			tabletFrame();
}

function desktopMode(){
			screenMode = 1;
			$("#responsive_css").attr("href", "../../share/css/common_desktop.css");
			//$("#responsive_css_lang").attr("href", "../../share/css/common_desktop_tch.css");
			desktopFrame();

}*/

//判斷 viewport width 去觸發 responsive及設定 screenMode

function adjustStyle(width,e) {
			device_width = parseInt(width);

				if (device_width <= triggerMobile) {
					//Mobile
					if (screenMode != 3){
						triggerMode(3);
					}

				} else if ((device_width > triggerMobile) && (device_width < triggerTablet)) {
					//Tablet
					if (screenMode != 2){
						triggerMode(2);
					}

				} else {
					//Desktop
					if (screenMode != 1){
						//由 Mobile mode 到 Desktop mode 時, 先行一次 tablet 的 js, 因為元素返回 desktop 時是基於 tablet 的位置.
						if (screenMode == 3){
							tabletFrame();
						}
						triggerMode(1);
					}
				}


	}


//框架的 Responsive, 在這裡設定每頁都會出現的元素, 例如 header, mainmenu, footer..etc.

function desktopFrame() {
	$(document).ready(function(){

		//如 template 有設定為1, 才執行 desktopTemplate.
		if(template == 1) { desktopTemplate(); }

		responsiveImage("d");

		updatePerfectScroll();

		$.sidr('close', 'sidr-main');
	});
}

function tabletFrame() {
	$(document).ready(function(){


		if(template == 1) { tabletTemplate(); }

		responsiveImage("t");

		updatePerfectScroll();
	});

}

function mobileFrame() {
	$(document).ready(function(){

		if(template == 1) { mobileTemplate(); }

		responsiveImage("m");

		updatePerfectScroll();

	});


}


//viewport scale
//計算出頁面與裝置Viewport之間的比率來放大頁面, 令頁面縮放到適合裝置屏幕闊度(暫時只在 tablet mode 使用, mobile mode 會使用流體式Responsive)
//(定闊式Responsive 頁面專用, 流體式Responsive 不需使用)
/*
function viewportScale(page){
	if(screenMode == 2){
		var page = "", vpStr = "";
		var realWidth = $(window).width();

		//設定3個 mode 的頁面闊度
		if (screenMode == 3){ page = mobilePageW }
		else if (screenMode == 2){ page = tabletPageW }
		else if (screenMode == 1){ page = desktopPageW }

		//計出比率
		var targetScale = (realWidth/page).toFixed(2);
		//計出DPI密度,160為基本密度
		var targetDPI = (page / realWidth)*160;

		vpStr = "width="+page+", initial-scale="+targetScale+", minimum-scale="+targetScale+", maximum-scale="+targetScale+", user-scalable=no";

		//densitydpi 只供 android 原生 browser 使用
		if(/android/i.test(navigator.userAgent))
			vpStr += ", target-densitydpi="+targetDPI;

		//重寫 viewport
		$("#viewport").attr({"content":vpStr});

		//縮放後才顯示頁面 (避免畫面放大前出現縮細現象, body css 於 mobile 和 tablet 需預設定為 none)
		$("body").css("visibility","visible");

	}else {
		//Responsive 關閉時, 開啟頁面縮放功能.
		$("body").css("visibility","visible");
		$("#viewport").attr("content","width=device-width, user-scalable=yes");

	}
}
*/

//移動裝置旋轉時觸發 viewportScale, 重新計算比例
if( mDevice == 1 ){
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){
			//var tempMode = screenMode;

			//計算前需要重設 Viewport
			//$("#viewport").attr("content","width=device-width, minimum-scale=1, maximum-scale=1, target-densitydpi=160 , initial-scale=1, user-scalable=no");
			//reset screenmode & trigger slider
			adjustStyle($(window).width());
			//$(window).resize();

			//重設 viewport 後, 推遲觸發 viewportScale
			//setTimeout(function(){
			//	viewportScale();
			//}, 1000);


		}, false);


}


//3個responsive mode 轉換獨立圖片
function responsiveImage(currentMode){
	//change image link
	$(".responImg").each(function(){
		var changesectioncss = $(this).attr("src").replace(/_d\.|_t\.|_m\./ , "_"+currentMode+".");
		$(this).attr("src",changesectioncss);
	});

	//change background image link
	$(".responBgImg").each(function(){
		var changesectioncss = $(this).attr("style").replace(/_d\.|_t\.|_m\./ , "_"+currentMode+".");
		$(this).attr("style",changesectioncss);
	});
}


//畫面闊度不足夠時, 沒有".notScroll"的 table 自動顯示 x-scroll bar.
function responsiveTable(){
	$(".contentArea table").each(function(){
		if($(this).hasClass("notScroll")==false){
			$(this).wrap("<div class='tableWrap' style='position:relative;'></div>");
		}
	});
}

//轉 mode 時更新 perfect scrollbar 呎吋.
function updatePerfectScroll(){
	if (navigator.appVersion.indexOf("MSIE 8.")!=-1) {
		} else {
				//延遲讓 responsive mode 完成畫面更新才重設 scrollbar.
				setTimeout(function(){ $('.tableWrap').perfectScrollbar('update'); }, 200);
	}
}







//------------------------------------------------於 IE9 或以上及開啟 repsonsive 時觸發 responsive mode----------------------------------------

if (navigator.appVersion.indexOf("MSIE 8.")!=-1 || responsive == 0 ) {

			//IE8 或 Responsive 關閉時 :
			$(function() {
				//$("#mobileMenu").hide();
				triggerMode(1);
			});

		} else {

			//IE9 以上或 chrome, firefox:

				//開始時判斷 width 觸發 Responsive
				adjustStyle($(window).width());

				$(function() {
					//視窗改變大小時觸發 Responsive
					$(window).resize(function() {
								adjustStyle($(window).width());
					});
				});

}


