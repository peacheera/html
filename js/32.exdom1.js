
// // 추가버튼 > 
// const addbutton = document.getElementById('addbutton');
// // 제거버튼 > 
// const deletebutton = document.getElementById('deletebutton');
// // 초기화버튼 > 
// const resetbutton = document.getElementById('resetbutton');


// // 리스트에 아이템추가
// document.getElementById('addbutton').addEventListener('click', () => {
// const nItem = document.createElement('li');
// nItem.textContent = 'Item';  
// nItem.dataset.name = 'Item'; 
// list.appendChild(nItem);
// });

// // 리스트에 아이템제거데이터
// document.getElementById('deletebutton').addEventListener('click', () => {
//     const dItem = list.querySelector('li');list.removeChild(dItem);
// });
// // 리스트에 아이템초기화
// document.getElementById('resetbutton').addEventListener('click', () => {
//     (list.innerText="");
// });
const list = document.getElementById('list');
let count = 1;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.textContent) {
            case '추가':
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(`item ${count++}`));
                list.appendChild(li);
            break;
            case '제거':
                if (list.lastChild) {
                    list.removeChild(list.lastChild);
                    count--;
                }
            break;
            case '초기화':
                list.textContent = '';
                count = 0;                
        }
     });
    });