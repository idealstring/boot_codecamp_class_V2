import { IReplayListPresenterProps } from "./replyList.tpyes";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./replyList.styles";
import ReplayListPresenterItem from "./replyList.presenterItem";

export default function ReplayListPresenter(P: IReplayListPresenterProps) {
  const { fetchQuestionAnswers, fetchUserLoggedIn, onLoadMore } = P;
  return (
    <S.Container>
      <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
        <S.CommentWrapper>
          {fetchQuestionAnswers?.fetchUseditemQuestionAnswers.map((Answers) => (
            <ReplayListPresenterItem
              key={Answers._id}
              Answers={Answers}
              fetchUserLoggedIn={fetchUserLoggedIn}
            />
          ))}
        </S.CommentWrapper>
      </InfiniteScroll>
    </S.Container>
  );
}
