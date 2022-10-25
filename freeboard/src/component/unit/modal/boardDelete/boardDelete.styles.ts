import styled from "@emotion/styled";

type IScreenProps = {
  isMobile?: Boolean;
};

export const ContentBtn = styled.button`
  width: ${(props: IScreenProps) => (props.isMobile ? "100%" : "122px")};
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: none;
  cursor: pointer;
`;
