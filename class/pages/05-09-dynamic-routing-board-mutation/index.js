import { useMutation, gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          writer: inputData.writer,
          title: inputData.title,
          contents: inputData.contents,
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      alert(result.data.createBoard.message);
      router.push(
        `05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`
      );
    } catch (error) {
      //try에 있는 내용을 실행하다 실패하면, 남은 줄과 상관없이(무시하고) 그 즉시 catch실행.
      console.log(error.message);
      alert(error.message);
    }
  };

  const onChangeWriter = (e) => {
    setInputData((input) => {
      return { ...input, writer: e.target.value };
    });
  };
  const onChangeTitle = (e) => {
    setInputData((input) => {
      return { ...input, title: e.target.value };
    });
  };
  const onChangeContents = (e) => {
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
      <button onClick={onClickSubmit}>게시글 등록~~</button>
    </>
  );
}
