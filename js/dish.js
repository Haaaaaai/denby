$(function(){
  //s1 슬라이드
  var swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    speed: 800,
    navigation: {
        nextEl: '.s1 .swiper-button-next',
        prevEl: '.s1 .swiper-button-prev',
    },
    pagination: {
        el: '.s1 .swiper-pagination',
        clickable: true,
    },
  });
  //s2 슬라이드
  var swiper = new Swiper(".swiper2", {
    slidesPerGroup : 2,
    slidesPerView :2,
    scrollbar: {
      el: ".s2 .swiper-scrollbar",
      draggable:true,
    },
    breakpoints: {
      1023 : {
        slidesPerView :3,
        pagination: {
          el: ".s2 .swiper-pagination",
          clickable: true,
        },
        slidesPerGroup : 4,
        navigation: {
          nextEl: ".s2 .swiper-button-next",
          prevEl: ".s2 .swiper-button-prev",
        },
      },
      1399 : {
        slidesPerView :4,
        pagination: {
          el: ".s2 .swiper-pagination",
          clickable: true,
        },
        slidesPerGroup : 4,
        navigation: {
          nextEl: ".s2 .swiper-button-next",
          prevEl: ".s2 .swiper-button-prev",
        },
      }
    },
  });

  //s3 슬라이드 (태블릿, pc 공통)
  var swiper = new Swiper('.swiper3', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      parallax: true,
      speed: 800,
      navigation: {
          nextEl: '.s3 .swiper-button-next',
          prevEl: '.s3 .swiper-button-prev',
      },
      pagination: {
          el: '.s3 .swiper-pagination',
          clickable: true,
      },
      // 사전에 로드할 슬라이드 수 설정
      preloadImages: true,
      // 캐싱된 이미지를 사용하도록 설정
      updateOnImagesReady: true,
      
  });

  //검색 클릭
  let inbox = $("input:text");
  $(".click_bn").click(function(){
    if($(inbox).val()===""){
      alert("검색어를 입력하세요");
    }
  });
  
  let deviceWidth=$(window).width();
  
  if(deviceWidth<1400) {
    //모바일, 태블릿 적용

    //모바일 돋보기 클릭하면 검색창 열림
    document.querySelector(".search_mo a").addEventListener("click",function(e){
      e.preventDefault();
      document.querySelector(".search_mo a").classList.toggle("active");
    });
    $(".search_mo").click(function(){
      $(".search_input").toggleClass("active");
    })

    //메뉴 클릭 (토글로 설정)
    document.querySelector(".menu_icon").addEventListener("click",function(e){
      e.preventDefault();
      document.querySelector(".menu_txt").classList.toggle("active");
    });

    $('.navi ul li > a').click(function(){
      //$('.navi ul li > a').not(this).removeClass("active").next().slideUp();
      $(this).next().slideToggle();
      $(this).toggleClass("active");
      return false;
    });

    //닫기 버튼 클릭(자바스크립트 코드)
    document.querySelector(".close").addEventListener("click",function(e){
      e.preventDefault();
      document.querySelector(".menu_txt").classList.toggle("active");
    });
  }
  if(deviceWidth>1399) {
    //pc버전 효과 적용
    //메뉴 효과
    $(".navi ul > li").mouseover(function(e){
      e.preventDefault();
      $(".navi ul > li > .sub1").hide();
      $(this).find(".sub1").show();
      });
      $(".navi ul > li > .sub1").mouseleave(function(e){
      e.preventDefault();
      $(this).hide();
      });
  }
});
