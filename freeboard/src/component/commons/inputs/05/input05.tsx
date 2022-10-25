import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  background-color: transparent;
`;

type IInput05Props = {
  type: "text";
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: any;
};

export default function Input05(P: IInput05Props) {
  const { type, register, placeholder, error } = P;
  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
