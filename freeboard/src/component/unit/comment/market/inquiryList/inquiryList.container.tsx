import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./inquiryList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import MarketInquiryListPresenter from "./inquiryList.presenter";

export default function MarketInquiryListContainer() {
  const router = useRouter();
  const { data: existingData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.detail),
      page: 1,
    },
  });
  const { data: fetchUserLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onLoadMore = () => {
    if (!existingData) return;
    fetchMore({
      variables: {
        page: Math.ceil(existingData.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <MarketInquiryListPresenter
      existingData={existingData}
      onLoadMore={onLoadMore}
      fetchUserLoggedIn={fetchUserLoggedIn}
    />
  );
}
