import {
  IQuery,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";

// container

export type IReplayListContainerProps = {
  questionsId: string;
};

// presenter

export type IReplayListPresenterProps = {
  fetchQuestionAnswers:
    | Pick<IQuery, "fetchUseditemQuestionAnswers">
    | undefined;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  onLoadMore: () => void;
};

// presenterItem

export type IReplayListPresenterItemProps = {
  Answers: IUseditemQuestionAnswer;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};
