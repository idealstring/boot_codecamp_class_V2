import styled from "@emotion/styled";
import { StyleSet } from "../../../../../commons/style/styleSet";
import { IReplyWriteStyleProps } from "./replyWrite.types";

export const CommentWrapper = styled.div`
  padding: 30px 0;
  width: 100%;
  max-width: 1060px;
  min-width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentInnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`;

export const CommentContentForm = styled.form`
  padding: 0;
  width: 100%;
`;

export const TextareaW1200 = styled.input`
  padding: 20px 100px 20px 20px;
  padding: ${(props: IReplyWriteStyleProps) =>
    props.isEdit ? "20px 150px 20px 20px" : "20px 110px 20px 20px"};
  width: 100%;
  height: 68px;
  border: none;
  border: ${(props: IReplyWriteStyleProps) =>
    props.errorColor
      ? `1px solid ${StyleSet.colors.inputError}`
      : "1px solid #bdbdbd;"};
  resize: none;
`;

export const FormBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  position: absolute;
  top: 8px;
  right: 15px;
`;

export const CommentBtn = styled.button`
  height: 50px;
  padding: 14px 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${StyleSet.colors.gray};
  transition: 0.3s;
  &:hover {
    color: ${StyleSet.colors.black};
  }
`;
