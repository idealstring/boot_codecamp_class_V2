import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

const Input = styled.input`
  width: 100%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  background-color: transparent;
`;

type IInput03Props = {
  type: "text";
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: any;
  existingData?: Pick<IQuery, "fetchUseditem"> | undefined;
};

export default function Input03(P: IInput03Props) {
  const { type, register, placeholder, error } = P;
  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
