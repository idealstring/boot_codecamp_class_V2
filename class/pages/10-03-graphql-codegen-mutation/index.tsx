import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

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

interface IInputDate {
  writer: string;
  title: string;
  contents: string;
}

export default function GraphqlMutationPage() {
  const [inputData, setInputData] = useState<IInputDate>({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables -> $ 역할
        writer: inputData.writer,
        title: inputData.title,
        contents: inputData.contents,
      }, //변수 넣는 곳
    });
    console.log(result);
    alert(result.data?.createBoard.message);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((input) => {
      return { ...input, writer: e.target.value };
    });
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((input) => {
      return { ...input, title: e.target.value };
    });
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((input) => {
      return { ...input, contents: e.target.value };
    });
  };

  return (
    <>
      <label>작성자 : </label>
      <input type="text" onChange={onChangeWriter} />
      <br />
      <label>제목 : </label>
      <input type="text" onChange={onChangeTitle} />
      <br />
      <label>내용 : </label>
      <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
