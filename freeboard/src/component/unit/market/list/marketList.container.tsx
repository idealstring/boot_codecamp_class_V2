import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FailModal } from "../../../commons/modal/commonsModal";
import MarketListPresenter from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketListContainer() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  let getItems =
    typeof window !== "undefined" &&
    JSON.parse(String(localStorage.getItem("recentItems")));

  const onLoadMore = () => {
    if (!data) return;

    try {
      fetchMore({
        variables: {
          page: Math.ceil(data.fetchUseditems.length / 10) + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.fetchUseditems)
            return { fetchUseditems: [...prev.fetchUseditems] };

          return {
            fetchUseditems: [
              ...prev.fetchUseditems,
              ...fetchMoreResult.fetchUseditems,
            ],
          };
        },
      });
    } catch (error) {
      if (error instanceof Error)
        FailModal("불러오기를 실패했습니다. 다시 시도 바랍니다.");
    }
  };

  return (
    <>
      <MarketListPresenter
        data={data}
        onLoadMore={onLoadMore}
        recentItems={getItems}
      />
    </>
  );
}
