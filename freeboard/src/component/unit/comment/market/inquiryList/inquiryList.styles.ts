import styled from "@emotion/styled";
import { StyleSet } from "../../../../../commons/style/styleSet";

export const CommentWrapper = styled.section`
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

export const CommentViewWrapper = styled.div`
  width: 100%;
  border: none;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentViewInner = styled.div`
  padding: 30px 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CommentViewProfileWrapper = styled.div`
  margin-right: 20px;

  width: 40px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const CommentViewContentWrapper = styled.div`
  width: 94%;
`;

export const ViewContentTop = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentContentName = styled.span`
  margin-right: 15px;
  font-weight: 600;
`;

export const MyComment = styled.span`
  padding: 1px 4px;
  font-size: 0.65rem;
  font-weight: 400;
  border-radius: 5px;
  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
`;

export const RateStarWrapper = styled.div`
  margin: 0;
  padding-bottom: 5px;
`;

export const CommentViewBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentUpdateBtn = styled.button`
  margin-left: 10px;
  padding: 0 5px;
  border: none;
  font-weight: 300;
  font-size: ${StyleSet.fontSize.b5};
  color: ${StyleSet.colors.gray};
  background: none;
  cursor: pointer;

  transition: 0.2s;
  &:hover {
    color: ${StyleSet.colors.black};
  }
`;

export const CommentReplyBtn = styled.button`
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

export const CommentViewContent = styled.div`
  margin: 10px 0 15px 0;
  width: 100%;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 300;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CommentViewContentDate = styled.div`
  font-size: ${StyleSet.fontSize.b5};
  color: #bdbdbd;
`;

export const CommentNameInfo = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ReplyWrapper = styled.div`
  padding: 0 30px 0 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${StyleSet.colors.lightGray01};
`;
