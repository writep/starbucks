const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

/* window는 화면 그 자체를 뜻한다 */
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  
  if (window.scrollY > 500){ //해당 사라지는 모션은 gsap cdn을 이용해서
    //badge 숨기기
    //badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //to-top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //badge 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //to-top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//_.throttle(함수, 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


//메인배너 이미지 순차적으로 노출
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7, //0.7 후, 1.4, 2.1, 2.7초 후에 애니메이션 진행
    opacity: 1
  });
});

//SWIPER 
//new는 생성자(클래스)라는 개념이다

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView:3, //한번에 보여주는(첫 화면에) 슬라이드 개수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기(정가운데부터)
  loop:true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자가 페이지 번호 요소 제어(클릭 가능하게끔)
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

//AWARDS slide 구현
new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



//toggle 버튼 생성 (숨김, 보여주기)
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !(느낌표)는 해당 값을 반대로 반환
  if (isHidePromotion) { //숨김 처리
    promotionEl.classList.add('hide');
  } else { //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), { // to(요소, 시간, 옵션);
    y: size, //y 축을 의미하며 이를 기준으로 한다
    repeat: -1, // 무한 반복으로 설정
    yoyo: true, //한번 재생된 애니메이션을 뒤로 재생하게 함
    ease: "power1.inOutinOut",
    delay: random(0, delay)
  }); 
  
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여지는 여부를 감시할 요소를 지정
      triggerHook: .8 //뷰포트의 맨위(콘텐츠가 나타는 화면에서 가장 위)부터 아래까지의 범위 (0에서 1) : 지정한 요소가 0.8지점에 걸리면 어떠한 내용이 실행된다
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


