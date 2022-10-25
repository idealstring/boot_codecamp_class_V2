import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  function onClickCountUp() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  const onClickToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
      <button onClick={onClickToggle}>토글</button>
      <div>{console.log(toggle)}</div>
    </>
  );
}
