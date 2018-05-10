$(function(){
	var num = 0;//记录当前序列号
	var timer = null;
	var banner = $(".banner");
	var nextBtn = banner.find(".next");
	var prevBtn = banner.find(".prev");
	var dot = banner.find("ol>li");
	var len = dot.length;
	var move_img = banner.find("ul>li");
	//目标:找到 小圆点 单击 图像对应的切换
	function  move(i){
		move_img.stop().fadeOut(300).eq(i%len).fadeIn(300);
		dot.removeClass().eq(i%len).addClass("active");
		}
	dot.click(function(){
		var index = $(this).index();//获取当前索引号
		num = index;
		move(num);
		})
	function next(){
		num++;
		move(num);
		}
	function prev(){
		num--;
		move(num);
		}
	function autoPlay(){timer = setInterval(next,3000);}
	function pausePlay(){clearInterval(timer)}
	banner.hover(pausePlay,autoPlay);
	autoPlay();
	})