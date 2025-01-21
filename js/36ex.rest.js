/*
    [REST API 실습]
    1. JSON서버 구동
    2. 기능
      (1) 데이터가져오기버튼 누르면 테이블에 전체 데이터 표시
          > GET, /persons
      (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
          > POST, /persons
      (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후
          데이터 수정
          > PUT, /persons/아이디
      (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
          > DELETE, /persons/아이디
*/

const listPerson = document.querySelector('#listPerson');
const getPerson = document.querySelector('#getPerson');
const pid = document.querySelector('#pid');
const pname = document.querySelector('#pname');
const page = document.querySelector('#page');
const registPerson = document.querySelector('#registPerson');
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel');
const asc = document.querySelector('#asc');
const desc = document.querySelector('#desc');

let responseArr = null; //데이터를 담을 배열 객체 생성

listPerson.addEventListener('click', e => {//listPerson버튼을 눌렀을때 발생하는 이벤트
    const xhr = new XMLHttpRequest();    //XMLHttpRequest 객체 생성
    xhr.open('GET', 'http://localhost:7777/persons'); //GET Request Method: GET방식 요청 // 모든 데이터 가져오기
    xhr.send();  // GET일때 보내는 데이터
    xhr.onload = () => {//요청 성공시 데이터를 JSON으로 파싱하여 배열에 저장
        responseArr = JSON.parse(xhr.response);
        printList(responseArr);// responseArr 인자를 받아 printList 함수를 호출하여 테이블에 출력
    };
});

getPerson.addEventListener('click', e =>{ //getPerson버튼을 눌렀을때 발생하는 이벤트
    const xhr = new XMLHttpRequest();  //XMLHttpRequest 객체 생성
    const sid = document.querySelector('#sid');
    if (!sid.value) { //만약 조회 할 id를 입력하지 않으면
        alert('검색하실 아이디를 입력해 주시랑께요!'); // alert 발생
        sid.focus();// 구문이 종료되고 입력창에 집중시킴//사용자가 입력하도록 유도
        return;// 함수 실행 종료
    }
    xhr.open('GET', `http://localhost:7777/persons/${sid.value}`);//GET Request Method: GET방식 요청
    xhr.send();// GET일때 보내는 데이터
    xhr.onload = () => {//요청 
        tbody.textContent = '';//초기화 : 중복값이 없게끔 코드 실행시 textContent를 초기화 함
        const person = JSON.parse(xhr.response); {//요청 성공시 데이터를 JSON으로 파싱
        const tr = document.createElement('tr'); //innerHTML -> tr 생성
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `; // 요소에 맞는 데이터 값을 받아서 추가 
        tbody.appendChild(tr); // tbody.appendChild에 생성한 tr을 뿌려줌
        }
    };
});

registPerson.addEventListener('click', e => { //registPerson버튼을 눌렀을때 발생하는 이벤트

    const xhr = new XMLHttpRequest(); //XMLHttpRequest 객체 생성
    xhr.open('POST', 'http://localhost:7777/persons');//POST Request Method: POST방식 요청
    xhr.setRequestHeader('content-type', 'application/json');// 요청 헤더에 content-type을 JSON으로 설정
    xhr.send(JSON.stringify( //입력받은 데이터를 보냄
        {"id": pid.value, "name": pname.value, "age": page.value}
    ));
    xhr.onload = () => {//요청성공시
        printList(responseArr);// responseArr 인자를 받아 출력
    };
});

asc.addEventListener('click', () => {//asc버튼을 눌렀을때 발생하는 이벤트
    printList(responseArr, sel.value, 'ASC')// 인자를 받아 출력 :responseArr, sel.value, 'ASC' 
    // //sel.value를 기준으로 오름차순 정렬

});

desc.addEventListener('click', () => {//DESC버튼을 눌렀을때 발생하는 이벤트
    printList(responseArr, sel.value, 'DESC')// 인자를 받아 출력 :responseArr, sel.value, 'DESC'
  // //sel.value를 기준으로 내림차순 정렬
});

const printList = (responseArr, selValue, sort) => {//PrintList 객체 생성: responseArr, selValue, sort
    if (selValue) {
        if (typeof selValue === 'number') { // selValue의 타입이 넘버면 'id','age'
            responseArr.sort((obj1, obj2) => {//정렬하겠다
                if (sort==='ASC') {//만약 오름차순이면 obj1[selValue] - obj2[selValue]를 리턴
                    return obj1[selValue] - obj2[selValue];
                } else if (sort==='DESC') {//내림차순이면 obj2[selValue] - obj1[selValue]를 리턴
                    return obj2[selValue] - obj1[selValue];
                }
            });
        } else { //위 두 조건 모두 아닐경우  // 문자열일 경우 'name'
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {// 정렬한 값이 오름차순값과 같으면
                    return obj1[selValue].localeCompare(obj2[selValue]);// obj1과 obj2를 비교
                } else if (sort==='DESC') {// 정렬한 값이 내림차순값과 같으면
                    return obj2[selValue].localeCompare(obj1[selValue]);// obj2와 obj1을 비교
                }
            });
        }
    }
    tbody.textContent = '';    //초기화
    for (let obj of responseArr) { // obj의 responseArr의 객체??..
        const tr = document.createElement('tr');//innerHTML -> tr 생성
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;// 등록된 값을 저장할 innerHTML요소 생성
        tbody.appendChild(tr);//tbody.appendChild에 생성된 tr을 뿌림    
    }    
};

const modifyPerson = pid => { //수정함수 생성
    const confirm = window.confirm('수정하시겠습니까?');
    if (!confirm) return; //아니요를 누르면 confirm 반환

    const pname = document.querySelector('#name'+pid).value;// 수정된 이름 값 가져오기
    const page = document.querySelector('#age'+pid).value; // 수정된 나이 값 가져오기

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `http://localhost:7777/persons/${pid}`);// PUT 요청으로 해당 사람 수정
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify({"id":pid, "name":pname, "age":page})); // 수정된 값 전송
    xhr.onload = () => {
        printList(responseArr);// 수정된 데이터를 반영하여 목록을 다시 출력
    };    
}

const deletePerson = pid => {//삭제함수 생성
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;//아니요를 누르면 confirm 반환

    const xhr = new XMLHttpRequest(); //XMLHttpRequest의 객체 생성
    xhr.open('DELETE', `http://localhost:7777/persons/${pid}`);// DELETE 요청으로 해당 사람 수정
    xhr.send();
    xhr.onload = () => {
        printList(responseArr);// 수정된 데이터를 반영하여 목록을 다시 출력
    };    
}

listPerson.click();//처음부터 데이터 list가 나오게 함