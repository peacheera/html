var v1 = 1; // globa; scope
function func1 () {
    var v1 = 2;//function scope
    console.log(v1);//2
}
console.log(v1);//1
func1();

var v2 = 1; // globa; scope
function func2(){
    // var v2; // func2함수 스코프내에서 호이스팅
    console.log(v2);//un
    var v2 = 2;//function scope
}
func2();//1 // globa; scope

var v3 = 1;// globa; scope
{
    var v3 = 2;//block scpe
}
// var로 선언한 변수는 block scope 를 가지지 않음, 재선언이 가능
console.log(v3);//2


// let이나 const 로 선언한 변수는 block scope를 가짐, 
// 동일한 스코프내에서 재선언 불가
let l1 = 1;
{
    let l1 =2 ;

    console.log(l1);//2
}
    console.log(l1);//1

    var v4 = 1;
    var v4 = 2; //동일하 전역스코프에서 var 는 재선언이 가능
    let l2 = 1;
    //let l2 = 2; // 등인한 전역스코프에서 let,const는 재선언 불가

    console.log(this);// {}
    console.log(globalThis); //node환경에서의 전역객체


    // 전역변수는 전역객체의 프라퍼티가 아니다
    var v5 = 5; // globalThis의 프라퍼티가 아님
    console.log(globalThis.v5);//un
    console.log(this.v5);//un