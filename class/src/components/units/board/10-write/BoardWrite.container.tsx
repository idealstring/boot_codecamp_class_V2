import BoardWriteUI from "./BoardWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
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
    router.push(`/10-01-typescript-board/${result.data.createBoard.number}`);
  };
  const onClickUpdate = async () => {
    const myvariables: IMyVariables = {
      number: Number(router.query.contentNumber),
    };
    if (inputData.writer) myvariables.writer = inputData.writer;
    if (inputData.title) myvariables.title = inputData.title;
    if (inputData.contents) myvariables.contents = inputData.contents;

    // 1. 수정하기 뮤테이션 날리기
    const result = await 나의수정({
      variables: myvariables,
    });

    // 2. 상세페이지 이동하기
    console.log(result);
    alert(result.data.updateBoard.message);
    router.push(`/10-01-typescript-board/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((input) => {
      return { ...input, writer: e.target.value };
    });
    if (e.target.value && inputData.title && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((input) => {
      return { ...input, title: e.target.value };
    });
    if (inputData.writer && e.target.value && inputData.contents) {
      setMycolor(true);
    }
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
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
        data={props.data}
      />
    </>
  );
}
