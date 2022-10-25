import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

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

export default function ImageUploadPage() {
  const [previewImageUrl, setPreviewImageUrl] = useState(""); // 미리보기용
  const [file, setFile] = useState<File>();
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "코난",
          password: "1234",
          title: "아침에 눈을 뜨면 지난 밤이 궁금해",
          contents: "약쟁이가 됐나봐.",
          images: [url],
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file);

    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       file,
    //     },
    //   });
    //   console.log(result.data?.uploadFile.url);
    //   setImageUrl(result.data?.uploadFile.url || "");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error });
    // }

    // 1. 임시 URL 생성 - (가짜URL -> 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // setPreviewImageUrl(result);

    // 2. 임시 URL 생성 - (진짜URL -> 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 얘가 사진 주소
        setPreviewImageUrl(event.target?.result); // 미리보기는 스테이트에
        setFile(file); // 스토리지에 스테이트에 넣어두고 스토리지로 갈 것.
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {previewImageUrl ? (
        <img src={previewImageUrl}></img> // <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
      ) : null}
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
