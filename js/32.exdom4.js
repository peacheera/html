// const pButton = document.querySelector('[data-btn-type="+"]');
// const mButton = document.querySelector('[data-btn-type="-"]');
const nameList = document.querySelector("#nameList");
const fileList = document.querySelector("#fileList");
const fileInput = document.querySelector('input[type="file"]');

function handleFileSelection(event) {
  const file = event.target.files[0]; // 선택된 첫 번째 파일 가져오기

  if (file) {
    // 파일 이름을 새로운 div로 만들어 표시
    const fileItem = document.createElement("div");
    fileItem.textContent = file.name;
    nameList.appendChild(fileItem);
  }
}

fileList.addEventListener("click", (event) => {
  switch (event.target.dataset.btnType) {
    case "+":
      const filefunction = document.createElement("div");
      filefunction.innerHTML = `
        <input type="file">&nbsp;
        <button data-btn-id="0" data-btn-type="+">+</button>
        <button data-btn-id="0" data-btn-type="-">-</button>
      `;

      fileList.appendChild(filefunction);
      break;

    case "-":
      const rowToDelete = event.target.closest("div");
      rowToDelete.remove();
      break;
  }
});
// fileList에서 change 이벤트 위임 처리
fileList.addEventListener("change", (event) => {
  if (event.target.type === "file") {
    // input[type="file"]인지 확인
    handleFileSelection(event);
  }
});
