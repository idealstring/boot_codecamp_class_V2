import styled from "@emotion/styled";
import { StyleSet } from "../../../commons/style/styleSet";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 560px;
`;

export const RowTitle = styled.h1`
  margin: 25px 0;
  font-size: ${StyleSet.fontSize.h3};
  font-family: ${StyleSet.fontFamily.b};
`;

export const RowWrapper = styled.div`
  margin-bottom: 40px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: auto;
  gap: 20px;
`;

export const Item = styled.div`
  margin: 0 0 30px 0;
  width: 235px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.div`
  margin-bottom: 10px;
  width: 235px;
  height: 235px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemTitle = styled.div`
  padding: 0 10px;

  font-weight: 500;
`;

export const ItemInnerWrapper = styled.div`
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin: 5px 5px 0 0;
  }
`;

export const DiscountRate = styled.span`
  margin-right: 5px;
  color: ${StyleSet.colors.point02};
  font-family: ${StyleSet.fontFamily.b};
`;

export const Price = styled.span`
  margin-right: 5px;
  font-family: ${StyleSet.fontFamily.eb};
`;

export const Rating = styled.span`
  margin-right: 5px;
  padding: 0;
  font-size: ${StyleSet.fontSize.b5};
  color: ${StyleSet.colors.black};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 2px 2px 0;
    padding: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
`;

export const FetchMoreBtn = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
`;
