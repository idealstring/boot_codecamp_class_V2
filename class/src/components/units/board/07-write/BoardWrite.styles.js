import styled from "@emotion/styled";

export const RedInput = styled.input`
  background-color: red;
`;

export const BlueInput = styled.button`
  background-color: ${(props) => (props.color ? "yellow" : "default")};
  font-size: ${(props) => props.fz};
  margin: ${(props) => {
    return props.fz;
  }};
`;
