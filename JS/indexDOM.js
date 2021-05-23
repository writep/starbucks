/*

//HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드
boxEl.addEventListener();

//인수(arguments)를 추가 가능
boxEl.addEventListener(1,2);

//1. 이벤트(event, 상황)
boxEl.addEventListener('click', 2);

//2. 핸들러(handler, 실행할 함수
boxEl.addEventListener('click', function(){
  console.log('click');
});

*/

/*
let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function (){
  console.log('click!');
  boxEl.classList.add('active'); //클릭하여 active라는 클래스를 추가하게끔 함
  console.log(boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  )
});
*/

/*

// HTML 요소(element) 검색/찾기
const boxEl = document.querySelector('.box');

//요소의 클래스 정보 객체 활용
boxEl.classList.add('active');
//classList(html의 클래스)에서 .active라는 것을 추가한다
let isContains = boxEl.classList.contains('active');
//isContains는 boxEl의 classlist라는 명령에 .active가 contains(포함) 되었다
console.log(isContains);
//이를 확인하기 위하여 console.log로 실행

boxEl.classList.remove('active');
isContaines = boxEl.classList.contains('active');
console.log(isContains); 

*/

/*
//HTML 요소(element)모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//찾은 쇼로를 반복해서 함수 실행
//익명 함수를 인수로 추가
boxEls.forEach(function() {});

//첫번째 매개변수(boxEl) : 반복 중인 요소
//두번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});
*/

/*
const boxEls = document.querySelectorAll('.box'); 
//.box를 모두 찾음

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl);
  
});

*/

/*
const boxEl = document.querySelector('.box'); 
//.box 중 제일 처음으로 찾을 수 있는

//값을 얻는 용도(getter)
console.log(boxEl.textContent); 
//내용이 반환되는데 text로만 되는 내용을 콘솔로 출력함

//값을 지정하는 용도(setter)
boxEl.textContent = 'Text?!';
console.log(boxEl.textContent);
*/

/*
const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent ='PARK!';
console.log(boxEl.textContent);

*/

/*
const a = 'hello';
const b = a.split('').reverse().join('');
//split : 문자를 인수 기준으로 쪼개서 배열로 반환함
//reverse : 배열을 반대 순서로 뒤집어준다
//join : 배열을 인수 기준으로 문자를 병합해 반환함

console.log(a);
console.log(b);
*/


