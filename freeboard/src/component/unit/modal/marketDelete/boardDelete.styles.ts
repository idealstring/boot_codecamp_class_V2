import styled from "@emotion/styled";

type IScreenProps = {
  isMobile?: Boolean;
};

export const ContentBtn = styled.button`
  margin-bottom: ${(props: IScreenProps) => (props.isMobile ? "16px" : "0")};
  padding: 0 16px;
  width: ${(props: IScreenProps) => (props.isMobile ? "100%" : "179px")};
  height: 55px;

  border: none;
  border-radius: 4px;
  background-color: default
  color: #fff;
  cursor: pointer;
`;
