import Link from "next/link";
import * as S from "./basket.styles";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import MyPageMarketBtnWrapper from "../mypageMarketBtn";
import { useState } from "react";
import { slice } from "lodash";

const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
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

const FETCH_USEDITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export default function BasketContainer() {
  const [pageCount, setPageCount] = useState(0);
  const { data: pickedData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, { variables: { search: "", page: pageCount } });
  const { data: countData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USEDITEMS_COUNT_IPICKED);
  console.log(countData?.fetchUseditemsCountIPicked);

  return (
    <S.ContentsWrapper>
      <S.PageTitle>장바구니</S.PageTitle>
      <MyPageMarketBtnWrapper />
      <S.BoardWrapper>
        <S.BoardTopWrapper>
          <S.BoardThNumber>상품ID</S.BoardThNumber>
          <S.BoardThTitle>상품명</S.BoardThTitle>
          <S.BoardThSell>품절여부</S.BoardThSell>
          <S.BoardThPrice>가격</S.BoardThPrice>
          <S.BoardThDate>날짜</S.BoardThDate>
        </S.BoardTopWrapper>
        {pickedData?.fetchUseditemsIPicked.map((pickItem, i) => (
          <Link href={`/market/${pickItem._id}`}>
            <a>
              <S.BoardBodyWrapper key={i}>
                <S.ContentNumber>{pickItem._id.slice(-4)}</S.ContentNumber>
                <S.ContentTitle>{pickItem.name}</S.ContentTitle>
                <S.ContentSell>{pickItem.soldAt ? "품절" : null}</S.ContentSell>
                <S.ContentPrice>
                  {PriceFormatter(pickItem.price)}
                </S.ContentPrice>
                <S.ContentDate>
                  {dateFormatter(pickItem.createdAt)}
                </S.ContentDate>
              </S.BoardBodyWrapper>
            </a>
          </Link>
        ))}
        <PageNation02
          allCount={countData?.fetchUseditemsCountIPicked}
          setPageCount={setPageCount}
        />
      </S.BoardWrapper>
    </S.ContentsWrapper>
  );
}
