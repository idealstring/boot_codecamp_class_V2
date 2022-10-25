import React, { memo } from "react";

function MemoizationChildPage(Props) {
  console.log("자식이 렌더링 됩니다!");
  return (
    <>
      <div>===================</div>
      <h1>저는 &quot;자식&quot; 컴포넌트 입니다.</h1>
      <div>===================</div>
    </>
  );
}
// 둘다 같은거
// React.memo === memo
//
// export default MemoizationChildPage;
export default memo(MemoizationChildPage);
// memo가 hoc라는 것을 알 수 있고, 해당 컴포넌트를 묶는 것을 알 수 있음.
// useMemo 의존성배열의 해당하는 건 props다. props가 바뀌면 refresh된다.
// props에 따라 바뀌면 다 memo를 붙이면 되는 게 아닐까 싶은데, 아니다.
// memo는 메모리에 기록이 되고 있다.
// 쓸떼 없이 메모리를 낭비할 수 있으니, 적정한 때에만 사용해야 한다.
