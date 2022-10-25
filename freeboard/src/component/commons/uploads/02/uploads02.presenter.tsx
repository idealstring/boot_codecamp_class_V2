import * as S from "./uploads02.styles";
import { IUploads02PresenterProps } from "./uploads02.types";

export default function Uploads02Presenter(P: IUploads02PresenterProps) {
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
