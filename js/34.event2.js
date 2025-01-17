//이벤트 전파(event propergation)
// const ul = document.getElementById('fruits');
// ul.addEventListener('click', event =>{
//     console.log(`이벤트 단계 : ${event.eventPhase}`);
//     console.log(`이벤트 타겟 : ${event.target.tagName}`);
//     console.log(`이벤트 현재 타겟 : ${event.currentTarget.tagName}`);
// },true); //true: 캡쳐링단계에서 이베트 처리 여부

// const apple = document.getElementById('apple');
// apple.addEventListener('click', event =>{
//     console.log(`이벤트 단계 : ${event.eventPhase}`);
//     console.log(`이벤트 타겟 : ${event.target.tagName}`);
//     console.log(`이벤트 현재 타겟 : ${event.currentTarget.tagName}`);
// },true); //true: 캡쳐링단계에서 이베트 처리 여부
//=> 현재 타겟 ul -> li    

//이벤트 위임
const ul = document.getElementById('fruits');
ul.addEventListener('click', event =>{
    //이벤트 타겟 객체가 li라면
    if(event.target.matches('li')){
        //각각의 li들에서 active라는 클래스를 제거하고
        [...ul.children].forEach(li =>li.classList.remove('active'));
        //클릭된 li에 active라는 클래스를 추가
        event.target.classList.add('active');
    }
});

//이벤트핸들러내에서의 this
const button = document.querySelector('.btn');
//일반함수를 이벤트핸들러로 사용한 경우 이벤트핸들러내에서의 this는 이벤트타겟객체
button.addEventListener('click', function(){
console.log(this);
});
//화살표함수를 이벤트핸들러로 사용한 경우 이벤트핸들러내에서의 this는 전역객체
//=>자체 스코프를 가지지 않고 상위스코프에 포함되므로
button.addEventListener('click', event => {
 console.log(this);
});

//커스텀 이벤트
const customEvent = new CustomEvent ('customClick',{
    detail : { messege: '내가 만든 이벤트' }
});              
// 커스텀이벤트 처리를 위한 이벤트핸들러 등록
const customBtn = document.getElementById('customBtn');
const customBtnDispatch = document.getElementById('customBtnDispatch');

customBtnDispatch.addEventListener('click', event=>{
    customBtn.dispatchEvent(customEvent);
});

customBtn.addEventListener('customClick', event => {
    alert(event.detail.messege);
});
//커스텀이벤트의 경우 이벤트디스패칭을 해줘야 함
//이벤트디스패칭 : 사용자정의이벤트를 발생시키기 위해서 수동 트리거링을 하는 작업
// button.dispatchEvent(customEvent);