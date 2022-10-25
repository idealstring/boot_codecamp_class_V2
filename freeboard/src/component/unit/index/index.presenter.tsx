import Link from "next/link";
import { useContext } from "react";
import { PriceFormatter } from "../../../commons/utils/utils";
import IndexMainCarouselSwipe from "../../commons/carousel/indexMain02";
import { WindowSizeContext } from "../../commons/responsive";
import * as S from "./index.styles";
import { IIndexPresenterProps } from "./index.types";

export default function IndexPresenter(P: IIndexPresenterProps) {
  const { fetchUseditemsToday, fetchUseditemsBest, onClickMore } = P;
  const { isNormalScreen, isTablet, isMobile } = useContext(WindowSizeContext);

  return (
    <>
      {/* <IndexMainCarousel /> */}
      <IndexMainCarouselSwipe />
      <S.Wrapper>
        <S.RowTitle>Today's Deal</S.RowTitle>
        <S.RowWrapper>
          {fetchUseditemsToday?.fetchUseditems.map((el, i) =>
            i > 3 ? null : (
              <Link href={`/market/${el._id}`} key={i}>
                <a>
                  <S.Item>
                    <S.Image>
                      {el.images?.[0] ? (
                        <img
                          src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        />
                      ) : (
                        <img src={`/temp_bg.png`} />
                      )}
                    </S.Image>
                    <S.ItemTitle>{el.name.slice(7)}</S.ItemTitle>
                    <S.ItemInnerWrapper>
                      <S.DiscountRate>
                        {Math.ceil(Math.random() * 100)}%
                      </S.DiscountRate>
                      <S.Price>{PriceFormatter(el.price)}</S.Price>
                    </S.ItemInnerWrapper>
                    <S.ItemInnerWrapper>
                      <S.Rating className="별점">
                        <svg
                          viewBox="0 0 1024 1024"
                          width={12}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#06c"
                            d="M979.056392 403.793556c-4.146437-12.753465-15.173584-22.048155-28.446889-23.977088l-281.238312-40.859593L543.598672 84.157725c-5.936199-12.022825-18.186198-19.634176-31.596625-19.634176s-25.660426 7.612375-31.598672 19.634176L354.627786 338.956875 73.389474 379.816468c-13.274328 1.928932-24.297382 11.222599-28.445866 23.977088-4.14439 12.757558-0.688685 26.754341 8.91709 36.117592l203.505927 198.330044-48.042179 280.050254c-2.266623 13.218046 3.166109 26.575262 14.015202 34.45472 10.853186 7.881504 25.237801 8.922207 37.109176 2.683109l251.5522-132.222417 251.547083 132.222417c5.155417 2.711761 10.785647 4.046153 16.393365 4.046153 7.306406 0 14.576997-2.266623 20.716834-6.729262 10.849092-7.879458 16.283872-21.236674 14.015202-34.45472l-48.038086-280.050254 203.505927-198.330044C979.747123 430.550966 983.198735 416.551114 979.056392 403.793556z"
                          />
                        </svg>
                        4.5
                      </S.Rating>
                      <S.Rating>관심 {el.pickedCount}</S.Rating>
                    </S.ItemInnerWrapper>
                    <S.ItemInnerWrapper>
                      <svg
                        className="icon"
                        aria-label="무료배송"
                        width="47"
                        height="20"
                        viewBox="0 0 47 20"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <rect
                            width="47"
                            height="20"
                            fill="#000"
                            fill-opacity=".07"
                            fill-rule="nonzero"
                            rx="4"
                          ></rect>
                          <path
                            fill="#757575"
                            d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
                          ></path>
                        </g>
                      </svg>
                      <svg
                        className="icon"
                        aria-label="특가"
                        width="30"
                        height="20"
                        viewBox="0 0 30 20"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <rect width="30" height="20" fill="#F77" rx="4"></rect>
                        <path
                          fill="#fff"
                          d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"
                        ></path>
                      </svg>
                    </S.ItemInnerWrapper>
                  </S.Item>
                </a>
              </Link>
            )
          )}
        </S.RowWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.RowTitle>Best Seller</S.RowTitle>
        <S.RowWrapper>
          {fetchUseditemsBest?.fetchUseditems.map((el, i) =>
            i >
            Math.floor(
              fetchUseditemsBest.fetchUseditems.length -
                (fetchUseditemsBest.fetchUseditems.length % 4) -
                1
            ) ? null : (
              <Link href={`/market/${el._id}`} key={i}>
                <a>
                  <S.Item>
                    <S.Image>
                      {el.images?.[0] ? (
                        <img
                          src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        />
                      ) : (
                        <img src={`/temp_bg.png`} />
                      )}
                    </S.Image>
                    <S.ItemTitle>{el.name.slice(8)}</S.ItemTitle>
                    <S.ItemInnerWrapper>
                      <S.DiscountRate>
                        {Math.ceil(Math.random() * 100)}%
                      </S.DiscountRate>
                      <S.Price>{PriceFormatter(el.price)}</S.Price>
                    </S.ItemInnerWrapper>
                    <S.ItemInnerWrapper>
                      <S.Rating>
                        <svg
                          viewBox="0 0 1024 1024"
                          width={12}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#06c"
                            d="M979.056392 403.793556c-4.146437-12.753465-15.173584-22.048155-28.446889-23.977088l-281.238312-40.859593L543.598672 84.157725c-5.936199-12.022825-18.186198-19.634176-31.596625-19.634176s-25.660426 7.612375-31.598672 19.634176L354.627786 338.956875 73.389474 379.816468c-13.274328 1.928932-24.297382 11.222599-28.445866 23.977088-4.14439 12.757558-0.688685 26.754341 8.91709 36.117592l203.505927 198.330044-48.042179 280.050254c-2.266623 13.218046 3.166109 26.575262 14.015202 34.45472 10.853186 7.881504 25.237801 8.922207 37.109176 2.683109l251.5522-132.222417 251.547083 132.222417c5.155417 2.711761 10.785647 4.046153 16.393365 4.046153 7.306406 0 14.576997-2.266623 20.716834-6.729262 10.849092-7.879458 16.283872-21.236674 14.015202-34.45472l-48.038086-280.050254 203.505927-198.330044C979.747123 430.550966 983.198735 416.551114 979.056392 403.793556z"
                          />
                        </svg>
                        4.5
                      </S.Rating>
                      <S.Rating>관심 {el.pickedCount}</S.Rating>
                    </S.ItemInnerWrapper>
                    <S.ItemInnerWrapper>
                      <svg
                        className="icon"
                        aria-label="무료배송"
                        width="47"
                        height="20"
                        viewBox="0 0 47 20"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <rect
                            width="47"
                            height="20"
                            fill="#000"
                            fill-opacity=".07"
                            fill-rule="nonzero"
                            rx="4"
                          ></rect>
                          <path
                            fill="#757575"
                            d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
                          ></path>
                        </g>
                      </svg>
                    </S.ItemInnerWrapper>
                  </S.Item>
                </a>
              </Link>
            )
          )}
        </S.RowWrapper>
        <S.BtnWrapper>
          <S.FetchMoreBtn onClick={onClickMore}>더보기</S.FetchMoreBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
