import { FieldError } from "rc-field-form/lib/interface";
import { BaseSyntheticEvent } from "react";
import {
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
// import { OptionalObjectSchema, TypeOfShape } from "yup/lib/object";
// import { RequiredStringSchema } from "yup/lib/string";
// import { AnyObject } from "yup/lib/types";

export type ISignInPresenterProps = {
  onClickSignIn: (data: any) => Promise<void>;
  onClickRegister: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  // schema: OptionalObjectSchema<
  //   {
  //     email: RequiredStringSchema<string | undefined, AnyObject>;
  //     password: RequiredStringSchema<string | undefined, AnyObject>;
  //   },
  //   AnyObject,
  //   TypeOfShape<any>
  // >;
};

export type IOnClickSignInProps = {
  email: string;
  password: string;
};

export type IErrorProps = {
  error?:
    | string
    | FieldError
    | any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
