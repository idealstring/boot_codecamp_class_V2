import { useQuery, gql, useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
  const router = useRouter();
  const client = useApolloClient();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const prefetchBoard = (boardId: string) => async () => {
    // useQuery
    // useLayQuery
    // useApolloClient

    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  const onClickMove = (boardId: string) => () => {
    void router.push(`32-08-data-prefetch-moved/${boardId}`);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Row
            onMouseOver={prefetchBoard(el._id)}
            onClick={onClickMove(el._id)}
          >
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <Column>내용 : {el.contents}</Column>
          </Row>
          <br />
        </div>
      ))}
    </>
  );
}
