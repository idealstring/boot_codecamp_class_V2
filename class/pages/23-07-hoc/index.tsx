import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function staticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (boardId: number) => (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(boardId) });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <Row>
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <Column>내용 : {el.contents}</Column>
          </Row>
          <br />
        </div>
      ))}

      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + 1}
          // id={String(i + 1)}
          onClick={onClickPage(i + 1)}
          // onClickPage(i+1)(event)
        >
          {i + 1} |
        </span>
      ))}
    </>
  );
}
