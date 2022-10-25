import dynamic from "next/dynamic";
import { useContext } from "react";
import * as S from "./marketWrite.styles";
import Input02 from "../../../commons/inputs/02/input02";
import Input03 from "../../../commons/inputs/03/input03";
import Input04 from "../../../commons/inputs/04/input04";
import Input05 from "../../../commons/inputs/05/input05";
import { IMarketPresenterProps } from "./marketWrite.types";
import { WindowSizeContext } from "../../../commons/responsive";
// import Uploads02 from "../../../commons/uploads/02/uploads02.container";
import ZipcodeModalMarket from "../../../commons/modal/zipcodeModal_market";
import Upload03 from "../../../commons/uploads/03/upload03";
const EditorPage = dynamic(() => import("./editor"), {
  ssr: false,
});

export default function MarketPresenter(P: IMarketPresenterProps) {
  const {
    onClickSubmit,
    onClickUpdate,
    onClickCancel,
    setValue,
    register,
    handleSubmit,
    formState,
    // fileUrls,
    // onChangeFileUrls,
    onChangeContents,
    isEdit,
    existingData,
    contentsRef,
    previewUrls,
    onChangeUrlsFiles,
    fetchUrls,
  } = P;
  const { isNormalScreen } = useContext(WindowSizeContext);

  return (
    <>
      <S.Container>
        <form
          onSubmit={
            isEdit ? handleSubmit(onClickUpdate) : handleSubmit(onClickSubmit)
          }
        >
          <S.Wrapper01>
            <S.SectionTitle>
              {isEdit ? "상품 수정" : "상품 등록"}
            </S.SectionTitle>
          </S.Wrapper01>
          <S.Wrapper01>
            <Input02
              type="text"
              id="name"
              placeholder="상품명"
              register={register("name")}
              error={formState.errors.name?.message}
            />
          </S.Wrapper01>
          <S.Wrapper01>
            <Input03
              type="text"
              placeholder="한 줄 요약"
              register={register("remarks")}
              error={formState.errors.remarks?.message}
            />
          </S.Wrapper01>
          <S.Wrapper01>
            {existingData?.fetchUseditem.contents ? (
              <EditorPage
                contentsRef={contentsRef}
                onChangeContents={onChangeContents}
                initialValue={existingData?.fetchUseditem.contents}
              />
            ) : isEdit ? (
              <div>loadding...</div>
            ) : (
              <EditorPage
                contentsRef={contentsRef}
                onChangeContents={onChangeContents}
                initialValue={existingData?.fetchUseditem.contents}
              />
            )}
          </S.Wrapper01>
          <S.Wrapper02>
            <S.Label01>판매가격(원)</S.Label01>
            <Input03
              type="text"
              placeholder="100,000"
              register={register("price")}
              error={formState.errors.price?.message}
              existingData={existingData}
            />
          </S.Wrapper02>
          <S.Wrapper02>
            <S.Label01>태그입력</S.Label01>
            <Input03
              type="text"
              placeholder="#태그 #태그 #태그"
              register={register("tags")}
              existingData={existingData}
            />
          </S.Wrapper02>
          <S.Wrapper06 isNormalScreen={isNormalScreen}>
            <S.Wrapper01>
              <S.Label02>거래위치</S.Label02>
              <S.KakaoMap id="map"></S.KakaoMap>
            </S.Wrapper01>
            <S.Wrapper01>
              <div>
                <S.Label02>주소</S.Label02>
                <S.Wrapper04>
                  <S.Wrapper08>
                    <Input05
                      type="text"
                      placeholder="우편번호"
                      register={register("useditemAddress.zipcode")}
                      error={formState.errors.address?.message}
                    />
                    <ZipcodeModalMarket setValue={setValue} />
                  </S.Wrapper08>
                  <Input05
                    type="text"
                    placeholder="주소 입력"
                    register={register("useditemAddress.address")}
                    error={formState.errors.address?.message}
                  />
                  <Input05
                    type="text"
                    placeholder="상세주소 입력"
                    register={register("useditemAddress.addressDetail")}
                    error={formState.errors.addressDetail?.message}
                  />
                </S.Wrapper04>
              </div>
              <S.Label02>GPS</S.Label02>
              <S.Wrapper03>
                <Input04
                  type="text"
                  placeholder="위도"
                  register={register("useditemAddress.lat")}
                />
                <Input04
                  type="text"
                  placeholder="경도"
                  register={register("useditemAddress.lng")}
                />
              </S.Wrapper03>
            </S.Wrapper01>
          </S.Wrapper06>
          <S.Wrapper01>
            <S.Label02>사진</S.Label02>
            <S.Wrapper07>
              {/* {fileUrls.map((el, index) => (
                <Uploads02
                  key={index}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                />
              ))} */}
              {previewUrls.map((el: string, index: number) => (
                <Upload03
                  key={index}
                  preview={el}
                  fetchUrls={fetchUrls}
                  index={index}
                  onChangeUrlsFiles={onChangeUrlsFiles}
                />
              ))}
            </S.Wrapper07>
          </S.Wrapper01>
          <S.Wrapper05>
            {isEdit ? (
              <S.CreateBtn>수정</S.CreateBtn>
            ) : (
              <S.CreateBtn>등록</S.CreateBtn>
            )}
            <S.CancelBtn type="button" onClick={onClickCancel}>
              취소
            </S.CancelBtn>
          </S.Wrapper05>
        </form>
      </S.Container>
    </>
  );
}
