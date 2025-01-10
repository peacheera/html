/*
    일급객체 (first class object) : 값으로 사용할 수 있는 객체
    -함수는 일급객체
*/
const func = function(){
    console.log('hallo');
};
const main = function(f1,f2){
    f1();
    f2();
}
main(func, func);// hallo hallo 

const add = function(a,b){
    //arguments는 함수 호출시의 인자들이 정보를 가진 유사배열객체
    //유사배열객체: 객체인데 배열처럼 사용할 수 있다.(length프라퍼티가 있음)
    console.log(arguments);//[Arguments] { '0': 1, '1': 2 }
    console.log(arguments.length);//2
    //caller 는 비표준 프라퍼티이므로 사용을 권장하지 않음
    console.log(add.caller);//[Function (anonymous)]//adㅇ를 호출한놈 // 익명function
    console.log(arguments.callee);//[Function: add]
    console.log(add.name); //함수명
    console.log(add.prototype);//함수의 prototype
};
add(1,2);

//Object.getOwnPropertyDescriptors: 프라퍼티 디스크립터들을 조회
//Object.getOwnPropertyDescriptor: 프라퍼티 디스크립터를 조회
//add는 함수 = 일급객체 ->프라퍼티를 가짐 // 함수 일급객체의 프라퍼티의 디스크립터를 조회
console.log(Object.getOwnPropertyDescriptors(add));

/*
//프라퍼티는 데이터프라이퍼티와 접근자 프라이퍼티로 나뉨 
//프라퍼티 수: 5
//프라퍼티마다 디스크립터 객체를 가짐
//디스크립터 객체는 아래와 같은 프라퍼티를 가짐
//value: 프라퍼티가 가진 값(데이터 프라퍼티는 value를 가짐)
// writable: 프라퍼티의 값 수정가능여부
 //enumerable: 열거가능여부
//configurable: 삭제가능여부

length: { value: 2, writable: false, enumerable: false, configurable: true },
name: {
  value: 'add',
  writable: false, //수정여부
  enumerable: false, //열거여부
  configurable: true //삭제여부
},
arguments: {
  value: null,
  writable: false,
  enumerable: false,
  configurable: false
},
caller: {
  value: null,
  writable: false,
  enumerable: false,
  configurable: false
},
prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
*/

const person = {
    name: '희라',
    age: 20
};
console.log(Object.getOwnPropertyDescriptors(person));
/*
  name: { value: '희라', writable: true, enumerable: true, configurable: true },
  age: { value: 20, writable: true, enumerable: true, configurable: true }
  
*/  
console.log(Object.getOwnPropertyDescriptor(person,'name'));
/* 
{ value: '희라', writable: true, enumerable: true, configurable: true }
*/
// __proto__는 prototype의 참조를 저장하고있는 프라퍼티
console.log(person.__proto__ === Object.prototype);
//hasOwnProperty : 직접 생성한 프라퍼티인지 여부
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('__proto__'));

const obj = {};
console.log(obj.__proto__ === Object.prototype);
