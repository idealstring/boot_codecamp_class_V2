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

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  return (
    <>
      {/* 임시 배열 10개를 생성해, 데이터가 없을 때에도 높이 30px 유지해 reflow 방지 */}
      {(data?.fetchBoards || new Array(10).fill("1")).map((el) => (
        <div key={el._id} style={{ height: "30px" }}>
          <Row>
            <Column>작성자 : {el.writer}</Column>
            <Column>제목 : {el.title}</Column>
            <Column>내용 : {el.contents}</Column>
          </Row>
          <br />
        </div>
      ))}
      {new Array(10).fill(1).map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickPage}>
          {i + 1} |
        </span>
      ))}
    </>
  );
}
