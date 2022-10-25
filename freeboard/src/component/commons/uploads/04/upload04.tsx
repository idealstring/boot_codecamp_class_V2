import { Maybe } from "graphql/jsutils/Maybe";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationImage } from "../validation";
import * as S from "./upload04.styles";

type IUpload04Props = {
  preview: string | undefined;
  onChangeUrlsFiles: (url: string, file: File) => void;
  fetchUrl: Maybe<string>;
};

export default function Upload04(P: IUpload04Props) {
  const { preview, onChangeUrlsFiles, fetchUrl } = P;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickUploadDiv = () => {
    inputRef.current?.click();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(e.currentTarget.files?.[0]);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      onChangeUrlsFiles(String(e.target?.result), file);
    };
  };

  return (
    <>
      {preview ? (
        <S.ImgUpload onClick={onClickUploadDiv}>
          <img src={preview} />
        </S.ImgUpload>
      ) : fetchUrl ? (
        <S.ImgUpload onClick={onClickUploadDiv}>
          <img src={`https://storage.googleapis.com/${fetchUrl}`} />
        </S.ImgUpload>
      ) : (
        <S.ImgUpload onClick={onClickUploadDiv}>
          +<span>upload</span>
        </S.ImgUpload>
      )}
      <S.InputHidden type="file" ref={inputRef} onChange={onChangeInput} />
    </>
  );
}
