document.addEventListener('DOMContentLoaded', () => {
    const fileListDiv = document.getElementById('fileList'); // 파일 리스트를 담을 컨테이너
    
    // 첫 번째 파일 선택 세트 추가
    addFileSet();

    // '+' 버튼 클릭 시 새로운 파일 선택 세트를 추가하는 함수
    function addFileSet() {
        const fileSetDiv = document.createElement('div');
        fileSetDiv.classList.add('file-set');
        
        // 파일 선택 입력 요소 생성
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        
        // '+' 버튼 생성
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        
        // '-' 버튼 생성
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        
        // '+' 버튼 클릭 시 새로운 파일 선택 필드 추가
        addButton.addEventListener('click', () => {
            addFileSet(); // 새로운 파일 선택 세트를 추가
        });
        
        // '-' 버튼 클릭 시 해당 파일 선택 세트 삭제
        removeButton.addEventListener('click', () => {
            fileSetDiv.remove(); // 해당 세트 삭제
        });
            
            // 파일 선택, +, - 버튼들을 파일 세트에 추가
            fileSetDiv.appendChild(fileInput);
        });
                }); 
