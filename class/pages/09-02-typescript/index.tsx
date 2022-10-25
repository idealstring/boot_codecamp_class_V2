export default function Qqq() {
  // 타입 추론
  let aaa = "안녕하쇼~";
  aaa = 3;

  // 타입 명시
  let bbb: string = "반갑습니다";

  // 문자 타입(선언과 할당 분리)
  let ccc: string;
  ccc = "반가워요!";
  ccc = 20;

  // 숫자 타입
  let ddd = 10;
  ddd = "밥먹을래?";

  let eee: number;
  eee = "철수";
  eee = 20;

  // 불린 타입
  let fff: boolean;
  fff = false;
  fff = "false";

  // 배열 타입
  let ggg: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  ggg.push("asdf");

  let hhh: string[] = ["철수", "영희", "후니", 1];
  hhh.push(1);

  let iii = ["철수", "영희", 1, 2, 3]; //타입을 추론해서 어떤 타입 사용하는지 알아보기
  let jjj: (string | number)[] = ["철수", "영희", 1, 2, 3];

  // 객체 타입
  const profileTest = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교",
  };
  profileTest.age = "8살";

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8 + "살",
    school: "다람쥐초등학교",
  };

  // 함수 타입
  // 함수는 어디서나 몇번이나 호출할 수 있어 타입추론 불가. 반드시 타입 명시.
  const add = (number1: number, number2: number, unit: string) => {
    return number1 + number2 + unit;
  };
  const result = add(1000, 2000, "원");

  const add2 = (number1: number, number2: number, unit: string): number => {
    return number1 + number2 + unit;
  };
  const result2 = add2(1000, 2000, "원"); //결과의 리턴 타입도 예측 가능

  // any 타입
  let qqq: any; //자바스크립트와 동일
  qqq = 12341324;
  qqq = "뭐든 다들어간다!!";
  qqq = true;

  return <div onClick={hhh}>{result}</div>;
}
