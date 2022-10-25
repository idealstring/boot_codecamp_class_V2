import { ChangeEvent, MouseEvent } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

// presenter

export type IChargePresenterProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmitCharge: (data: any) => void;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onClickPrice: (e: MouseEvent<HTMLButtonElement>) => void;
  onChagePrice: (e: ChangeEvent<HTMLInputElement>) => void;
  veiwPrice: number;
  formState: FormState<FieldValues>;
};

// styles

export type IStylesProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
