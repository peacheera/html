const hong = {};

//프라퍼티 동적 생성
hong.name = '홍시';
hong['[first-name]'] = '시'
hong['[last-name]'] = '홍'
console.log(hong);

//프라퍼티 축약표현
let x = 1;
let y = 2;
const obj1 ={
    x,
     y
};
console.log(obj1);

//계산된 프라퍼티 명
const prefix = 'prop';
let i = 0;
const obj2 = {
    [`${prefix}-${i++}`]: 'l',
    [`${prefix}-${i++}`]: 'l',
    [`${prefix}-${i++}`]: 'l'
};

console.log(obj2);

const kang = {
    name : '빨강',
    age : 2
};

//동적메소드 생성
kang.getName = function(){
    return this.name;
};

kang.getAge = function(){
    return this.age;
};

console.log(kang);
    
//메소드 축약표현
const choi = {
    name : '최영',
    age : 20,
    getName () {
        console.log(this.name);
    },
    getAge () {
        console.log(this.age);
    }
}