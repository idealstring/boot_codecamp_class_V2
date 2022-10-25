import { useContext } from "react";
import { useRouter } from "next/router";
import * as S from "./marketDetail.styles";
import { WindowSizeContext } from "../../../commons/responsive";
import { PriceFormatter } from "../../../../commons/utils/utils";
import { IMarketDetailPresenterProps } from "./marketDetail.types";
import MarketDeleteModal from "../../../commons/modal/marketDelete";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MarketProductPurchase from "../../../commons/modal/marketPurchaseBtn";
import dynamic from "next/dynamic";

const ViewerPage = dynamic(() => import("./viewer"), {
  ssr: false,
});

export default function MarketDetailPresenter(P: IMarketDetailPresenterProps) {
  const { data, fetchUserData, onClickBasket, IPicked } = P;
  const { isMobile } = useContext(WindowSizeContext);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <>
      <S.Container>
        <S.TopWrapper isMobile={isMobile}>
          <S.ImageWrapper isMobile={isMobile}>
            {data?.fetchUseditem.images?.[0] ? (
              <img
                src={`https://storage.googleapis.com/${data?.fetchUseditem?.images?.[0]}`}
              />
            ) : (
              <img src={`/temp_bg.png`} />
            )}
          </S.ImageWrapper>
          <S.InfoWrapper isMobile={isMobile}>
            <div>
              <S.ProductSeller>
                {data?.fetchUseditem.seller?.name}
              </S.ProductSeller>
              <S.ProductTitle>{data?.fetchUseditem.name}</S.ProductTitle>
              <S.ProductPrice>
                {PriceFormatter(data?.fetchUseditem.price)}
              </S.ProductPrice>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>방법</S.DealInfoTitle>
                <S.DealInfo>직거래</S.DealInfo>
              </S.DealInfoWrapper>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>장소</S.DealInfoTitle>
                <div>
                  <S.DealInfo>
                    {data?.fetchUseditem.useditemAddress?.address}
                  </S.DealInfo>
                  <S.DealInfo>
                    {data?.fetchUseditem.useditemAddress?.addressDetail}
                  </S.DealInfo>
                </div>
              </S.DealInfoWrapper>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>판매</S.DealInfoTitle>
                <S.DealInfo>
                  {data?.fetchUseditem.soldAt ? "판매완료" : "판매중"}
                </S.DealInfo>
              </S.DealInfoWrapper>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>관심</S.DealInfoTitle>
                <S.DealInfo>{data?.fetchUseditem.pickedCount}</S.DealInfo>
              </S.DealInfoWrapper>
              {data?.fetchUseditem.tags ? (
                <S.DealInfoWrapper>
                  <S.DealInfoTitle>태그</S.DealInfoTitle>
                  <S.TagsWrapper>
                    {data?.fetchUseditem.tags
                      ? data?.fetchUseditem.tags[0]
                          .split(" ")
                          .map((el, i) => (
                            <S.DealInfo key={i}>
                              {el.includes("#") ? el : `#${el}`}
                            </S.DealInfo>
                          ))
                      : null}
                  </S.TagsWrapper>
                </S.DealInfoWrapper>
              ) : null}
            </div>
            <S.InfoBtnRrapper>
              <S.BasketBtn onClick={onClickBasket} IPicked={IPicked}>
                {IPicked?.length ? "빼기" : "담기"}{" "}
              </S.BasketBtn>
              <MarketProductPurchase />
            </S.InfoBtnRrapper>
          </S.InfoWrapper>
        </S.TopWrapper>
      </S.Container>
      <S.DeailNavWrapper>
        <S.DetailNav>상세보기 댓글보기</S.DetailNav>
      </S.DeailNavWrapper>
      <S.Container>
        <S.BodyWrapper>
          <S.MiddleTitle>판매자 한마디</S.MiddleTitle>
          <S.MiddleContents>{data?.fetchUseditem.remarks}</S.MiddleContents>
        </S.BodyWrapper>
        <S.BodyWrapper>
          <S.MiddleTitle>상품정보</S.MiddleTitle>
          {/* <div>
            {data?.fetchUseditem?.images?.map((el: string, i: number) => (
              <div key={i}>
                <div>
                  <img src={`https://storage.googleapis.com/${el}`} />
                </div>
              </div>
            ))}
          </div> */}
          <S.MiddleContents>
            {data?.fetchUseditem.contents ? (
              <ViewerPage initialValue={data?.fetchUseditem.contents} />
            ) : (
              <div>loadding...</div>
            )}
          </S.MiddleContents>
        </S.BodyWrapper>
        <S.BodyWrapper>
          <S.MiddleTitle>거래위치</S.MiddleTitle>
          <S.KakaoMap id="map" />
        </S.BodyWrapper>
        <S.BottomWrapper isMobile={isMobile}>
          <S.ToListBtn
            isMobile={isMobile}
            onClick={onClickMoveToPage("/market")}
          >
            목록
          </S.ToListBtn>
          {fetchUserData?.fetchUserLoggedIn._id ===
            data?.fetchUseditem.seller?._id && <MarketDeleteModal />}
          {fetchUserData?.fetchUserLoggedIn._id ===
            data?.fetchUseditem.seller?._id && (
            <S.ToListBtn
              isMobile={isMobile}
              onClick={onClickMoveToPage(`/market/${router.query.detail}/edit`)}
            >
              수정
            </S.ToListBtn>
          )}

          {fetchUserData?.fetchUserLoggedIn._id !==
            data?.fetchUseditem.seller?._id && (
            <S.BasketBtn onClick={onClickBasket} IPicked={IPicked}>
              {IPicked?.length ? "빼기" : "담기"}{" "}
            </S.BasketBtn>
          )}
          {fetchUserData?.fetchUserLoggedIn._id !==
            data?.fetchUseditem.seller?._id && <MarketProductPurchase />}
        </S.BottomWrapper>
      </S.Container>
    </>
  );
}
