import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);

  const [inputData, setInputData] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(CREATE_BOARD);
  const [나의수정] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: inputData.writer,
        title: inputData.title,
        contents: inputData.contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
    router.push(`/08-05-board/${result.data.createBoard.number}`);
  };
  const onClickUpdate = async () => {
    // 1. 수정하기 뮤테이션 날리기
    const result = await 나의수정({
      variables: {
        number: Number(router.query.contentNumber),
        writer: inputData.writer,
        title: inputData.title,
        contents: inputData.contents,
      },
    });

    // 2. 상세페이지 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/08-05-board/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (e) => {
    setInputData((input) => {
      return { ...input, writer: e.target.value };
    });
    if (e.target.value && inputData.title && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeTitle = (e) => {
    setInputData((input) => {
      return { ...input, title: e.target.value };
    });
    if (inputData.writer && e.target.value && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeContents = (e) => {
    setInputData((input) => {
      return { ...input, contents: e.target.value };
    });
    if (inputData.writer && inputData.title && e.target.value) {
      setMycolor(true);
    }
  };

  return (
    <>
      <BoardWriteUI
        onClickUpdate={onClickUpdate}
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor={mycolor}
        isEdit={props.isEdit}
      />
    </>
  );
}
