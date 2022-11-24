import { ChangeEvent } from "react";

export type IUserRegisterPresenterProps = {
  onClickRegister: (data: IOnClickRegisterProps) => Promise<void>;
  onClickSignIn: () => void;
  dataList: {
    id: number;
    text: string;
    essential: string;
  }[];
  isCheckedAll: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: (id: number) => (e: ChangeEvent<HTMLInputElement>) => void;
  checkList: number[];
};

export type IOnClickRegisterProps = {
  email?: string | null;
  password?: string | null;
  name?: string | null;
};

export type IUserRegisterStylesProps = {
  isActive?: boolean;
};

export type IStylesProps = {
  essential?: string;
};
