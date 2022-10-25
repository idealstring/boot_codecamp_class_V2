import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const CommentDeleteBtn = styled.button`
  margin-left: 10px;
  padding: 0 5px;
  border: none;
  font-size: ${StyleSet.fontSize.b5};
  font-weight: 300;
  color: ${StyleSet.colors.gray};
  background: none;
  cursor: pointer;

  transition: 0.2s;
  &:hover {
    color: ${StyleSet.colors.black};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InnerRow = styled.div`
  vertical-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputDesign = styled.input`
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;
