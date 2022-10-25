// 시저 암호

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

function solution(s, n) {
  //   const ss = s.split("").map((el) => el.charCodeAt());
  //   const answer = ss
  //     .map((el) => {
  //       if (el === 32) {
  //         return String.fromCharCode(Number(el));
  //       } else if (el >= 65 && el <= 90) {
  //         if (el + n > 90) {
  //           return String.fromCharCode(Number(el + n - 26));
  //         } else {
  //           return String.fromCharCode(Number(el + n));
  //         }
  //       } else if (el >= 97 && el <= 122) {
  //         if (el + n > 122) {
  //           return String.fromCharCode(Number(el + n - 26));
  //         } else {
  //           return String.fromCharCode(Number(el + n));
  //         }
  //       }
  //     })
  //     .join("");
  //   return answer;
  //
  //
  //
  // 2번째 풀이
  //   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let answer = "";
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === " ") {
  //       answer += s[i]; // " "
  //     } else {
  //       let idx = alphabet.indexOf(s[i]);
  //       // console.log(s[i], idx)
  //       const word =
  //         idx > 25
  //           ? alphabet.substring(26, alphabet.length)
  //           : alphabet.substring(0, 26);
  //       idx = word.indexOf(s[i]) + n;
  //       // console.log(s[i], word[idx])
  //       if (idx >= 26) {
  //         idx -= 26;
  //       }
  //       // console.log(s[i], word[idx])
  //       answer += word[idx];
  //     }
  //   }
  //   return answer;
  //
  //
  //
  // 3번째 풀이
  //   const lower = "abcdefghijklmnopqrstuvwxyz";
  //   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let answer = "";
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === " ") {
  //       answer += s[i]; // " "
  //     } else {
  //       const word = lower.includes(s[i]) ? lower : upper;
  //       let idx = word.indexOf(s[i]) + n;
  //       // console.log(s[i], word)
  //       if (idx >= 26) {
  //         idx -= 26;
  //       }
  //       answer += word[idx];
  //     }
  //   }
  //   return answer;
  //
  //
  //
  // 4번째 풀이
  //   const lower = "abcdefghijklmnopqrstuvwxyz";
  //   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const answer = s.split("").reduce((acc, cur) => {
  //     // console.log(acc,cur)
  //     const word = lower.includes(cur) ? lower : upper;
  //     let idx = word.indexOf(cur) + n;
  //     // console.log(cur, idx, word)
  //     if (idx >= 26) {
  //       idx -= 26;
  //     }

  //     return acc + (cur === " " ? " " : word[idx]);
  //   }, "");
  //   return answer;
  //
  //
  //
  //
  // 5번째 풀이
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let code = s[i].charCodeAt() + n;

    if (code > 122 || (code > 90 && code - n < 97)) code -= 26;
    answer += String.fromCharCode(code);
  }
  return answer;
}
