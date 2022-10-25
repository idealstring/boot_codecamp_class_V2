import Link from "next/link";
import * as S from "./Sales.styles";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import MyPageMarketBtnWrapper from "../mypageMarketBtn";

const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`;

const FETCH_USEDITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export default function SalesContainer() {
  const { data: itemsData } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_ISOLD, { variables: { search: "", page: 1 } });
  const { data: countData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_USEDITEMS_COUNT_ISOLD);
  console.log(countData?.fetchUseditemsCountISold);

  return (
    <S.ContentsWrapper>
      <S.PageTitle>판매내역</S.PageTitle>
      <MyPageMarketBtnWrapper />
      <S.BoardWrapper>
        <S.BoardTopWrapper>
          <S.BoardThNumber>상품ID</S.BoardThNumber>
          <S.BoardThTitle>상품명</S.BoardThTitle>
          <S.BoardThSell>판매여부</S.BoardThSell>
          <S.BoardThPrice>가격</S.BoardThPrice>
          <S.BoardThDate>날짜</S.BoardThDate>
        </S.BoardTopWrapper>
        {itemsData?.fetchUseditemsISold.map((soldItem, i) => (
          <Link href={`/market/${soldItem._id}`}>
            <a>
              <S.BoardBodyWrapper key={i}>
                <S.ContentNumber>{soldItem._id.slice(-4)}</S.ContentNumber>
                <S.ContentTitle>{soldItem.name}</S.ContentTitle>
                <S.ContentSell>
                  {soldItem.soldAt ? "판매완료" : null}
                </S.ContentSell>
                <S.ContentPrice>
                  {PriceFormatter(soldItem.price)}
                </S.ContentPrice>
                <S.ContentDate>
                  {dateFormatter(soldItem.createdAt)}
                </S.ContentDate>
              </S.BoardBodyWrapper>
            </a>
          </Link>
        ))}
        <PageNation02 allCount={countData?.fetchUseditemsCountISold} />
      </S.BoardWrapper>
    </S.ContentsWrapper>
  );
}
