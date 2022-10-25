import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">; //서버에서 가져오는건 코드젠으로 따로 함. 일일이 하면 힘듬.
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onClickUpdate: () => void;
  onClickSubmit: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  mycolor: boolean;
  isEdit: boolean;
  data: any;
}

export interface IBlueButtonProps {
  mycolor: boolean;
  fz: string;
  fw: string;
}
