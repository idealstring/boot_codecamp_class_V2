import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkValidationImage } from "../validation";
import Uploads01Presenter from "./uploads01.presenter";
import { UPLOAD_FILE } from "./uploads01.queries";
import { IUploads01Props } from "./uploads01.types";
import { FailModal } from "../../modal/commonsModal";

export default function Uploads01(P: IUploads01Props) {
  const { index, fileUrl, onChangeFileUrls } = P;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = () => {
    inputFileRef.current?.click();
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(e.target.files?.[0]);
    if (!file) return;
    // console.log(file);

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      if (!result.data) {
        FailModal("업로드 실패. 다시 시도해주세요.");
        return;
      }
      onChangeFileUrls(result.data?.uploadFile.url, index);
    } catch (error) {
      if (error instanceof Error) FailModal(error.message);
    }
  };

  return (
    <>
      <Uploads01Presenter
        onChangeFile={onChangeFile}
        inputFileRef={inputFileRef}
        onClickUpload={onClickUpload}
        fileUrl={fileUrl}
      />
    </>
  );
}
