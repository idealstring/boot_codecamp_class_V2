import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.section`
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: ${StyleSet.fontSize.h3};
  font-weight: 500;
`;

export const LabelWrapper = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin: 25px 40px 10px 0;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
`;

export const PasswordUpdateBtn = styled.button`
  margin: 28px 0 0 0;
  width: 100%;
  padding: 11px 10px;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export const CancelButtonWrapper = styled.div`
  margin: 20px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CancelButton = styled.button`
  border: none;
  background: transparent;
  color: ${StyleSet.colors.lightGray02};
  &:hover {
    color: ${StyleSet.colors.gray};
  }
`;
