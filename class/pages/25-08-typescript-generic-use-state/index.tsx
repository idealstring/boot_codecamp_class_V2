/* eslint-disable @typescript-eslint/restrict-template-expressions */
export function useMyState<S>(init: S): [S, () => void] {
  const myState = init; // init을 사용해서 state의 초기값 설정
  const mySetState = (change: S) => {
    // 1. change를 사용해 myState를 변경
    console.log(`${myState}에서 ${change}로 state 변경`);
    // 2. 해당 컴포넌트를 리렌더링 시키기!(render함수)
    console.log(`변경된 ${change}로 리렌더링`);
  };

  return [myState, mySetState];
}

// 사용자
const [count, setCount] = useMyState(10);
