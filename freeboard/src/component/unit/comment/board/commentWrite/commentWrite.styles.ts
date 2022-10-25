import styled from "@emotion/styled";
import { StyleSet } from "../../../../../commons/style/styleSet";
import { ICommentWriteStyleProps } from "./commentWrite.types";

export const HrLine = styled.hr`
  margin: 40px 0;
  width: 100%;
  border: none;
`;

export const CommentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
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

export const CommentNonmemberWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentNameInfo = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  width: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "100%" : "null"};

  display: flex;
  flex-direction: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: flex-start;
  align-items: center;
`;

export const CommentNameInfoInner = styled.div`
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "column" : "row"};
`;

export const InputName = styled.input`
  margin: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "0 0 14px 0" : "0 24px 0 0"};
  padding: 14px 24px;
  width: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "100%" : "180px"};
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.errorColor ? `${StyleSet.colors.inputError}` : "default"};
  ::placeholder {
    color: ${(props: ICommentWriteStyleProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const InputPwd = styled.input`
  margin: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "0 0 14px 0" : "0 24px 0 0"};
  padding: 14px 24px;
  width: ${(props: ICommentWriteStyleProps) =>
    props.isMobile ? "100%" : "180px"};
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.errorColor ? `${StyleSet.colors.inputError}` : "default"};
  ::placeholder {
    color: ${(props: ICommentWriteStyleProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const RateStarWrapper = styled.div`
  padding: 7px 0;
  width: 100%;
  height: 52px;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.errorColor ? `${StyleSet.colors.inputError}` : "default"};
  z-index: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CommentContentWrapper = styled.div`
  padding: 0;

  width: 100%;
  // border: 1px solid #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextareaW1200 = styled.textarea`
  padding: 20px;
  width: 100%;
  height: auto;
  border: none;
  border: 1px solid #bdbdbd;
  resize: none;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.errorColor ? `${StyleSet.colors.inputError}` : "default"};
  ::placeholder {
    color: ${(props: ICommentWriteStyleProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const CommentContentBottom = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CharactersCounter = styled.div`
  padding: 14px 24px;
  height: 50px;
  color: #bdbdbd;
`;

export const CommentBtn = styled.button`
  height: 50px;
  padding: 14px;
  border: none;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.isEdit
      ? props.isCancel
        ? "none"
        : `${StyleSet.colors.point01}`
      : "#000000"};
  color: ${(props: ICommentWriteStyleProps) =>
    props.isEdit
      ? props.isCancel
        ? "#000000"
        : `${StyleSet.colors.white}`
      : "#ffffff"};
`;
