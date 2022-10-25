import { BaseSyntheticEvent } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  SubmitHandler,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

// container

export type IInquirytWriteContainerProps = {
  questions?: any;
  onClickIsEditToggle: () => void;
  isEdit: boolean;
};

// export type IMyVariables = {
//   useditemQuestionId: string;
//   updateUseditemQuestionInput: IUpdateMarketInquiryInput;
// };

// export type IUpdateMarketInquiryInput = {
//   contents?: string;
// };

// presenter

export type IInquiryWritePresenterProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: (
    data?: any
  ) => (e?: BaseSyntheticEvent<any> | undefined) => Promise<any>;
  formState: FormState<FieldValues>;
  onClickCreateBtn: (data: SubmitHandler<FieldValues>) => Promise<void>;
  onClickUpdateBtn: (data: SubmitHandler<FieldValues>) => Promise<void>;
  onClickCancelBtn: () => void;
  isEdit: boolean;
  questions: any;
  getValues?: UseFormGetValues<FieldValues>;
};

// styles

export type IInquiryWriteStyleProps = {
  errorColor?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  isCancel?: boolean;
  isEdit?: boolean;
  isMobile?: boolean;
};
