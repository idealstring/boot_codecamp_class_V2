import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import { IBlueButtonProps } from "./BoardWrite.types";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  myColor: boolean;
  fz: string;
  fw: string;
}

export const BlueButton = styled.button`
  padding: 20px;
  background-color: ${(props: IProps) => (props.color ? "yellow" : "default")};
  font-size: ${(props: IProps) => props.fz};
  margin: ${(props: IProps) => {
    return props.fz;
  }};
`;
