import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// container

export type IBoardWriteContainerProps = {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
};

export type IInputDateProps = {
  writer: string;
  password: string;
  title: string;
  contents: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  youtubeUrl: string;
  fileUrls: Array<string>;
};

export type IMyVrivables = {
  boardId: string;
  password: string;
  updateBoardInput: IInnerUpdateBoardInput;
};

export type IInnerUpdateBoardInput = {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: IUpdateBoardAddress;
};

export type IUpdateBoardAddress = {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
};

// presenter

export type IBoardWritePresenterProps = {
  errorOutput: {
    writer: boolean;
    password: boolean;
    title: boolean;
    contents: boolean;
  };
  onChangeInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  CreateBtn: () => void;
  UpdateBtn: () => void;
  CreateCancelBtn: () => void;
  UpdateCancelBtn: () => void;
  isCompleteColor: boolean;
  isEdit: boolean;
  existingData?: Pick<IQuery, "fetchBoard">;
  setInputData: Dispatch<SetStateAction<IInputDateProps>>;
  inputData: IInputDateProps;
  onClickUploadFileBtn: () => void;
};

// styles
export type IBoardWriteStyleProps = {
  errorColor?: boolean;
  isNormalScreen?: boolean;
  isCompleteColor?: boolean;
};
