import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.footer`
  margin-top: 50px;
  width: 100%;
`;

export const Wrapper = styled.footer`
  margin: 0 auto;
  padding: 50px 50px;
  max-width: 1100px;
  min-width: 400px;
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const WrapperLeft = styled.div`
  margin-right: 50px;
`;
export const WrapperRight = styled.div`
  font-size: ${StyleSet.fontSize.b3}
  color: #555;
`;

export const OutLinkWrapper = styled.div`
  width: 55px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OutLinkBtn = styled.a`
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;

  cursor: pointer;
`;

export const Info = styled.div`
  margin-top: 5px;
  div {
    font-size: ${StyleSet.fontSize.b4};
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
  font-size: ${StyleSet.fontSize.b5};
`;
