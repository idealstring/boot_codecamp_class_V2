import styled from "@emotion/styled";

export const BlueButton = styled.button`
  padding: 20px;
  background-color: ${(props) => (props.color ? "yellow" : "default")};
  font-size: ${(props) => props.fz};
  margin: ${(props) => {
    return props.fz;
  }};
`;
