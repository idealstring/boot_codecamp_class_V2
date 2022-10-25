import { ChangeEvent, useRef, useState } from "react";
import { checkValidationImage } from "../validation";
import * as S from "./upload03.styles";

type IUpload03Props = {
  preview: string;
  index: number;
  onChangeUrlsFiles: (url: string, file: File, index: number) => void;
  fetchUrls: string[];
};

export default function Upload03(P: IUpload03Props) {
  const { preview, index, onChangeUrlsFiles, fetchUrls } = P;
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
      onChangeUrlsFiles(String(e.target?.result), file, index);
    };
  };

  return (
    <>
      {preview ? (
        <S.ImgUpload onClick={onClickUploadDiv}>
          <img src={preview} />
        </S.ImgUpload>
      ) : fetchUrls[index] ? (
        <S.ImgUpload onClick={onClickUploadDiv}>
          <img src={`https://storage.googleapis.com/${fetchUrls[index]}`} />
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
