import * as S from "./commentWrite.styles";
import { ICommentWritePresenterProps } from "./commentWrite.types.js";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { useContext } from "react";
import { WindowSizeContext } from "../../../../commons/responsive";

export default function CommentWritePresenter(P: ICommentWritePresenterProps) {
  const {
    inputData,
    errorOutput,
    onClickCreateBtn,
    onClickUpdateBtn,
    onClickCancelBtn,
    onChangeInput,
    onChangeRating,
    isEdit,
    comment,
  } = P;
  const { isMobile } = useContext(WindowSizeContext);

  return (
    <>
      {isEdit ? null : <S.HrLine />}
      <S.CommentWrapper>
        {isEdit ? null : (
          <S.CommentTitle>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z" />
              </g>
            </svg>
            댓글
          </S.CommentTitle>
        )}
        <S.CommentNonmemberWrapper>
          <S.CommentNameInfo isMobile={isMobile}>
            <S.CommentNameInfoInner isMobile={isMobile}>
              <S.InputName
                type="text"
                id="writer"
                placeholder="작성자"
                value={comment?.writer ? undefined : inputData.writer}
                defaultValue={comment?.writer}
                onChange={onChangeInput}
                disabled={isEdit ? true : false}
                errorColor={errorOutput.writer}
                isMobile={isMobile}
              />
              <S.InputPwd
                type="password"
                id="password"
                placeholder="비밀번호"
                value={inputData.password}
                onChange={onChangeInput}
                errorColor={errorOutput.password}
                isMobile={isMobile}
              />
            </S.CommentNameInfoInner>
            <S.RateStarWrapper errorColor={errorOutput.rating}>
              {isEdit ? (
                <Rate
                  onChange={onChangeRating}
                  defaultValue={comment?.rating}
                />
              ) : (
                <Rate onChange={onChangeRating} value={inputData.rating} />
              )}
            </S.RateStarWrapper>
          </S.CommentNameInfo>
          <S.CommentContentWrapper>
            <S.TextareaW1200
              id="contents"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={onChangeInput}
              value={comment?.contents ? undefined : inputData.contents}
              defaultValue={comment?.contents}
              errorColor={errorOutput.contents}
              maxLength={100}
            />
            <S.CommentContentBottom>
              <S.CharactersCounter>
                {inputData.contents.length}/100
              </S.CharactersCounter>
              {isEdit ? (
                <>
                  <div>
                    <S.CommentBtn
                      onClick={onClickCancelBtn}
                      isEdit={isEdit}
                      isCancel={true}
                    >
                      취소
                    </S.CommentBtn>
                    <S.CommentBtn
                      onClick={onClickUpdateBtn}
                      isEdit={isEdit}
                      isCancel={false}
                    >
                      수정하기
                    </S.CommentBtn>
                  </div>
                </>
              ) : (
                <S.CommentBtn onClick={onClickCreateBtn} isEdit={isEdit}>
                  등록하기{" "}
                </S.CommentBtn>
              )}
            </S.CommentContentBottom>
          </S.CommentContentWrapper>
        </S.CommentNonmemberWrapper>
      </S.CommentWrapper>
    </>
  );
}
