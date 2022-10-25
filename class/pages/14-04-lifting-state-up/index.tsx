import { useState } from "react";
import Child1 from "../../src/components/units/14-lifting-state-up/child1";
import Child2 from "../../src/components/units/14-lifting-state-up/child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>=================</div>
      <Child2 count={count} setCount={setCount} />
      {/* <Child1 count={count} onClickCountUp={onClickCountUp} />
      <div>=================</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} /> */}
    </>
  );
}
