import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const ImgUpload = styled.div`
  margin-right: 24px;
  width: 78px;
  height: 78px;
  border: 1px solid ${StyleSet.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${StyleSet.fontSize.h2};
  cursor: pointer;
  span {
    font-size: ${StyleSet.fontSize.b5};
    font-weight: 500;
  }
  img {
    width: 78px;
    height: 78px;
  }
`;

export const InputHidden = styled.input`
  display: none;
`;
