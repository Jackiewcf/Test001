<%@ page language="java" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en-hk">
<head>
<meta charset="UTF-8" >
<title>Index</title>

<%@ include file="../main/meta.html"%>


<script type="text/javascript" src="../../share/js/index.js"></script>


</head>

<body>
<div id="header">
	<div class="wrap">
		<a href="#sidr-main" class="mobileMenuBtn" id="responsive-menu-button"><span></span><span></span>Mobile Menu</a>
		<div id="navigation">
			<ul class="mainMenu">
				<li><a href="#">About Us</a>
				</li>
				<li><a href="#">Our Products</a>
					<ul>
						<li><a href="#">Product A</a>
						<li><a href="#">Product B</a>
						<li><a href="#">Product C</a>
					</ul>
				</li>
				<li><a href="#">Contact Us</a>
				</li>
				<li><a href="#">Language</a>
					<ul>
						<li><a href="javascript:switchlang('eng');">Eng</a>
						<li><a href="javascript:switchlang('tch');">繁體</a>
						<li><a href="javascript:switchlang('sch');">简体</a>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
<a class="mobileMenuMask"></a>

<div id="container" class="contentArea">
    <div style="position:relative;">
        <div id="mainSlider">
			<a href="#" class="responBgImg" style="background-image:url('../images/banner_d.png');">image description</a>
			<a href="#" style="background-image:url('../images/banner_d.png');">image description</a>
			<a href="#" style="background-image:url('../images/banner_d.png');">image description</a>
			<a href="#" style="background-image:url('../images/banner_d.png');">image description</a>
			<a href="#" style="background-image:url('../images/banner_d.png');">image description</a>
        </div>
    </div>


	<div class="titleBox desktopBox">
		<div class="wrap">
			desktop Box
			<a href="#fancyContent" class="fancybox-button">[ Fancybox ]</a>
			<div class="boxContainer">
				<div class='box1'>Lorem ipsum</div>
				<div class='box2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
				<div class='box3'>Lorem ipsum</div>
				<div class='box1'> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
				<div class='box2'>Lorem ipsum</div>
				<div class='box3'>Lorem ipsum</div>
			</div>
		</div>
	</div>
	<div class="titleBox tabletBox">
		<div class="wrap">
		tablet Box
			<table class="tableContent">
				<tr>
					<td>text1</td>
					<td>text2</td>
					<td>text3</td>
					<td>text4</td>
					<td>text5</td>
					<td>text6</td>
					<td>text7</td>
					<td>text8</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="titleBox mobileBox">
		<div class="wrap">
		mobile Box
		</div>
	</div>

</div>

<div id="fancyContent" style="display:none;">fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content fancybox content</div>


</body>
</html>
