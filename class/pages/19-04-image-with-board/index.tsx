import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// '#'은 아폴로에서 //과 같음.

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const uploadFileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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
          password: "1234",
          title: inputData.title,
          contents: inputData.contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
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

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // e.target.files[0] 같은 말. 단지 있는지 없는 지 확인하기 위해. 배열 전엔 .(점) 사용가능.
    console.log(e.target.files);
    console.log(file);

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data?.uploadFile.url);
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };

  const onClickImage = () => {
    uploadFileRef.current?.click();
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
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={uploadFileRef}
      />
      {imageUrl ? (
        <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
      ) : null}
      <button onClick={onClickSubmit}>Graphql API 요청하기(동기)</button>
    </>
  );
}
