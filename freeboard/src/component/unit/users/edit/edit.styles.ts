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

export const UserUpdateBtn = styled.button`
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

export const PwUpdateBtn = styled.button`
  margin: 28px 0 0 0;
  width: 100%;
  padding: 6px 5px;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
  color: ${StyleSet.colors.point01};
  background-color: ${StyleSet.colors.white};
  border: 1px solid ${StyleSet.colors.point01};
  border-radius: 5px;

  cursor: pointer;
`;
