$(function(){
	
	     /*首页新闻自动滚动*/
	     function newsAuto(){
			$('.in-nw-hz ul').animate({marginTop:'-31px'},1000,function(){
			$('.in-nw-hz ul').css({marginTop:"0px"});
			$('.in-nw-hz ul').find("li:first").appendTo($('.in-nw-hz ul'));
			});
		 }
		 timer= setInterval(newsAuto,2000);
		 $('.index-news').hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(newsAuto,2000);
		 })
		 $('.in-nw-btn .in-next').click(function(){
			 $('.in-nw-hz ul').animate({marginTop:'-31px'},300,function(){
			 $('.in-nw-hz ul').css({marginTop:"0px"});
			 $('.in-nw-hz ul').find("li:first").appendTo($('.in-nw-hz ul'));
			
			});
		 });
		 $('.in-nw-btn .in-rest').click(function(){
			 $('.in-nw-hz ul').find("li:last").prependTo($('.in-nw-hz ul'));
			 $('.in-nw-hz ul').css({marginTop:"-31px"});
			 $('.in-nw-hz ul').animate({marginTop:'0px'},300,function(){
			
			});
		 });
		 
		 $('.dakai').click(function(){
			if(!$(this).hasClass('d-bg1')){
			    $('.dian-main').removeClass('gao-du');
			    $('.dakai').addClass('d-bg1');
			}else{
			    $('.dakai').removeClass('d-bg1');
			    $('.dian-main ').addClass('gao-du');
			}
		  });
	     
		 Imgslide($('.in-w-db .in-w-dl ul'),$('.in-w-dl ul li'),$('.in-sk-f'),$('.in-sk-r'),1,'','')
		 Imgslide($('.zui-jin1 .zui-dl1 ul'),$('.zui-dl1 ul li'),$('.in-zu-tf1'),$('.in-zu-tr1'),5,'','')
		 Imgslide($('.zui-jin2 .zui-dl2 ul'),$('.zui-dl2 ul li'),$('.in-zu-tf2'),$('.in-zu-tr2'),5,'','')
	    /*图片滑动*/
		function Imgslide(father,son,leftBtn,rightBtn,num,left_no,right_no){
					var page = 1;
					father.css({width:son.outerWidth(true)*son.length});
					var pageNum = Math.ceil(son.length/num);
					leftBtn.addClass(left_no);
					rightBtn.click(function(){
						if(page<pageNum){
								father.animate({marginLeft:'-='+son.outerWidth(true)*num},500);
								leftBtn.removeClass(left_no);
								page++;
								if(page==pageNum){
									rightBtn.addClass(right_no);
								}
						}
					})
					leftBtn.click(function(){
						if(page>1){
								father.animate({marginLeft:'+='+son.outerWidth(true)*num},500);
								rightBtn.removeClass(right_no);
								page--;
								if(page==1){
									leftBtn.addClass(left_no);
								}
							}
					})
				};
		 
		 hover_tab($('.detail_f .detail_s'),$('.detail_l_box_c li'),'click');
		  /*选项卡*/
		  function hover_tab(obj,btn,add_class){
				obj.hide();
				obj.css({zIndex:12});
				obj.eq(0).show();
				btn.eq(0).addClass(add_class);
				btn.eq(0).siblings().removeClass(add_class);
			    obj.eq(0).css({zIndex:13});
				btn.mouseover(function(){
						if(!$(this).hasClass(add_class)){
							$(this).addClass(add_class);
							$(this).siblings().removeClass(add_class);
							obj.fadeOut(500);
							obj.css({zIndex:12});
							obj.eq(	$(this).index()).fadeIn(500);
							obj.eq(	$(this).index()).css({zIndex:13});
							}
							
					})
		 }
		 
		  click_tab($('.chu-z-box'),$('.chu-z-tab ul li'),'on');
		  click_tab($('.detali-common'),$('.deta-tab ul li'),'on');
		  click_tab($('.m-ht-box'),$('.m-ht-tab span'),'on');
		  /*选项卡*/
		  function click_tab(obj,btn,add_class){
				obj.eq(0).show();
				btn.eq(0).addClass(add_class);
				btn.eq(0).siblings().removeClass(add_class);
				btn.click(function(){
						if(!$(this).hasClass(add_class)){
							$(this).addClass(add_class);
							$(this).siblings().removeClass(add_class);
							obj.hide();
							obj.eq(	$(this).index()).show();
							}
							
					})
		  }
		 
	     banner('.banner_btn li','click','.banner_f .banner_s','.banner',5000,'','');
		 banner('.banner-btn-hh li','click','.banner-f-hh .banner-s-hh','.banner-hh',5000,'','');
		 banner('.i-banner_btn li','click','.i-banner_f .i-banner_s','.i-banner',5000,'','.i-banner_r');
		 function banner(btn,className,son,box,time,left,right){
			var now_page = 0;
			var page_num = $(son).length;
			$(son).eq(now_page).css({zIndex:5}).show();
			$(son).eq(0).siblings().css({zIndex:3}).hide();
			var timer = null;
			$(btn).eq(now_page).addClass(className);
			$(btn).click(function(){
					if($(this).index()!=now_page&&!$(son).is(":animated")){
							$(son).eq(now_page).fadeOut(500,function(){
									$(this).css({zIndex:3});
								})
							$(son).eq($(this).index()).css({zIndex:5}).fadeIn(500);
							$(btn).removeClass(className);
							$(btn).eq($(this).index()).addClass(className);
							now_page = $(this).index();
						}
				})
			function bannerAuto(){
						if(!$(son).is(":animated")){
							if(now_page<page_num-1){
								$(son).eq(now_page).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(now_page+1).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(now_page+1).addClass(className);
								now_page++
							}else{							
								$(son).eq(page_num-1).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(0).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(0).addClass(className);
								now_page=0;
							}
						}
				}

			$(left).click(function(){
						if(!$(son).is(":animated")){
							if(now_page==0){
								$(son).eq(0).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(page_num-1).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(page_num-1).addClass(className);
								now_page=page_num-1;
							}else{							
								$(son).eq(now_page).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(now_page-1).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(now_page-1).addClass(className);
								now_page--;
							}
						}

			})
			$(right).click(function(){
						if(!$(son).is(":animated")){
							if(now_page<page_num-1){
								$(son).eq(now_page).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(now_page+1).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(now_page+1).addClass(className);
								now_page++
							}else{							
								$(son).eq(page_num-1).fadeOut(500,function(){
										$(this).css({zIndex:3});
									})
								$(son).eq(0).css({zIndex:5}).fadeIn(500);
								$(btn).removeClass(className);
								$(btn).eq(0).addClass(className);
								now_page=0;
							}
						}

				})

			timer= setInterval(bannerAuto,time);
			$(box).hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(bannerAuto,time);
			})
		 }
	     
		$('.chu-z-box ul li').eq(0).addClass("on");//初始化第一个显示出来
		$('.chu-z-box ul li').hover(function(){
				$('.chu-z-box ul li').removeClass("on");//当鼠标移到这个元素的时候，执行这个函数	
				$(this).addClass("on");
		},function(){
				
		})
		
		$('.m-ht-box ul li').eq(0).addClass("on");//初始化第一个显示出来
		$('.m-ht-box ul li').hover(function(){
				$('.m-ht-box ul li').removeClass("on");//当鼠标移到这个元素的时候，执行这个函数	
				$(this).addClass("on");
		},function(){
				
		})
		
		/****图书商城效果****/
		$(".se-zu li").hover(function(){
	       $(this).find(".float_layer").show();
	    },function(){
	       $(this).find(".float_layer").hide();
	    });
		
		/****悬浮框效果****/
		$('.xuanfu ul li').hover(function(){
			if(!$(this).hasClass('hover')){
			$(this).addClass('hover').find('.xuan-box').stop(true,true).show(300);
			}else
			{	
			$(this).removeClass('hover').find('.xuan-box').stop(true,true).hide(300);
			}
		})
	   
	    //支付页面
	    $(".close").click(function(){ 
	      $(".f-k-box").hide();
		  $(".fu-kuan-box").hide();
        })
	     
	     //返回顶部
	    $(".scroll_top").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
	      $("html,body").animate({scrollTop:"0px"},200);
        })
	
	   $('.ny-dd-list li .dd').height($('.ny-dd-list li .dc').height());
	   $('.zhi-f-dl .dt1').height($('.zhi-f-dl .dd1').height());
	   $('.zhi-f-dl .dt2').height($('.zhi-f-dl .dd2').height());
	   $('.zhi-f-dl .dt3').height($('.zhi-f-dl .dd3').height());
	
});