// 41**. 조건문 실전 적용 - 점수에 따른 등급**

// **`문제 설명`**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png)

// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - score - 숫자열

// **`주의 사항`**

// -

// **`예상 결과`**
// grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"

function grade(score) {
  if (score > 100 || score < 0) return "잘못된 점수입니다.";
  if (100 >= score && score >= 90) {
    return "A";
  } else if (90 > score && score >= 80) {
    return "B";
  } else if (80 > score && score >= 70) {
    return "C";
  } else if (70 > score && score >= 60) {
    return "D";
  } else if (60 > score) {
    return "F";
  }
}

console.log(grade(105)); // "잘못된 점수입니다"
console.log(grade(-10)); // "잘못된 점수입니다"
console.log(grade(97)); // "A"
console.log(grade(86)); // "B"
console.log(grade(75)); // "C"
console.log(grade(66)); // "D"
console.log(grade(52)); // "F"
