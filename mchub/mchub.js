jQuery(document).ready(function( $ ) {

  // Hero rotating texts
  $("#main-frame .rotating").Morphext({
    animation: "rotateInUpLeft",
    separator: ",",
    speed: 3000
  });
  
  // Initiate the wowjs
  new WOW().init();
  
  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});
  
  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {
              
              var top_space = 0;
              
              if( $('#header').length ) {
                top_space = $('#header').outerHeight();
              }
              
              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');
              
              return false;
          }
      }
  });
  
  // Back to top button
  $(window).scroll(function() {

      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
      
  });
  
  $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
  });

});

//Add QQ
function AddQQ() {
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
    if(isIphone){
        location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=1147723332&card_type=person&source=sharecard";
    }else if(isAndroid){
        location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=1147723332&card_type=person&source=sharecard";
    }else{
        location.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1147723332";}
}

//Copy Wechat
function CopyWechat() {
    var copy = document.getElementById('WeChatNumber');
    window.getSelection().selectAllChildren(copy);
    document.execCommand('Copy');
    alert("微信号复制成功",1500);
	// 打开微信
	window.location.href='weixin://';
    e.clearSelection();    
    console.log(e.clearSelection);  
}