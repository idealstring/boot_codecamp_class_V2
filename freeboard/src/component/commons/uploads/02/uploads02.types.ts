import { ChangeEvent, RefObject } from "react";

export type IUploads02Props = {
  key: number;
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
};

export type IUploads02PresenterProps = {
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  fileUrl: string;
};
