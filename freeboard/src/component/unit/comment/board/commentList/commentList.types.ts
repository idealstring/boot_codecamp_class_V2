import { IQuery } from "../../../../../commons/types/generated/types";

// presenter
export type ICommentListPresenterProps = {
  existingData?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
};

// presenterItem
export type ICommentListPresenterItemProps = {
  comment: any;
};
