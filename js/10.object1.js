//객체참조변수는 const로 선언!
const obj1 = {};

const obj2 = {
    name : '김희라',
    age: 20
};

console.log(obj2);//{ name: '김희라', age: 20 }
//JSON표기법 => { "name": "김희라", "age" : 20 }

obj2.name = '구구구'
console.log(obj2);//{ name: '구구구', age: 20 }

//객체 리터럴 생성법
const o1 = {};

//object 생성자함수 생성법
const o2 = new Object();

//Person 생성자함수 생성법
function Person (name, age){
    this.name = name;
    this.age = age;
}
const o3 = new Person('김희라', 20);
console.log(o3); //Person { name: '김희라', age: 20 }
console.log(typeof o3);//object
console.log(o3 instanceof Person);//true
console.log(o3 instanceof Object);//true

//object create 메소드 생성
//모든 생성자함수는 prototype이라는 프라퍼티를 가진다
const o4 = Object.create(Person.prototype);
o4.name = '김희라';
o4.age=22;
console.log(o4);//Person { name: '김희라', age: 22 
console.log(typeof o4);//object
console.log(o4 instanceof Person);//true
console.log(o4 instanceof Object);//true

//class 객체 생성법
class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const dog = new Dog('말티즈',12);
console.log(dog);//Dog { name: '말티즈', age: 12 }
console.log(typeof dog);//object
console.log(dog instanceof Dog);//true
console.log(dog instanceof Object);//true

const hong = {
    name : '홍시',
    age : 2,
    ['local-addr'] :'강원도'
}
console.log(hong);

//동적으로 프라퍼티 추가 가능
hong.hobby = '잼';
console.log(hong);

hong['fistt-name'] = '단'
console.log(hong);

// 정의되지 않은 프라퍼티에 접근하면
console.log(hong.height); // undefined로 초기화 됨

//프라퍼티 삭제
delete hong.age;
console.log(hong);

//객체내의 프라퍼티 존재여부 확인
console.log('name' in hong);
console.log('age' in hong);

//함수는 리터럴이므로 객체 프라퍼티의 값으로 함수를 사용할 수 있음
//name, age: 프라퍼티, getName, getAge: 메소드
//함수를 값으로 가진 프라퍼티를 메소드라고 부른다
const kang = {
    name : '빨강',
    age : 1,
    getName :function(){
        return this.name
    },
    getAge :function(){
        return this.agename
    },
};

console.log(`${kang.getName()}은 ${kang.age}살 입니다`);
