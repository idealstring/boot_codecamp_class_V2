import * as S from "./inquiryWrite.styles";
import { IInquiryWritePresenterProps } from "./inquiryWrite.types.js";

export default function MarketInquiryWritePresenter(
  P: IInquiryWritePresenterProps
) {
  const {
    register,
    handleSubmit,
    formState,
    onClickCreateBtn,
    onClickUpdateBtn,
    onClickCancelBtn,
    isEdit,
    questions,
    getValues,
  } = P;

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
        <S.CommentInnerWrapper>
          <S.CommentContentForm>
            <S.TextareaW1200
              id="contents"
              isEdit={isEdit}
              placeholder="문의 내용을 입력하세요."
              defaultValue={questions?.contents}
              errorColor={formState.errors.contents?.message}
              {...register("contents")}
            />
            <S.FormBottom>
              {isEdit ? (
                <>
                  <div>
                    <S.CommentBtn type="button" onClick={onClickCancelBtn}>
                      취소
                    </S.CommentBtn>
                    <S.CommentBtn
                      type="submit"
                      onClick={handleSubmit(onClickUpdateBtn)}
                    >
                      수정하기
                    </S.CommentBtn>
                  </div>
                </>
              ) : (
                <S.CommentBtn
                  type="submit"
                  onClick={handleSubmit(onClickCreateBtn)}
                >
                  등록하기
                </S.CommentBtn>
              )}
            </S.FormBottom>
          </S.CommentContentForm>
        </S.CommentInnerWrapper>
      </S.CommentWrapper>
    </>
  );
}
