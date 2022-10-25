import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   # Upload! 이건 apollo에서 쓰는 것. 벡인드가 만든거 아님.
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

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
    // setImageUrl(result);

    // 2. 임시 URL 생성 - (진짜URL -> 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 얘가 사진 주소. 게시판에서 event.target.id 대신 event.currentTarget.id를 썼던 이유 : event.target은 태그만을 가르키지 않음.
        setImageUrl(event.target?.result);
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <button>이미지 업로드</button>
      {imageUrl ? (
        <img src={imageUrl}></img> // <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
      ) : null}
    </>
  );
}
