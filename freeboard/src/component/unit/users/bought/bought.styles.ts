import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export type IBasketStylesProps = {
  isNormalScreen?: boolean;
};

export const ContentsWrapper = styled.section`
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: ${StyleSet.fontSize.h3};
  font-family: ${StyleSet.fontFamily.b};
`;

export const BoardWrapper = styled.div`
  min-width: 500px;
  margin: 16px 0;
  text-align: center;
`;

export const BoardTopWrapper = styled.div`
  width: 100%;
  height: 40px;
  font-weight: 500;

  border-top: 1px solid ${StyleSet.colors.lightGray02};
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoardThDate = styled.span`
  padding: 0 5px;
  width: 120px;
  min-width: 90px;
  line-height: 40px;
  text-align: center;
`;
export const BoardThTitle = styled.span`
  padding: 0 5px;
  width: 50%;
  line-height: 40px;
  text-align: center;
`;
export const BoardThHistory = styled.span`
  padding: 0 5px;
  width: 110px;
  line-height: 40px;
  text-align: center;
`;

export const BoardThSeller = styled.span`
  padding: 0 5px;
  width: 120px;
  min-width: 90px;
  line-height: 40px;
  text-align: center;
`;

export const BoardBodyWrapper = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid ${StyleSet.colors.lightGray01};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentDate = styled.span`
  padding: 0 5px;
  width: 120px;
  min-width: 100px;
  line-height: 50px;
  font-weight: 300;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ContentTitle = styled.span`
  padding: 0 5px;
  width: 50%;
  line-height: 50px;
  font-weight: 300;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContentHistory = styled.span`
  padding: 0 5px;
  width: 110px;
  line-height: 50px;
  text-align: center;
  color: ${StyleSet.colors.point03};
`;

export const ContentSeller = styled.span`
  padding: 0 5px;
  width: 120px;
  min-width: 100px;
  line-height: 50px;
  font-weight: 300;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
