import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";

type IStylesProps = {
  error?: boolean;
};

const Input = styled.input`
  width: 100%;
  padding: 9px 15px 9px 15px;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border: ${(props: IStylesProps) =>
    props.error
      ? `1px solid ${StyleSet.colors.inputError};`
      : `1px solid ${StyleSet.colors.lightGray02};`};
  border-radius: 5px;
  ::placeholder {
    color: ${StyleSet.colors.lightGray02};
  }
`;

type IInput01Props = {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: any;
};

export default function Input01(P: IInput01Props) {
  const { type, register, placeholder, error } = P;

  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
