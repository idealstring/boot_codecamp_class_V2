import { useQuery } from "@apollo/client";
import { ceil } from "lodash";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";
import ReplayListPresenter from "./replyList.presenter";
import {
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./replyList.quries";
import { IReplayListContainerProps } from "./replyList.tpyes";

export default function ReplayListContainer(P: IReplayListContainerProps) {
  const { questionsId } = P;
  const { data: fetchQuestionAnswers, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: questionsId,
      page: 1,
    },
  });
  const { data: fetchUserLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onLoadMore = () => {
    if (!fetchQuestionAnswers) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(
            fetchQuestionAnswers?.fetchUseditemQuestionAnswers.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <ReplayListPresenter
      fetchQuestionAnswers={fetchQuestionAnswers}
      fetchUserLoggedIn={fetchUserLoggedIn}
      onLoadMore={onLoadMore}
    />
  );
}
