/*

let myNames = "PARK";
let emails = 'ohpakkas@nate.com';
let hellos = `hello ${myNames}?!`;


console.log(myNames);
console.log(emails);
console.log(hellos);
*/

//재사용이 가능
// 변수 선언

let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//값(데이터)의 재할당 가능 (let)

let c = 12;
console.log(c);

c = 999;
console.log(c);

//값(데이터)의 재할당 불가능
//const 는 처음 선언한 값을 지정하면 다른 값을 지정할 수 없음

/*
const d = 12;
console.log(d);

d = 999;
console.log(d);
*/

//

/*
let this = 'hello'; //syntaxError
let if = 123; //syntaxError
let break = true; //syntaxError
*/

//

//함수
function helloFunc(){
  //실행코드
  console.log(1234);
}

helloFunc();

//
function returnFunc(){
  return 123; //함수 밖으로 내보내는데 사용하는 return
}

let e = returnFunc();

console.log(e);

//

//함수선언 
function sum(f, g){ //f,g는 매개변수(Parameters)
  return f + g;
}

//재사용
let f = sum(1, 2); //1,2는 인수(Arguments)
let g = sum(7, 12);
let h = sum(2, 4);

console.log(f,g,h);

//기명(이름이 있는) 함수
//함수 선언
function helloMy(){
  console.log('hello~');
}

//익명(이름이 없는)함수
//함수 표현
let world = function(){
  console.log('World~');
}

//함수호출
helloMy();
world();



//객체 데이터
const heropi = {
    name: 'heropi',
    age: 87,

    //메소드(method)
    getName: function(){
      return this.name;
    }
};

const hisName = heropi.getName();
console.log(hisName);
console.log(heropi.getName());

//조건문
let Show = true;
let check = false;

if(Show) {
  console.log('Show!');
}
if(check) {
  console.log('check');
}


let showS = true; //false로 하면 else의 값으로 변경된다(hide)

if(showS) {
  console.log('show');
} else {
  console.log('hide');
}