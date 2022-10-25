import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  width: 45%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  background-color: transparent;
`;

type IInput04Props = {
  type: "text";
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: any;
};

export default function Input04(P: IInput04Props) {
  const { type, register, placeholder, error } = P;
  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
