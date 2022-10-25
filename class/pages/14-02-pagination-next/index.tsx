import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
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
  const [startPage, setStartPage] = useState(1);

  const onClickNextPage = () => {
    setStartPage((next) => next + 10);
    void refetch({ page: Number(startPage + 10) });
  };
  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
    void refetch({ page: Number(startPage - 10) });
  };

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
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
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el} |
        </span>
      ))} */}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickPage}>
          {i + 1} |
        </span>
      ))} */}
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map((_, i) => (
        <span
          key={i + startPage}
          id={String(i + startPage)}
          onClick={onClickPage}
        >
          {i + startPage} |
        </span>
      ))}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
