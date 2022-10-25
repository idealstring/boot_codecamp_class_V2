import { useContext } from "react";
import ZipcodeModal from "../../../commons/modal/zipcodeModal";
import { WindowSizeContext } from "../../../commons/responsive";
import Uploads01 from "../../../commons/uploads/01/uploads01.container";
import * as S from "./boardsWrite.styles";
import { IBoardWritePresenterProps } from "./boardsWrite.types";

export default function BoardWritePresenter(P: IBoardWritePresenterProps) {
  const {
    errorOutput,
    onChangeInput,
    onChangeFileUrls,
    CreateBtn,
    UpdateBtn,
    CreateCancelBtn,
    UpdateCancelBtn,
    isCompleteColor,
    isEdit,
    existingData,
    setInputData,
    inputData,
  } = P;
  const { isNormalScreen } = useContext(WindowSizeContext);

  return (
    <S.Container>
      <S.Title>게시물 {isEdit ? "수정" : "등록"}</S.Title>
      <S.ContentContainer>
        <S.WriterPwdWrapper isNormalScreen={isNormalScreen}>
          <S.WriterPwd>
            <S.Subtitle>
              작성자 <S.CompulsoryStar>*</S.CompulsoryStar>
            </S.Subtitle>
            <S.InputName
              type="text"
              id="writer"
              placeholder="이름을 적어주세요."
              onChange={onChangeInput}
              defaultValue={existingData?.fetchBoard.writer || ""}
              disabled={isEdit}
              errorColor={errorOutput.writer}
              isNormalScreen={isNormalScreen}
            />
          </S.WriterPwd>
          <S.WriterPwd>
            <S.Subtitle>
              비밀번호 <S.CompulsoryStar>*</S.CompulsoryStar>
            </S.Subtitle>
            <S.InputPwd
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeInput}
              errorColor={errorOutput.password}
              isNormalScreen={isNormalScreen}
            />
          </S.WriterPwd>
        </S.WriterPwdWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>
            제목 <S.CompulsoryStar>*</S.CompulsoryStar>
          </S.Subtitle>
          <S.InputTitle
            type="text"
            id="title"
            placeholder="제목을 작성해주세요."
            onChange={onChangeInput}
            defaultValue={existingData?.fetchBoard.title}
            errorColor={errorOutput.title}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>
            내용 <S.CompulsoryStar>*</S.CompulsoryStar>
          </S.Subtitle>
          <S.TextareaContent
            id="contents"
            placeholder="내용을 작성해주세요."
            onChange={onChangeInput}
            defaultValue={existingData?.fetchBoard.contents}
            errorColor={errorOutput.contents}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>주소</S.Subtitle>
          <div className="우편번호">
            <S.InputW85pxH52px
              type="text"
              id="zipcode"
              placeholder="12345"
              onChange={onChangeInput}
              defaultValue={
                inputData.zipcode ||
                existingData?.fetchBoard?.boardAddress?.zipcode ||
                ""
              }
            />
            <ZipcodeModal setInputData={setInputData} />
          </div>
          <S.InputW100per
            type="text"
            id="address"
            onChange={onChangeInput}
            defaultValue={
              inputData.address ||
              existingData?.fetchBoard?.boardAddress?.address ||
              ""
            }
          />
          <S.InputW100per
            type="text"
            id="addressDetail"
            onChange={onChangeInput}
            defaultValue={
              inputData.addressDetail ||
              existingData?.fetchBoard?.boardAddress?.addressDetail ||
              ""
            }
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>유튜브</S.Subtitle>
          <S.InputW100per
            type="text"
            id="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={onChangeInput}
            defaultValue={existingData?.fetchBoard.youtubeUrl || ""}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>사진 첨부</S.Subtitle>
          <S.ImgUploadWrapper>
            {inputData.fileUrls.map((el, index) => (
              <Uploads01
                key={index}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.ImgUploadWrapper>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>메인 설정</S.Subtitle>
          <S.InputRadioWrapper>
            <S.InputRadio type="radio" name="select_main" id="youtube" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.InputRadio type="radio" name="select_main" id="picture" />
            <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
          </S.InputRadioWrapper>
        </S.SubtitleWrapper>
        <S.SubmitBtnWrapper>
          <S.SubmitBtn
            onClick={isEdit ? UpdateBtn : CreateBtn}
            isCompleteColor={isCompleteColor}
          >
            {isEdit ? "수정완료" : "등록하기"}
          </S.SubmitBtn>
          <S.CancelBtn onClick={isEdit ? UpdateCancelBtn : CreateCancelBtn}>
            취소
          </S.CancelBtn>
        </S.SubmitBtnWrapper>
      </S.ContentContainer>
    </S.Container>
  );
}
