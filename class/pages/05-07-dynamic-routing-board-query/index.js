import { useRouter } from "next/router";
import styled from "@emotion/styled";

const BoardButton = styled.button`
  margin: 20px;
  padding: 5px;
  background: none;
  width: 300px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #000000;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export default function staticRoutingPage() {
  const router = useRouter();
  const onClinkMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/1");
  };
  const onClinkMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/2");
  };
  const onClinkMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/3");
  };
  const onClinkMove100 = () => {
    router.push("/05-08-dynamic-routed-board-query/100");
  };
  return (
    <>
      <BoardButton onClick={onClinkMove1}>게시글인 척하는 버튼1</BoardButton>
      <BoardButton onClick={onClinkMove2}>게시글인 척하는 버튼2</BoardButton>
      <BoardButton onClick={onClinkMove3}>게시글인 척하는 버튼3</BoardButton>
      <BoardButton onClick={onClinkMove100}>
        게시글인 척하는 버튼100
      </BoardButton>
    </>
  );
}
