console.log("hello");

/*
let fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/

//

//string(문자데이터)
//따옴표를 사용한다

let myName="PARK";
let email='hcp8804@naver.com';
let hello=`hello ${myName}?!`
//그레이브(백틱)로 문자 데이터-(보관법) 

console.log(myName);
console.log(email);
console.log(hello);

//number(숫자데이터)
//정수 및 부동소수점 숫자를 나타낸다

let number=123;
let opacity=1.57;
//따옴표가 들어가면 문자데이터

console.log(number);
console.log(opacity);


// boolean(불린데이터)
// true, false(참, 거짓) 두가지 밖에 없는 논리 데이터

let checked=true;
let isShow=false;

console.log(checked);
console.log(isShow);

//undefined
//값이 할당되지 않은 상태

let undef;
let obj={abc:123};
//객체 데이터는 중괄호로 사용한다

console.log(undef); //undefinded
console.log(obj.abc); //123
console.log(obj.xyz); //undefined

//null
//어떤 값이 의도적으로 비어있음을 의미함

let empty = null;

console.log(empty); //null

//object(객체데이터)
//여러 데이터를 key:value 형태로 지정한다 { }

let user={
  //key:value
  name: 'Park',
  age: 86,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

//array(배열 데이터)
//여러 데이터를 순차적으로 저장한다 []

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
