const nameInput = document.querySelector("input:nth-of-type(1)");
const korInput = document.querySelector("input:nth-of-type(2)");
const engInput = document.querySelector("input:nth-of-type(3)");
const mathInput = document.querySelector("input:nth-of-type(4)");
const rButton = document.querySelector("button");
const tbody = document.querySelector("tbody");
const tfoot = document.querySelector("tfoot");

let totalKor = 0;
let totalEng = 0;
let totalMath = 0;

rButton.addEventListener("click", () => {
  const kor = parseInt(korInput.value);
  const eng = parseInt(engInput.value);
  const math = parseInt(mathInput.value);

  if (isNaN(kor) || isNaN(eng) || isNaN(math)) {
    alert("숫자를 입력해주세요!");
    return;
  }

  const total = kor + eng + math;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${name}</td> <!-- 이름 -->
        <td>${kor}</td> <!-- 국어 점수 -->
        <td>${eng}</td> <!-- 영어 점수 -->
        <td>${math}</td> <!-- 수학 점수 -->
        <td>${total}</td> <!-- 총점 -->
        <td><button class="delete-btn">삭제</button></td> <!-- 삭제 버튼 -->
    `;
  tbody.appendChild(newRow);

  totalKor += kor;
  totalEng += eng;
  totalMath += math;
  updateTotals();

  nameInput.value = "";
  korInput.value = "";
  engInput.value = "";
  mathInput.value = "";
});

tbody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const row = event.target.closest("tr");

    const kor = parseInt(row.children[1].textContent);
    const eng = parseInt(row.children[2].textContent);
    const math = parseInt(row.children[3].textContent);

    totalKor -= kor;
    totalEng -= eng;
    totalMath -= math;

    row.remove();
    updateTotals();
  }
});

function updateTotals() {
  const totalsRow = tfoot.querySelector("tr");
  totalsRow.children[1].textContent = totalKor;
  totalsRow.children[2].textContent = totalEng;
  totalsRow.children[3].textContent = totalMath;
  totalsRow.children[4].textContent = totalKor + totalEng + totalMath; // 모든 과목 총점
}
