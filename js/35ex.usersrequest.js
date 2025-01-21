// const getAllUser = document.getElementById('getAllUser');  // '사용자 데이터 조회' 버튼
// const url = 'https://jsonplaceholder.typicode.com/users';  // API URL

// document.querySelector('#getAllUser').addEventListener('click', e => {
//     const xhr = new XMLHttpRequest(); 

//     xhr.open('GET', url);  

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState !== 4) return; 
//         if (xhr.status == 200 || xhr.status == 201) {
//             const users = JSON.parse(xhr.response); 
//             console.log(users); 

//             users.forEach(user => {
//                 const tr = document.createElement('tr');
//                 tr.innerHTML = `
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.username}</td>
//                     <td>${user.email}</td>
//                     <td>${user.address ? `${user.address.street}, ${user.address.city}` : ''}</td>
//                     <td>${user.phone}</td>
//                     <td>${user.website}</td>
//                     <td>${user.company ? user.company.name : ''}</td>
//                 `;
//                 document.querySelector('tbody').appendChild(tr);
//             });
//         } else {
    //             alert('에러 발생: ' + xhr.status);  // 에러 발생 시 alert
    //         }
    
    //     };
    
    //     // 요청 전송
    //     xhr.send();
    // });
    
const getAllUser = document.getElementById('getAllUser'); 
const url = 'https://jsonplaceholder.typicode.com/users';  

document.querySelector('#getAllUser').addEventListener('click', e => {
    
const xhr = new XMLHttpRequest();

const xhrUtil = {
    init: (httpMethod, url, payload) => {
        if (httpMethod.toUpperCase() == 'GET') {
            url = url + (payload ? payload : '');
        }
        xhr.open(httpMethod, url);
        
        if (httpMethod.toUpperCase() == 'POST' ||
            httpMethod.toUpperCase() == 'PUT' ||
            httpMethod.toUpperCase() == 'PATCH') {
                xhr.setRequestHeader('content-type', 'application/json');
            }
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) return; 
                if (xhr.status == 200 || xhr.status == 201) {
                    const users = JSON.parse(xhr.response);
                    console.log(users);
                    
                    users.forEach(user => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.address ? `${user.address.street}, ${user.address.city}` : ''}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                        <td>${user.company ? user.company.name : ''}</td>
                        `;
                        document.querySelector('tbody').appendChild(tr);
                    });
                } else {
                    alert('에러 발생: ' + xhr.status);  
                }
            };
            xhr.send(payload); 
        }
    };
        xhrUtil.init('GET', url, null)
});

const desc = document.querySelector('#desc')
document.querySelector('#desc').addEventListener('click', e => {
    users.sort((a, b) => b.id - a.id);
    document.querySelector();
});