$(function () {
  $('#home_slider').flexslider({
    animation : 'slide',
    controlNav : true,
    directionNav : false,
    animationLoop : true,
    slideshow : true,
    slideshowSpeed:3000,
    useCSS : true,
    animationSpeed:500,
    pauseOnHover:true,
    start:function(){
      if($('body').height()>1000){
        $('#nav').css({
          height:$('body').height()-100,
          width:$('body').width()/2
        })
      }else{
        $('#nav').css({
          width:$('body').width()/2
        })
      }
    }
  });
  $('#home_slider2').flexslider({
    animation : 'slide',
    controlNav : false,
    directionNav : true,
    animationLoop : true,
    slideshow : true,
    slideshowSpeed:3000,
    useCSS : true,
    animationSpeed:500,
    pauseOnHover:true,
    start:function(){
      if($('body').height()>1000){
        $('#nav').css({
          height:$('body').height()-100,
          width:$('body').width()/2
        })
      }else{
        $('#nav').css({
          width:$('body').width()/2
        })
      }
    }
  });
  

  var $li = $('.flex-control-paging li');
  $('.flex-control-paging ').css({
    marginLeft:-($li.outerWidth(true)*$li.length)/2
  })
  
  

});	 