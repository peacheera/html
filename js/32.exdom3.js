const tablebox = document.getElementById('body');

document.querySelector('button').addEventListener('click', () => {
const table =document.createElement('table');
table.innerHTML=`
    <tr>
        <th>번호</th>
        <th>성명</th>
        <th>나이</th>
        <th>키</th>
    </tr><tr>
            <th>1</th>
            <th>홍길동</th>
            <th>20</th>
            <th>170</th>
        </tr><tr>
            <th>2</th>
            <th>강감찬</th>
            <th>30</th>
            <th>150</th>
        </tr>
        `;
        document.body.appendChild(table);
});