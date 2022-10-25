import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

// prettier - ignore
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
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
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: inputData.writer,
          title: inputData.title,
          contents: inputData.contents,
          password: 1234,
        },
      },
    });
    console.log(result);
    router.push(`/boards/${result.data.createBoard._id}`);
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
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      <label>제목 : </label>
      <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      <label>내용 : </label>
      <input
        role="input-contents"
        type="text"
        onChange={onChangeContents}
      />{" "}
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        Graphql API 요청하기(동기)
      </button>
    </>
  );
}
