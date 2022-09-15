$(document).ready(function(){
	setInterval(function(){
		$('.dong_mask').css({'height':'0','opacity':'0'})
	},3000)
	var i = 0
	var rot = ['160deg','260deg','360deg']
	$('.move_list').eq(0).css({'opacity':'1','z-index':'1'})
	$('.move_back').css({'filter':'brightness(50%) hue-rotate('+rot[0]+')'})
	$('.MT_left').click(function(){
		i--
		if(i<0){
			i = $('.move_list').length-1
		}
		$('.move_list').eq(i).css({'opacity':'1','z-index':'1'}).siblings().css({'opacity':'0','z-index':'0'})
		$('.move_back').css({'filter':'brightness(50%) hue-rotate('+rot[i]+')'})
	})
	$('.MT_right').click(function(){
		i++
		if(i>$('.move_list').length-1){
			i = 0
		}
		$('.move_list').eq(i).css({'opacity':'1','z-index':'1'}).siblings().css({'opacity':'0','z-index':'0'})
		$('.move_back').css({'filter':'brightness(50%) hue-rotate('+rot[i]+')'})
	})
	$(window).scroll(function(){
		var top = $(window).scrollTop()
		var height_move = $('.move').height()
		var height_top = $('.top').height()
		var move_helf = height_move/2
		var height_about = $('.about').height()
		var about_helf = height_about/2
		var _move = $('._move').height()
		var _move_helf = _move/2
		var test = $('.test').height()
		var test_helf = test/2
		var team = $('.team').height()
		var team_helf = team/2
		var content = $('.content').height()
		var content_helf = content/2
		if(top>height_top){
			$('.top').css({'position':'fixed','background-color':'rgb(10,13,16,.8)','z-index':'999'})
		}else{
			$('.top').css({'position':'','background-color':''})
		}
		
		if(top>move_helf){
			$('.move_back').css({'transform':'scale(1.1) translateY(5rem)'})
			$('.AR_img').css({'transform':'scale(1)'})
			$('.about_h1').css({'transform':'translateY(0rem)'})
		}else{
			$('.move_back').css({'transform':'scale(1) translateY(0rem)'})
			$('.AR_img').css({'transform':'scale(.7)'})
			$('.about_h1').css({'transform':'translateY(2rem)'})
		}
		
		if(top>height_move+about_helf){
			$('._move_con').css({'transform':'translateX(0rem)','opacity':'1'})
		}else{
			$('._move_con').eq(0).css({'transform':'translateX(-5rem)','opacity':'0'})
			$('._move_con').eq(2).css({'transform':'translateX(-5rem)','opacity':'0'})
			$('._move_con').eq(1).css({'transform':'translateX(5rem)','opacity':'0'})
			$('._move_con').eq(3).css({'transform':'translateX(5rem)','opacity':'0'})
		}
		
		if(top>height_move+height_about+_move_helf){
			$('.test_w').css({'transform':'translateY(0rem)'})
		}else{
			$('.test_w').css({'transform':'translateY(5rem)'})
		}
		
		if(top>height_move+height_about+_move+test_helf){
			$('.team_h1').css({'transform':'scale(1)','opacity':'1'})
			$('.team_li').addClass('add_team_li')
		}else{
			$('.team_h1').css({'transform':'scale(.7)','opacity':'0'})
			$('.team_li').removeClass('add_team_li')
		}
		
		if(top>height_move+height_about+_move+test+team-height_top){
			$('.content_h1').css({'transform':'scale(1)translateY(15rem)'})
		}else{
			$('.content_h1').css({'transform':'scale(.7)translateY(30rem)'})
		}
		
		if(top>height_move+height_about+_move+test+team+content_helf-height_top){
			$('.season_h1').css({'opacity':'1','transform':'translateY(0rem)'})
			$('.season_image').css({'opacity':'1','transform':'scale(1)'})
		}else{
			$('.season_h1').css({'opacity':'0','transform':'translateY(4rem)'})
			$('.season_image').css({'opacity':'0','transform':'scale(.7)'})
		}
		var height_move = height_move-$('.top_ul').height()
		var th = Math.floor(top/height_move);
		$('.top_li').eq(th).css({'color':'skyblue'}).siblings().css({'color':'white'})
	})
	var doc = $('body').width()
	var allW = $('.team').width()
	$(document).mousemove(function(e){
		var x = e.pageX;
		var offset = x / doc * allW - x / 2;
		$('.team_ul').css({'transform':'translate3d('+-offset+'px,0,0)',
			'transition':'0s'
		})
	})
	var s = 0;
	$('.season_img').eq(0).css({'opacity':'1','transform':'translateX(0rem)'})
	$('.btn_left').click(function(){
		s--
		if(s<0){
			s = $('.season_img').length - 1
		}
		$('.season_img').eq(s).css({'opacity':'1','transform':'translateX(0rem)'}).siblings().css({'opacity':'0','transform':'translateX(-30rem)'})
	})
	$('.btn_right').click(function(){
		s++
		if(s>$('.season_img').length - 1){
			s = 0
		}
		$('.season_img').eq(s).css({'opacity':'1','transform':'translateX(0rem)'}).siblings().css({'opacity':'0','transform':'translateX(-30rem)'})
	})
	$('.move_down_w').click(function(){
		var height = $('.move').height()
		var top = $(window).scrollTop()
		$('html,body').animate({'scrollTop':height},800)
	})
	$('.top_li').click(function(){
		var index = $(this).index()
		var hei = $('.move').height()*2
		var hei = hei-$('.top_ul').height()*2
		$('html,body').animate({'scrollTop':hei*index},500)
	})
})