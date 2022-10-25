// 1. 문자/숫자/불린(premitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);
//
//
//
// 2. any 타입 -> 자바스크립트와 같음.
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); // any는 아무거나 다됨.
  return [arg3, arg2, arg1];
};
const resultAny = getAny("철수", false, true);
//
//
//
// 3. unknown 타입.
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  // unknown은 무엇을 넣든 상관 없으나, 사용할 땐 아님. 어떤건지 타입을 가정해야 쓸 수 있음. any보다 안전함.
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};
const resultUnknown = getUnknown("철수", false, true);
//
//
//
// 4. generic 타입 - 1단계
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const resultGeneric = getGeneric("철수", false, true); // 타입 추론
// const resultGeneric = getGeneric<number, number, number>("철수", false, true); // 타입 명시
//
//
//
// 5. generic 타입 - 2단계
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  // 이름만 짧게 쓴 것.
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const resultGeneric2 = getGeneric2("철수", false, true); // 타입 추론
//
//
//
// 6. generic 타입 - 3단계
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  // 이름만 짧게 쓴 것.
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const resultGeneric3 = getGeneric3("철수", false, true);
//
//
//
// 6. generic 타입 - 3단계
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [T, U, V] => {
  // 이름만 짧게 쓴 것.
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};
const resultGeneric4 = getGeneric4("철수", false, true);
