// 1. 문자열에서 모든 숫자를 찾아 배열로 반환하세요.
const str = "오늘은 2025년 1월 15일 입니다"
console.log(str.match(/[0-9]/g));//[ '2', '0', '2', '5', '1', '1', '5']
// 2. 주어진 문자열에서 모든 공백을 제거하세요.
const str2 = "Hello     World!";
console.log(str2.replace(/\s/g, ''));
// 3. 문자열에 'JavaScript'라는 단어가 포함되어 있는지 확인하세요.
// 결과 : true
const sentence = "I am learning JavaScript and it's fun!";
console.log(/JavaScript/g.test(sentence));

// 4. 주어진 문자열이 올바른 전화번호 형식인지 확인하세요. (예: 010-1234-5678)
// 결과 : true
const phone = "010-1234-5678";
console.log(/^\d{3}-\d{4}-\d{4}/g.test(phone));

// 5. 문자열에서 모든 URL을 추출하세요.
// 결과 : ['https://google.com', 'http://example.com']
//\/\/: // <-URL에서 http 뒤에 반드시 나타나는 부분
//[^\s]+: 공백이 아닌 문자들이 하나 이상([^\s]) 나오는 부분을 찾음
//  s?: s가 있을 수도, 없을 수도 있다
const text1 = "Visit https://google.com and http://example.com!";
console.log(text1.match(/https?:\/\/[^\s]+/g));
// 6. 주어진 문자열에서 숫자와 알파벳만 남기세요.
// 결과 : 'Hello123World456'
const str3 = "Hello123!@#World456";
console.log(str3.replace(/[^a-zA-a0-9]/g, ''));

// 7. 문자열에서 소수점 두 자리까지의 실수를 모두 추출하세요.
// 결과 : ['12.50', '100.99']
console.log('-----------------');
const text2 = "The prices are 12.50, 100.99, and 3.5 dollars.";
console.log(text2.match(/[0-9]/g));
