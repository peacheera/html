// event 실습 3 : 압력필드 검증 (validation)
// 전송버튼을 클릭하면
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수체크
// 3. 취미는 2개 이상 선택




document.getElementById("submit").addEventListener('click', e=>{
    // 1. 아이디, 비밀번호는 12자 이하
    const uid = document.querySelector('input[name="uid"]'); 
    const upass = document.querySelector('input[name="upass"]'); 
    if (uid.value.length > 12 || uid.value.length <= 5) {
        alert("아이디, 비밀번호는 12자 이하로 입력해주세요");
        uid.focus();
    } else if(upass.value.length > 12 || upass.value.length <= 5)
        alert("아이디, 비밀번호는 5자 이상 입력해주세요");
        upass.focus();
        
        const gender = document.querySelector('input[type="radio"]:checked');
        if (!gender) {
            alert('성별을 선택해 주세요!');
            return false;
        }
        
        const hobbys = document.querySelectorAll('input[type="checkbox"]');
        let checkCount = 0;
        hobbys.forEach(hobby => {
            if (hobby.checked) checkCount++;
        });
        if (checkCount<2) {
            alert('취미를 2개 이상 선택해 주세요!');
            return false;
        }
    
        alert('폼이 전송되었습니다!');
});