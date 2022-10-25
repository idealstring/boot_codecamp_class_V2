import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

// prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputData, setInputData] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: { ...inputData },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <label>작성자 : </label>
      <input type="text" id="writer" onChange={onChangeInputData} />
      <br />
      <label>제목 : </label>
      <input type="text" id="title" onChange={onChangeInputData} />
      <br />
      <label>내용 : </label>
      <input type="text" id="contents" onChange={onChangeInputData} /> <br />
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
