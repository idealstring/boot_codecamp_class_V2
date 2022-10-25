import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

const Input = styled.input`
  width: 100%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  font-size: ${StyleSet.fontSize.h2};
  background-color: transparent;
`;

type IInput02Props = {
  type: "text";
  id: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  error?: any;
  // setValue?: UseFormSetValue<{
  //   name: string;
  //   remarks: string;
  //   contents: string;
  //   price: number;
  //   tags: string;
  //   useditemAddress: {
  //     lng: string;
  //     lat: string;
  //     zipcode: string;
  //     address: string;
  //     addressDetail: string;
  //   };
  // }>;
};

export default function Input02(P: IInput02Props) {
  const { type, register, placeholder, error } = P;

  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
