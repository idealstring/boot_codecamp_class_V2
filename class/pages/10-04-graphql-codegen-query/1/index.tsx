import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function staticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: 1,
      },
    }
  );
  console.log(data);

  return (
    <>
      <div>1번 게시글입니다.</div>
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중!!!"}</div>{" "}
      {/* 삼항 연산자 */}
      <div>제목: {data && data.fetchBoard.title}</div> {/* 조건 연산자 */}
      <div>내용: {data?.fetchBoard.contents}</div> {/* 옵셔널 체이닝 */}
      {/*  */}
    </>
  );
}
