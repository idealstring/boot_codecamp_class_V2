import { useMutation, gql } from "@apollo/client";

// '#'은 아폴로에서 //과 같음.

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables -> $ 역할
        writer: "아가사",
        title: "우리집을 소개할게",
        contents: "우리집은 천장이 돔으로 되어 있어!",
      }, //변수 넣는 곳
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };
  return (
    <>
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
