import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IMyPageStylesProps } from "./myPage.types";

export const Container = styled.section`
  min-width: 500px;
  margin: 16px 0;
  text-align: center;
`;

export const PointWrapper = styled.div`
  padding: 0 0 30px 0;
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PointInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PointTitle = styled.span`
  font-size: ${StyleSet.fontSize.h3};
  font-weight: 500;
`;

export const Point = styled.span`
  font-size: ${StyleSet.fontSize.h2};
  font-weight: 700;
  color: ${StyleSet.colors.point01};
`;

export const Word = styled.span`
  padding: 5px 100px;
  background-color: ${StyleSet.colors.lightGray01};
  color: ${StyleSet.colors.gray};
  font-weight: 100;
`;

export const HistoryTitleWrapper = styled.div`
  //   margin: 0 0 20px 0;
  padding: 0 0 20px 0;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryTitle = styled.span`
  font-size: ${StyleSet.fontSize.h3};
  font-weight: 500;
`;

export const ChargeBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${StyleSet.colors.point02};
  font-weight: 500;
`;

export const HistoryWrapper = styled.div`
  //   margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryTH = styled.span`
  width: 25%;
  font-weight: 500;
  text-align: center;
`;

export const HistoryDate = styled.span`
  width: 25%;
  color: ${StyleSet.colors.gray};
  font-weight: 300;
  text-align: center;
`;
export const ChargePurchase = styled.span`
  width: 25%;
  font-weight: 300;
  text-align: center;
`;
export const IncreaDecrea = styled.span`
  width: 25%;
  font-weight: 500;
  color: ${(props: IMyPageStylesProps) =>
    props.minus ? `${StyleSet.colors.point03}` : `${StyleSet.colors.point01}`};
  text-align: center;
`;
export const Balance = styled.span`
  width: 25%;
  font-weight: 400;
  text-align: center;
`;
