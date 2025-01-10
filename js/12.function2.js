//즉시실행함수
//익명함수를 만들어서 한번만 실행할 목적으로 만드는 함수
(function(){
    console.log('hallo');
}());

(function(a, b) {
    console.log(a + b);  // 
})(3, 5);  

let result = (function(a, b) {
    console.log(a + b); 
})(3, 5); 

console.log(result);  

//중첩함수(nested function)
//outer function scope : o, inner
//inner function scope : i
//inner 함수는 outer 함수의 스코프에 접근가능(inner에서 o 접근가능)
//outer 함수는 inner 함수의 스코프에 접근불가(outer에서 i 접근 불가)
function outer(){
    let o = 1 ;
    function inner() {
        console.log(o);
        let i = 2;
        console.log(o+i);
    }
    inner();
}
outer();

// 콜백함수(callback function): 함수에 인자로 전달되는 함수
// 고차함수 (high order function): 함수를 인자로 전달받는 함수
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);  // 함수 f를 반복하면서 호출
    }
}

// 첫 번째 함수: 모든 숫자 출력
const logAll = function(i) {
    console.log(i);
};

repeat(5, logAll); 

// 두 번째 함수: 홀수만 출력
const logOdd = function(i) {
    if (i % 2) {
        console.log(i);  
    }
};

repeat(5, logOdd);  

//실습 : 두 수를 입력하면 사칙연산을 수행하는 고차함수, 콜백함수
// function calc(a,b,f){
//     console.log(f(a,b));
//     }
// const add =function(a,b){
//     return a+b;
// };
// calc(2,5,add);
// const sub =function(a,b){
//     return a-b;
// };
// calc(2,5,sub);
// const mul =function(a,b){
//     return a*b;
// };
// calc(2,5,add);
// const dev =function(a,b){
//     return a/b;
// };
// calc(2,5,dev);

//화살표 함수
function calc(a,b,f){
    console.log(f(a,b));
    }
const add =function(a,b){
    return a+b;
};

calc(2,5,(a,b) => (a+b));

const sub =function(a,b){
    return a-b;
};
calc(2,5,(a,b) => (a-b));

const mul =function(a,b){
    return a*b;
};
calc(2,5,add);

const dev =function(a,b){
    return a/b;
};
calc(2,5,(a,b) => (a/b));

//실습: 두수와 콜백함수 두 개를 전달하고 
//          앞의 수가 크면 첫번째 콜백함수를
//          뒤의 수가 크면 두번째 콜백함수를 호출
//          두 수가 같으면 same이라는 문자열 출력
//          첫번째 콜백함수는 두 수의 차를 연산
//          두번째 콜백함수는 뒤의 수 제곱과 앞의 수 제곱의 차를 연산

// 고차함수
function clac2 (a, b, f1, f2){
    if (a<b) console.log(f1(a,b));
    else if(b>a) console.log(f2(a,b));
    else console.log('same');    
}
//콜백함수
clac2(7,3,(a,b) => a-b, (a,b) => b**2-a**2);
clac2(3,7,(a,b) => a-b, (a,b) => b**2-a**2);

//콜백함수를 즉시실행함수로 실행
(function(a, b, f1, f2){
    if(a>b) console.log(f1(a,b));
    else if (b>a) console.log(f2(a,b));
    else console.log('same');
}(3, 5, (a,b)=> a-b, (a,b) => b**2-a**2));

//콜백함수를 객체 프라퍼티로 생성
const funcObj = {
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    dev: (a,b) => a/b
};

function mainFunc (a, b ,f){
    console.log(f(a, b));
}
mainFunc(3, 5, funcObj.add);
mainFunc(3, 5, funcObj.sub);
mainFunc(3, 5, funcObj.mul);
mainFunc(3, 5, funcObj.dev);

//실습 : 수를 하나 입력하면 5배한 후 3을 빼고 2로 나누는 로직 구현 (고차함수와 콜백함수 활용)
function clac3 (a, f1){
     console.log(f1(a));
}
clac3(5,(a)=>((a*5)-3)/2);

//순수함수(pure function)
//외부 변수의 값에 영향을 주지않는 함수
//순수함수는 기본타입의 값만 파라미터로 가짐
let count1 = 0;
function increase1(n){// 순수함수
    return++n;
}
//increase1 함수를 몇번 호출하던지 count1의 값은 불변
//count1은 기본 number 타입값 0을 함수 파라미터에 복사해 줌 객체는x
console.log(increase1(count1));//1
console.log(increase1(count1));//1
console.log(count1);//0


//increase2함수를 수행할때마다 count2의 값이 변경됨
let count2 = 0;
function increase2(){//비순수함수
    return ++count2;
}
console.log(increase2(count2));//1
console.log(increase2(count2));//2
console.log(count2);//2