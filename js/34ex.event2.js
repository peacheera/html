//event실습 2: 배경색 변경
//outer클릭시 outer 배경색상 임의색상으로 변경
//inner클릭시 outer, inner배경색상 임의색상으로 변경
//button클릭시 btn, outer, inner 배경색상 임의색상으로 변경

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

const randomColor= function(){
    return  `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
        )`
    }
        // return '#' + Math.floor(Math.random() * 16777215).toString(16);

// outer.addEventListener('click', () => {
//     outer.style.backgroundColor = randomColor();
// });

// inner.addEventListener('click', () => {
//     inner.style.backgroundColor = randomColor();
// });

// btn.addEventListener('click', () => {
//     btn.style.backgroundColor = randomColor();
// });

outer.addEventListener('click', event =>{
    const prevInnerBackgroundcColor = inner.style.backgroundColor ?
    inner.style.backgroundColor : ' rgb(255,255,255)';
    switch(event.target.id){
        case 'outer': 
        outer.style.backgroundColor = randomColor();
        inner.style.backgroundColor = prevInnerBackgroundcColor;
        break;
        case 'inner':
            inner.style.backgroundColor = randomColor();
            outer.style.backgroundColor = randomColor();
        case 'btn':
            btn.style.backgroundColor = randomColor();
            inner.style.backgroundColor = randomColor();
            outer.style.backgroundColor = randomColor();
    }
});