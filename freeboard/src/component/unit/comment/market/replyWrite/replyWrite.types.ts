import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditemQuestionAnswer } from "../../../../../commons/types/generated/types";

export type IReplayWriteContainerProps = {
  questionsId?: string;
  Answers?: IUseditemQuestionAnswer;
  isEdit?: boolean;
  onClickIsEditToggle?: () => void;
};

// presenter

export type IReplayWritePresenterProps = {
  onClickCreateAnswer: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  Answers?: IUseditemQuestionAnswer;
  isEdit?: boolean;
  onClickCancelBtn?: () => void;
  onClickUpdateAnswer: (data: any) => void;
};

// styles

export type IReplyWriteStyleProps = {
  isMobile?: boolean;
  errorColor:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  isEdit?: boolean;
};
