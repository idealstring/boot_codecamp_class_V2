import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 어제 점심을 맛없게 먹었습니다.");
  };

  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // 1. memo 시 key 또는 el이 변경된 부분만 리렌더링 됨. ('점심을', '먹었습니다' 제외)
      ))} */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // 2. memo해도, key 자체가 변경되어 props로 넘겨지므로, 모두 리렌더링됨.
      ))}
      {/* 버튼을 눌러 텍스트를 바꿨을 때 memo는 어떻게 동작할까? */}
      <button onClick={onClickChange}>Change</button>
    </>
  );
}
