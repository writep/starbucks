/*
  *window(화면) 새로고침할 경우 맨 위로 스크롤 된 상태에서 새로고침
window.onload = function(){
  setTimeout (function(){
    scrollTo(0,0);
  }, 100);
}
*/
const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //click하면 발생하면 이벤트
  searchInput.focus();
  //.search를 클릭하게 되면 기능하는데 .search에 있는 input요소를 focus하는 것(늘어남)
  //.search 자체에 click 이벤트를 부여함
});

searchInput.addEventListener('focus', function() {
  //focus가 되면 발생하는 이벤트
  searchEl.classList.add('focused');
  //.search에 class를 추가함
  searchInput.setAttribute('placeholder', '통합검색');
  //setAttribute: html의 속성(Attribute)을 지정할 때 사용 
});

searchInput.addEventListener('blur', function() {
  //focus에서 blur로 역순하는 이벤트(재클릭시)
  searchEl.classList.remove('focused');
  //.search에 추가된 class(.focused)를 remove한다
  searchInput.setAttribute('placeholder', '');
  //setAttribute에 지정된 placholder의 문자를 삭제한다 
});


//해당 연도를 계산하는 코딩
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021년