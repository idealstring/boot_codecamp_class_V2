import Link from "next/link";
import * as S from "./bought.styles";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import MyPageMarketBtnWrapper from "../mypageMarketBtn";
import { useState } from "react";

const FETCH_USEDITEMS_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
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

const FETCH_USEDITEMS_COUNT_IBOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export default function BoughtContainer() {
  const [pageCount, setPageCount] = useState(0);
  const { data: pickedData } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IBOUGHT, { variables: { search: "", page: pageCount } });
  const { data: countData } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">
  >(FETCH_USEDITEMS_COUNT_IBOUGHT);
  console.log(countData?.fetchUseditemsCountIBought);

  return (
    <S.ContentsWrapper>
      <S.PageTitle>구매내역</S.PageTitle>
      <MyPageMarketBtnWrapper />
      <S.BoardWrapper>
        <S.BoardTopWrapper>
          <S.BoardThDate>거래일</S.BoardThDate>
          <S.BoardThTitle>상품명</S.BoardThTitle>
          <S.BoardThHistory>거래내역</S.BoardThHistory>
          <S.BoardThSeller>판매자</S.BoardThSeller>
        </S.BoardTopWrapper>
        {pickedData?.fetchUseditemsIBought.map((boughtItem, i) => (
          <Link href={`/market/${boughtItem._id}`}>
            <a>
              <S.BoardBodyWrapper key={i}>
                <S.ContentDate>
                  {dateFormatter(boughtItem.soldAt)}
                </S.ContentDate>
                <S.ContentTitle>{boughtItem.name}</S.ContentTitle>
                <S.ContentHistory>
                  {PriceFormatter(boughtItem.price)}
                </S.ContentHistory>
                <S.ContentSeller>{boughtItem.seller?.name}</S.ContentSeller>
              </S.BoardBodyWrapper>
            </a>
          </Link>
        ))}
        <PageNation02
          allCount={countData?.fetchUseditemsCountIBought}
          setPageCount={setPageCount}
        />
      </S.BoardWrapper>
    </S.ContentsWrapper>
  );
}
