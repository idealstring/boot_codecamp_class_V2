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

export default function Copies2() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...myIndex];
    qqq[Number(e.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {myIndex[i] === false && (
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

          {myIndex[i] === true && (
            <div>
              <input />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
