$banner=$('.banner');
$bannerBox=$('#banner-box');
//$lbLiHeight=$(".m2-lb-img li").height();
//$lbLiWidth=$(".m2-lb-img li").width();
$lbUl=$(".m2-lb-img")
$(function(){
	//var ft = document.getElementsByTagName("html")[0];
	//var s = window.screen.width;
	//var w = document.body.offsetWidth;
	//ft.style.fontSize = w/s*16 +"px";
	//console.log($lbLiHeight)
	
	$bannerH=$banner.height();
	$bannerW=$banner.width();
	$bannerBox.css({'height':$bannerH,'width':$bannerW});
	//$lbUl.css({'height':$lbLiHeight});
})
$(window).resize(function(){
	$bannerH=$banner.height();
	$bannerW=$banner.width();
	$bannerBox.css({'height':$bannerH,'width':$bannerW});
	//$lbUl.css({'height':$lbLiHeight});
});
