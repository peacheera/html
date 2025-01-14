/*
    스코프(scope): 식별자(변수, 함수 ... )가 참조되는 범위, 전역/함수(지역)/블록/모듈
    실행컨텍스트(execution context):코드가 싱행되는 환경, 전역/함수/eval/모듈
*/

/*
    1. 전역실행컨텍스트 생성
       1-1 전역스코프에 x, foo등록
       1-2 전역코드 실행
    2. foo함수 실행컨텍스트
        2-1 foo함수스코프에 y, bar등록
        2-2 foo함수코드 실행
    3. bar함수 실행컨텍스트
        3-1 bar함수스코프에 x 등록
        3-1 bar함수코드 실행
    4. bar함수실행컨텍스트, bar함수스코프 소멸
    4. foo함수실행컨텍스트, foo함수스코프 소멸
    4. 전역실행컨텍스트, 전역스코프 소멸
*/

const  x = 1;
function foo(){
    const y =2;
    function bar(){
        const z = 3;
        console.log(x+y+z);
    }
    bar();
}
foo();