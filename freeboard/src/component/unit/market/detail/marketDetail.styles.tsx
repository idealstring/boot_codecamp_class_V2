import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IMarketDetailStylesProps } from "./marketDetail.types";

export const Container = styled.section`
  margin: 0 auto;
  padding: 20px 100px 20px;

  width: 100%;
  max-width: 1000px;
  min-width: 500px;
`;

export const TopWrapper = styled.div`
  margin: 0 0 20px 0;

  display: flex;
  flex-direction: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: space-between;
  align-items: flex-start;
`;

export const DeailNavWrapper = styled.div`
  margin: 0 auto;
  padding: 0 100px;

  width: 100%;
  background-color: #fff;
`;

export const DetailNav = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  min-width: 500px;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: sticky;
  top: 0;
  background-color: #fff;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
`;

export const ImageWrapper = styled.div`
  margin: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "0 auto" : "0 20px 0 0"};

  img {
    margin: 0 auto;
    width: 100%;
    max-width: 380px;
    max-height: 380px;
    aspect-ratio: 1/1;
  }
`;

export const InfoWrapper = styled.div`
  margin: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "28px 0 0 0" : "0"};
  width: 100%;
  max-width: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "100%" : "380px"};
  // max-height: 380px;
  max-height: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "310px" : "380px"};
  aspect-ratio: 1/1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductSeller = styled.span`
  margin: 0 0 10px 0;
  font-size: ${StyleSet.fontSize.b3};
  font-weight: 600;
  display: block;
`;

export const ProductTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: ${StyleSet.fontSize.h2};
  font-weight: 400;
`;

export const ProductPrice = styled.span`
  margin: 0 0 10px 0;
  font-size: ${StyleSet.fontSize.h2};
  font-weight: 700;

  display: block;
`;

export const DealInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const DealInfoTitle = styled.span`
  min-width: 30px;
  font-size: ${StyleSet.fontSize.b4};
  font-weight: 500;
  color: ${StyleSet.colors.gray};

  display: block;
`;

export const DealInfo = styled.span`
  margin: 0 0 0 20px;
  font-weight: 300;
  display: block;
`;

export const InfoBtnRrapper = styled.div`
  margin: 20px 0 0 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
`;

export const BasketBtn = styled.button`
  // margin: 0 10px 0 0;
  width: 100%;
  height: 55px;

  border: none;
  border: ${(props: IMarketDetailStylesProps) =>
    props.IPicked?.length
      ? `1px solid ${StyleSet.colors.point02};`
      : `1px solid ${StyleSet.colors.point01}`};
  border-radius: 4px;
  background-color: ${(props: IMarketDetailStylesProps) =>
    props.IPicked?.length ? `${StyleSet.colors.backgroundBlack}` : `#fff`};
  color: ${(props: IMarketDetailStylesProps) =>
    props.IPicked?.length ? "#ffffff" : `${StyleSet.colors.point01}`};

  cursor: pointer;
`;

export const PurchaseBtn = styled.button`
  width: 100%;
  height: 55px;

  border: none;
  border: 1px solid ${StyleSet.colors.point01};
  border-radius: 4px;
  background-color: ${StyleSet.colors.point01};
  color: #fff;

  cursor: pointer;
`;

export const MiddleTitle = styled.span`
  margin: 0 0 20px 0;
  font-weight: 500;

  display: block;
`;

export const MiddleContents = styled.span`
  margin: 0 0 20px 0;
  font-weight: 300;

  display: block;
`;

export const BodyWrapper = styled.div`
  margin: 0 0 20px 0;
  width: 100%;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
`;

export const KakaoMap = styled.div`
  width: 100%;
  height: 300px;
`;

export const BottomWrapper = styled.div`
  padding-top: 20px;
  text-align: center;

  display: flex;
  flex-direction: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

export const ToListBtn = styled.button`
  margin-bottom: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "16px" : "0"};
  padding: 0 16px;
  width: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "100%" : "179px"};
  height: 55px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
