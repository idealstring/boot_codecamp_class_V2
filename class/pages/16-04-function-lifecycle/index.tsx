import { Component, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function FunctionCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  console.log("FunctionCounterPage");
  console.log("===================");

  // componentDidMount
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidUpdate // 처음엔 실행되지 않음.
  useEffect(() => {
    console.log("변경되고 나서 실행[count]");
  }, [count]); // 주의. 처음에도 실행된다.

  useEffect(() => {
    console.log("변경되고 나서 실행");
  }); // 주의. 처음에도 실행된다. 의존성 배열이 없으면 뭐가 바뀌든 계속 업데이트 됨.

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("사라질 때 실행");
    };
  }, []);

  // // 1. 하나로 합치기 가능.
  // useEffect(() => {
  //   console.log("그려지고 나서 실행");
  //   return () => {
  //     console.log("사라질 때 실행");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("변경되고 나서 실행[count]");
  // }, [count]);

  // // 2. useEffect 잘못된 사용 예제(1. 추가렌더링, 2 무한루프 주의)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
    // console.log(this.state.count);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  console.log("나는 언제 실행되니?");
  console.log("===================");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운터 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
