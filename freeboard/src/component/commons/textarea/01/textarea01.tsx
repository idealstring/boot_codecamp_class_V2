import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";

const Textarea = styled.textarea`
  width: 100%;
  height: 300px;

  border: none;
  border-bottom: ${(props: any) =>
    props.error
      ? `1px solid ${StyleSet.colors.inputError}`
      : `1px solid ${StyleSet.colors.lightGray02}`};
  background-color: transparent;

  resize: none;
`;

interface ITextarea01Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: any;
}

export default function Textarea01(P: ITextarea01Props) {
  const { register, placeholder, error } = P;
  return <Textarea placeholder={placeholder} {...register} error={error} />;
}
