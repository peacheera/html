//testButton이라는 id를 가진 요소에 click이벤트에 대한
//이벤트리스너(이벤트핸들러)를 추가
//=> testButton이라는 아이디를 가진 요소에 click이 발생하면
//      이벤트리스너에서 정의한 콜백함수를 실행
document.getElementById('testButton').addEventListener('click', () => {

    const parent = document.getElementById("parent");
    console.log("부모 노드: ", parent);

    const childNodes = parent.childNodes;
    console.log("모든 자식 노드들: ", Array.from(childNodes));  // childNodes는 노드 리스트이므로 배열로 변환

    const children = parent.children;
    console.log("모든 자식 엘리먼트 노드들: ", Array.from(children));  // children은 HTMLCollection, 배열로 변환

    console.log("첫번째 자식 : ", parent.firstChild);
    console.log("마지막 자식 : ", parent.lastChild);

    const firstElementChild=parent.firstElementChild;
    console.log("요소인 첫번째 자식의 다음 형제 노드 : ", firstElementChild.nextElementSibling );

    const byTagName = document.getElementsByTagName("p")
    console.log("태그명이 p인 요소들 : ", byTagName);

    const byClassName = document.getElementsByClassName('child');
    console.log("클래스명이 child인 요소들: ", byClassName);
    
    const querySingle = document.querySelector('#parent .child');
    console.log("아이디가 parent인 요소의 자손 요소중 클래스가 child인 요소 하나: ", querySingle );

    const queryAll = document.querySelectorAll("#parent .child");
    console.log("아이디가 parent인 요소의 자손 요소 중 클래스가 child인 모든 요소: " , queryAll);

    //실습 1. id가 parent인 요소의 세번째 자식 요소
    // const thirdchild = document.querySelector('#parent:nth-child(3)');
    // console.log("아이디가 parent인 요소의 세번째 자식요소 :", thirdchild.querySelector); 
    console.log(parent.firstChild.nextSibling.nextSibling);
    console.log(parent.childNodes[2]);
    
    //실습 2. class가 child인 요소 중 두번째 요소
    // const childP = document.querySelectorAll('.child')
    // console.log(childP[1]);
    console.log(document.querySelectorAll('.child')[1]);

    // 실습 3. class가 child인 요소중 세번째 요소의 형
    const childP2 = document.querySelectorAll('.child')
    console.log(childP2[2].previousSibling);
    
});
