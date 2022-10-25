import { IReplayWritePresenterProps } from "./replyWrite.types";
import * as S from "./replyWrite.styles";

export default function ReplayWritePresenter(P: IReplayWritePresenterProps) {
  const {
    onClickCreateAnswer,
    register,
    handleSubmit,
    formState,
    Answers,
    isEdit,
    onClickCancelBtn,
    onClickUpdateAnswer,
  } = P;
  return (
    <>
      <S.CommentWrapper>
        <S.CommentInnerWrapper>
          <S.CommentContentForm
            onSubmit={
              isEdit
                ? handleSubmit(onClickUpdateAnswer)
                : handleSubmit(onClickCreateAnswer)
            }
          >
            <S.TextareaW1200
              id="contents"
              isEdit={isEdit}
              placeholder="문의 내용을 입력하세요."
              defaultValue={Answers?.contents}
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
                    <S.CommentBtn type="submit">수정하기</S.CommentBtn>
                  </div>
                </>
              ) : (
                <S.CommentBtn type="submit">등록하기</S.CommentBtn>
              )}
            </S.FormBottom>
          </S.CommentContentForm>
        </S.CommentInnerWrapper>
      </S.CommentWrapper>
    </>
  );
}
