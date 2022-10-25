import { Dispatch, SetStateAction } from "react";
import { IInputDateProps } from "../../boards/write/boardsWrite.types";

export type IZipcodeModalP = {
  setInputData: Dispatch<SetStateAction<IInputDateProps>>;
};
