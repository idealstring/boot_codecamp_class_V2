import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { FailModal, InfoModal } from "../../commons/modal/commonsModal";
import IndexPresenter from "./index.presenter";
import { FETCH_USED_ITEMS } from "./index.queries";

export default function IndexContainer() {
  const { data: fetchUseditemsToday } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false, search: "오늘의딜", page: 1 },
  });

  const { data: fetchUseditemsBest, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false, search: "베스트셀러", page: 1 },
  });

  const onClickMore = () => {
    if (!fetchUseditemsBest) return;
    try {
      fetchMore({
        variables: {
          page: Math.ceil(fetchUseditemsBest?.fetchUseditems.length / 10) + 1,
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
      <IndexPresenter
        fetchUseditemsBest={fetchUseditemsBest}
        fetchUseditemsToday={fetchUseditemsToday}
        onClickMore={onClickMore}
      />
    </>
  );
}
