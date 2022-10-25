import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

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
  // console.log(router.query.id);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <>
      <div>{router.query.id}번 게시글입니다.</div>
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중!!!"}</div>{" "}
      {/* 삼항 연산자 */}
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {/* HTML 직접 입력 */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            // __html: Dompurify.sanitize(data?.fetchBoard.contents),
            __html: data?.fetchBoard.contents,
          }}
        />
      )}
    </>
  );
}
