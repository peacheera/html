const nameList = document.querySelector("#nameList");
const fileList = document.querySelector("#fileList");

let idCounter = 0; // 전역 카운터

function handleFileSelection(event) {
  const file = event.target.files[0]; // 선택된 첫 번째 파일 가져오기
  const fileId = event.target.dataset.fileId; // 파일 입력 필드의 고유 ID 가져오기

  if (file) {
    // 파일 이름을 새로운 div로 만들어 표시
    const fileItem = document.createElement("div");
    fileItem.textContent = file.name;
    fileItem.dataset.fileId = fileId; // 파일 이름에 파일 입력 필드의 ID 저장
    nameList.appendChild(fileItem);
  }
}

fileList.addEventListener("click", (event) => {
  switch (event.target.dataset.btnType) {
    case "+":
      const uniqueId = idCounter++; // 순차적으로 고유 ID 생성
      const filefunction = document.createElement("div");
      filefunction.innerHTML = `
        <input type="file" data-file-id="${uniqueId}">&nbsp;
        <button data-btn-id="${uniqueId}" data-btn-type="+">+</button>
        <button data-btn-id="${uniqueId}" data-btn-type="-">-</button>
      `;
      fileList.appendChild(filefunction);
      break;

    case "-":
      const rowToDelete = event.target.closest("div");
      const fileId = event.target.dataset.btnId;

      // 삭제할 파일 ID 가져오기

      const confirm = window.confirm("삭제하시겠습니까?");
      if (!confirm) return; //아니요를 누르면 confirm 반환

      // nameList에서 해당 ID와 연결된 파일 이름 제거
      const fileItemToDelete = nameList.querySelector(
        `[data-file-id="${fileId}"]`
      );
      if (fileItemToDelete) {
        fileItemToDelete.remove();
      }

      rowToDelete.remove(); // 파일 입력 필드와 버튼 삭제
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
