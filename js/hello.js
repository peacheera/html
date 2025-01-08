 console.log('hello'); 

let a = 1 + 2; // a에 3 저장
console.log(a);

console.log( a+3); 
if(4>a) {console.log('x');}
for(let i = 0; i<5; i++) {console.log(i);}

console.log(1* 'String');

// ---------------------
var key = Symbol(  'key' ) ; 
console.log(typeof key); 

var obj ={}; 
obj[key] = 'value' ; 
console.log(obj[key]);

var person = {
    name: 'Lee',
    sayHello: function() { 
        console.log(`Hello. My name is ${this.name}.`); 
    }
};
console.log(typeof person); // object 
console.log(person); 

l