//event실습 : 숫자 카운터 만들기
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const counter = document.getElementById('counter');


//증가버튼 클릭시 1씩 증가
increase.addEventListener('click', () => {
    counter.value = parseInt(counter.value) + 1;
});


//감소버튼 클릭시 1씩 감소
decrease.addEventListener('click', () => {
    counter.value = parseInt(counter.value) - 1;
});

//실습 1-1 : input에 값을 직접 입력 못하도록
counter.addEventListener("focus",() => {
    counter.blur();
});
