import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

// presenter
export type IInquiryListPresenterProps = {
  existingData?: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  onLoadMore: () => void;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};

// presenterItem
export type IInquiryListPresenterItemProps = {
  questions: IUseditemQuestion;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};
