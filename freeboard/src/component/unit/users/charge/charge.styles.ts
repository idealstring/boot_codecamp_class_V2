import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IStylesProps } from "./charge.types";

export const TitleWrapper = styled.div`
  //   margin: 0 0 20px 0;
  padding: 0 0 20px 0;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: ${StyleSet.fontSize.h3};
  font-weight: 500;
`;

export const BodyWrapper = styled.div`
  margin: 20px 0;
`;

export const ChargeForm = styled.form`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: ${(props: IStylesProps) =>
    props.error ? `1px solid ${StyleSet.colors.inputError}` : "default"};
`;

export const PriceBtnWrapper = styled.div`
  margin: 20px 0;
  padding: 0;

  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceBtn = styled.button`
  margin: 0;
  width: 100%;
  height: 41px;

  border: none;
  border-right: 1px solid ${StyleSet.colors.lightGray02};
  background-color: transparent;

  cursor: pointer;
`;

export const ChargeButton = styled.button`
  padding: 0 16px;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
  color: #fff;
  background-color: ${StyleSet.colors.point01};
  cursor: pointer;
`;
