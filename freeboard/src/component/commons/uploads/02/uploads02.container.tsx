import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkValidationImage } from "../validation";
import Uploads02Presenter from "./uploads02.presenter";
import { UPLOAD_FILE } from "./uploads02.queries";
import { IUploads02Props } from "./uploads02.types";
import { FailModal } from "../../modal/commonsModal";

export default function Uploads02(P: IUploads02Props) {
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
      <Uploads02Presenter
        onChangeFile={onChangeFile}
        inputFileRef={inputFileRef}
        onClickUpload={onClickUpload}
        fileUrl={fileUrl}
      />
    </>
  );
}
