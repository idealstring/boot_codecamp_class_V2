import { ChangeEvent } from "react";

// container

export type ICommentWriteContainerProps = {
  comment?: any;
  onClickIsEditToggle: () => void;
  isEdit: boolean;
};

export type IMyVariables = {
  boardCommentId: string;
  password: string;
  updateBoardCommentInput: IUpdateBoardCommentInput;
};

export type IUpdateBoardCommentInput = {
  contents?: string;
  rating?: GLfloat;
};

// presenter

export type ICommentWritePresenterProps = {
  inputData: {
    writer: string;
    password: string;
    rating: number;
    contents: string;
  };
  errorOutput: {
    writer: boolean;
    password: boolean;
    contents: boolean;
    rating: boolean;
  };
  onClickCreateBtn: () => void;
  onClickUpdateBtn: () => void;
  onClickCancelBtn: () => void;
  // onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangePwd: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeRating: (e: number) => void;
  isEdit: boolean;
  comment: any;
};

// styles

export type ICommentWriteStyleProps = {
  errorColor?: boolean;
  isCancel?: boolean;
  isEdit?: boolean;
  isMobile?: boolean;
};
