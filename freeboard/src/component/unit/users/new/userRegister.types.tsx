import { FieldValues, SubmitHandler } from "react-hook-form";

export type IUserRegisterPresenterProps = {
  onClickRegister: (data: IOnClickRegisterProps) => Promise<void>;
  onClickSignIn: () => void;
};

export type IOnClickRegisterProps = {
  email?: string | null;
  password?: string | null;
  name?: string | null;
};

export type IUserRegisterStylesProps = {
  isActive?: boolean;
};
