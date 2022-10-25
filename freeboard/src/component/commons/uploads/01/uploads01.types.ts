import { ChangeEvent, RefObject } from "react";

export type IUploads01Props = {
  key?: number;
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
};

export type IUploads01PresenterProps = {
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  fileUrl: string;
};
