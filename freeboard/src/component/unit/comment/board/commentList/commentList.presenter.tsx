import CommentListPresenterItem from "./commentList.presenterItem";
import * as S from "./commentList.styles";
import { ICommentListPresenterProps } from "./commentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListPresenter(P: ICommentListPresenterProps) {
  const { existingData, onLoadMore } = P;

  return (
    <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
      <S.CommentWrapper>
        {existingData?.fetchBoardComments.map((comment) => (
          <CommentListPresenterItem key={comment._id} comment={comment} />
        ))}
      </S.CommentWrapper>
    </InfiniteScroll>
  );
}
