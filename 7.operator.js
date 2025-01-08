console.log(1+'00'); // 100문자열
console.log('hello' + 100); // hello100문자열

console.log(1=='1'); // true, ==: 타입을 반환해서라도 값이 같으면 true
console.log(1==='1'); // false, ===:값과 타입이 모두 동일해야 함
console.log(1!=='1'); // false, ===:값과 타입이 모두 동일해야 함
console.log(1!='1'); // false, ===:값과 타입이 모두 동일해야 함

console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(2**3); // 2^3 = 8

const kim = {
    name: '희라',
    age: 20
};

// optional chaining연산자
// 프라퍼티의 값이 null이나 undefined면  undifined반환
// 그렇지 않으면 프라퍼티의 값을 반환
// null방지용
console.log(kim?.name);  // 김희라
console.log(kim?.hobby); //undefiend

//null coalecing 연산자
//프라퍼티의 값이 null 또는 undefined면 우항의 값을 반환
console.log(kim.name??'김희라'); // name은 null이 아니기 때문에 kim.name반환
console.log(kim.adress??'서울시'); // adress는 null이기 때문에 서울시 반환

//객체의 프라퍼티 제거 연산자
// delete kim.name;
// console.log(kim);
delete kim.name;
console.log(kim);


// 객체내의 프라퍼티 존재 여부 확인 연산자
console.log('age' in kim);
console.log('name' in kim);


