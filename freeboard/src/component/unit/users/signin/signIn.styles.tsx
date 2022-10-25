import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IErrorProps } from "./signIn.types";
export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 400px;
`;

export const Hgroup = styled.hgroup`
  margin: 30px 0 0 0;

  h1 {
    margin: 0;
    font-size: ${StyleSet.fontSize.h3};
    font-weight: 600;
  }
`;

export const Form = styled.form`
  margin: 20px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-start; */
`;

export const Inner = styled.label`
  margin: 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputEmail = styled.input`
  padding: 9px 15px 9px 15px;

  border-radius: 4px 4px 0px 0px;
  border: 1px solid
    ${(props: IErrorProps) =>
      props.error ? StyleSet.colors.inputError : StyleSet.colors.lightGray02};
  transition: 0.2s box-shadow, 0.2s background-color;

  ::placeholder {
    color: ${StyleSet.colors.lightGray02};
  }
`;

export const InputPassword = styled.input`
  margin-top: -1px;
  padding: 9px 15px 9px 15px;

  border-radius: 0 0 4px 4px;
  border: 1px solid
    ${(props: IErrorProps) =>
      props.error ? StyleSet.colors.inputError : StyleSet.colors.lightGray02};
  transition: 0.2s box-shadow, 0.2s background-color;

  ::placeholder {
    color: ${StyleSet.colors.lightGray02};
  }
`;

export const Label = styled.label`
  margin: 25px 0 10px 0;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
`;

export const SignInBtn = styled.button`
  margin: 28px 0 0 0;
  width: 100%;
  padding: 11px 10px;
  font-size: ${StyleSet.fontSize.b2};

  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export const LoginWrapper = styled.div`
  margin: 25px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginBtn = styled.button`
  margin: 25px 10px;
  text-align: center;
  font-size: ${StyleSet.fontSize.b4};
  border: none;
  background-color: transparent;

  cursor: pointer;
`;
