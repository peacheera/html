var l = 1; // global

function outer(){
    console.log(l);//1
    l=3; //global //새로운 변수 선언이 아닌 전역변수의 값만 변경되었음.
    console.log(l);//3
    function inner(){
        // val l ; // inner local scope에서 호이스팅
        console.log(l);//un
        var l = 5; // inner local
        console.log(l);//5
    }
    inner();
}
outer();
console.log(l);//3