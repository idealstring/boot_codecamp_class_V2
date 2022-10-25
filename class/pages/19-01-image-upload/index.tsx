import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  # Upload! 이건 apollo에서 쓰는 것. 벡인드가 만든거 아님.
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // e.target.files[0] 같은 말. 단지 있는지 없는 지 확인하기 위해. 배열 전엔 .(점) 사용가능.
    console.log(e.target.files);

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {/* <input type="file" onChange={onChangeFile} multiple />  */}
      {/* 여러개 드래그 하고 싶으면 multiple */}
      <button>이미지 업로드</button>
      {imageUrl ? (
        <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
      ) : null}
    </>
  );
}
