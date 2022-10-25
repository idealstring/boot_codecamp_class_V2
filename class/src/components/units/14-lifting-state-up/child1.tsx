export default function Child1(props: any) {
  const onClick = () => {
    props.setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>child1의 카운트 : {props.count}</div>
      <button onClick={onClick}>카운트 올리기</button>
      {/* <button onClick={props.onClickCountUp}>카운트 올리기</button> */}
    </>
  );
}
