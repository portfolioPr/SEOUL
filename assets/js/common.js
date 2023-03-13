$(function(){

    /**
     * @언어선택 셀렉트박스 링크이동
     * 
     * @url 셀렉트의 벨류값
     */
    $('#langBtn').click(function(){
      const url = $('#langList').val()
      window.open(url);
    })


    /**
     * 
     * 메인비주얼 슬라이드
    */
    const visualSlide = new Swiper('.view_section .vis-slide', {
      loop : true,
        pagination: {
        el: ".pagination",
        type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            },
      autoplay:{
        autoplay: true,
        delay: 2500,
        disableOnInteraction: false
      }
    });

    /**
    * 배너슬라이드 자동재생 컨트롤
    */
      $('.sc-slide .autoplay').click(function(e){
      e.preventDefault();

      if($(this).hasClass('on')){
        $(this).removeClass('on').attr('aria-label','자동재생 정지')
        visualSlide.autoplay.start()
      }else{
        $(this).addClass('on').attr('aria-label','자동재생 적용')
        visualSlide.autoplay.stop()
      }

    })

    /**
     * 메인비주얼 탭이동
     */
    $('.sc-slide .slide-tab a').on('click', function(e) {
      e.preventDefault();
      idx = $(this).data('index');
      $('.sc-slide .slide-tab a').removeClass('active');
      $(this).addClass('active');
       
      visualSlide.slideTo(idx);
    });

    /**
     * 메인비주얼 슬라이드 탭이동
     */
    visualSlide.on('slideChange',function(){
      console.log(this);
      if(this.realIndex >= 4){
       $('.sc-slide .slide-citizens').addClass('active').siblings().removeClass('active');
      }else{
        $('.sc-slide .slide-news').addClass('active').siblings().removeClass('active');
      }
    })

     /*
      * 
      * 배너슬라이드
     */
     const bannerSlide = new Swiper(".banner-slide", {
         autoplay: {
         delay: 2400, 
         disableOnInteraction: false,
         },
         loop : true,
         slidesPerView : '3',
         spaceBetween: 43,
         pagination: {
         el: ".pagination",
         type: "fraction",
         },
         navigation: {
         nextEl: ".next",
         prevEl: ".prev",
         },
     });

     /**
      * 배너슬라이드 자동재생 컨트롤
      */
     $('.sc-banner .autoplay').click(function(e){
      e.preventDefault();

      if($(this).hasClass('on')){
        $(this).removeClass('on').attr('aria-label','자동재생 정지')
        bannerSlide.autoplay.start()
      }else{
        $(this).addClass('on').attr('aria-label','자동재생 적용')
        bannerSlide.autoplay.stop()
      }

    })


     /*
      * 
      * 푸터 패밀리사이트
     */   
     $('.sc-related .nav').click(function(e){
       
       if(!$(this).hasClass('none')){
         e.preventDefault();
          if( $(this).hasClass('on') ){
            $('.sc-related .sub').stop().slideUp();
            $('.sc-related .nav').removeClass('on');

         }else{
            $('.sc-related .sub').stop().slideUp()
            $(this).siblings('.sub').stop().slideDown();
  
            $('.sc-related .nav').removeClass('on');
            $(this).addClass('on')
         }
      }
     })

     /**
       * @시프트탭이벤트
       * @탭키 = 9
       */
     $('.sc-related .nav-list li:first-child').keydown(function(e){
      if(e.keyCode === 9 && e.shiftKey){
        $('.sc-related .sub').stop().slideUp();//1
        $('.sc-related .nav').removeClass('on');//1
      }
    })

    $('.sc-related .nav-list li:last-child').keydown(function(e){
      if(e.keyCode === 9 && !e.shiftKey){
        $('.sc-related .sub').stop().slideUp();//1
        $('.sc-related .nav').removeClass('on');//1
      }
    })

     /*
      * 
      * btn_top
     */
     $(window).scroll(function(){            
        curr = $(this).scrollTop();
        if(curr >= 100){
            $('.btn-top').addClass('show')
        }else{
            $('.btn-top').removeClass('show')
        }
    })

    $('.btn-top').click(function(){
        $('html,body').animate({scrollTop:0},300)
    }) 


 })