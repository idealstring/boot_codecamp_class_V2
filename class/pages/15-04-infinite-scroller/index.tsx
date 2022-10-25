import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function staticRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // prev 기존, fetchMoreResult 새로 받아온 것
        if (!fetchMoreResult.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        } // 받아 올게 없으면 기존 것만 반환

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        }; // 새로운게 있으면 합쳐서 반환
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <Row>
              <Column>작성자 : {el.writer}</Column>
              <Column>제목 : {el.title}</Column>
              <Column>내용 : {el.contents}</Column>
            </Row>
            <br />
          </div>
        )) || <div></div>}
      </InfiniteScroll>
    </>
  );
}
