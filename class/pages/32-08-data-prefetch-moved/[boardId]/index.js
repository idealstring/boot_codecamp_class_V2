import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function staticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // const onClickMoveToEdit = () => {
  //   router.push(`/09-01-board/${router.query.contentNumber}/edit`);
  // };

  return (
    <>
      {/* <div>{router.query.contentNumber}번 게시글입니다.</div> */}
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중!!!"}</div>{" "}
      {/* 삼항 연산자 */}
      <div>제목: {data && data.fetchBoard.title}</div> {/* 조건 연산자 */}
      <div>내용: {data?.fetchBoard.contents}</div> {/* 옵셔널 체이닝 */}
      {/* <button onClick={onClickMoveToEdit}>수정하기</button> */}
    </>
  );
}
