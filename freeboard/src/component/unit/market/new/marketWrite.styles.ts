import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IMarketWriteStylesProps } from "./marketWrite.types";

export const Container = styled.section`
  margin: 0 auto;
  padding: 60px 100px 60px;
  width: 100%;
  max-width: 1000px;
  min-width: 500px;

  box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
`;

export const SectionTitle = styled.h2`
  padding-bottom: 24px;
  font-size: ${StyleSet.fontSize.h1};
  font-weight: 500;
  text-align: center;
`;

export const Wrapper01 = styled.div`
  margin-bottom: 28px;
`;

export const Wrapper02 = styled.div`
  margin-bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper03 = styled.div`
  margin-bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper04 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper05 = styled.div`
  margin: 50px 0 28px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper06 = styled.div`
  margin-bottom: ${(props: IMarketWriteStylesProps) =>
    props.isNormalScreen ? "28px" : "0"};

  display: flex;
  flex-direction: ${(props: IMarketWriteStylesProps) =>
    props.isNormalScreen ? "row" : "column"};
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper07 = styled.div`
  margin-bottom: 28px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Wrapper08 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputText04 = styled.input`
  margin-bottom: 20px;
  width: 100%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  background-color: transparent;
`;

export const Textarea = styled.textarea`
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

export const Label01 = styled.label`
  width: 110px;
  font-weight: 500;
`;

export const Label02 = styled.label`
  margin-bottom: 16px;
  width: 100%;
  font-weight: 500;

  display: block;
`;

export const KakaoMap = styled.div`
  width: 100%;
  min-width: 384px;
  height: 252px;
`;

export const CreateBtn = styled.button`
  padding: 0 16px;
  width: 179px;
  height: 52px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  margin-top: 16px;
  padding: 0 16px 16px 16px;
  border: none;
  font-weight: 500;
  color: #bdbdbd;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: ${StyleSet.colors.gray};
  }
`;
