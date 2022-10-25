import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { promises } from "stream";
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
  // const [previewImageUrl, setPreviewImageUrl] = useState(""); // 미리보기용
  // const [file, setFile] = useState<File>();
  const [previewImageUrls, setPreviewImageUrls] = useState("", "", ""); // 미리보기용
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // 1. promise.all X
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2]; // [dog.jpg, dog.jpg, dog.jpg]

    // 2. promise.all O
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2] 결과값이 이래서 뽑아와야함.
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog.jpg, dog.jpg, dog.jpg]

    // 3. promise.all썼을 때 (리팩토링)
    // files - [File0, File1, File2]
    // files.map(el=> uploadFile({ variables: { file: el } })) //[uploadFile({... : File0}),uploadFile({... : File1}),uploadFile({... : File2})]
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog.jpg, dog.jpg, dog.jpg]
    console.log(resultUrls);

    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "코난",
          password: "1234",
          title: "아침에 눈을 뜨면 지난 밤이 궁금해",
          contents: "약쟁이가 됐나봐.",
          // images: resultUrls, // [url0, url1, url2] // 1. promise.all X, // 2. promise.all O
          images: String(resultUrls), // 3. promise.all썼을 때 (리팩토링)
        },
      },
    });
    console.log(result);
    // alert(result.data.createBoard.message);
  };

  const onChangeFile =
    (index: number) => async (e: ChangeEvent<HTMLInputElement>) => {
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
          // setPreviewImageUrl(event.target?.result); // 미리보기는 스테이트에
          // setFile(file); // 스토리지에 스테이트에 넣어두고 스토리지로 갈 것.

          const tempUrls = [...previewImageUrls];
          tempUrls[index] = event.target.result;
          setPreviewImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={previewImageUrls[0]} />
      <img src={previewImageUrls[1]} />
      <img src={previewImageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
