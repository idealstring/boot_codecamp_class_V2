import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(
      writer: "1234"
      title: "여기가 내 사무소인가?"
      contents: "술 안먹었다니까"
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
    alert(result.data.createBoard.message);
  };
  return (
    <>
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
