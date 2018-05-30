$(function(){
	var $lbul = $('.m2-lb-img');//获取UL元素
	var $lbLi = $('.m2-lb-img li');
	var $lb_t = $('.lb_t');
	var $nums = $('.m2-lb-point li');
	var index=0;
	var $ulwrapWidth = $('.mod2-centent').width();//获取UL外的BOX宽度，做适配
	$lbLi.css({'width':$ulwrapWidth})//适配
	//以下根据窗口宽度变化调整UL外的BOX宽度
	$(window).resize(function(){
		$ulwrapWidth = $('.mod2-centent').width();
		$lbLi.css({'width':$ulwrapWidth})
	});
	var moveNUM;//存放移动距离
	var changeBanner =function(){
		$curr=$nums.eq(index);
		//以下IF为动态获取移动距离
		if($nums.size()<index){
			index = 0;
			moveNUM = 0;
		}else{index=index;
			moveNUM = index*$ulwrapWidth
		}
		$lbul.animate({right:moveNUM});
		$curr.addClass('curr').siblings().removeClass('curr');	
		
		index=++index%$nums.size();	
	}
	var interval = window.setInterval(changeBanner,2000);
})

//
//var interval = window.setInterval(changeBanner,2000);
			
//
//$('#banners div.content').hover(function(){
//				$('a.btn',this).show();
//				window.clearInterval(interval);
//			},function(){
//				$('a.btn',this).hide();
//				interval = window.setInterval(changeBanner,2000);
//			});
////
//function changeBanner(flag){
//				var $curr = $nums.eq(index);
//				$curr.addClass('curr').siblings().removeClass('curr');
//				var $target = $banners.eq(index);
//				var bgColor = $target.attr('bgColor');
//				$banner.css('background-color',bgColor);
//				$target.stop().fadeIn(500).siblings().stop().hide();
//				index = ++index%$nums.size();
//			}