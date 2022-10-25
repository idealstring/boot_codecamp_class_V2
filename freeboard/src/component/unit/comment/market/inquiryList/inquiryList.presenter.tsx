import MarketInquiryListPresenterItem from "./inquiryList.presenterItem";
import * as S from "./inquiryList.styles";
import { IInquiryListPresenterProps } from "./inquiryList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketInquiryListPresenter(
  P: IInquiryListPresenterProps
) {
  const { existingData, onLoadMore, fetchUserLoggedIn } = P;

  return (
    <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
      <S.CommentWrapper>
        {existingData?.fetchUseditemQuestions.map((questions) => (
          <MarketInquiryListPresenterItem
            key={questions._id}
            questions={questions}
            fetchUserLoggedIn={fetchUserLoggedIn}
          />
        ))}
      </S.CommentWrapper>
    </InfiniteScroll>
  );
}
