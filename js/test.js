/*    
표현식 (expressoin): 파싱해서 값이 되는 문장
                                표현식은 변수에 할당하거나 함수에 인자가 될수 있음
문장 (statement): 실행단위가 되는 구문
                                문장은 변수에 할당하거나 함수의 인자가 될 수 없음
*/ 

let j;//문장
let i = 0; //문장
i=3; // 표현식
i=3//문장
'hi'//표현식
'hi';//문장
3//표현식
3;//문장
// {name: '홍길동', age: 20} //표현식
// {name: '홍길동', age: 20}; //문장
const obj = {name: '홍길동', age: 20}; // 문장

var v = 1;
function func(){
    console.log(v);//1
}
func();
//--------------------------------
var v2 = 2;
function func2(){
    console.log(v2);//undefined
    var v2 =3;
}
func2();





console.log(v);//un
function outer(){
    console.log(v);//un
    function inner(){
        console.log(v);//un
        var v = 'inner'//inner
        console.log(v);
    }
    var v = 'outer';
    inner();
    console.log(v);//out
}
outer();
var v = 'global';