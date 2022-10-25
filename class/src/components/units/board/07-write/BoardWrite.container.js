import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [mycolor, setMycolor] = useState(false);

  const [inputData, setInputData] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(CREATE_BOARD);

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
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (e) => {
    // console.log(e.target.value);
    setInputData((input) => {
      return { ...input, writer: e.target.value };
    });
    if (e.target.value && inputData.title && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeTitle = (e) => {
    // console.log(e.target.value);
    setInputData((input) => {
      return { ...input, title: e.target.value };
    });
    if (inputData.writer && e.target.value && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeContents = (e) => {
    // console.log(e.target.value);
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
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor={mycolor}
      />
    </>
  );
}
