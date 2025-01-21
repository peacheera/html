/*
    [REST API]실습
    1. JSON서버 구동
    2. 기능
   //    1) 데이터 가져오기 버튼을 누르면 테이블에 전체 데이터 표시
   //   > GET, /persons 호출하여 테이블에 표시
   // 2) id, name, age입력하고 등록버튼 클릭하면 테이블에 데이터가 추가 
    // >POST, /persons
    3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 
    데이터 수정
    >PUT, /persons/아이디
    4) 각 행의 삭제버튼을 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제 
    >DELETE, /persons/아이디
    */


   //    1) 데이터 가져오기 버튼을 누르면 테이블에 전체 데이터 표시
   //   > GET, /persons 호출하여 테이블에 표시
   const ListPerson = document.querySelector('#ListPerson');
   
   ListPerson.addEventListener('click', (e) => {
       const xhr = new XMLHttpRequest();
       xhr.open('GET', 'http://localhost:7777/persons');  // 경로에 '/persons'를 추가해 주세요.
       
       // 요청이 완료되면 실행될 함수
       xhr.onload = () => {
           if (xhr.status === 200) {
               // 서버에서 받은 데이터
               let persons = JSON.parse(xhr.response);
               
               // 기존 테이블의 데이터를 비운다
               const tbody = document.querySelector('tbody');
               tbody.innerHTML = '';  // 기존 데이터 삭제
               
               // 가져온 데이터를 새로 테이블에 추가
               persons.forEach(person => {
                   const tr = document.createElement('tr');
                   tr.innerHTML = `
                   <td>${person.id}</td>
                   <td>${person.name}</td>
                   <td>${person.age}</td>
                   <td>
                   <button>수정</button>&nbsp;
                   <button>삭제</button>
                   </td>
                   `;
                   tbody.appendChild(tr);  // 새로운 행을 tbody에 추가
                });
            } else {
                console.error('엑시던트 발생', xhr.status, xhr.statusText);
            }
    };
    xhr.onerror = () => {
        console.error('네트워크 오류 발생');
    };
    xhr.send();
});

// 2) id, name, age입력하고 등록버튼 클릭하면 테이블에 데이터가 추가 
// >POST, /persons
const registPerson = document.querySelector('.registPerson');

registPerson.addEventListener('click', (e) => {
    const id = document.querySelector('.pid').value;
    const name = document.querySelector('.pname').value;
    const age = document.querySelector('.page').value;

    const xhr = new XMLHttpRequest();
    const data = {
        id: id,
        name: name,
        age: age
    };

    xhr.open('POST', 'http://localhost:7777/persons');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
        if (xhr.status === 200) {
            // 서버에서 새로운 사람을 추가했다면
            const newPerson = JSON.parse(xhr.response);

            // 새로 추가된 사람을 테이블에 반영
            const tbody = document.querySelector('tbody');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${newPerson.id}</td>
                <td>${newPerson.name}</td>
                <td>${newPerson.age}</td>
                <td>
                    <button>수정</button>&nbsp;
                    <button>삭제</button>
                </td>
            `;
            tbody.appendChild(tr);
        } else {
            console.error('에러 발생', xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = () => {
        console.error('네트워크 오류 발생');
    };
});

const pid = document.querySelector('#pid');
const modifyPerson = pid => {
    const confirm = window.confirm('수정하시겠습니까?');
    if (!confirm) return;
    // 구현
}

const deletePerson = pid => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;
    // 구현
}

// listPerson.click();
// listPerson.click();
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

// const listPerson = document.querySelector('#listPerson');
// const getPerson = document.querySelector('#getPerson');
// const pid = document.querySelector('#pid');
// const pname = document.querySelector('#pname');
// const page = document.querySelector('#page');
// const registPerson = document.querySelector('#registPerson');
// const tbody = document.querySelector('tbody');
// const sel = document.querySelector('#sel');
// const asc = document.querySelector('#asc');
// const desc = document.querySelector('#desc');

// let responseArr = null;

// listPerson.addEventListener('click', e => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:7777/persons');
//     xhr.send();
//     xhr.onload = () => {
//         responseArr = JSON.parse(xhr.response);
//         printList(responseArr);
//     };
// });

// getPerson.addEventListener('click', e => {
//     const xhr = new XMLHttpRequest();
//     const sid = document.querySelector('#sid');
//     if (!sid.value) {
//         alert('검색하실 아이디를 입력해 주시랑께요!');
//         sid.focus();
//         return;
//     }
//     xhr.open('GET', `http://localhost:7777/persons/${sid.value}`);
//     xhr.send();
//     xhr.onload = () => {
//         tbody.textContent = '';
//         const person = JSON.parse(xhr.response);
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${person.id}</td>
//             <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
//             <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
//             <td>
//                 <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
//                 <button onclick="deletePerson('${person.id}');">삭제</button>
//             </td>
//         `;
//         tbody.appendChild(tr); 
//     };
// });

// registPerson.addEventListener('click', e => {
//     // 구현
// });

// asc.addEventListener('click', () => {
//     // 구현
// });

// desc.addEventListener('click', () => {
//     // 구현
// });

// const printList = (responseArr, selValue, sort) => {
//     if (selValue) {
//         if (typeof selValue === 'number') {
//             responseArr.sort((obj1, obj2) => {
//                 if (sort==='ASC') {
//                     return obj1[selValue] - obj2[selValue];
//                 } else if (sort==='DESC') {
//                     return obj2[selValue] - obj1[selValue];
//                 }
//             });
//         } else {
//             responseArr.sort((obj1, obj2) => {
//                 if (sort==='ASC') {
//                     return obj1[selValue].localeCompare(obj2[selValue]);
//                 } else if (sort==='DESC') {
//                     return obj2[selValue].localeCompare(obj1[selValue]);
//                 }
//             });
//         }
//     }
//     tbody.textContent = '';    
//     for (let obj of responseArr) {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${obj.id}</td>
//             <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
//             <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
//             <td>
//                 <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
//                 <button onclick="deletePerson('${obj.id}');">삭제</button>
//             </td>
//         `;
//         tbody.appendChild(tr);    
//     }    
// };

// const modifyPerson = pid => {
//     const confirm = window.confirm('수정하시겠습니까?');
//     if (!confirm) return;
//     // 구현
// }

// const deletePerson = pid => {
//     const confirm = window.confirm('삭제하시겠습니까?');
//     if (!confirm) return;
//     // 구현
// }

// listPerson.click();