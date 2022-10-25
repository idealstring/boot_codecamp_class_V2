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
      <div style={{ color: "red" }}>
        작성자: {data ? data.fetchBoard.writer : "로딩중!!!"}
      </div>{" "}
      {/* 삼항 연산자 */}
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {/* HTML 직접 입력 */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            // __html: Dompurify.sanitize(data?.fetchBoard.contents),
            __html: data?.fetchBoard.contents,
          }}
        />
      ) : (
        <div style={{ color: "blue" }}></div>
      )}
      {/* 삼항연산자로 바꿔서 그림. 프리렌더링 시 그렸던 것과 다르기 때문에, 원하는 색으로 그려지지 않았음. 프리렌디링 시에도 해당 부분이 있는 것처럼 보이도로 꾸밈. 이때 css는 동일해야함 */}
      <div style={{ color: "brown" }}>주소 : 서울시 여러동</div>
    </>
  );
}
