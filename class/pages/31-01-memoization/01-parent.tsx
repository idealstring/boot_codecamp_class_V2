import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./02-child";

export default function MemoizationParentPage() {
  console.log("부모가 렌더링 됩니다!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  //   const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용 시 주의 사향 =>  state사용 주의
  const onClickCountState = useCallback(() => {
    // 잘못 사용 사례 대표. state값도 기억한다.
    // console.log(countState + 1);
    // setCountState(countState + 1);

    // 따라서 프리브에서 가져와야 한다.
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 나만의 useCallback 만들어보기. 실제로는 잘 사용하지 않음. 그냥 이럴수도 있다만 알아두면 됨.
  //   const onClickCountState = useMemo(
  //     () => () => {
  //       setCountState(countState + 1);
  //     },
  //     []
  //   );

  return (
    <>
      <div>===================</div>
      <h1>저는 &quot;부모&quot; 컴포넌트 입니다.</h1>

      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      <div>카운트(state) : {countState}</div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기(바인딩X)
      </button>
      <MemoizationChildPage countState={countState} />
    </>
  );
}
