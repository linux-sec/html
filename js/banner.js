$(function(){
	
	var num = 0;
	
	$(".banner ol li").click(function(){
		//1.对于底部小圆点的 class处理:  点击谁 谁带class=“active”，另外的其他li的class去掉
		var index = $(this).index();
		$(".banner ol li").removeClass();
		$(this).addClass("active");
		$(".banner ul li").css("display","none");
		$(".banner ul li:eq("+index+")").css("display","block");
		})
		
	
	})