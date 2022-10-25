import { useState } from "react";
import * as S from "./inquiryList.styles";
import {
  dateFormatter,
  dateTimeFormatter,
} from "../../../../../commons/utils/utils";
import { IInquiryListPresenterItemProps } from "./inquiryList.types";
import MarketCommentWriteContainer from "../inquiryWrite/inquiryWrite.container";
import MarketInquiryDeleteModal from "../../../../commons/modal/marketReplayDelete";
import ReplayListContainer from "../replyList/replyList.container";
import MarektReplyWrite from "../../../../commons/comment/market/replyWrite";

export default function MarketCommentListPresenterItem(
  P: IInquiryListPresenterItemProps
) {
  const { questions, fetchUserLoggedIn } = P;
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setReply] = useState(false);
  const onClickIsEditToggle = () => {
    setIsEdit((isEdit) => !isEdit);
  };
  const onClickUpdateBtn = () => {
    onClickIsEditToggle();
  };
  const onClickReplyToggle = () => {
    setReply((isReply) => !isReply);
  };
  const onClickReplyBtn = () => {
    onClickReplyToggle();
  };
  console.log(questions);

  return (
    <>
      {isEdit && (
        <MarketCommentWriteContainer
          isEdit={isEdit}
          onClickIsEditToggle={onClickIsEditToggle}
          questions={questions}
        />
      )}
      {!isEdit && (
        <S.CommentViewWrapper key={questions._id}>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              {questions?.user.picture !== null ? (
                <img
                  src={`https://storage.googleapis.com/${questions?.user.picture}`}
                />
              ) : (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
                    fill="#BDBDBD"
                  />
                </svg>
              )}
            </S.CommentViewProfileWrapper>
            <S.CommentViewContentWrapper>
              <S.ViewContentTop>
                <S.CommentNameInfo>
                  <S.CommentContentName>
                    {questions.user.name}
                  </S.CommentContentName>
                  {questions.user._id ===
                  fetchUserLoggedIn?.fetchUserLoggedIn._id ? (
                    <S.MyComment>내 문의</S.MyComment>
                  ) : null}
                </S.CommentNameInfo>
              </S.ViewContentTop>
              <S.CommentViewContent>{questions.contents}</S.CommentViewContent>
              <S.CommentViewBtnWrapper>
                <S.CommentViewContentDate>
                  {questions?.createdAt !== questions?.updatedAt
                    ? `${dateTimeFormatter(questions.updatedAt)}(수정됨)`
                    : `${dateFormatter(questions.createdAt)}`}
                </S.CommentViewContentDate>
                <S.CommentReplyBtn onClick={onClickReplyBtn}>
                  답글달기
                </S.CommentReplyBtn>
                <S.CommentUpdateBtn onClick={onClickUpdateBtn}>
                  수정
                </S.CommentUpdateBtn>
                <MarketInquiryDeleteModal id={questions?._id} />
              </S.CommentViewBtnWrapper>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
          {isReply && (
            <S.ReplyWrapper>
              <ReplayListContainer questionsId={questions._id} />
              <MarektReplyWrite questionsId={questions._id} />
            </S.ReplyWrapper>
          )}
        </S.CommentViewWrapper>
      )}
    </>
  );
}
