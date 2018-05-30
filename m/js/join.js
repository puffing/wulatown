
$(function(){
	$tabBtn = $('.offer-nav li a');
	$tabcontent = $('.tabcontent');
	$offerNav = $('.offer-nav');
	$offercontWrap = $('.offer-cont');
	$pmWidth = $offerNav.width();
	$tabcontent.css({'width':$pmWidth});
	$imgWrap = $('.div-main-join')
	$headWrap= $('.navwrap')
	var index = 0;
	var offercontWrap = document.getElementById("tabC");//获取大盒子
	var x=0;//涉及当前事件的手指相对于页面的水平位置
	var startX = 0;//div的初始坐标
	var dragD = 0;//拖动的距离
	var scrollNum//声明滚动值变量
//	if(topnum=='200'){
//		alert('1')
//	}
	$(window).bind("scroll", function(){
		var imgHeight = $imgWrap.height()
		scrollNum=$('body').scrollTop();
		if(scrollNum>imgHeight||scrollNum==imgHeight){
			$offerNav.css({'position':'fixed','top':'0px'});
			$headWrap.css({'top':'-50px'});
		}else{
			$offerNav.css({'position':'static',"top":"0"});
			$headWrap.css({'top':'0'});
		}
//		if(scrollNum<imgHeight){
//			$offerNav.css({'position':'static',"top":"0"});
//			$headWrap.css({'top':'0'});
//			
//		}
//		console.log('上'+scrollNum<imgHeight)

	}); 
	$(window).resize(function(){
		$pmWidth = $offerNav.width();
		$tabcontent.css({'width':$pmWidth});
	});
		offercontWrap.style.right = 0+"px";
		offercontWrap.style.transition = "0.4s linear";
	$tabBtn.click(function (){
		index = $tabBtn.index(this);
		$tabboxHeight=$tabcontent.eq(index).height()
		$offercontWrap.css({'height':$tabboxHeight});
		$tabBtn.css({'border-bottom':'0px',"color":"#363636"});
		$(this).css({'border-bottom':'3px solid #ffd62e',"color":"#ffa414"});
		startX=$pmWidth*index;
		offercontWrap.style.right = startX+"px";
		offercontWrap.style.transition = "0.4s linear";
//		console.log('CLICKstartX'+startX)
//		console.log(dragD)
		dragD=startX
	});
	document.addEventListener("touchstart",function(e){
		x = e.changedTouches[0].pageX;//获取触屏开始时，手指相对于页面的水平位置
		startX = dragD;//触屏开始的时候，把拖动的距离赋给div的初始坐标
//		console.log('TOUCHstartX'+startX)
	})
	offercontWrap.addEventListener("touchmove",function(e){
		var xL = e.changedTouches[0].pageX - x;//手指拖拽的时候，此时手指相对于页面的水平位置-触屏开始时手指相对于页面的水平位置       等于       手指之间的距离
//		console.log('间距'+xL)

		dragD = startX - xL;//拖动的距离 = div的初始坐标加手指之间的距离
		this.style.right = dragD +"px";
		this.style.transition = "";
	});
	offercontWrap.addEventListener("touchend",function(e){
		var xL = e.changedTouches[0].pageX - x;
		dragD = startX - xL;
		if(xL>40){
			index=index-1
		}else if(xL<-40){
			index=index+1
		}else{
			index=index
		}
//		console.log(index)
		if(index<0){
			index=0
		}else if(index>3){
			index=3
		}
		dragD=index*$pmWidth
		this.style.right = dragD+"px";
		this.style.transition = "0.4s linear";
		$tabboxHeight=$tabcontent.eq(index).height()
		$offercontWrap.css({'height':$tabboxHeight});

		for (var i =0; i<$tabBtn.length ; i++)
		{
			if (i != index)
			{
				$tabBtn.eq(i).css({'border-bottom':'0px',"color":"#363636"});
			}else{
				$tabBtn.eq(i).css({'border-bottom':'3px solid #ffd62e',"color":"#ffa414"});
			}
		}

	})
})
//-----------------------------------------------------------------------------------------------------------
//	console.log(tap)
//	$tabBtn.on("tap",function(){
//		alert("您向左滑动！");
//		index = ++index%$tabBtn.size();
//		$moveNum=$pmWidth*index;
//		$offercontWrap.animate({right:500});
//	});


//$("#aa li").click(function(){
//	$("#aa li").removeClass("class名字，多个class用空格分开");
//	$(this).addClass("class名字，多个class用空格分开");
//	if($(this).index()!=0){
//	$("#submenu").hide();
//	}else{
//	$("#submenu").show();
//	}
//})
//var $lbul = $('.m2-lb-img');//获取UL元素
//	var $lbLi = $('.m2-lb-img li');
//	var $lb_t = $('.lb_t');
//	var $nums = $('.m2-lb-point li');
//	var index=0;
//	var $ulwrapWidth = $('.mod2-centent').width();//获取UL外的BOX宽度，做适配
//	$lbLi.css({'width':$ulwrapWidth})//适配
//	//以下根据窗口宽度变化调整UL外的BOX宽度
//	$(window).resize(function(){
//		$ulwrapWidth = $('.mod2-centent').width();
//		$lbLi.css({'width':$ulwrapWidth})
//	});
//	var moveNUM;//存放移动距离
//	var changeBanner =function(){
//		$curr=$nums.eq(index);
//		//以下IF为动态获取移动距离
//		if($nums.size()<index){
//			index = 0;
//			moveNUM = 0;
//		}else{index=index;
//			moveNUM = index*$ulwrapWidth
//		}
//		$lbul.animate({right:moveNUM});
//		$curr.addClass('curr').siblings().removeClass('curr');	
//		
//		index=++index%$nums.size();	
//	}
//	var interval = window.setInterval(changeBanner,2000);