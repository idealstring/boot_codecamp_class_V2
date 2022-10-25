import * as S from "./uploads01.styles";
import { IUploads01PresenterProps } from "./uploads01.types";

export default function Uploads01Presenter(P: IUploads01PresenterProps) {
  const { onChangeFile, inputFileRef, onClickUpload, fileUrl } = P;
  return (
    <>
      {fileUrl ? (
        <S.ImgUpload>
          <img
            onClick={onClickUpload}
            src={`https://storage.googleapis.com/${fileUrl}`}
          />
        </S.ImgUpload>
      ) : (
        <>
          <S.ImgUpload onClick={onClickUpload}>
            +<span>Upload</span>
          </S.ImgUpload>
        </>
      )}
      <S.InputHidden type="file" onChange={onChangeFile} ref={inputFileRef} />
    </>
  );
}
