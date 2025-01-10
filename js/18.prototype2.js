//프로토타입 확장
function Person (name,age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    };
}
//프로토타입 확장
Person.prototype.getAge = function(){
    return this.age;
};

// 인스턴스 생성
const person1 = new Person ('홍길동',20);

console.log(person1.getName()); // 홍길동, 인스턴스 메소드 사용
console.log(person1.getAge());//20, 프로토타입 메소드 사용

// 인스턴스 생성
const person2 = new Person ('강감찬',22);
console.log(person2.getName()); 
console.log(person2.getAge());

console.log(Person.getName == person1.getName);
console.log(person1.getName == person2.getName);
console.log(Person.getAge == person1.getAge);
// 이유: getAge는 프로토타입 메서드로, 모든 인스턴스가 공유하므로 동일
console.log(person1.getAge == person2.getAge);
console.log(person1.__proto__==person2.__proto__);

//프로타입 체인
function Car (company,model){ 
    this.company = company;
    this.model = model;
}
//car객체, car.prototype, object.prototype으로 프로토타입 체이닝
//=> object.prototype을 상속받은 car.prototype을 상속받은 car객체
const car = new Car ('BMW','520D');//인턴스생성
console.log(car.__proto__ == Car.prototype); // true
console.log(Car.prototype.__proto__ == Object.prototype); // true
console.log(car.__proto__.__proto__ == Object.prototype);//true

function Chicken(name){
    this.name=name;
}
//프로토타입 확장
Chicken.prototype.sound = function(){
    console.log(this.name + "가 꼬끼오 소리를 냅니다");
}

// 프로토타입 교체
function Duck(name){
    this.name = name;
}

//프로토타입 확장
Duck.prototype.sound = function(){
    console.log(this.name + "가 꽥꽥 소리를 냅니다");
}

const chicken1 = new Chicken("오골계");
chicken1.sound();

const duck1 = new Duck("오골계");
duck1.sound();

//프로토타입 교체
//자바스크립트는 원하면 프로토타입 교체를 통해 상속구조를 변경할 수 있음
Chicken.prototype = Duck.prototype;

const chicken2 = new Chicken("수탉")
chicken2.sound();