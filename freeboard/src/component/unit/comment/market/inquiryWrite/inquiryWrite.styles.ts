import styled from "@emotion/styled";
import { StyleSet } from "../../../../../commons/style/styleSet";
import { IInquiryWriteStyleProps } from "./inquiryWrite.types";

export const HrLine = styled.hr`
  margin: 40px 0;
  width: 100%;
  border: none;
`;

export const CommentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentTitle = styled.div`
  margin-bottom: 15px;
  width: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CommentTitleImg = styled.img`
  margin-right: 10px;
`;

export const CommentInnerWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`;

export const CommentNameInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  width: ${(props: IInquiryWriteStyleProps) =>
    props.isMobile ? "100%" : "null"};

  display: flex;
  flex-direction: ${(props: IInquiryWriteStyleProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: flex-start;
  align-items: center;
`;

export const CommentContentForm = styled.form`
  padding: 0;
  width: 100%;

  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: flex-start;
`;

export const TextareaW1200 = styled.textarea`
  padding: 20px 100px 20px 20px;
  padding: ${(props: IInquiryWriteStyleProps) =>
    props.isEdit ? "20px 150px 20px 20px" : "20px 110px 20px 20px"};
  width: 100%;
  height: 68px;
  border: none;
  border: ${(props: IInquiryWriteStyleProps) =>
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

export const CharactersCounter = styled.div`
  padding: 14px 24px;
  height: 50px;
  color: #bdbdbd;
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
