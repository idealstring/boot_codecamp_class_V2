import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
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

export default function Copies() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [myIndex, setMyIndex] = useState(0);

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(e.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {i !== myIndex && (
            <div>
              <Row>
                <Column>작성자 : {el.writer}</Column>
                <Column>제목 : {el.title}</Column>
                <button id={String(i)} onClick={onClickEdit}>
                  수정하기
                </button>
              </Row>
              <br />
            </div>
          )}

          {i === myIndex && (
            <div>
              <input />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
