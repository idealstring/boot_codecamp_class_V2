// 021. 며칠

// **`문제 설명`**

// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

// **`입력 인자`**

// - month는 1~12의 숫자

// **`주의 사항`**

// - || 연산자가 필요합니다.
// - 2월은 28일로 계산합니다.

// **`예상 결과`**
// days(1) // 31
// days(2) // 28
// days(4) // 30

// const monthList = {
//   1: 31,
//   2: 28,
//   3: 31,
//   4: 30,
//   5: 31,
//   6: 30,
//   7: 31,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// };

const thirthy = [4, 6, 9, 11];
const thirthyone = [1, 3, 5, 7, 8, 10, 12];

function days(month) {
  if (thirthy.includes(month)) {
    return 30;
  } else if (thirthyone.includes(month)) {
    return 31;
  } else {
    return 28;
  }

  // return monthList[month];
  // if (
  //   month === 1 ||
  //   month === 3 ||
  //   month === 5 ||
  //   month === 7 ||
  //   month === 8 ||
  //   month === 10 ||
  //   month === 12
  // ) {
  //   return "31일";
  // } else if (month === 2) {
  //   return "28일";
  // } else if (month === 4 || month === 6 || month === 9 || month === 11) {
  //   return "30일";
  // }
}

console.log(days(1));
console.log(days(2));
console.log(days(4));
