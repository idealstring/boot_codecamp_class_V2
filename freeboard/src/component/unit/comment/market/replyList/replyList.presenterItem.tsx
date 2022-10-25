import { useState } from "react";
import { StyleSet } from "../../../../../commons/style/styleSet";
import {
  dateFormatter,
  dateTimeFormatter,
} from "../../../../../commons/utils/utils";
import MarketReplyDeleteModal from "../../../../commons/modal/marketReplayDelete";
import ReplayWriteContainer from "../replyWrite/replyWrite.container";
import * as S from "./replyList.styles";
import { IReplayListPresenterItemProps } from "./replyList.tpyes";

export default function ReplayListPresenterItem(
  P: IReplayListPresenterItemProps
) {
  const { Answers, fetchUserLoggedIn } = P;
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEditToggle = () => {
    setIsEdit((isEdit) => !isEdit);
  };
  const onClickUpdateBtn = () => {
    onClickIsEditToggle();
  };

  return (
    <>
      {isEdit && (
        <S.CommentViewWrapper>
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z"
              fill={StyleSet.colors.gray}
            />
          </svg>
          <ReplayWriteContainer
            isEdit={isEdit}
            onClickIsEditToggle={onClickIsEditToggle}
            Answers={Answers}
          />
        </S.CommentViewWrapper>
      )}
      {!isEdit && (
        <S.CommentViewWrapper key={Answers._id}>
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z"
              fill={StyleSet.colors.gray}
            />
          </svg>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              {Answers?.user.picture !== null ? (
                <img
                  src={`https://storage.googleapis.com/${Answers?.user.picture}`}
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
                    {Answers.user.name}
                  </S.CommentContentName>
                  {Answers.user._id ===
                  fetchUserLoggedIn?.fetchUserLoggedIn._id ? (
                    <S.MyComment>내 답변</S.MyComment>
                  ) : null}
                </S.CommentNameInfo>
              </S.ViewContentTop>
              <S.CommentViewContent>{Answers.contents}</S.CommentViewContent>
              <S.CommentViewBtnWrapper>
                <S.CommentViewContentDate>
                  {Answers?.createdAt !== Answers?.updatedAt
                    ? `${dateTimeFormatter(Answers.updatedAt)}(수정됨)`
                    : `${dateFormatter(Answers.createdAt)}`}
                </S.CommentViewContentDate>
                <S.CommentUpdateBtn onClick={onClickUpdateBtn}>
                  수정
                </S.CommentUpdateBtn>
                <MarketReplyDeleteModal id={Answers?._id} />
              </S.CommentViewBtnWrapper>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
        </S.CommentViewWrapper>
      )}
    </>
  );
}
