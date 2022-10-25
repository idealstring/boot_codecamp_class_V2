import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";
import MyPagePresenter from "./myPage.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      userPoint {
        amount
      }
    }
  }
`;

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      # useditem
      user {
        userPoint {
          amount
        }
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const FETCH_POINT_TRANSACTIONS_LOADING_COUNT = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;
const FETCH_POINT_TRANSACTIONS_BUYING_COUNT = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;
const FETCH_POINT_TRANSACTIONS_SELLING_COUNT = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

function MyPageContainer() {
  const [pageCount, setPageCount] = useState(1);
  const { data: fetchPointTransactions } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, { variables: { search: "", page: pageCount } });
  const { data: PointLoadingCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfLoading">
  >(FETCH_POINT_TRANSACTIONS_LOADING_COUNT);
  const { data: PointBuyingCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfBuying">
  >(FETCH_POINT_TRANSACTIONS_BUYING_COUNT);
  const { data: PointSellingCount } = useQuery<
    Pick<IQuery, "fetchPointTransactionsCountOfSelling">
  >(FETCH_POINT_TRANSACTIONS_SELLING_COUNT);
  const { data: fetchUserLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  let allCount;
  if (PointLoadingCount && PointBuyingCount && PointSellingCount) {
    allCount =
      PointLoadingCount?.fetchPointTransactionsCountOfLoading +
      PointBuyingCount?.fetchPointTransactionsCountOfBuying +
      PointSellingCount?.fetchPointTransactionsCountOfSelling;
  }

  return (
    <>
      <MyPagePresenter
        fetchUserLoggedIn={fetchUserLoggedIn}
        fetchPointTransactions={fetchPointTransactions}
        allCount={allCount}
        setPageCount={setPageCount}
      />
    </>
  );
}

export default MyPageContainer;
