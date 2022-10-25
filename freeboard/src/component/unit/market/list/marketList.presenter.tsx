import Link from "next/link";
import * as S from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IMarketListPresenterProps } from "./marketList.types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IUseditem } from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";

export default function MarketListPresenter(P: IMarketListPresenterProps) {
  const { data, onLoadMore, recentItems } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
      <S.Container>
        <S.Wrapper01>
          {data?.fetchUseditems.map((el: IUseditem, i: number) => (
            <Link href={`/market/${el._id}`} key={i}>
              <a>
                <S.Item>
                  <S.ItemLeft>
                    {el.images?.[0] ? (
                      <S.Image
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      />
                    ) : (
                      <S.Image src={`/temp_bg.png`} />
                    )}
                    <S.ItemLeftMiddle>
                      <div>
                        <S.Name>{el.name}</S.Name>
                        <S.Price>{PriceFormatter(el.price)}</S.Price>
                        <S.Subtext>{el.remarks}</S.Subtext>
                      </div>
                      <S.ItemBottomWrapper>
                        <S.BasketNumber>
                          <svg
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            width={20}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M430.8 877.1h-0.33c-47.77-0.18-86.61-39.18-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.01-0.05 1.48-0.05 47.75 0.52 86.32 39.8 85.97 87.55-0.34 47.64-39.29 86.29-86.9 86.29z m0.37-140.6c-29.69 0-53.93 24.06-54.1 53.78-0.02 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.03-54.1-0.34 0.02-0.68 0.05-1.02 0.03h-0.31zM741.08 877.1h-0.33c-47.74-0.18-86.59-39.16-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.04-0.05 1.48-0.05 47.76 0.52 86.32 39.8 85.98 87.55-0.35 47.64-39.31 86.29-86.91 86.29z m0.36-140.6c-29.69 0-53.93 24.06-54.1 53.78 0 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.04-54.1-0.34 0.02-0.71 0.05-1.02 0.03h-0.3zM373.15 666.52h-39.8c-5.83 0-11.04-3.03-14.01-7.7-2.11-2.74-3.37-6.09-3.37-9.72v-2.9l-55.54-466.11H80.59c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h194.57c8.4 0 15.48 6.29 16.48 14.63l56.22 471.8h20.34c1.54-0.53 3.15-0.83 4.8-0.83h459.27l94.9-444.21c1.92-8.96 10.74-14.78 19.7-12.75 8.96 1.91 14.67 10.73 12.76 19.69l-97.51 456.41c-1.34 6.29-6.15 11.1-12.16 12.62-1.98 0.91-4.14 1.43-6.42 1.43h-465.6c-1.53 0.53-3.14 0.82-4.79 0.82z" />
                            <path d="M917.71 319.87H316.15c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h601.56c9.16 0 16.59 7.42 16.59 16.59s-7.42 16.59-16.59 16.59z" />
                          </svg>{" "}
                          <S.PickedCount>{el.pickedCount}</S.PickedCount>
                        </S.BasketNumber>
                        <S.Subtext>
                          등록일 {dateFormatter(el.createdAt)}
                        </S.Subtext>
                      </S.ItemBottomWrapper>
                    </S.ItemLeftMiddle>
                  </S.ItemLeft>
                  <S.ItemRight>
                    <span>{el.seller?.name}</span>
                  </S.ItemRight>
                </S.Item>
              </a>
            </Link>
          ))}
        </S.Wrapper01>
        <S.Wrapper02>
          <S.SideSticky>
            <S.Wrapper03>
              <S.RecentViewText>최근 본 상품</S.RecentViewText>
              {typeof window !== "undefined" &&
                recentItems?.map((el: any, i: number) => (
                  <Link href={`/market/${el.id}`} key={i}>
                    <a>
                      {el.imageUrl ? (
                        <S.RecentItem>
                          <img
                            width="100%"
                            height="100%"
                            src={`https://storage.googleapis.com/${el.imageUrl}`}
                          />
                        </S.RecentItem>
                      ) : (
                        <S.RecentItem>
                          <img
                            width="100%"
                            height="100%"
                            src={`/temp_bg.png`}
                          />
                        </S.RecentItem>
                      )}
                    </a>
                  </Link>
                ))}
            </S.Wrapper03>
            <S.CreateBtn onClick={onClickMoveToPage("/market/new")}>
              상품등록
            </S.CreateBtn>
          </S.SideSticky>
        </S.Wrapper02>
      </S.Container>
    </InfiniteScroll>
  );
}
